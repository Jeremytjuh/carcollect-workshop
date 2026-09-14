import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Fragment } from "react";

// Core
import { Alert, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Button } from "@/components";
import { /* NumberField, */ /* DateField, */ TextField } from "@/fields";

// Utils
import { setUpdateUserValues } from "./_default_values";

// GraphQL
import { UPDATE_ME } from "@/graphql";

// Assignment 2
// ----------------------------------------------------------------
// Add Phone Number as an input in the profile update form

// Assignment 3
// ----------------------------------------------------------------
// Add Birth Date as an input in the profile update form and add it to the User model

function ProfileUpdateForm(props) {
  const { user, onClose } = props;

  const [updateUser] = useMutation(UPDATE_ME);

  const { control, handleSubmit, formState, /* setValue, */ setError } = useForm({
    defaultValues: setUpdateUserValues(user),
    mode: "onChange",
  });

  const handleSubmitForm = async values => {
    try {
      await updateUser({
        variables: {
          dataInput: {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            // birth_date: values.birth_date,
            // phone_number: user.phone_number,
          },
        },
      });

      onClose();
    } catch (error) {
      setError("submitForm", { message: error || "AA0x00" });
    }
  };

  return (
    <Fragment>
      <DialogTitle>
        Update User
      </DialogTitle>

      <DialogContent>
        <form>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="first_name"
                label="First name"
                placeholder="Jesse"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="last_name"
                label="Last name"
                placeholder="Doe"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="email"
                label="Email"
                placeholder="joe.doe@mail.com"
                control={control}
              />
            </Grid>

            {/* <Grid size={6}>
              <NumberField
                name="phone_number"
                label="Phone"
                control={control}
              />
            </Grid> */}

            {/* <Grid size={6}>
              <DateField
                name="birth_date"
                label="Date of Birth"
                control={control}
                setValue={setValue}
              />
            </Grid> */}
          </Grid>

          {formState.errors?.submitForm && (
            <Alert severity="error">
              {`${formState.errors.submitForm?.message}`}
            </Alert>
          )}
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>

        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit(handleSubmitForm)}
          loading={formState.isSubmitting}
        >
          Confirm
        </Button>
      </DialogActions>
    </Fragment>
  );
}

export default ProfileUpdateForm;
