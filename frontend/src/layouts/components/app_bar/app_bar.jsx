import { useQuery } from "@apollo/client";
import Link from "next/link";

// Core
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar, Button, IconButton, AppBar as MuiAppBar, Stack, Toolbar, Tooltip, Typography } from "@mui/material";
import { Chat, Commute, Search } from "@mui/icons-material";

import SwitchThemeField from "../../../components/field/switch_field/switch_theme.field";

// GraphQL
import { GET_ME } from "@/graphql";

// Style
import styles from "./app_bar.style";

function AppBar() {
  const theme = useTheme();
  const classes = styles(theme);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const { data, loading } = useQuery(GET_ME);

  const currentUser = data?.me;

  return (
    <MuiAppBar css={classes.appBar} component="nav">
      <Toolbar css={classes.toolbar}>
        <Stack direction="row" alignItems="center" gap={1.5}>
          <IconButton
            component={Link}
            href="/overview"
            css={classes.logoIcon}
          >
            <Commute sx={{ color: "white", fontSize: "24px" }} />
          </IconButton>

          {isDesktop && (
            <Typography css={classes.logoText}>
              CarCollection
            </Typography>
          )}
        </Stack>

        <Stack direction="row" alignItems="center" gap={2}>
          <SwitchThemeField />

          {isDesktop ? (
            <Button
              component={Link}
              href="/overview"
              startIcon={<Search />}
              css={classes.navButton}
            >
              Overview
            </Button>
          ) : (
            <IconButton href="/overview">
              <Search />
            </IconButton>
          )}

          {isDesktop ? (
            <Button
              component={Link}
              href="/messages"
              startIcon={<Chat />}
              css={classes.navButton}
            >
              Messages
            </Button>
          ) : (
            <IconButton href="/messages">
              <Chat />
            </IconButton>
          )}

          <Tooltip title="Profile" arrow>
            <IconButton
              component={Link}
              href="/profile"
              css={classes.profileButton}
            >
              <Avatar css={classes.avatar}>
                {loading ? "..." : `${currentUser?.first_name.substring(0, 1)}${currentUser?.last_name.substring(0, 1)}`}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
