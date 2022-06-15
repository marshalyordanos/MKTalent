import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./companies.css";
import { useDispatch, useSelector } from "react-redux";

const Companies = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS COMPANIES PAGE</h1>
    </div>
  );
};

export default Companies;
