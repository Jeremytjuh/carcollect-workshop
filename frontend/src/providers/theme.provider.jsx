import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Core
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { workshopTheme } from "../theme";

function ThemeProvider(props) {
  const { children } = props;

  const router = useRouter();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [appReady, setAppReady] = useState(false);
  const [appThemeState, setAppTheme] = useState(prefersDarkMode);

  useEffect(() => {
    if (!router.isReady) return setAppReady(false);
    return setAppReady(true);
  }, [router.isReady]);

  useEffect(() => {
    setAppTheme(localStorage.getItem("appTheme"));
  }, [setAppTheme]);

  const setThemeVariant = newThemeVariant => {
    if (newThemeVariant !== localStorage.getItem("appTheme")) {
      localStorage.setItem("appTheme", newThemeVariant);
      setAppTheme(newThemeVariant);
    }
  };

  const customThemeValues = {
    theme: { appThemeState, setThemeVariant },
    prefersDarkMode,
  };

  if (!appReady) return null;

  return (
    <MuiThemeProvider theme={workshopTheme(customThemeValues)}>
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
