const overrides = palette => ({
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "initial",
      },
    },
  },
  MuiDialogContent: {
    defaultProps: {
      dividers: true,
    },
    styleOverrides: {
      root: {
        padding: 24,
        backgroundColor: palette.background.paper,
        borderTop: "unset",
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "16px 24px",
        backgroundColor: palette.background.paper,
      },
    },
  },
});

export default overrides;
