import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// Core
import { useTheme } from "@mui/material/styles";
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack, Delete } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";

// GraphQL
import { GET_VEHICLE } from "@/graphql";

function VehicleDetailPage() {
  const theme = useTheme();
  const router = useRouter();

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

          <Button
            variant="outlined"
            color="error"
            endIcon={<Delete />}
            onClick={() => alert("This feature is not yet implemented")}
          >
            Delete
          </Button>
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
    </DefaultLayout>
  );
}

export default VehicleDetailPage;
