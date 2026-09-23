import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Fragment } from "react";

// Core
import { Button, DialogActions, DialogContent, Grid } from "@mui/material";
import { TextField } from "@/fields";

// GraphQL
import { CREATE_VEHICLE } from "@/graphql";

function CreateVehicleForm(props) {
  const { onClose, refetch } = props;

  const [createVehicle] = useMutation(CREATE_VEHICLE);

  const { control, handleSubmit, setError } = useForm();

  const handleSubmitForm = async values => {
    try {
      const { data } = await createVehicle({
        variables: {
          dataInput: values,
        },
      });

      if (!data?.createVehicle) return alert("Create not implemented yet");
      refetch();
      return onClose();
    } catch (error) {
      alert("Create error");
      return setError("submitForm", { message: error || "AA0x00" });
    }
  };

  return (
    <Fragment>
      <DialogContent>
        <form>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="name"
                label="Name"
                placeholder="Ultimate driving machine"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="brand"
                label="Brand"
                placeholder="BMW"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="model"
                label="Model"
                placeholder="3-serie Touring"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="version"
                label="Version"
                placeholder="330e xDrive"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="type"
                label="Type"
                placeholder="car"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="license_plate"
                label="License plate"
                placeholder="ABC-DEF"
                control={control}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                name="image"
                label="Image"
                placeholder="https://link-to-image"
                control={control}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>

        <Button variant="contained" onClick={handleSubmit(handleSubmitForm)}>
          Save
        </Button>
      </DialogActions>
    </Fragment>
  );
}

export default CreateVehicleForm;
