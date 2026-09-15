import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

// Core
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogTitle, Divider, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack, Delete, Edit } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/components";

import UpdateVehicleForm from "../../modules/vehicle/forms/update_vehicle.form";

// GraphQL
import { GET_VEHICLE } from "@/graphql";

function VehicleDetailPage() {
  const theme = useTheme();
  const router = useRouter();

  const [dialogState, setDialogState] = useState();

  const vehicleId = router.query.id;
  const { data, loading } = useQuery(GET_VEHICLE, {
    variables: {
      vehicleId,
    },
  });
  const vehicle = data?.getVehicle || {};

  if (loading) return null;

  return (
    <DefaultLayout title={vehicle.name}>
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
              {vehicle.name}
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
                  {`License plate: ${vehicle.license_plate}`}
                </Typography>

                <Typography>
                  {`Brand: ${vehicle.brand}`}
                </Typography>

                <Typography>
                  {`Model: ${vehicle.model}`}
                </Typography>

                <Typography>
                  {`Version: ${vehicle.version}`}
                </Typography>

                <Chip
                  label={vehicle.type}
                  size="small"
                  sx={{ backgroundColor: theme.palette.vehicle[vehicle.type] }}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardMedia sx={{ height: 450 }} image={vehicle.image} />
          </Card>
        </Grid>

        <Grid size={12}>
          <Card sx={{ height: "100%" }}>
            <CardHeader title="Description" />

            <CardContent>
              {vehicle.description}
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
          vehicle={vehicle}
          onClose={() => setDialogState(false)}
        />
      </Dialog>
    </DefaultLayout>
  );
}

export default VehicleDetailPage;
