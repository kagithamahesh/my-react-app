import { Checkbox } from "@mui/material"

export default function CheckboxField({
 label,
  checked,
  onChange,
  name,
  ...props
}){
    return(
      <Checkbox
          checked={checked}
          onChange={onChange}
          name={name}
          {...props}
        />
    )
}