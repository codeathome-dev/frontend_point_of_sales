import React from "react";
import TextInput from "./TextInput";

const TextInputWithLabel = (props) => {
  const {
    value,
    handleChange,
    name,
    placeholder,
    type,
    label,
    readOnly,
  } = props;

  return (
    <div className="form-group">
      <label>{label}</label>
      <TextInput
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        readOnly={readOnly}
      />
    </div>
  );
};

export default TextInputWithLabel;
