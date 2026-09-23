import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

// Core
import { useTheme } from "@mui/material/styles";
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";

// GraphQL
import { GET_VEHICLE } from "@/graphql";

// Implementing design, hints:
// * Used components: Avatar, Stack, CardHeader `action` prop, Typography `color` prop
// * Use theme.palette.secondary colors (dark, contrastText)
// * Check how the content in Quick information has been visualized

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
      <div>
        <Typography variant="h4">
          {vehicle.name}
        </Typography>

        <Button startIcon={<ArrowBack />} onClick={() => router.push("/overview")}>
          Back to list
        </Button>
      </div>

      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* Quick information Card */}
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardHeader title="Quick information" />

            <CardContent>
              {/* Quick information data */}
              <Stack alignItems="flex-start" gap={0.5}>
                <Typography fontWeight="bold">
                  License plate:

                  <Typography component="span" ml={0.5}>
                    {vehicle.license_plate}
                  </Typography>
                </Typography>

                <Typography fontWeight="bold">
                  Brand:

                  <Typography component="span" ml={0.5}>
                    {vehicle.brand}
                  </Typography>
                </Typography>

                <Typography fontWeight="bold">
                  Model:

                  <Typography component="span" ml={0.5}>
                    {vehicle.model}
                  </Typography>
                </Typography>

                <Typography fontWeight="bold">
                  Version:

                  <Typography component="span" ml={0.5}>
                    {vehicle.version}
                  </Typography>
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
          {/* Vehicle image Card */}
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardMedia sx={{ height: 450 }} image={vehicle.image} />

            {/* // * Uncomment the CardContent below to get the card banner */}
            {/* <CardContent sx={{ backgroundColor: theme.palette.secondary.dark }}> </CardContent> */}
          </Card>
        </Grid>

        <Grid size={12}>
          {/* Person information Card */}
          <Card variant="outlined" sx={{ height: "100%" }}>
            <CardHeader title="Person information" />

            {/* Person information data */}
            <CardContent>
              {/* // * Add some information about the person that created this vehicle document */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
}

export default VehicleDetailPage;
