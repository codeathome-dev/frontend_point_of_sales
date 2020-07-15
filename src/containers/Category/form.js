import React from "react";
import TextInputWithLabel from "components/TextInputWithLabel";

function Form({ name, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <TextInputWithLabel
        label="Name"
        placeholder="Masukkan Name"
        type="text"
        name="name"
        value={name}
        handleChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
