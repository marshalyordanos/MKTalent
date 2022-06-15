import React, { useEffect, useState } from "react";
import Profile from "../../../assets/page/profile.png";
import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { useSelector } from "react-redux";
import api from "../../../api/api";
const PeopleSearchCard = (props) => {
  const [follow, setFollow] = useState(false);
  const FGstatus = (props) => {
    return (
      <div className="self-center flex flex-column">
        <p className="self-center px-8">{props.number}</p>
        <p className="self-center">{props.label}</p>
      </div>
    );
  };

  const { data: userData } = useSelector((state) => state.userAuth);
  useEffect(() => {
    const fun = async () => {
      console.log("************************************************");

      console.log("************************************************");
    };
    fun();
  }, []);
  const followHandler = async () => {
    const x = await api.get(`/profile/filter/${userData.data._id}`);
    console.log(";;;;;;;;;;;;;;;", x.data.data);
    const y = await api.patch(`/profile/${x.data.data._id}`, {
      following: userData.data._id,
    });
  };
  return (
    <div className="flex flex-column item-center my-8 mx-12 px-4 shadow-md rounded-xl w-[250px]">
      <div className="flex flex-col self-center">
        {" "}
        <img
          src={`/assets/img/profile/${props.image}`}
          className="my-2  
     self-center bg-contain bg-center h-14 w-14 object-cover rounded-3xl"
        />
        {userData.token && (
          <div className=" mt-2">
            {follow ? (
              <button
                onClick={() => setFollow(false)}
                className=" self-center border-purple-600 box-content border-2 w-[130px] rounded-3xl h-[35px] mb-3 text-purple-600 hover:bg-purple-600 hover:text-white hover:duration-700"
              >
                unFollowing
              </button>
            ) : (
              <button
                onClick={followHandler}
                className=" self-center border-purple-600 box-content border-2 w-[130px] rounded-3xl h-[35px] mb-3 text-purple-600 hover:bg-purple-600 hover:text-white hover:duration-700"
              >
                follow
              </button>
            )}
          </div>
        )}
      </div>
      <h1 className="flex flex-column self-center">{props.name}</h1>
      <p className=" self-center">Active 1 minute ago</p>
      <div className="flex flex-rows  self-center">
        <FGstatus className="mx-4 my-8" number="0" label="Friends" />{" "}
        <FGstatus number="0" label="Likes" />
      </div>
      {userData.token && (
        <Link to={`/profile/${props.userId}/activity/personal`}>
          <button className=" self-center border-purple-600 box-content border-2 w-[200px] rounded-3xl h-[35px] mb-3 text-purple-600 hover:bg-purple-600 hover:text-white hover:duration-700">
            View Profile
          </button>
        </Link>
      )}
    </div>
  );
};

export default PeopleSearchCard;
