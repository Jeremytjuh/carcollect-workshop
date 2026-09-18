// Core
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { DefaultLayout } from "@/layouts";

function MessagesPage() {
  return (
    <DefaultLayout title="Messages">
      <Stack alignItems="center" direction="row" gap={2}>
        <Typography variant="h4">
          Messages
        </Typography>

        <Chip
          label="0"
          color="primary"
          variant="outlined"
          size="small"
        />
      </Stack>

      <Box my={2}>
        <Divider />
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" minHeight="50vh">
        <Stack alignItems="center" gap={2}>
          <ChatBubbleOutline
            sx={{
              fontSize: 64,
              color: "error.light",
              opacity: 0.8,
            }}
          />
          <Typography variant="h5" color="textSecondary">
            No Messages yet
          </Typography>

          <Typography variant="body2" color="textDisabled">
            Start a conversation
          </Typography>
        </Stack>
      </Box>
    </DefaultLayout>
  );
}

export default MessagesPage;
