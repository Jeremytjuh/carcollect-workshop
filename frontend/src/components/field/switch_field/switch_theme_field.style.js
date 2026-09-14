const styles = theme => ({
  toggleButtonGroup: {
    alignItems: "center",
    gap: theme.spacing(0.5),
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.primary.light : theme.palette.secondary.light,
    padding: theme.spacing(0.5),
    border: theme.palette.mode === "dark" ? theme.border(theme.palette.divider) : theme.border("transparent"),
    borderRadius: 200,
    [theme.breakpoints.down("lg")]: {
      backgroundColor: theme.palette.background.primary.light,
    },
  },
  toggleButton: {
    "&.MuiToggleButton-root": {
      color: theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.primary.main,
      width: 35,
      height: 35,
      padding: theme.spacing(1),
      border: "unset",
      borderRadius: "50%",
      transition: theme.transitions.create("all", { duration: theme.transitions.duration.shorter }),
      [theme.breakpoints.down("lg")]: {
        color: theme.palette.common.white,
      },
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.mode === "dark" ? theme.palette.secondary.light : theme.palette.common.white,
      color: theme.palette.mode === "dark" ? theme.palette.primary.contrastText : theme.palette.primary.main,
      "&:hover": {
        background: theme.palette.background.disabled,
        color: theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.primary.main,
      },
    },
    "&:hover": {
      background: theme.palette.divider,
    },
  },
});

export default styles;
