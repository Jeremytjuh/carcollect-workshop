const primary = {
  dark: "#010406",
  main: "#04151F",
  light: "#E6E8E9",
  contrastText: "#FFFFFF",
};

const secondary = {
  dark: "#0C6E73",
  main: "#119DA4",
  light: "#B2E7EA",
  contrastText: "#FFFFFF",
};

const error = {
  dark: "#D32F2F",
  main: "#F44336",
  light: "#FFCDD2",
  contrastText: "#FFFFFF",
};

const success = {
  dark: "#388E3C",
  main: "#66BB6A",
  light: "#C8E6C9",
  contrastText: "#FFFFFF",
};

const background = {
  default: "#FBFBFB",
  disabled: "#F0F0F0",
  light: "#FFFFFF",
  primary: {
    main: primary.main,
    light: primary.light,
    contrastText: primary.contrastText,
  },
};

const text = {
  primary: "#1A1A1A",
  secondary: "#555555",
  disabled: "#BDBDBD",
};

const vehicle = {
  car: "#9bbcef",
  truck: "#fac8a4",
  motorcycle: "#bda3fb",
  bicycle: "#a9ffc9",
  tricycle: "#f6dd94",
  scooter: "#93efff",
  skateboard: "#f29bc7",
  bus: "#feb3b3",
  tram: "#b6f7f0",
  train: "#c4c5fb",
};

const colorsDefault = {
  primary,
  secondary,
  error,
  success,
  background,
  text,
  vehicle,
  action: {
    disabledBackground: "rgba(166, 166, 166, 0.2)",
  },
};
export default colorsDefault;
