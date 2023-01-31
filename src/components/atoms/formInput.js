import { Label, Input, FormGroup } from "reactstrap";

const FormInput = ({
  label,
  id,
  placeholder,
  name,
  type = "text",
  required = true,
}) => (
  <FormGroup>
    <Label for={id} style={{ fontWeight: "bold" }}>
      {label}:
    </Label>
    <Input
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  </FormGroup>
);

export default FormInput;
