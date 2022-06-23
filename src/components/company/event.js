import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import api from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./company.css";
import Defaultevent from "../../assets/page/eventimage.png";
const Event = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userAuth.data);

  const { loading, error, data } = useSelector((state) => state.userAuth);
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");

  const [value, setValue] = useState({
    jobtitle: "",
    jobdesc: "",
    jobdesc: "",
    salary: "",
    location: "",
    responsibilities: [],
    requirements: [],
  });
  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,

    // progress: undefined
  };
  const onChangeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  console.log("lllllllllllllllllllllllllllllllllllllll", value);
  const onFinish = async (values) => {};
  const handleValidation = async (e) => {
    e.preventDefault();
    const {
      eventname,
      eventtype,
      location,
      description,
      duration,
      targetaudience,
     
    } = value;
    if (!eventname) {
      toast.error("Please provide your eventname", toastOption);
    } else if (!eventtype) {
      toast.error("Please provide your event type", toastOption);
    } else if (!location) {
      toast.error("Please provide your location", toastOption);
    } else if (!description) {
      toast.error("Please provide your dscription", toastOption);
    } else if (!duration) {
      toast.error("Please provide your duration", toastOption);
    } else if (!targetaudience) {
      toast.error(
        "Please provide your target audience",
        toastOption
      );
    } else {
      // dispatch(register({ loading: true }));
      if (data.data.role == "company") {
        await api.post("/event/createEvent", value, {
          headers: {
            "Access-Control-Allow-Origin": true,
            authorization: `Bearer ${userData.token}`,
          },
        });

        navigate("/company");
      } else {
        // dispatch(register({ data: data, loading: false }));
      }
    }
  };
  return (
    <div>
   
      <Container className="container_job">
        <br></br> <br></br>
        <h1>ADD EVENT</h1>
        <br></br>
        <Form id="register" method="post" onSubmit={onFinish}>
          <FormGroup>
            <Label for="name">Event name</Label>
            <Input
              type="text"
              name="eventname"
              id="eventname"
              value={value.eventname}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter event name"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={value.description}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter event description"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="salary">Event type</Label>
            <Input
              type="text"
              name="eventtype"
              id="eventtype"
              value={value.eventtype}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter event type"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="salary">Duration</Label>
            <Input
              type="text"
              name="duration"
              id="duration"
              value={value.duration}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter Duration"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input
              type="text"
              name="location"
              id="location"
              value={value.location}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter Location"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Target Audience</Label>
            <Input
              type="text"
              name="targetaudience"
              id="targetaudience"
              value={value.targetaudience}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Enter Target Audience"
              required
            />
          </FormGroup>
          
          <Button
            className="button_login bg-success"
            type="submit"
            onClick={handleValidation}
          >
            Submit
          </Button>
        </Form>
      </Container>
      <ToastContainer />

    </div>
  );
};

export default Event;
