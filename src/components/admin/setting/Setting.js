import React, { useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../../redux/authReducer";
import { useNavigate } from "react-router-dom";

// import ModelRegistrationCon from '../RegisterStyle'

// import './ModelRegistration.css'
import styled from "styled-components";
import api from "../../../api/api";

const Setting = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth);
  const light = useSelector((state) => state.mode.light);
  const roleType = useSelector((state) => state.mode.role);

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
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

  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleValidation = async (e) => {
    e.preventDefault();
    const { email, username, password, passwordConfirm } = value;
    if (!username) {
      toast.error("Please provide the company Name", toastOption);
    } else if (!email) {
      toast.error("Please provide the Email", toastOption);
    } else if (!password) {
      toast.error("Please provide  Password", toastOption);
    } else if (password !== passwordConfirm) {
      toast.error(
        "The password and confirm password does not match",
        toastOption
      );
    } else {
      try {
        dispatch(register({ loading: true }));

        const { data } = await api.post("/users/signup", value);
        dispatch(register({ data: data, loading: false }));

        console.log("pppppppp", data);
        if (data.data.role == "talent") {
          navigate("/main");
        } else if (data.data.role == "admin") {
          navigate("/admin");
        }
      } catch (err) {
        dispatch(
          register({
            error: err.response && err.response.data.message,
            loading: false,
          })
        );
      }
    }
  };
  return (
    <>
      {props.children}

      <Settingstyle style={{ backgroundColor: light ? "white" : "#3b3b3b" }}>
        {/* <div className='image'>
      <img src={SignupImg} alt="" />
    </div> */}
        <div className="step1">
          <form className={light ? "" : "dark"}>
            <h1>Register a company</h1>
            <label for="username">Company's Name</label>
            <input
              name="username"
              onChange={(e) => onChangeHandler(e)}
              value={value.username}
              id="username"
              type="text"
              placeholder="Company's Name"
              required
            />

            <label for="email">Email</label>
            <input
              name="email"
              onChange={(e) => onChangeHandler(e)}
              value={value.email}
              id="email"
              type="email"
              placeholder="Company's Email"
              required
            />

            <label for="password">Password</label>
            <input
              name="password"
              onChange={(e) => onChangeHandler(e)}
              value={value.password}
              id="password"
              type="Password"
              placeholder="Password"
              required
            />
            <label for="passwordConfirm">Password Confrim</label>
            <input
              name="passwordConfirm"
              onChange={(e) => onChangeHandler(e)}
              value={value.passwordConfirm}
              id="passwordConfirm"
              type="Password"
              placeholder="Password Confrim"
              required
            />
            <Button type="submit" onClick={handleValidation} variant="success">
              Register
            </Button>
          </form>
          <span style={{ textAlign: "center" }}>
            Go back? <Link to="/admin/companies">Back</Link>
          </span>
        </div>
      </Settingstyle>
      <ToastContainer />
    </>
  );
};

const Settingstyle = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* color: white; */
  .image {
    img {
      z-index: 0;
      position: fixed;
      right: 4rem;
      bottom: 2rem;
    }
  }

  .step1 {
    border-radius: 10px;
    z-index: 0;
    display: flex;
    max-width: 700px;
    flex-direction: column;

    align-items: center;
    /* padding: 4rem; */
    margin-top: 30px;
    padding: 1rem;
    .dark {
      color: white;
      input {
        background-color: #3b3b3b;
        color: white;
      }
      button {
        background-color: #3b3b3b;
        color: white;
      }
    }
    .dark select {
      background-color: #3b3b3b;
      color: white;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      h1 {
        font-weight: 100;
      }
      label {
        padding: 7px 0;
      }
      .profileImg {
        margin: 15px 0;
        width: 500px;
        padding: 1rem;
        border: 1px solid gray;
        border-radius: 0.4rem;
      }
      input {
        border: 1px solid gray;
        padding: 0.6rem 1rem;
        border-radius: 0.4rem;
        outline: none;
        width: 500px;
      }
      select {
        border: 1px solid gray;
        padding: 1rem 1rem;
        border-radius: 0.4rem;
        outline: none;
        width: 200px;
      }

      div.row {
        width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 210px;
        }
        input {
          width: 210px;
        }
      }
      button {
        margin: 1rem 0;
        width: 500px;
        padding: 0.8rem;
      }
    }
  }
`;

export default Setting;
