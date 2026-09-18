import { useQuery } from "@apollo/client";
import { useState } from "react";

// Core
import { Box, Button, Dialog, DialogContent, DialogTitle, Divider, Grid, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DefaultLayout, OverviewPageSkeleton } from "@/layouts";

import OverviewItemCard from "../modules/overview/overview_item_card";

// GraphQL
import { GET_VEHICLES } from "@/graphql";

function OverviewPage() {
  const [dialogState, setDialogState] = useState(false);

  const { data, loading } = useQuery(GET_VEHICLES);
  const vehicles = data?.getVehicles || [];

  if (loading) return <OverviewPageSkeleton />;

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

        <DialogContent>
          This is where
        </DialogContent>
      </Dialog>
    </DefaultLayout>
  );
}

export default OverviewPage;
