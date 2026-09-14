import { useQuery } from "@apollo/client";
import { useState } from "react";

// Core
import { Box, Dialog, Divider, Grid, Stack, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import ProfilePreferenceCard from "../../modules/profile/components/profile_preference_card";
import ProfileInfoCardCard from "../../modules/profile/components/profile_info_card";
import ProfileUpdateForm from "../../modules/profile/forms/profile_update.form";

// GraphQL
import { GET_ME } from "@/graphql";

function ProfilePage() {
  const { data, loading } = useQuery(GET_ME);

  const [dialogState, setDialogState] = useState(false);

  if (loading) return "Loading profile...";

  const userData = data?.me;

  return (
    <DefaultLayout title="Profile">
      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
        <Typography variant="h4">
          Profile
        </Typography>

        <Button
          endIcon={<Edit />}
          variant="contained"
          onClick={() => setDialogState(true)}
        >
          Edit
        </Button>
      </Stack>

      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <ProfileInfoCardCard user={userData} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ProfilePreferenceCard user={userData} />
        </Grid>
      </Grid>

      {/* Edit Form */}
      <Dialog
        fullWidth
        open={dialogState}
        onClose={() => setDialogState(false)}
      >
        <ProfileUpdateForm onClose={() => setDialogState(false)} user={userData} />
      </Dialog>
    </DefaultLayout>
  );
}

export default ProfilePage;
