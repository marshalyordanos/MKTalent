import React, { useEffect } from "react";
import MKLogo from "../../assets/page/MK logo/MK logo.png";
import { Link, NavLink } from "react-router-dom";
import "./company.css";
import styled from "styled-components";
const Status = (props) => {
  return (
    <StatusCss>
      <div>
        <h1>Div left for marshall chart </h1>
      </div>
      <div>
        <div className="statusdiv flex justify-center">
          <NavLink to={"/company/status/blogs"} className="companycards ">
            <p className="titlestat">Blog</p>
            <div className="totalstat">Total: 7</div>
          </NavLink>
          <NavLink to={"/company/status/jobs"} className="companycards ">
            <p className="titlestat">Job</p>
            <div className="totalstat">Total: 20</div>
            <div className="totalstat">Applied users: 7200</div>
          </NavLink>
          <NavLink to={"/company/status/events"} className="companycards ">
            <p className="titlestat">Event</p>
            <div className="totalstat">Total: 13</div>
            <div className="totalstat">Participants: 453</div>
          </NavLink>
        </div>
      </div>
    </StatusCss>
  );
};

const StatusCss = styled.div`
  .statusdiv {
    display: flex;

    background-color: #eeeeee;
    padding: 30px;
  }
  .companycards {
    background-color: white;
    color: black;
    border: 1px solid grey;
    border-left: 4px solid blue;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
    width: 20%;
    text-align: center;
  }
  .totalstat {
    text-align: center;
  }
  .titlestat {
    font-size: large;
    font-weight: 600;
  }
`;

export default Status;
