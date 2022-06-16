import React, { useEffect } from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, dividerClasses } from "@mui/material";
import { changeLight } from "../../redux/counter/mode";
import {
  DarkMode,
  Facebook,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MKLogo from "../../assets/page/MK logo/MK logo.png";
import tel from "../../assets/page/company/ethiotel.jpg";
import Login from "../login/Login";
import Model from "../../utils/Model";
import { logout } from "../../redux/authReducer";
import "./company.css";

const Profile = (props) => {
  return (
    <div>
      <section class="section about-section gray-bg profilebody" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="about-text go-to">
                <h3 class="dark-color">Ethio-Telecom</h3>
                <h6 class="theme-color lead">
                  A Lead Telecomunication provide in Ethiopia
                </h6>
                <p>
                  Ethio telecom, previously known as the Ethiopian
                  Telecommunications Corporation, is an Ethiopian
                  telecommunication company serving as the major
                  <mark> internet and telephone service provider</mark>. Ethio
                  telecom is owned by the Ethiopian government and maintains a
                  monopoly over all telecommunication services in Ethiopia
                </p>
                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Address</label>
                      <p>California, USA</p>
                    </div>
                    <div class="media">
                      <label>Established</label>
                      <p>4th april 1998</p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>E-mail</label>
                      <p>firehewot@ethiotel.com</p>
                    </div>
                    <div class="media">
                      <label>Phone</label>
                      <p>820-885-3321</p>
                      <p>820-532-9737</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-avatar ">
                <img className="avatar" src={tel} />
              </div>

              <div class="socials text-center text-md-right pt-3 pt-md-0">
                <a href="#" class="social">
                  <Twitter />
                </a>
                <a href="#" class="social">
                  <Facebook />
                </a>
                <a href="#" class="social">
                  <Instagram />
                </a>
                <a href="#" class="social">
                  <LinkedIn />
                </a>
                <a href="#" class="social">
                  <Telegram />
                </a>
              </div>
            </div>
          </div>
          <div class="counter">
            <div class="row">
              <div class="col-6 col-lg-4">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="500" data-speed="500">
                    672
                  </h6>
                  <p class="m-0px font-w-600">Employees</p>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="150" data-speed="150">
                    128
                  </h6>
                  <p class="m-0px font-w-600">Years of service</p>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="count-data text-center">
                  <h6 class="count h2" data-to="850" data-speed="850">
                    43,645,923
                  </h6>
                  <p class="m-0px font-w-600">Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div calssName="editbutton">
            <button calssName="editbutton ">EDIT PROFILE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
