import { useForm } from "react-hook-form";
import { Fragment } from "react";

// Core
import { Button, DialogActions, DialogContent, Grid } from "@mui/material";
import { TextField } from "@/fields";

// Utils
import { setUpdateVehicleValues } from "./_default_values";

function UpdateVehicleForm(props) {
  const { vehicle, onClose } = props;

  const { control, handleSubmit } = useForm({
    defaultValues: setUpdateVehicleValues(vehicle),
  });

  const handleSubmitForm = values => {
    console.log(values);
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
