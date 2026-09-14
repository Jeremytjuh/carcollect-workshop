// Core
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, CardHeader, Chip, Stack, Typography } from "@mui/material";

function ProfileInfoCard(props) {
  const { user } = props;

  const theme = useTheme();

  if (!user) return null;

  return (
    <Card>
      <CardHeader title="Preferences" />

      <CardContent>
        <Stack spacing={3}>
          <div>
            <Typography gutterBottom>
              Favorite types of vehicle
            </Typography>

            {user.favorite_types?.length > 0 ? (
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {user.favorite_types.map((favoriteType, index) => (
                  <Chip
                    key={`${index + 1}`}
                    label={favoriteType}
                    size="small"
                    sx={{ backgroundColor: theme.palette.vehicle[favoriteType] }}
                  />
                ))}
              </Stack>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No favorites selected
              </Typography>
            )}
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileInfoCard;
