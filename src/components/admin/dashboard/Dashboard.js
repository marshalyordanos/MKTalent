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

import { useEffect,  useMemo } from "react";
import api from "../../../api/api";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);
  const MONTHS = useMemo(()=>[   
     "January", 
  "February" ,
  "March", 
   "April",
   "May" , 
   "June"]) 
  
  // const Chart = ({ aspect, title }) => 
  //   const [data, setData] = useState(userRows);
  // const [searchUser, setSearchUser] = useState([]);
  const [users, setUsers] = useState([]);
  
    // useEffect(() => {
    //   const feachData = async () => {
    //     const users = await api.get("/profile");
    //     console.log("marshalwwwwwwwwwwwwww", users.data.data);
    //     users.data.data.map(item=>setUsers(prev=>[...prev,{name:MONTHS[item._id-1], "New User":item.createdAt}]))
    //     setSearchUser(users.data.data);
    //   };
    //   feachData();
    // }, [MONTHS]);
  return (
    <div>
         <div className="home">
      {/* <Sidebar /> */}
      <div className="homeContainer">
        {/* <Navbar />
         */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart data={users} daraKey="New User"title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
    </div>
  );
}
export default Dashboard;
