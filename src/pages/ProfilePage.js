import {
  AssignmentIndOutlined,
  MediaBluetoothOnOutlined,
  PermIdentityOutlined,
  PermMediaOutlined,
} from "@mui/icons-material";
import { border, fontSize } from "@mui/system";
import { Col, Divider, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import CoverImg from "../assets/profile/aa.jpg";
import api from "../api/api";
import { useSelector } from "react-redux";
const style = { background: "#0092ff", padding: "10px 0" };

const ProfilePage = (props) => {
  const data = useSelector((state) => state.userAuth.data);
  const userID = useParams().id;
  const [profileUser, setProfileUser] = useState();
  const [profileData, setProfileData] = useState({});
  const [searchUser, setSearchUser] = useState([]);

  useEffect(() => {
    async function fechData() {
      const profile = await api.get(`/profile/filter/${userID}`, {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${data.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      });

      const user = await api.get(`/users/${profile.data.data.user}`);

      setProfileData(profile.data.data);
      setProfileUser(user.data.data);
      const allUserProfile = await api.get(`/profile`, {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${data.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      });
      const yy = [...allUserProfile.data.data];
      yy.sort((a, b) => {
        return b.follower.length - a.follower.length;
      });
      const zz = yy.filter((user) => user.user._id !== data.data._id);
      setSearchUser(zz.slice(0, 6));
    }
    fechData();
  }, []);
  return (
    <ProfilePageStyle className="flex flex-col">
      <Row gutter={(8, 16)}>
        <Col span={24}>
          <div className="h-[170px] lg:h-[220px]  hover:bg-purple-500 border-2">
            <img
              className=" w-[100%] h-[170px] lg:h-[220px]  object-cover"
              src={`/assets/img/profile/${profileData.coverImage}`}
              alt="ksjn"
            />
          </div>
        </Col>
      </Row>
      <div className="pic_con mt-[-70px] bg-white lg:bg-none flex-col lg:flex-row  lg:mt-0 flex z-10 ">
        <div className="pic_con__div  pl-[10%]  z-10 " offset={2}>
          <div className=" ">
            <div className="image_con h-[200px]  lg:mt-[-160px]  w-[200px] hover:bg-purple-500 ">
              <img
                className="  w-[200px] h-[200px]  object-cover"
                src={`/assets/img/profile/${profileData.profileImage}`}
                alt="ksjn"
              />
            </div>
            <h3 className="mt-2 ml-10 center">{profileUser?.username}</h3>
          </div>
        </div>
        <div>
          <div className="pic_con_data mt-[-80px]  text-balck z-50 items-center flex ">
            <h3 className="p-0 m-2   text-white">@{profileUser?.username} </h3>
            <span>Active 12 hours, 22 minutes ago </span>
          </div>
        </div>
      </div>
      <div className="toptab  z-50">
        <div className="header">
          <ul>
            <li>
              <Link to="activity/personal">
                <PermMediaOutlined sx={{ fontSize: 30 }} /> <p>Activity</p>
              </Link>
            </li>
            <li>
              <Link to="profile">
                <AssignmentIndOutlined sx={{ fontSize: 30 }} />
                <p>Profile</p>
              </Link>
            </li>{" "}
            <li>
              <Link to="friends">
                {" "}
                <PermIdentityOutlined sx={{ fontSize: 30 }} />
                <p>Friends</p>
              </Link>
            </li>
          </ul>
          {data.data._id === userID ? (
            <div className="flex">
              <div className="createPost">
                <p>
                  <Link to={"/id/createpost"}>Create a Post</Link>
                </p>
              </div>
              <div className="editprofile">
                <p>
                  <Link to={`/profile/edit/${profileData?._id}`}>
                    Edit Profile
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <Divider className="p-0 m-0 " />
      <div className=" flex flex-wrap">
        <div className="leftSideBar  h-40 w-[300px]">
          <div className="flex border-b-[1px] justify-end p-4">
            <div className=" mr-4 ">
              <h3>{profileData?.follower?.length}</h3>
              <p>Followers</p>
            </div>
            <div className="mr-4">
              <h3>{profileData?.following?.length}</h3>
              <p>Following</p>
            </div>
          </div>
          <div className=" text-center ">
            <h2 className="mt-2">Suggestion</h2>
            Marshal, [5/5/2022 12:21 AM]
            <div className="flex flex-wrap ">
              {searchUser.map((user) => (
                <div className=" border-2 m-2 w-20 h-20">
                  <a href={`/profile/${user.user._id}/activity/personal`}>
                    <img
                      className=" w-20 h-20 object-cover"
                      src={`/assets/img/profile/${user.profileImage}`}
                    />
                    <h6 className="mt-2">{user.username}</h6>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" border-l-2 p-4 border-r-2 min-w-[500px] min-h-[400px] h-auto flex-1 flex-wrap object-contain">
          <Outlet />
        </div>
        {/* <div className=" border-2 h-40 w-[300px]"></div> */}
      </div>{" "}
    </ProfilePageStyle>
  );
};

const ProfilePageStyle = styled.div`
  .car {
    /* border: 1px solid red; */
    width: 700px;
    height: 200px;
    /* overflow: hidden; */
  }
  .cat {
    width: 700px;
    height: 200px;
    object-fit: cover;
  }
  .toptab {
    /* border: 1px solid red; */
    margin-top: -70px;
    margin-left: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
    }
    li {
      margin: 0 20px;
    }
    a {
      color: #525151;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    a:hover {
      color: blue;
    }
    p {
      font-size: 18px;
    }
    .header {
      /* border: 1px solid; */
      display: flex;
      justify-content: space-between;
    }
    .createPost {
      align-self: flex-end;
      p {
        background-color: green;
        padding: 10px;
        border-radius: 7px;
        a {
          color: white;
        }
      }
    }
    .editprofile {
      align-self: flex-end;
      padding-left: 20px;
      p {
        background-color: #4646f2;
        padding: 5px;
        border-radius: 5px;
        a {
          color: white;
        }
      }
    }
  }

  @media screen and (max-width: 1021px) {
    .toptab {
      margin: 0;
    }
    .pic_con {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
      box-shadow: 4px 4px 4px lightgray;
      margin-bottom: 20px;
      .image_con {
        width: 120px;
        height: 120px;
        /* margin: auto; */
        margin-top: -50px;
      }
      .pic_con__div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      h3 {
        margin: 0;
        padding: 0;
        margin-left: 10px;
      }
      img {
        width: 120px;
        height: 120px;
        border-radius: 100px;
      }
      .pic_con_data {
        display: none;
      }
    }
    .leftSideBar {
      display: none;
    }
  }
`;

export default ProfilePage;
