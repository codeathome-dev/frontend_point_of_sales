import React from "react";

const Logout = (props) => {
  localStorage.removeItem("token");
  console.log(props);
  //   localStorage.removeItem("role");
  return (window.location = "/admin/signin");
};

export default Logout;
