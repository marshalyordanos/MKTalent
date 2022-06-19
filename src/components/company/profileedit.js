import React, { useEffect } from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLight } from "../../redux/counter/mode";
import {
  DarkMode,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import MKLogo from "../../assets/page/MK logo/MK logo.png";
import tel from "../../assets/page/company/ethiotel.jpg";
import Login from "../login/Login";
import Model from "../../utils/Model";
import { logout } from "../../redux/authReducer";
import "./company.css";
import JobCard from "../fragments/job/JobCard";
import { NavLink } from "react-router-dom";

import { Spinner, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import "./company.css";

const ProfileEdit = (props) => {
  return (
    <div>
      <Container className="container_job">
        <br></br> <br></br>
        <h1>Edit Company profile</h1>
        <br></br>
        <Form id="register" method="post">
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
          <FormGroup>
            <Label for="employees">Total Employees</Label>
            <Input
              type="text"
              name="employee"
              id="employee"
              placeholder="Enter total number of employee"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="client">Number of clients</Label>
            <Input
              type="text"
              name="client"
              id="client"
              placeholder="Enter the number of total clients"
              required
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

          <Button className="button_login bg-success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ProfileEdit;
