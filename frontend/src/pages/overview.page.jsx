import { useQuery } from "@apollo/client";
import Image from "next/image";

// Core
import { useTheme } from "@mui/material/styles";
import { ArrowForward, Delete } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, CardHeader, Divider, Grid, Stack, Typography } from "@mui/material";
import { DefaultLayout, OverviewPageSkeleton } from "@/layouts";

// GraphQL
import { GET_VEHICLES } from "@/graphql";

import styles from "./overview.style";

function OverviewPage() {
  const theme = useTheme();
  const classes = styles(theme);

  const { data, loading } = useQuery(GET_VEHICLES);
  const vehicles = data?.getVehicles || [];

  if (loading) return <OverviewPageSkeleton />;

  console.log(vehicles);

  return (
    <DefaultLayout title="Overview">
      <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
        <Typography variant="h4">
          Overview
        </Typography>
      </Stack>

      <Box my={2}>
        <Divider />
      </Box>

      <Grid container spacing={2}>
        {vehicles.map(vehicle => (
          <Grid key={vehicle.id} size={12}>
            <Card variant="outlined">
              <CardHeader
                title={vehicle.name}
                action={(
                  <button
                    type="button"
                    onClick={() => alert("This feature is not yet implemented")}
                  >
                    <ArrowForward />
                  </button>
                )}
              />

              <CardContent>
                <Stack direction="row" gap={2}>
                  <Image
                    src={vehicle.image}
                    width={175}
                    height={130}
                    alt=""
                  />

                  <div css={classes.description}>
                    <Typography>
                      License plate: {vehicle.license_plate}
                    </Typography>

                    <Typography>
                      Type: {vehicle.type}
                    </Typography>

                    <Typography>
                      Created by: {vehicle.created_by?.first_name} {vehicle.created_by?.last_name}
                    </Typography>

                    <Image
                      src={vehicle.created_by?.image}
                      alt="Created by user image"
                      width={48}
                      height={48}
                    />
                  </div>
                </Stack>
              </CardContent>

              <CardActions>
                <Stack direction="row" justifyContent="flex-end" width="100%">
                  <button type="button" style={{ color: "red", border: "1px solid red", borderRadius: theme.shape.borderRadius }}>
                    <Delete />
                  </button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DefaultLayout>
  );
}

export default OverviewPage;
