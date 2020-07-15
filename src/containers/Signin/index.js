import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_FINISH, LOADING, SET_TOKEN } from "store/types";
import axios from "configs";

function Signin(props) {
  //this hook gives us redux store state
  const loading = useSelector((state) => state.loading.loading);
  const token = useSelector((state) => state.users.token);
  //this hook gives us dispatch method
  const dispatch = useDispatch();
  console.log("token");
  console.log(token);
  console.log("loading");
  console.log(loading);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: LOADING_FINISH });
  }, []);

  const handleSignin = async (e) => {
    dispatch({ type: LOADING });
    axios
      .post(`/users/signin`, data)
      .then((res) => {
        if (res.data.code === 200) {
          localStorage.setItem("token", res.data.data.token);
          dispatch({ type: SET_TOKEN, token: res.data.data });
          dispatch({ type: LOADING_FINISH });
          props.history.push("/admin/category");
        } else {
          console.error(res.data);
        }
      })
      .catch((err) => {
        dispatch({ type: LOADING_FINISH });
        console.log(err);
      });
  };

  if (token) return <Redirect to="/admin/category" />;
  return (
    <div className="container mt-5">
      <div className="mb-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
      </div>
      {loading === false ? (
        <button onClick={handleSignin} className="btn btn-primary">
          signin
        </button>
      ) : (
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      )}
    </div>
  );
}

export default Signin;
