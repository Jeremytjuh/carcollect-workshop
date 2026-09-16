import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Fragment } from "react";

// Core
import { Button, DialogActions, DialogContent, Grid } from "@mui/material";
import { TextField } from "@/fields";

// GraphQL
import { UPDATE_VEHICLE } from "@/graphql";

function UpdateVehicleForm(props) {
  const { vehicle, onClose } = props;

  const [updateVehicle] = useMutation(UPDATE_VEHICLE);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: vehicle.name,
      description: vehicle.description,
      brand: vehicle.brand,
      model: vehicle.model,
      version: vehicle.version,
      type: vehicle.type,
      license_plate: vehicle.license_plate,
    },
  });

  const handleSubmitForm = async values => {
    await updateVehicle({
      variables: {
        vehicleId: vehicle.id,
        dataInput: values,
      },
    });
    onClose();
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

export default UpdateVehicleForm;
