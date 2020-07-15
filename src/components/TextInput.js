import React from "react";

const TextInput = (props) => {
  const { value, handleChange, name, placeholder, type, readOnly } = props;
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
    />
  );
};

export default TextInput;
