import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./report.css";
import { useDispatch, useSelector } from "react-redux";

const Report = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS Report PAGE IN ADMIN CONTROL</h1>
    </div>
  );
};

export default Report;
