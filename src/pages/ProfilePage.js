import {
  AssignmentIndOutlined,
  MediaBluetoothOnOutlined,
  PermIdentityOutlined,
  PermMediaOutlined,
} from "@mui/icons-material";
import { border, fontSize } from "@mui/system";
import { Col, Divider, Image, Row } from "antd";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import CoverImg from "../assets/profile/aa.jpg";
const style = { background: "#0092ff", padding: "10px 0" };
const ProfilePage = () => {
  return (
    <ProfilePageStyle className="flex flex-col">
      <Row gutter={(8, 16)}>
        <Col span={24}>
          <div className="h-[280px] hover:bg-purple-500 border-2">
            <img
              className=" w-[100%] h-[280px]  object-cover"
              src={CoverImg}
              alt="ksjn"
            />
          </div>
        </Col>
      </Row>
      <div className="flex z-10 ">
        <div className="pl-[10%] z-10 " offset={2}>
          <div className=" ">
            <div className="h-[200px] mt-[-160px]  w-[200px] hover:bg-purple-500 border-2">
              <img
                className="  w-[200px] h-[200px]  object-cover"
                src={CoverImg}
                alt="ksjn"
              />
            </div>
            <h3 className="mt-2 ml-10 center">Marshal</h3>
          </div>
        </div>
        <div>
          <div className="mt-[-80px] z-50 items-center flex text-white">
            <h3 className="p-0 m-2   text-white">@marsh </h3>
            <span>Active 12 hours, 22 minutes ago </span>
          </div>
        </div>
      </div>
      <div className="toptab z-50">
        <ul>
          <li>
            <Link to="media/personal">
              <PermMediaOutlined sx={{ fontSize: 30 }} /> <p>Media</p>
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
      </div>
      <Divider className="p-0 m-0 " />
      {/* <Row>
        <Col span={{ xs: 2, sm: 3, md: 0, lg: 0 }}>
          <div className="h-40 border-r-[1px] border-x-neutral-300 ">
            <Row>
              <Col offset={4} span={19}>
                <div className="">
                  <Row>
                    <Col span={12}>
                      <div className="border-2">
                        <h3>10</h3>
                        <p>Friends</p>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="border-2">
                        <h3>45</h3>
                        <p>like</p>
                      </div>
                    </Col>
                    <Divider />
                    <Col span={24}></Col>
                    <Col span={12}>
                      <div className="border-2 w-[100px] h-[140px]"></div>
                    </Col>
                    <Col span={12}>
                      <div className="border-2 w-[100px] h-[140px]"></div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={11}>
          <div className=""></div>
        </Col>
        <Col span={7}>
          <div className="h-40  border-l-[1px] border-x-neutral-300 "></div>
        </Col>
      </Row> */}
      <div className="flex flex-wrap">
        <div className="  h-40 w-[300px]">
          <div className="flex border-b-[1px] justify-end p-4">
            <div className=" mr-4 ">
              <h3>10</h3>
              <p>Friends</p>
            </div>
            <div className="mr-4">
              <h3>10</h3>
              <p>Likes</p>
            </div>
          </div>
          <div className=" text-center ">
            <h2 className="mt-2">Suggestion</h2>
            <div className="flex flex-wrap ">
              {Array(5)
                .fill(2)
                .map(() => (
                  <div className=" border-2 m-2 w-20 h-20"></div>
                ))}
            </div>
          </div>
        </div>
        <div className=" border-l-2 p-4 border-r-2 min-w-[500px] h-[500px] flex-1">
          <Outlet />
        </div>
        {/* <div className=" border-2 h-40 w-[300px]"></div> */}
      </div>
    </ProfilePageStyle>
  );
};

const ProfilePageStyle = styled.div`
  .car {
    border: 1px solid red;
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
    margin-top: -70px;
    margin-left: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
`;

export default ProfilePage;
