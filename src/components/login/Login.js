import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Model from "../../utils/Model";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authReducer";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();
  const light = useSelector((state) => state.mode.light);
  const { loading, error } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: light ? "light" : "dark",
    // progress: undefined
  };
  const handleLogin = async () => {
    const { email, password } = value;
    if (!email) {
      toast.error("Please provide your email", toastOption);
    } else if (!password) {
      toast.error("Please provide your password", toastOption);
    } else {
      try {
        dispatch(login({ loading: true }));

        const { data } = await api.post("/users/login", value);
        dispatch(login({ data: data, loading: false }));
        props.click();
        const profile = await api.get(`/profile/filter/${data.data._id}`);
        localStorage.setItem("profile", JSON.stringify(profile.data.data));

        if (data.data.role == "talent") {
          navigate("/main");
        } else if (data.data.role == "admin") {
          navigate("/admin");
        } else if (data.data.role == "company") {
          navigate("/company/find");
        }
      } catch (err) {
        dispatch(
          login({
            error: err.response && err.response.data.message,
            loading: false,
          })
        );

        console.log(err);
      }
    }
  };
  return (
    <div className={light ? "login" : "login login__dark"}>
      {loading ? <h1>Loading... </h1> : error ? <h1>{error}</h1> : ""}
      <h1>Login</h1>
      <input
        onChange={(e) => setValue({ ...value, email: e.target.value })}
        type={"text"}
        placeholder="username"
      />
      <input
        onChange={(e) => setValue({ ...value, password: e.target.value })}
        type={"password"}
        placeholder="password"
      />

      <Button onClick={handleLogin} variant="success">
        Login
      </Button>
      <ToastContainer />
    </div>
  );
};

export default Login;
