import { useController } from "react-hook-form";
import * as locale from "date-fns/locale";

// Core
import { useTheme } from "@mui/material/styles";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// Style
import styles from "./date_field.style";

function DateField(props) {
  const {
    control,
    helperText,
    label,
    name,
    required,
    setValue,
    ...rest
  } = props;

  const theme = useTheme();
  const classes = styles(theme);

  const { field: { value }, fieldState: { error } } = useController({
    name,
    control,
  });

  const handleChange = newDate => {
    const newDateUTC = new Date(Date.UTC(newDate?.getFullYear(), newDate?.getMonth(), newDate?.getDate()));
    setValue(name, newDateUTC || null, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale.nl}>
      <DatePicker
        {...rest}
        label={label}
        value={value ? new Date(value) : null}
        onChange={newValue => handleChange(newValue)}
        inputFormat="dd-MM-yyyy"
        slotProps={{
          textField: {
            required,
            size: "small",
            margin: "normal",
            variant: "outlined",
            error: !!error,
            helperText: error?.message || helperText,
            sx: classes.field,
            inputProps: {
              placeholder: "dd-mm-yyyy",
            },
            InputLabelProps: {
              shrink: true,
              focused: true,
              className: value ? "MuiFormLabel-filled" : null,
            },
          },
          desktopPaper: {
            sx: classes.yearButton,
          },
          mobilePaper: {
            sx: classes.yearButton,
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default DateField;
