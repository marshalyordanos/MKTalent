import React from "react";
import styled from "styled-components";
import JobImage from "../../../assets/page/Job/job1.png";

const JobCard = (props) => {
  return (
    <JobCardStyle>
      <div className="px-3">
        <img src={JobImage} className="w-[50px]" alt="" />
      </div>
      <div className="flex-grow">
        <h3>hhhh{props.title}</h3>
        <p>{props.location}</p>
      </div>
      <div className=" self-start bg-gray-200 p-2 px-4 rounded-lg ">
        <p>{props.type}</p>
      </div>
    </JobCardStyle>
  );
};

const JobCardStyle = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
  /* box-shadow:  4px 4px 10px lightgray; */
  border-radius: 5px;
  :hover {
    box-shadow: 4px 4px 15px #b6b6b6;
  }
  p,
  h3 {
    margin: 0;
    padding: 0;
  }
`;

export default JobCard;
