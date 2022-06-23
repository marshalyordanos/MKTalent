import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import ProfilePage from "../../../pages/ProfilePage";

const Profile = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <div>
      <h1>THIS IS PROFILE PAGE IN ADMIN CONTROL with PROFILPAGE</h1>
      <ProfilePage show={true} />
    </div>
  );
};

export default Profile;
