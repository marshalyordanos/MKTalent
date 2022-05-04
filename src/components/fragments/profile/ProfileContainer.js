import React from "react";
import { Outlet } from "react-router-dom";

const ProfileContainer = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProfileContainer;
