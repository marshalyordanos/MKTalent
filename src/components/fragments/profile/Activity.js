import React from "react";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to="/profile/sdf/activity/personal">
          {" "}
          <p>Personal</p>
        </Link>
        <hr></hr>
      </div>
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to="/profile/sdf/activity/favourites">
          {" "}
          <p>Favourites</p>
        </Link>
        <hr></hr>
      </div>
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to="/profile/sdf/activity/friends">
          {" "}
          <p>Friends</p>
        </Link>
        <hr></hr>
      </div>
    </div>
  );
};

export default Activity;
