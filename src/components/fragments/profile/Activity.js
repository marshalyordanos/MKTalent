import React from "react";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to="/profile/sdf/media/personal">
          {" "}
          <p>Personal</p>
        </Link>
        <hr></hr>
      </div>
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to="/profile/sdf/media/favourites">
          {" "}
          <p>Favourites</p>
        </Link>
        <hr></hr>
      </div>
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to="/profile/sdf/media/friends">
          {" "}
          <p>Friends</p>
        </Link>
        <hr></hr>
      </div>
    </div>
  );
};

export default Activity;
