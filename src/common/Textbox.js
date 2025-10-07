import { TextField } from "@mui/material";

export default function Textbox({
  label,
  type = "input",
  value,
  name,
  onChange,
  error,
  OnBlur,
  touched,
  validation,
  size,
  ...props
}) {
  return (
    <>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        size={size}
        {...props}
      />
    </>
  );
}
