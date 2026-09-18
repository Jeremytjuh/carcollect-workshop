// Assignment 4
// ----------------------------------------------------------------
// Expand upon the current list item card; Styling, content, functionality etc.

const styles = theme => ({
  flexBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  card: {
    borderRadius: 8,
    transition: theme.transitions.create("all"),
    "&:hover": {
      backgroundColor: theme.palette.background.disabled,
    },
  },

  description: {
    paddingLeft: theme.spacing(2),
    borderLeft: theme.border(theme.palette.divider, 2),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
      paddingLeft: 0,
      borderTop: theme.border(theme.palette.divider, 2),
      borderLeft: "none",
    },
  },
});

export default styles;
