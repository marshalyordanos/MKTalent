import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reward.css";
import { useDispatch, useSelector } from "react-redux";
import RewardCard from "../../fragments/RewardCard";

const Reward = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS Reward PAGE IN ADMIN CONTROL</h1>

      {/* <RewardCard /> */}
    </div>
  );
};

export default Reward;
