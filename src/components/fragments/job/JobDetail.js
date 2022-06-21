import React, { useEffect, useState } from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import Button from "../../../utils/Button";
import api from "../../../api/api";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const pra = [
    "We are looking for a marketing analyst with a razor-sharp attention to detail, broad knowledge of statistics, mathematics and analytics, and an almost obsessive commitment to thoroughness. Marketing analysts can expect to work with vast amounts of written and numerical information about market trends, volume of sales, customer experience, and competitors’ activities. Their responsibilities include gathering data, writing detailed reports on findings, identifying new markets, and advising upper-management on tactics.",
    "Successful marketing analyst candidates should have at least two years’ experience in marketing, excellent mathematics and language skills, and outstanding insight. Ideal candidates will have a proven aptitude for interpreting data.",
  ];
  const response = [
    "Gathering and analyzing data.",
    "Reporting to marketing managers and coordinators.",
    "Monitoring customer bases and identifying new ones.",
    "Preparing detailed reports on consumer behavior, competitors’ activities, outcomes, and sales.",
    "Designing market surveys.",
  ];
  const [job, setJob] = useState({});
  const [responsibilities, setResponsibilities] = useState([]);
  const [requirements, setRequirements] = useState([]);

  const jobId = useParams();
  useEffect(() => {
    const feachData = async () => {
      const jobs = await api.get(`/job/${jobId.id}`);
      setJob(jobs.data.data);
      setRequirements(jobs.data.data.requirements);
      setResponsibilities(jobs.data.data.responsibilities);

      console.log(
        "::::::::::::::::::::::::::::::::::::::::::::::",
        jobs.data.data
      );
    };
    feachData();
  }, []);
  return (
    <JobDetailStyle>
      <JobCard
        title={job.jobtitle}
        desc={job.jobdesc}
        type={job.jobtype}
        salary={job.salary}
        location={job.location}
        responsibilities={job.responsibilities}
        requirements={job.requirements}
      />
      <div className="jobDetail__type text-gray-500">
        <div className="jobDetail__type1 ">
          <div className="a1">
            <BusinessCenterOutlinedIcon />
            <span className="pl-3">Jop Type</span>
          </div>
          <span>{job.jobtype}</span>
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
        <h3>Job Description:</h3>

        <p>{job.jobdesc}</p>
      </div>
      <div className="jobdetail__response">
        <h3>Responsibilities:</h3>
        {responsibilities.map((v) => (
          <li>{v}</li>
        ))}
      </div>
      <div className="jobdetail__requirements">
        <h3>Requirements:</h3>
        {requirements.map((v) => (
          <li>{v}</li>
        ))}
      </div>

      <div className="m-[20px]">
        <Button>Apply</Button>
      </div>

      <div className="jobdetail__Jobs">
        <h2>Related Jobs</h2>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
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
export default JobDetail;
