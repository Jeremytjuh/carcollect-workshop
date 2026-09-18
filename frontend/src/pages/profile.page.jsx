import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useState } from "react";

// Core
import { Alert, Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { TextField } from "@/fields";

import ProfilePreferenceCard from "../modules/profile/profile_preference_card";
import ProfileInfoCardCard from "../modules/profile/profile_info_card";

// GraphQL
import { GET_ME, UPDATE_ME } from "@/graphql";

function ProfilePage() {
  const { data, loading } = useQuery(GET_ME);
  const user = data?.me;

  const [editState, setEditState] = useState(false);

  const [updateUser] = useMutation(UPDATE_ME);

  const { control, handleSubmit, formState, setError } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      birth_date: user.birth_date,
      image: user.image,
    },
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    try {
      await updateUser({
        variables: {
          dataInput: values,
        },
      });
    } catch (error) {
      setError("submitForm", { message: error || "AA0x00" });
    }
  };

  if (loading) return "Loading profile...";

  return (
    <DefaultLayout title="Profile">
      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
        <Typography variant="h4">
          Profile
        </Typography>

        <Button
          endIcon={<Edit />}
          variant="contained"
          onClick={() => setEditState(true)}
        >
          Edit
        </Button>
      </Stack>

      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 8 }}>
          <ProfileInfoCardCard user={user} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <ProfilePreferenceCard user={user} />
        </Grid>
      </Grid>

      {/* Edit Form */}
      <form>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              name="first_name"
              label="First name"
              placeholder="Jesse"
              control={control}
              disabled={!editState}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              name="last_name"
              label="Last name"
              placeholder="Doe"
              control={control}
              disabled={!editState}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              name="email"
              label="Email"
              placeholder="jesse.doe@mail.com"
              control={control}
              disabled={!editState}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              name="image"
              label="Image"
              control={control}
              disabled={!editState}
            />
          </Grid>

          {/* <Grid size={6}>
              <TextField
                name="phone_number"
                label="Phone"
                control={control}
              />
            </Grid> */}
        </Grid>

        {formState.errors?.submitForm && (
          <Alert severity="error">
            {`${formState.errors.submitForm?.message}`}
          </Alert>
        )}
      </form>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleSubmit(handleSubmitForm)}
      >
        Save
      </Button>
    </DefaultLayout>
  );
}

export default ProfilePage;
