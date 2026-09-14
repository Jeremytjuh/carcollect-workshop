// import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

// Core
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogTitle, Divider, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack, Delete, Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import UpdateVehicleForm from "../../modules/vehicle/forms/update_vehicle.form";

// Utils
import { VEHICLE_TYPE } from "@/constants/vehicle.const";

// GraphQL
// import { GET_VEHICLE } from "@/graphql";

function VehicleDetailPage() {
  const theme = useTheme();
  const router = useRouter();

  // const vehicleId = router.query.id;
  // const { vehicle } = useQuery(GET_VEHICLE, vehicleId);

  const [dialogState, setDialogState] = useState();

  const mockVehicle = {
    id: 0,
    name: "Best car on the market",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
    brand: "Opel",
    model: "Corsa",
    version: "v1.2-16V Comfort",
    type: VEHICLE_TYPE.car,
    license_plate: "AB-C1-23",
    image: "https://assets.autoweek.nl/m/p5hybofbirfz.jpg",
  };

  return (
    <DefaultLayout title={mockVehicle.name}>
      <Stack alignItems="flex-start" gap={1}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={2}
          width="100%"
        >
          <div>
            <Typography variant="h4">
              {mockVehicle.name}
            </Typography>

            <Button startIcon={<ArrowBack />} onClick={() => router.push("/overview")}>
              Back to list
            </Button>
          </div>

          <Stack direction="row" gap={1}>
            <Button
              variant="outlined"
              color="error"
              endIcon={<Delete />}
              onClick={() => alert("This feature is not yet implemented")}
            >
              Delete
            </Button>

            <Button
              endIcon={<Edit />}
              variant="contained"
              onClick={() => setDialogState(true)}
            >
              Edit vehicle
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="Quick information" />

            <CardContent>
              <Stack alignItems="flex-start" gap={0.5}>
                <Typography>
                  {`License plate: ${mockVehicle.license_plate || "unknown"}`}
                </Typography>

                <Typography>
                  {`Brand: ${mockVehicle.brand || "unknown"}`}
                </Typography>

                <Typography>
                  {`Model: ${mockVehicle.model || "unknown"}`}
                </Typography>

                <Typography>
                  {`Version: ${mockVehicle.version || "unknown"}`}
                </Typography>

                <Chip
                  label={mockVehicle.type}
                  size="small"
                  sx={{ backgroundColor: theme.palette.vehicle[mockVehicle.type] }}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardMedia sx={{ height: 450 }} image={mockVehicle.image} />
          </Card>
        </Grid>

        <Grid size={12}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="Description" />

            <CardContent>
              {mockVehicle.description}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Dialog
        open={dialogState}
        onClose={() => setDialogState(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h6">
            Edit vehicle
          </Typography>
        </DialogTitle>

        <UpdateVehicleForm
          vehicle={mockVehicle}
          onClose={() => setDialogState(false)}
        />
      </Dialog>
    </DefaultLayout>
  );
}

export default VehicleDetailPage;
