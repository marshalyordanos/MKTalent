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
      <ProfilePage show={true} />
    </div>
  );
};

export default Profile;
