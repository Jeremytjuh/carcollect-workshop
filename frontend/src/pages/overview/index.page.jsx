import { useState } from "react";

// Core
import { Box, Dialog, DialogTitle, Divider, Grid, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import OverviewItemCard from "../../modules/overview/components/overview_item_card";
import CreateVehicleForm from "../../modules/vehicle/forms/create_vehicle.form";

// Utils
import { VEHICLE_TYPE } from "@/constants/vehicle.const";

function OverviewPage() {
  const [dialogState, setDialogState] = useState(false);

  const mockVehicles = [
    {
      id: 0,
      name: "Best car on the market",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
      brand: "Opel",
      model: "Corsa",
      version: "v1.2-16V Comfort",
      type: VEHICLE_TYPE.car,
      license_plate: "AB-C1-23",
    },
    {
      id: 1,
      name: "It's a bus",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
      brand: "Volkswagen",
      model: "Crafter",
      version: "35 2.0 TDI L2H1 BM",
      type: VEHICLE_TYPE.truck,
      license_plate: "BC-D1-23",
    },
    {
      id: 2,
      name: "The Grind machine",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
      brand: "Baker",
      model: null,
      version: null,
      type: VEHICLE_TYPE.skateboard,
      license_plate: null,
    },
  ];

  return (
    <DefaultLayout title="Overview">
      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
        <Typography variant="h4">
          Overview
        </Typography>

        <Button
          variant="contained"
          onClick={() => setDialogState(true)}
          endIcon={<Add />}
        >
          Add vehicle
        </Button>
      </Stack>

      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        {mockVehicles.map(vehicle => (
          <Grid key={vehicle.id} size={12}>
            <OverviewItemCard vehicle={vehicle} />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={dialogState}
        onClose={() => setDialogState(false)}
        fullWidth
      >
        <DialogTitle>
          Create vehicle
        </DialogTitle>

        <CreateVehicleForm onClose={() => setDialogState(false)} />
      </Dialog>
    </DefaultLayout>
  );
}

export default OverviewPage;
