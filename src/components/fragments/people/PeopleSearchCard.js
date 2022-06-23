import React, { useEffect, useState } from "react";
import Profile from "../../../assets/page/profile.png";
import { Link } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import styled from "styled-components";
import { useSelector } from "react-redux";
import api from "../../../api/api";
import { Rate } from "antd";
const PeopleSearchCard = (props) => {
  const { data: userData } = useSelector((state) => state.userAuth);
  // const [follow, setFollow] = useState(false);
  const [showRate, setShowRate] = useState(false);
  const [rater, setRater] = useState(0);
  // const [showFollow, setShowFollow] = useState(
  //   props.follower.includes(userData.data._id)
  // );
  // console.log(
  //   "}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}",
  //   showFollow
  // );
  const FGstatus = (props) => {
    return (
      <div className="self-center flex flex-column">
        <p className="self-center px-8">{props.number}</p>
        <p className="self-center">{props.label}</p>
      </div>
    );
  };

  useEffect(() => {
    const fun = async () => {};
    fun();
  }, []);
  const followHandler = async () => {
    const x = await api.get(`/profile/filter/${userData.data._id}`);

    const y = await api.patch(
      `/profile/${x.data.data._id}`,
      {
        following: [...x.data.data.following, props.userId],
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
    const xx = await api.get(`/profile/filter/${props.userId}`);
    const yy = await api.patch(
      `/profile/${xx.data.data._id}`,
      {
        follower: [...props.follower, userData.data._id],
        point: xx.data.data.point + 0.5,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
    // setShowFollow(!showFollow);
    // setFollow(true);
    window.location.reload(false);
  };
  const unFollowHandler = async () => {
    const x = await api.get(`/profile/filter/${userData.data._id}`);

    const newData = x.data.data.following.filter((v) => v !== props.userId);
    const y = await api.patch(
      `/profile/${x.data.data._id}`,
      {
        following: newData,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
    const xx = await api.get(`/profile/filter/${props.userId}`);
    const newData2 = props.follower.filter((v) => v !== userData.data._id);

    const yy = await api.patch(
      `/profile/${xx.data.data._id}`,
      {
        follower: newData2,
        point: xx.data.data.point - 0.5,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
    // setFollow(false);
    // setShowFollow(!showFollow);
    window.location.reload(false);
  };
  const handleRating = async () => {
    const x = await api.patch(
      `/profile/${props.profileId}`,
      {
        ratingUser: [...props.ratingUser, userData.data._id],
        rating: props.rating + rater,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData?.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );
  };
  return (
    <PeoplePageStyle className="flex flex-column item-center my-8 mx-12 px-4 shadow-md rounded-xl w-[250px]">
      <div className="flex flex-col self-center">
        {" "}
        <img
          src={`/assets/img/profile/${props.image}`}
          className="my-2  
     self-center bg-contain bg-center h-14 w-14 object-cover rounded-3xl"
        />
        {userData?.token && userData?.data?.role == "talent" && (
          <div className=" mt-2">
            {props.follower.includes(userData.data._id) ? (
              <button
                onClick={unFollowHandler}
                className=" self-center border-purple-600 box-content border-2 w-[130px] rounded-3xl h-[35px] mb-3 text-purple-600 hover:bg-purple-600 hover:text-white hover:duration-700"
              >
                unfollow
              </button>
            ) : props.following.includes(userData.data._id) ? (
              <button
                onClick={followHandler}
                className=" self-center border-purple-600 box-content border-2 w-[130px] rounded-3xl h-[35px] mb-3 text-purple-600 hover:bg-purple-600 hover:text-white hover:duration-700"
              >
                follow back
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
        <FGstatus
          className="mx-4 my-8"
          number={props.follower.length}
          label="Followers"
        />{" "}
        <FGstatus number={props.following.length} label="Following" />
      </div>
      {userData?.data?.role == "talent" ? (
        <div>
          {props?.ratingUser.includes(userData.data._id) ? (
            <div className="flex flex-col items-center">
              {" "}
              <Rate allowHalf disabled defaultValue={props.ratingAvarage} />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <button className="btn" onClick={() => setShowRate(!showRate)}>
                Rate the user
              </button>
              {showRate && (
                <div className="flex flex-col items-center">
                  <Rate
                    onChange={(value) => setRater(value)}
                    allowHalf
                    defaultValue={0}
                  />
                  <button
                    onClick={handleRating}
                    className="p-2 w-16 border-[1px] rounded-md"
                  >
                    ok
                  </button>
                </div>
              )}
            </div>
          )}
          ;
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center">
            {" "}
            <Rate allowHalf disabled defaultValue={props.ratingAvarage} />
          </div>
        </div>
      )}
      {userData.token && (
        <Link
          to={
            props.isCompany
              ? `/company/${props.userId}/profile`
              : `/profile/${props.userId}/activity/personal`
          }
        >
          <button className=" self-center border-purple-600 box-content border-2 w-[200px] rounded-3xl h-[35px] mb-3 text-purple-600 hover:bg-purple-600 hover:text-white hover:duration-700">
            View Profile
          </button>
        </Link>
      )}
    </PeoplePageStyle>
  );
};

const PeoplePageStyle = styled.div`
  .btn {
    border: 1px solid lightgray;
    padding: 2px 10px;
    text-align: center;
  }
  .btn:hover {
    color: #2b99ff;
    border: 1px solid #2b99ff;
  }
`;
export default PeopleSearchCard;
