import { useEffect, useState } from "react";

// Core
import { useTheme } from "@mui/material/styles";
import { DarkMode, Sunny } from "@mui/icons-material";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

// Style
import styles from "./switch_theme_field.style";

function SwitchThemeField(props) {
  const { ...rest } = props;

  const theme = useTheme();
  const classes = styles(theme);

  const [currentTheme, setCurrentTheme] = useState(theme.theme.appThemeState === "defaultTheme");

  useEffect(() => {
    setCurrentTheme(theme.theme.appThemeState);
  }, [theme.theme.appThemeState]);

  const handleChange = (_, newTheme) => {
    if (newTheme !== null) theme.theme.setThemeVariant(newTheme);
  };

  return (
    <Tooltip placement="bottom" title="Toggle theme">
      <ToggleButtonGroup
        {...rest}
        size="small"
        value={currentTheme}
        onChange={handleChange}
        css={classes.toggleButtonGroup}
        exclusive
      >
        <ToggleButton value="defaultTheme" css={classes.toggleButton}>
          <Sunny />
        </ToggleButton>

        <ToggleButton value="darkTheme" css={classes.toggleButton}>
          <DarkMode />
        </ToggleButton>
      </ToggleButtonGroup>
    </Tooltip>
  );
}

export default SwitchThemeField;
