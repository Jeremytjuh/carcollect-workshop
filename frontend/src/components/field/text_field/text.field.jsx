import { useController } from "react-hook-form";

// Core
import { InputAdornment, TextField as MuiTextField } from "@mui/material";

function TextField(props) {
  const {
    control,
    endAdornment,
    helperText,
    maxLength,
    name,
    startAdornment,
    ...rest
  } = props;

  const { formState: { errors }, field: { value, ...inputProps } } = useController({
    name,
    control,
  });

  const errorText = errors?.[name];

  return (
    <MuiTextField
      {...inputProps}
      {...rest}
      fullWidth
      size="small"
      margin="normal"
      variant="outlined"
      error={!!errorText}
      value={value || ""}
      helperText={helperText}
      slotProps={{
        input: {
          startAdornment: startAdornment && (
            <InputAdornment position="start">
              {startAdornment}
            </InputAdornment>
          ),
          endAdornment: endAdornment && (
            <InputAdornment position="end">
              {endAdornment}
            </InputAdornment>
          ),
        },

        htmlInput: {
          maxLength,
        },
        inputLabel: {
          shrink: true,
          focused: false,
        },
      }}
    />
  );
}

export default TextField;
