import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Card, CardContent, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { Email, LocationOn, Person, Phone } from "@mui/icons-material";

// Style
import styles from "./profile_info_card.style";

function ProfileInfoCard(props) {
  const { user } = props;

  const theme = useTheme();
  const classes = styles(theme);

  const calculateAge = birthDate => {
    if (!birthDate) return "Unknown";
    const today = new Date();

    const diffTime = Math.abs(today - new Date(birthDate));
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.5));
    return diffYears;
  };

  if (!user) return "No user found";

  return (
    <Card css={classes.card}>
      <CardMedia
        height={150}
        component="img"
        image="https://static.vecteezy.com/system/resources/previews/002/558/858/non_2x/black-abstract-header-with-transparent-squares-mosaic-look-banner-modern-illustration-vector.jpg"
      />

      <Chip
        size="small"
        color="success"
        label={user.status}
        css={classes.chipStatus}
      />

      <CardContent>
        <div css={classes.persona}>
          <Avatar
            src={user.image}
            css={classes.avatar}
          />

          <Box ml={3}>
            <Typography variant="h4" color="white" fontWeight="600">
              {`${user.first_name} ${user.last_name}`}
            </Typography>

            <Typography variant="h6" color="secondary">
              {user.username || "guest#1234"}
            </Typography>
          </Box>
        </div>

        <Typography color="textSecondary" mb={2}>
          {user.tagline}
        </Typography>

        <Typography variant="body2">
          {user.bio}
        </Typography>

        <Box my={2}>
          <Divider />
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Person sx={{ color: "primary.main" }} />

              <div>
                <Typography variant="caption" color="textSecondary">
                  Age
                </Typography>

                <Typography>
                  {calculateAge(user.birth_date)}
                </Typography>
              </div>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <LocationOn sx={{ color: "primary.main" }} />

              <div>
                <Typography variant="caption" color="textSecondary">
                  City - Country
                </Typography>

                <Typography>
                  {`${user.city || "Unknown"} - ${user.country || "Unknown"}`}
                </Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>

        <Box my={2}>
          <Divider />
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Phone sx={{ color: "primary.main" }} />

              <div>
                <Typography variant="caption" color="text.secondary">
                  Phone
                </Typography>

                <Typography>
                  {user.phone_number || "-"}
                </Typography>
              </div>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" alignItems="center" gap={2}>
              <Email sx={{ color: "primary.main" }} />

              <div>
                <Typography variant="caption" color="text.secondary">
                  Email
                </Typography>

                <Typography>
                  {user.email || "-"}
                </Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProfileInfoCard;
