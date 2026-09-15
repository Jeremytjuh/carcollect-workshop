import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Fragment } from "react";

// Core
import { Button, DialogActions, DialogContent, Grid } from "@mui/material";
import { PickerField, TextField } from "@/fields";

// Utils
import { VEHICLE_TYPE } from "@/constants/vehicle.const";

// GraphQL
import { CREATE_VEHICLE } from "@/graphql";

function CreateVehicleForm(props) {
  const { onClose, refetch } = props;

  const [createVehicle] = useMutation(CREATE_VEHICLE);

  const { control, handleSubmit, setError, setValue } = useForm();

  const handleSubmitForm = async values => {
    try {
      await createVehicle({
        variables: {
          dataInput: values,
        },
      });
      refetch();

      onClose();
    } catch (error) {
      setError("submitForm", { message: error || "AA0x00" });
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
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="description"
                label="Description"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="brand"
                label="Brand"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="model"
                label="Model"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="version"
                label="Version"
                control={control}
              />
            </Grid>

            <Grid size={6}>
              <PickerField
                name="type"
                label="Type"
                control={control}
                options={Object.keys(VEHICLE_TYPE).map(type => ({
                  value: type,
                  textPrimary: type,
                }))}
                setValue={setValue}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="license_plate"
                label="License plate"
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
