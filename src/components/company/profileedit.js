import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Spinner, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import "./company.css";
import CompanyLogo from "../../assets/page/company/ethiotel.jpg";
import CompanyProfileImage from "../../assets/page/company/companyProfileImage.png";

const ProfileEdit = (props) => {
  return (
    <div>
      <Container className="container_job maincontainer">
        <Form id="companyedit" method="post">
          <br></br> <br></br>
          <h1>Edit Company profile</h1>
          <br></br>
          <div className="minicontainer">
            <h3>Company Logo -Trademark </h3>
            <hr></hr>
            <FormGroup>
              <div className="profilepicdiv ">
                <div className=" contains">
                  <div className="imagediv">
                    <img className="image" src={CompanyLogo} />
                  </div>
                </div>
                <div className=" contains self-center">
                  <Label for="profilepic" className="changephoto">
                    Change LOGO
                  </Label>
                  <Input
                    type="file"
                    name="profilepic"
                    accept="image/*"
                    id="profilepic"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Password Change</h3>
            <hr></hr>
            <div className="flex justify-end mr-6 ">
              <Link to={"/company/profile/edit/password"}>
                <Button className="button_login bg-success">
                  Change Password
                </Button>
              </Link>
            </div>
          </div>
          <div className="minicontainer">
            <h3>Basic Information </h3>
            <hr></hr>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Company Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter Company description"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="detail">Detail</Label>
              <Input
                type="textarea"
                name="detail"
                id="detail"
                placeholder="Enter company detail description"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="establish">date of Establishment</Label>
              <Input
                type="date"
                name="establish"
                id="establish"
                placeholder="Enter a date"
                required
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Contacts </h3>
            <hr></hr>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Location"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter company email address"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phonenumber">Phone Number</Label>
              <Input
                type="text"
                name="phonenumber"
                id="phonenumber"
                placeholder="Enter Phone Number"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phonenumber2">2nd Phone Number "optional"</Label>
              <Input
                type="text"
                name="phonenumber2"
                id="phonenumber2"
                placeholder="Enter Another Phone Number"
              />
            </FormGroup>
            <p className="postedjobs">
              Social media links of the company - not required
            </p>
            <FormGroup>
              <Label for="">Twitter Address</Label>
              <Input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="Companies Twitter Address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="">Facebook Address</Label>
              <Input
                type="text"
                name="facebook"
                id="facebook"
                placeholder="Company facebook Address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="">Instagram Address</Label>
              <Input
                type="text"
                name="instagram"
                id="instagram"
                placeholder="Company instagram Address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="">LinkdIn Address</Label>
              <Input
                type="text"
                name="linkdin"
                id="linkdin"
                placeholder="Company linkdIn Address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="">Telegram Address</Label>
              <Input
                type="text"
                name="telegram"
                id="telegram"
                placeholder="Company Telegram Address"
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>
              <p className="postedjobs">others- not required</p>{" "}
            </h3>
            <hr></hr>
            <FormGroup>
              <Label for="employees">Total Employees</Label>
              <Input
                type="text"
                name="employee"
                id="employee"
                placeholder="Enter total number of employee"
              />
            </FormGroup>
            <FormGroup>
              <Label for="client">Number of clients</Label>
              <Input
                type="text"
                name="client"
                id="client"
                placeholder="Enter the number of total clients"
              />
            </FormGroup>
          </div>
          <div className="minicontainer flex justify-end mr-6">
            <Button className="button_login bg-success" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ProfileEdit;
