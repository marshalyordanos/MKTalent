import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import "./company.css";
import Defaultevent from "../../assets/page/eventimage.png";
const Event = (props) => {
  return (
    <div>
      <Container className="container_job maincontainer">
        <Form id="companyedit" method="post">
          <br></br> <br></br>
          <h1>Make Event</h1>
          <hr></hr>
          <br></br>
          <div className="minicontainer">
            <h3>Event Picture</h3>
            <hr></hr>
            <FormGroup>
              <div className="profilepicdiv ">
                <div className=" contains">
                  <div className="imagediv">
                    <img className="image" src={Defaultevent} />
                  </div>
                </div>
                <div className=" contains self-center">
                  <Label for="eventphoto" className="changephoto">
                    Choose Photo
                  </Label>
                  <Input
                    type="file"
                    name="eventphoto"
                    accept="image/*"
                    id="eventphoto"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>About Event </h3>
            <hr></hr>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Event Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Enter the description about the event"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="type">Type - optional</Label>
              <Input
                type="text"
                name="type"
                id="type"
                placeholder="Enter the event type"
              />
            </FormGroup>
            <FormGroup>
              <Label for="organizer">Organizer</Label>
              <Input
                type="text"
                id="organizer"
                placeholder="Enter the event Organizer"
                required
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Location & Time </h3>
            <hr></hr>
            <FormGroup>
              <Label for="address">Location</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Enter the Location"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="phonenumber">Phone Number</Label>
              <Input
                type="text"
                name="phonenumber"
                id="phonenumber"
                placeholder="Enter a Phone Number"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                name="date"
                id="date"
                placeholder="Enter the Date"
              />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time</Label>
              <Input
                type="time"
                name="time"
                id="time"
                placeholder="Enter The Time"
              />
            </FormGroup>
          </div>
          <div className="minicontainer flex justify-between mr-6">
            <NavLink
              to={"/company/status"}
              className="py-3 px-4 rounded button_login bg-info text-white"
            >
              Back
            </NavLink>
            <Button className="button_login bg-success" type="submit">
              Make Event
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Event;
