import { SearchOutlined } from '@mui/icons-material'
import { style } from '@mui/system'
import { Button, Checkbox } from 'antd'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useEffect} from "react";
import { Link} from "react-router-dom";
import styled from 'styled-components'
import api from '../api/api';
import FilterListIcon from '@mui/icons-material/FilterList';
// import JobCard from '../components/fragments/job/JobCard'
import JobCatagory from '../components/fragments/job/JobCatagory'
import EventCard from '../components/fragments/event/EventCard'
const EventPage = () => {
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
      const jobs = await api.get("/event/getallEvent");
      let ff = [];
      let gg;
      if (fulltime) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.eventtype == "music"),
        ];
      }
      if (freelance) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.eventtype == "fashion"),
        ];
      }
      if (temporary) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.eventtype == "model"),
        ];
      }
      if (parttime) {
        ff = [
          ...ff,
          ...jobs.data.data.filter((job) => job.jobtype == "vacation"),
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
    <EventPageStyle>
      {/* ********** header */}
      <div className="header flex items-center justify-between text-base m-4">
        <NavLink to="/qq">All Events</NavLink>
        <div>
          <span>
            <Link
              onClick={() => {
                setShowCatagory(!showCatagory);
                setShowFilter(false);
              }}
              to="/jobs/appliedUser"
            >
              Applied Events
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
          {/* <Checkbox name="freelance" onChange={(e) => handleFreelance()}>
            Contractual
          </Checkbox> */}

          <Checkbox onChange={(e) => handleFullTime()}>Music</Checkbox>
          <Checkbox onChange={(e) => handleParttime()}>Fashion</Checkbox>
          <Checkbox onChange={(e) => handleTemporary()}>Model</Checkbox>
          <Checkbox onChange={(e) => handleTemporary()}>Vacation</Checkbox>
        </div>
      )}

      <div>
        {/* <Link to={"/jobs/knnkjkn"}>
          <JobCard />
        </Link> */}
        {allJobs.map((job, i) => (
          <Link to={`/event/${job._id}`}>
            <EventCard
              eventname={job.eventname}
              eventtype={job.eventtype}
              description={job.description}
              duration={job.duration}
              location={job.location}
              targetaudience={job.targetaudience}
            
            />
          </Link>
        ))}
      </div>
    </EventPageStyle>
  );
}








const EventPageStyle = styled.div`
  

  /* ******** top header  */

  .header{
      
      border-bottom: 1px solid lightgray;
  }
  .header a{
    color: black;
    padding: 14px;
  }
  .header a:hover{
    color:#1890FF ;
  }
  .header .active:hover{
    color:black ;
  }
  .header .active{
    background-color:#E6F7FF ;
  }
  .header span{
    padding: 14px;
    background-color: #1890FF;
    color: white;
      border: 1px solid lightgray;
      cursor: pointer;
      user-select: none;
  }
  .header span:hover{
    border: 1px solid #1890FF;
    background-color: #FAFAFA;
    color: black;
/* 0915870708 */

    
  }

/* header Bottem */
.header__bottem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 16px ;
    cursor: pointer;

    border-bottom: 1px solid lightgray;
}
.header__bottem__one input{
 padding: 8px 14px;
 border: 1px solid lightgray;
 border-radius: 20px;
 margin: 19px 3px;
}
 .header__bottem__one input:focus,.header__bottem__two:hover{
    border: 1px solid #1890FF;
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
    padding-bottom:40px;
    border-bottom: 1px solid lightgray;
}

`;

export default EventPage