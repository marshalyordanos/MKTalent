import React, { useEffect, useState } from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import tel from "../../assets/page/company/ethiotel.jpg";
import "./company.css";
import JobCard from "../fragments/job/JobCard";
import { Link, NavLink } from "react-router-dom";
import GetJobApi from "../../api/getJobApi";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
const Profile = (props) => {
  const [jobs, setJobs] = useState([]);
  const data = useSelector((state) => state.userAuth.data);
  console.log(
    ":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::",
    data
  );
  useEffect(() => {
    const featchData = async () => {
      console.log(
        "================================================================",
        data?.data._id
      );
      const x = await GetJobApi(`?user=${data?.data._id}`);
      setJobs(x);
      console.log(
        "88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888",
        x
      );
    };
    featchData();
  }, []);
  return (
    <div>
      <section class="section about-section gray-bg profilebody" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="about-text go-to">
                <h3 class="dark-color">Ethio-Telecom</h3>
                <h6 class="theme-color lead">
                  A Lead Telecommunication service provide in Ethiopia
                </h6>
                <p>
                  Ethio telecom, previously known as the Ethiopian
                  Telecommunications Corporation, is an Ethiopian
                  telecommunication company serving as the
                  <mark>major internet and telephone service provider</mark>.
                  Ethio telecom is owned by the Ethiopian government and
                  maintains a monopoly over all telecommunication services in
                  Ethiopia
                </p>
                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Address</label>
                      <p>Addis Ababa, Ethiopia</p>
                    </div>
                    <div class="media">
                      <label>Established</label>
                      <p>4th april 1998</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>E-mail</label>
                      <p>firehewot@ethiotel.com</p>
                    </div>
                    <div class="media">
                      <label>Phone</label>
                      <p>820-885-3321</p>
                      <p>820-532-9737</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-avatar ">
                <img className="avatar" src={tel} />
              </div>

              <div class="socials text-center text-md-right pt-3 pt-md-0">
                <a href="#" class="social">
                  <Twitter />
                </a>
                <a href="#" class="social">
                  <Facebook />
                </a>
                <a href="#" class="social">
                  <Instagram />
                </a>
                <a href="#" class="social">
                  <LinkedIn />
                </a>
                <a href="#" class="social">
                  <Telegram />
                </a>
              </div>
            </div>
          </div>
          <div class="counter">
            <div class="row">
              <div class="col-6 col-lg-4">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="500" data-speed="500">
                    672
                  </h6>
                  <p class="m-0px font-w-600">Employees</p>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="150" data-speed="150">
                    128
                  </h6>
                  <p class="m-0px font-w-600">Years of service</p>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="850" data-speed="850">
                    43,645,923
                  </h6>
                  <p class="m-0px font-w-600">Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="m">
            <p className="postedjobs">Posted Jobs</p>
            <div className="   row">
              {jobs.map((job) => (
                <div className="border-[1px] col-6">
                  <JobCard
                    title={job.jobtitle}
                    desc={job.jobdesc}
                    type={job.jobtype}
                    salary={job.salary}
                    location={job.location}
                    responsibilities={job.responsibilities}
                    requirements={job.requirements}
                  />
                  <div className=" px-4 space-x-2 ">
                    <Link to={`/company/jobs/${job._id}`}>
                      <Button className="" variant="contained">
                        Description
                      </Button>
                    </Link>
                    <Link to={`/company/AppliedUser/${job._id}`}>
                      <Button className="" variant="contained">
                        Applied User
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div calssName="editbutton">
            <div calssName="editbutton  ">
              <NavLink to="/company/profile/edit">EDIT PROFILE</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
