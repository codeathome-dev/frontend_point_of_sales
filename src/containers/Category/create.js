import React, { useState } from "react";
import Form from "./form";
import BreadCrumb from "components/BreadCrumb";
import { categoryCreate } from "store/actions/category";

function CategoryCreate(props) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    categoryCreate(name, props.history);
    event.preventDefault();
  };

  return (
    <div className="container">
      <BreadCrumb
        secondText="Category"
        thirdText="Tambah Category"
        secondUrl="/admin/category"
      />
      <Form
        handleChange={handleChange}
        name={name}
        value={name}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default CategoryCreate;
