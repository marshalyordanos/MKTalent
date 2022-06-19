import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Spinner, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import "./editprofilepage.css";
import profilepic from "../assets/page/profile.png";

const EditProfilePage = () => {
  return (
    <div>
      <Container className="container_job maincontainer">
        <Form id="register" method="post">
          <br></br> <br></br>
          <h1>Edit your profile</h1>
          <br></br>
          <div className="minicontainer">
            <h3>Profile </h3>
            <FormGroup>
              <div className="profilepicdiv ">
                <div className="imagediv">
                  <img src={profilepic} />
                </div>
                <div className=" contains">
                  <Label for="profilepic" className="changephoto">
                    Update Photo
                  </Label>
                  <Input
                    type="file"
                    name="profilepic"
                    accept="image/*"
                    id="profilepic"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="contains">
                  {" "}
                  <Label for="talenttype">Talent Type</Label>
                  <Input
                    type="text"
                    name="talenttype"
                    id="talenttype"
                    placeholder="Model"
                  />
                </div>
              </div>
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Password Change</h3>
            <Link to={""}>
              <Button
                className="button_login bg-success"
                style={{ justifyContent: "" }}
              >
                Change Password
              </Button>
            </Link>
          </div>
          <div className="minicontainer">
            <h3>Basic Information</h3>
            <FormGroup>
              <Label for="fname"> First Name</Label>
              <Input
                type="text"
                name="fname"
                id="fname"
                placeholder="Enter your First name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="mname"> Middle Name</Label>
              <Input
                type="text"
                name="mname"
                id="mname"
                placeholder="Enter your Middle name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lname"> Last Name</Label>
              <Input
                type="text"
                name="lname"
                id="lname"
                placeholder="Enter your Last name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="username"> UserName</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your Username"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio</Label>
              <Input
                type="textarea"
                name="bio"
                id="bio"
                placeholder="Enter a small bio or discription about yourself"
              />
            </FormGroup>
            <FormGroup>
              <Label for="birthdate">Birth date</Label>
              <Input
                type="date"
                name="birthdate"
                id="birthdate"
                placeholder="Enter a your birthdate"
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Address</h3>

            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                type="text"
                name="country"
                id="country"
                placeholder="Enter Your Country of Residence"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="Enter Your city of Residence"
                required
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Contact</h3>

            <FormGroup>
              <Label for="phonenumber">Phone Number</Label>
              <Input
                type="text"
                name="phonenumber"
                id="phonenumber"
                placeholder="Enter Your Phone Number"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phonenumber2">Second Phone Number "optional"</Label>
              <Input
                type="text"
                name="phonenumber2"
                id="phonenumber2"
                placeholder="Second Phone Number"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </FormGroup>
            <div className="Socials">
              <h4>Social media links of the company - not required</h4>
              <FormGroup>
                <Label for="">Twitter Address</Label>
                <Input
                  type="text"
                  name="twitter"
                  id="twitter"
                  placeholder="Enter your Twitter Address"
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Facebook Address</Label>
                <Input
                  type="text"
                  name="facebook"
                  id="facebook"
                  placeholder="Enter your facebook Address"
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Instagram Address</Label>
                <Input
                  type="text"
                  name="instagram"
                  id="instagram"
                  placeholder="Enter your instagram Address"
                />
              </FormGroup>
              <FormGroup>
                <Label for="">LinkdIn Address</Label>
                <Input
                  type="text"
                  name="linkdin"
                  id="linkdin"
                  placeholder="Enter your linkdIn Address"
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Telegram Address</Label>
                <Input
                  type="text"
                  name="telegram"
                  id="telegram"
                  placeholder="Enter your Telegram Address"
                />
              </FormGroup>
            </div>
          </div>
          <div className="flex justify-between minicontainer">
            <NavLink
              to={"/profile/:id"}
              className=" py-3 px-4 rounded button_login bg-info text-white"
            >
              Back
            </NavLink>
            <Button className="button_login bg-success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default EditProfilePage;
