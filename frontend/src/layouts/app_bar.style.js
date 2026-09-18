const styles = theme => ({
  appBar: {
    position: "static",
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.main : theme.palette.common.white,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(0, 3),
    height: 70,
  },
  logoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    boxShadow: `0 6px 20px ${theme.palette.primary.main}40`,
    width: 44,
    height: 44,
    borderRadius: "50%",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.1) rotate(5deg)",
      cursor: "pointer",
    },
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-0.5px",
  },
  navButton: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    textTransform: "none",
    padding: theme.spacing(1, 2),
    borderRadius: 20,
    border: "2px solid transparent",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "transparent",
      color: theme.palette.primary.dark,
      border: `2px solid ${theme.palette.primary.dark}`,
      transform: "translateY(-2px)",
      boxShadow: `0 8px 25px ${theme.palette.primary.dark}30`,
    },
  },
  profileButton: {
    transition: theme.transitions.create("all", { duration: theme.transitions.duration.shorter }),
  },
  avatar: {
    width: 42,
    height: 42,
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    fontWeight: "bold",
    fontSize: 16,
    boxShadow: `0 4px 15px ${theme.palette.secondary.main}50`,
    cursor: "pointer",
    border: `2px solid ${theme.palette.secondary.main}`,
  },
});

export default styles;
