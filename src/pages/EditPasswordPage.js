import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Spinner, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import "./editprofilepage.css";
import profilepic from "../assets/page/profile.png";
import Defaultpic from "../assets/page/ProfileImage.jpg";
const EditPasswordPage = () => {
  return (
    <div>
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
            <Button className="button_login bg-success" type="submit">
              Change
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default EditPasswordPage;
