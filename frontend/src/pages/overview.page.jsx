import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import Image from "next/image";

// Core
import { useTheme } from "@mui/material/styles";
import { Add, ArrowForward, Delete, Star, StarBorder } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogTitle, Divider, Grid, Stack, Typography } from "@mui/material";

import CreateVehicleForm from "../modules/create_vehicle.form";

// ? MUI Button docs: https://v7.mui.com/material-ui/api/button/
// * Useful Button props: color, variant, onClick

// Bonus component suggestions
// * Avatar, Icon, Chip
// ? MUI Icons docs: https://v7.mui.com/material-ui/icons/
// ? Available MUI icons: https://v7.mui.com/material-ui/material-icons/

import { DefaultLayout, OverviewPageSkeleton } from "@/layouts";

// GraphQL
import { ADD_VEHICLE_TO_FAVORITES, DELETE_VEHICLE, GET_ME, GET_VEHICLES } from "@/graphql";

// Style
import styles from "./overview.style";

function OverviewPage() {
  const theme = useTheme();
  const classes = styles(theme);

  const [dialogState, setDialogState] = useState(false);

  // Get vehicles
  const { data, loading: loadingVehicles, refetch } = useQuery(GET_VEHICLES);
  const vehicles = data?.getVehicles || [];

  // Delete vehicle
  const [deleteVehicle] = useMutation(DELETE_VEHICLE);
  const handleDeleteVehicle = async vehicleId => {
    const { data: deleteVehicleData } = await deleteVehicle({
      variables: {
        vehicleId,
      },
    });
    if (deleteVehicleData?.deleteVehicle === null) return alert("Delete not implemented yet");
    if (deleteVehicleData?.deleteVehicle === false) return alert("Delete not allowed");
    return refetch();
  };

  // Add vehicle to favorites
  const [addVehicleToFavorites] = useMutation(ADD_VEHICLE_TO_FAVORITES);
  const handleAddVehicleToFavorites = async vehicleId => {
    try {
      await addVehicleToFavorites({
        variables: {
          vehicleId,
        },
      });
    } catch (error) {
      alert("Add vehicle to favorites not implemented yet");
    }
  };

  // Get user
  const { data: userData, loading: loadingUser } = useQuery(GET_ME);
  const user = userData?.me;

  if (loadingVehicles || loadingUser) return <OverviewPageSkeleton />;

  console.log(vehicles);

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
        {vehicles.map(vehicle => (
          <Grid key={vehicle.id} size={12}>
            <Card variant="outlined">
              <CardHeader
                title={vehicle.name}
                action={(
                  // TODO: Adjust this button to Button
                  // ? Slug docs: https://developer.mozilla.org/en-US/docs/Glossary/Slug
                  // ? String interpolation docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
                  <button
                    type="button"
                    onClick={() => alert("Navigating to detail page not implemented yet")}
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
                      {`License plate: ${vehicle.license_plate}`}
                    </Typography>

                    <Typography>
                      {`Type: ${vehicle.type}`}
                    </Typography>

                    <Typography>
                      {`Created by: ${vehicle.created_by?.first_name} ${vehicle.created_by?.last_name}`}
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
                <Stack direction="row" justifyContent="flex-end" width="100%" gap={1}>
                  <button
                    type="button"
                    onClick={() => handleAddVehicleToFavorites(vehicle.id)}
                    style={{ color: "orange", border: "1px solid orange", borderRadius: theme.shape.borderRadius }}
                  >
                    {user.favorites?.includes(vehicle.id) ? <Star /> : <StarBorder />}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteVehicle(vehicle.id)}
                    style={{ color: "red", border: "1px solid red", borderRadius: theme.shape.borderRadius }}
                  >
                    <Delete />
                  </button>
                </Stack>
              </CardActions>
            </Card>
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

        <CreateVehicleForm
          onClose={() => setDialogState(false)}
          refetch={refetch}
        />
      </Dialog>
    </DefaultLayout>
  );
}

export default OverviewPage;
