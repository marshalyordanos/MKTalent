import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./admins.css";
import { useDispatch, useSelector } from "react-redux";

const Admins = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS ADMINS PAGE IN ADMIN CONTROL</h1>
    </div>
  );
};

export default Admins;
