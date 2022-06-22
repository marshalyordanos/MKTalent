import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Spinner, Button, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import "./editprofilepage.css";
import { Modal } from "antd";
import profilepic from "../assets/page/profile.png";
import Defaultpic from "../assets/page/ProfileImage.jpg";
import api from "../api/api";
import { useSelector } from "react-redux";
const EditPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, setUsers] = useState([]);
  const { data: userData } = useSelector((state) => state.userAuth);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate(`/profile/${userData.data._id}/activity/personal`);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const users = await api.patch(
        "/users/updateMyPassword",
        {
          passwordCurrent: oldPassword,
          password: newPassword,
          passwordConfirm: confirmPassword,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": true,
            authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
          },
        }
      );
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setUsers(users.data.data);
      showModal();
    } catch (err) {
      console.log("💀💀💀💀💀💥💥💥💥💥💥💥💥💥");
      const x = err.response && err.response.data.message;
    }
  };
  return (
    <div>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}>
        <h2>Your password is chenged</h2>
      </Modal>
      <Container className="container_job maincontainer">
        <Form id="register" method="post">
          <h1>Change Password</h1>
          <hr></hr>
          <br></br>
          <div className="minicontainer">
            <h3>Current Password</h3>
            <hr></hr>

            <FormGroup>
              <Label for="password"> Password</Label>
              <Input
                type="password"
                name="oldpassword"
                id="oldpassword"
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter your Old Password"
                required
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>New Password</h3>
            <hr></hr>

            <FormGroup>
              <Label for="password">password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your New password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="confirmpassword">Confirm Password</Label>
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Your Password"
                required
              />
            </FormGroup>
          </div>
          <div className="flex justify-between minicontainer">
            <NavLink
              to={"/profile/edit"}
              className=" py-3 px-4 rounded button_login bg-info text-white"
            >
              Back
            </NavLink>
            <Button
              onClick={submitHandler}
              className="button_login bg-success"
              type="submit"
            >
              Change
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default EditPasswordPage;
