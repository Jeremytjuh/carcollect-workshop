import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Core
import { Alert, Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Stack, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { TextField } from "@/fields";

import ProfileInfoCardCard from "../modules/profile/profile_info_card";

// GraphQL
import { GET_ME, UPDATE_ME } from "@/graphql";

function ProfilePage() {
  const { data, loading } = useQuery(GET_ME);
  const user = data?.me;

  const [editState, setEditState] = useState(false);

  const [updateUser] = useMutation(UPDATE_ME);

  const { control, handleSubmit, formState, reset, setError } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (!loading) {
      reset({
        first_name: user?.first_name,
        last_name: user?.last_name,
        bio: user?.bio,
        image: user?.image,
      });
    }
  }, [user]);

  const handleSubmitForm = async values => {
    try {
      await updateUser({
        variables: {
          dataInput: values,
        },
      });
      setEditState(false);
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
      </Stack>

      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={3}>
        <Grid size={12}>
          <ProfileInfoCardCard user={user} />
        </Grid>

        {/* Edit Form */}
        <Grid size={12}>
          <Card>
            <CardHeader
              title="Edit profile"
              action={(
                <Button
                  endIcon={<Edit />}
                  variant="contained"
                  onClick={() => setEditState(!editState)}
                >
                  Edit
                </Button>
              )}
            />

            <CardContent>
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
                    {/* Username field */}
                  </Grid>

                  <Grid size={6}>
                    <TextField
                      name="bio"
                      label="Bio"
                      control={control}
                      disabled={!editState}
                    />
                  </Grid>

                  <Grid size={6}>
                    <TextField
                      name="city"
                      label="City"
                      control={control}
                      disabled={!editState}
                    />
                  </Grid>

                  <Grid size={6}>
                    <TextField
                      name="country"
                      label="Country"
                      control={control}
                      disabled={!editState}
                    />
                  </Grid>

                  <Grid size={12}>
                    <TextField
                      name="image"
                      label="Image"
                      control={control}
                      disabled={!editState}
                    />
                  </Grid>
                </Grid>

                {formState.errors?.submitForm && (
                  <Alert severity="error">
                    {`${formState.errors.submitForm?.message}`}
                  </Alert>
                )}
              </form>
            </CardContent>

            {editState && (
              <CardActions>
                <Stack direction="row" justifyContent="flex-end" width="100%">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit(handleSubmitForm)}
                  >
                    Save
                  </Button>
                </Stack>
              </CardActions>
            )}
          </Card>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default ProfilePage;
