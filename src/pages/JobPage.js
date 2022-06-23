import { SearchOutlined } from "@mui/icons-material";
import { style } from "@mui/system";
import { Button, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";
import FilterListIcon from "@mui/icons-material/FilterList";
import JobCard from "../components/fragments/job/JobCard";
import JobCatagory from "../components/fragments/job/JobCatagory";
import api from "../api/api";
const JobPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showCatagory, setShowCatagory] = useState(false);
  const [allJobs, setAllJobs] = useState([]);
  const [freelance, setFreelance] = useState(false);
  const [fulltime, setFulltime] = useState(false);
  const [parttime, setParttime] = useState(false);
  const [temporary, setTemporary] = useState(false);

  const [searchUser, setSearchUser] = useState([]);
  useEffect(() => {
    const feachData = async () => {
      const jobs = await api.get("/job/getalljob");
      let ff = [];
      let gg;
      if (fulltime) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.jobtype == "Fulltime"),
        ];
      }
      if (freelance) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.jobtype == "CONTRACTUAL"),
        ];
      }
      if (temporary) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.jobtype == "REMOTE"),
        ];
      }
      if (parttime) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.jobtype == "PART TIME"),
        ];
      }
      if (ff.length == 0) {
        ff = [...jobs.data.data];
      }
      setAllJobs(ff);
      setSearchUser(jobs.data.data);
      console.log("::::::::::::::::::::::::::::::::::::::::::::::", ff);
    };
    feachData();
  }, [freelance, fulltime, parttime, temporary]);

  useEffect(() => {}, []);
  const handleFreelance = () => {
    setFreelance(!freelance);
  };
  const handleFullTime = () => {
    setFulltime(!fulltime);
  };
  const handleParttime = () => {
    setParttime(!parttime);
  };
  const handleTemporary = () => {
    setTemporary(!temporary);
  };
  const handleChange = (e) => {
    // setSearch(e.target.value);
    const xx = searchUser.filter((job) =>
      job.jobtitle.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    console.log("pppppp", xx);
    setAllJobs(xx);
  };
  return (
    <JobPageStyle>
      {/* ********** header */}
      <div className="header flex items-center justify-between text-base m-4">
        <NavLink to="/qq">All jobs</NavLink>
        <div>
          <span>
            <Link
              onClick={() => {
                setShowCatagory(!showCatagory);
                setShowFilter(false);
              }}
              to="/jobs/appliedUser"
            >
              Applied Jobs
            </Link>
          </span>
        </div>
      </div>
      <div className="header__bottem ">
        <div className="header__bottem__one">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Keywords"
            name=""
            id=""
          />
          <Button
            size={"lage"}
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
          />
        </div>
        <div
          onClick={() => {
            setShowFilter(!showFilter);
            setShowCatagory(false);
          }}
          className="header__bottem__two select-none felx items-center"
        >
          <FilterListIcon />
          <span className="pl-3">Filter</span>
        </div>
      </div>
      {showFilter && (
        <div className="JobPage__filter text-lg m-6 flex justify-center">
          <Checkbox name="freelance" onChange={(e) => handleFreelance()}>
            Contractual
          </Checkbox>

          <Checkbox onChange={(e) => handleFullTime()}>Full Time</Checkbox>
          <Checkbox onChange={(e) => handleParttime()}>Part Time</Checkbox>
          <Checkbox onChange={(e) => handleTemporary()}>Remote</Checkbox>
        </div>
      )}

      <div>
        {/* <Link to={"/jobs/knnkjkn"}>
          <JobCard />
        </Link> */}
        {allJobs.map((job, i) => (
          <Link to={`/jobs/${job._id}`}>
            <JobCard
              title={job.jobtitle}
              desc={job.jobdesc}
              type={job.jobtype}
              salary={job.salary}
              location={job.location}
              responsibilities={job.responsibilities}
              requirements={job.requirements}
            />
          </Link>
        ))}
      </div>
    </JobPageStyle>
  );
};

const JobPageStyle = styled.div`
  /* ******** top header  */
  flex: 1;
  .header {
    border-bottom: 1px solid lightgray;
  }
  .header a {
    color: black;
    padding: 14px;
  }
  .header a:hover {
    color: #1890ff;
  }
  .header .active:hover {
    color: black;
  }
  .header .active {
    background-color: #e6f7ff;
  }
  .header span {
    padding: 14px;
    background-color: #1890ff;
    color: white;
    border: 1px solid lightgray;
    cursor: pointer;
    user-select: none;
  }
  .header span:hover {
    border: 1px solid #1890ff;
    background-color: #fafafa;
    color: black;
  }

  /* header Bottem */
  .header__bottem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 16px;
    cursor: pointer;

    border-bottom: 1px solid lightgray;
  }
  .header__bottem__one input {
    padding: 8px 14px;
    border: 1px solid lightgray;
    border-radius: 20px;
    margin: 19px 3px;
  }
  .header__bottem__one input:focus,
  .header__bottem__two:hover {
    border: 1px solid #1890ff;
    outline: none;
  }
  .header__bottem__two {
    display: flex;
    justify-content: center;

    align-items: center;
    width: 150px;
    border: 1px solid lightgray;
    padding: 8px 12px;
    border-radius: 20px;
  }

  /* job filter */

  .JobPage__filter {
    padding: 10px;
    padding-bottom: 40px;
    border-bottom: 1px solid lightgray;
  }
`;

export default JobPage;
