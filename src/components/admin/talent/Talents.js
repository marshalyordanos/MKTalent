import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./talents.css";
import { useDispatch, useSelector } from "react-redux";
import Datatable from '../datatable/Datatable'
const Talents = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <Datatable/>
    </div>
  );
};

export default Talents;
