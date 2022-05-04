import {
  AssignmentIndOutlined,
  MediaBluetoothOnOutlined,
  PermIdentityOutlined,
  PermMediaOutlined,
} from "@mui/icons-material";
import { border, fontSize } from "@mui/system";
import { Col, Divider, Image, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CoverImg from "../assets/profile/aa.jpg";
import ProfileFrag from '../components/fragments/profile/ProfileFrag'
import Activity from '../components/fragments/profile/Activity'
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
      <Row>
        <Col span={5} offset={2}>
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
        </Col>
        <Col span={8}>
          <div className="mt-[-80px]  items-center flex text-white">
            <h3 className="p-0 m-2   text-white">@marsh </h3>
            <span>Active 12 hours, 22 minutes ago</span>
          </div>
        </Col>
      </Row>
      <div className="toptab">
        <ul>
          <li>
            <Link to="">
              <PermMediaOutlined sx={{ fontSize: 30 }} />
              <p>Media</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <AssignmentIndOutlined sx={{ fontSize: 30 }} />
              <p>Profile</p>
            </Link>
          </li>{" "}
          <li>
            <Link to="">
              {" "}
              <PermIdentityOutlined sx={{ fontSize: 30 }} />
              <p>Friends</p>
            </Link>
          </li>
        </ul>
      </div>
      <Divider />
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
    p {
      font-size: 18px;
    }
  }
`;

export default ProfilePage;
