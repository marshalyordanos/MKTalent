import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./setting.css";
import { useDispatch, useSelector } from "react-redux";

const Setting = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS SETTING PAGE IN ADMIN CONTROL</h1>
    </div>
  );
};

export default Setting;
