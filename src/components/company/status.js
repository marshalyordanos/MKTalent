import React, { useEffect } from "react";
import MKLogo from "../../assets/page/MK logo/MK logo.png";
import { Link, NavLink } from "react-router-dom";
import "./company.css";
import styled from "styled-components";
const Status = (props) => {
  return (
    <StatusCss>
      <div></div>
      <div className="statusdiv text-center">
        <p className="para">The total Number of Blogs , Jobs and Event</p>
        <hr></hr>
        <div className=" flex justify-between">
          <div className="companycards ">
            <p className="titlestat">Blog</p>
            <div className="totalstat">Total: 7</div>
          </div>
          <div className="companycards ">
            <p className="titlestat">Job</p>
            <div className="totalstat">Total: 20</div>
            <div className="totalstat">Applied users: 7200</div>
          </div>
          <div className="companycards ">
            <p className="titlestat">Event</p>
            <div className="totalstat">Total: 13</div>
            <div className="totalstat">Participants: 453</div>
          </div>
        </div>
      </div>
    </StatusCss>
  );
};

const StatusCss = styled.div`
  .para {
    font-size: 2em;
  }
  .statusdiv {
    background-color: #eeeeee;
    padding: 30px;
  }
  .companycards {
    background-color: white;
    color: black;
    border: 1px solid grey;
    border-left: 4px solid blue;
    border-radius: 10px;
    margin: 50px;
    padding: 40px;
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
