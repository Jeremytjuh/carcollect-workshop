import Image from "next/image";

// Core
import { useTheme } from "@mui/material/styles";
import { ArrowForward } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

// Style
import styles from "./overview_item_card.style";

// Assignment 4
// ----------------------------------------------------------------
// Expand upon the current list item card; Styling, content, functionality etc.
// Add navigation to the detail page /vehicle/[id]

function OverviewItemCard(props) {
  const { vehicle } = props;

  const theme = useTheme();
  const classes = styles(theme);

  return (
    <div>
      <div css={classes.flexBox}>
        <Typography variant="h5">
          {vehicle.name}
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => alert("This feature is not yet implemented")}
        >
          <ArrowForward />
        </Button>
      </div>

      <Typography>
        {`License plate: ${vehicle.license_plate}`}
      </Typography>

      <Typography>
        {`Type: ${vehicle.type}`}
      </Typography>

      <Stack flexDirection="column">
        <Typography>
          {`Created by: ${vehicle.created_by?.first_name} ${vehicle.created_by?.last_name}`}
        </Typography>

        <Image
          src={vehicle.created_by?.image}
          alt="Skateboard"
          width={64}
          height={64}
        />
      </Stack>
    </div>
  );
}

export default OverviewItemCard;
