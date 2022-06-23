import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "./EventCard";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Button from "../../../utils/Button";
import api from "../../../api/api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EventDetail = () => {
  const data = useSelector((state) => state.userAuth.data);
  const [job, setJob] = useState({});
  const [tt, setTT] = useState(false);
  const [requirements, setRequirements] = useState([]);
  const [responsibilities, setResponsibilities] = useState([]);
  const jobId = useParams();
  useEffect(() => {
    const feachData = async () => {
      const jobs = await api.get(`/event/${jobId.id}`);
      setJob(jobs.data.data);
      setRequirements(jobs.data.data.eventtype);
      setResponsibilities(jobs.data.data.duration);

      console.log(
        "::::::::::::::::::::::::::::::::::::::::::::::",
        jobs.data.data
      );
    };
    feachData();
  }, []);

  const applyHandler = async () => {
    setTT(true);
  };
  return (
    <JobDetailStyle>
      <JobCard
        eventname={job.eventname}
        eventtype={job.eventtype}
        description={job.description}
        location={job.location}
        duration={job.duration}
        targetaudience={job.targetaudience}
      />
      <div className="jobDetail__type text-gray-500">
        <div className="jobDetail__type1 ">
          <div className="a1">
            <BusinessCenterOutlinedIcon />
            <span className="pl-3">Event Type</span>
          </div>
          <span>{job.eventtype}</span>
        </div>
        <div className="jobDetail__type2">
          <div className="a2">
            <FmdGoodOutlinedIcon />
            <span className="pl-3">Location</span>
          </div>
          <span>{job.location}</span>
        </div>
      </div>
      <div className="jobDetail__pra">
        <h3>Event Description:</h3>

        <p>{job.description}</p>
      </div>

      <div className="m-[20px]">
        {tt ? (
          <button
            className="px-4 py-2 rounded-md border-[1px] border-gray-500 bg-sky-600 text-white"
            // onClick={applyHandler}
          >
            Already applied
          </button>
        ) : (
          <button
            className="px-4 py-2 rounded-md border-[1px] border-gray-500 bg-sky-600 text-white"
            onClick={applyHandler}
          >
            Apply
          </button>
        )}
      </div>
    </JobDetailStyle>
  );
};

const JobDetailStyle = styled.div`
  flex: 1;
  .jobDetail__type {
    margin: 20px;
    border-radius: 7px;
    border: 1px solid lightgray;
  }
  .jobDetail__type1 {
    padding: 14px;
    border-bottom: 1px solid lightgray;
  }
  .jobDetail__type2 {
    padding: 14px;
  }
  .jobDetail__type div {
    display: flex;
    align-items: center;
  }
  .jobDetail__type1 > div {
    width: 40%;
    font-size: 16px;
  }
  .jobDetail__type2 > div {
    width: 40%;
    font-size: 16px;
  }

  /* jobDetail__pra */
  .jobDetail__pra {
    margin: 20px;
    font-size: 15px;
  }
  /* jobdetail__response */
  .jobdetail__response {
    margin: 20px;
  }
  .jobdetail__response li {
    font-size: 15px;
    margin: 4px;
  }
  /* jobdetail__requirements */
  .jobdetail__requirements {
    margin: 20px;
  }
  .jobdetail__requirements li {
    font-size: 15px;
    margin: 4px;
  }

  /* jobdetail__Jobs */
  .jobdetail__Jobs {
  }
  .jobdetail__Jobs h2 {
    padding-top: 35px;
    margin: 25px;
    border-bottom: 1px solid lightgray;
  }
`;
export default EventDetail;
