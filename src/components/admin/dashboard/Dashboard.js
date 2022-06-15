import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS Dashboard PAGE IN ADMIN CONTROL</h1>
    </div>
  );
};

export default Dashboard;
