import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Activity = () => {
  const { data: userData } = useSelector((state) => state.userAuth);
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to={`/profile/${userData.data._id}/activity/personal`}>
          {" "}
          <p>Personal</p>
        </Link>
        <hr></hr>
      </div>
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to={`/profile/${userData.data._id}/activity/favourites`}>
          {" "}
          <p>Favourites</p>
        </Link>
        <hr></hr>
      </div>
      <div className="flex flex-row flex-wrap hover:text-purple-500 hover:cursor-pointer">
        <Link to={`/profile/${userData.data._id}/activity/friends`}>
          {" "}
          <p>Friends</p>
        </Link>
        <hr></hr>
      </div>
    </div>
  );
};

export default Activity;
