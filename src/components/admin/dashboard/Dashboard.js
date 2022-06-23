import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
// import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
// import "./home.scss";
import Widget from "../widget/Widget";
import Featured from "../featured/Featured";
import Chart from "../chart/Chart";
import Table from "../table/Table";
import { userColumns, userRows } from "../datatablesource";

import { useEffect, useMemo } from "react";
import api from "../../../api/api";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);
  const MONTHS = useMemo(() => [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ]);
  const [searchUser, setSearchUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [points, setPoints] = useState([]);

  const [companys, setCompany] = useState([]);

  useEffect(() => {
    const feachData = async () => {
      const userss = await api.get("/profile");
      const user = userss.data.data.filter(
        (user) => user?.user?.role == "talent"
      );
      const company = userss.data.data.filter(
        (user) => user?.user?.role == "company"
      );

      const job = await api.get("/job/getallJob");
      const reward = await api.get("/reward");

      const f = userss.data.data.reduce((a, v) => {
        return a + v.point;
      }, 0);
      console.log("marshalwwwwwwwwwwwwww", f);
      setUsers(user);
      setCompany(company);
      setRewards(reward.data.data);
      setJobs(job.data.data);
      setPoints(f);
    };
    feachData();
  }, []);

  return (
    <div>
      <div className="home">
        {/* <Sidebar /> */}
        <div className="homeContainer">
          {/* <Navbar />
           */}
          <div className="widgets">
            <Widget num={users?.length} type="user" />
            <Widget num={companys?.length} type="company" />
            <Widget num={jobs?.length} type="job" />
            <Widget num={rewards?.length} type="reward" />
          </div>
          <div className="charts">
            <Featured point={points} />
            <Chart
              data={users}
              daraKey="New User"
              title="Last 6 Months (Revenue)"
              aspect={2 / 1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
