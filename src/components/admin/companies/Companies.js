import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./companies.css";
import { useDispatch, useSelector } from "react-redux";
import Datatable from '../datatable/Datatablecompany'
const Companies = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
   <Datatable/>
    </div>
  );
};

export default Companies;
