import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./talents.css";
import { useDispatch, useSelector } from "react-redux";

const Talents = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS TALENTS PAGE IN ADMIN CONTROL</h1>
    </div>
  );
};

export default Talents;
