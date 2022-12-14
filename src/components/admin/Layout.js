import React, { useEffect } from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  UserAddOutlined,
  TeamOutlined,
  FileTextOutlined,
  BankOutlined,
} from "@ant-design/icons";
import ChatIcon from "@mui/icons-material/Chat";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { changeLight } from "../../redux/counter/mode";
import { DarkMode } from "@mui/icons-material";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MKLogo from "../../assets/page/MK logo/MK logo.png";
import Login from "../login/Login";
import Model from "../../utils/Model";
import { logout } from "../../redux/authReducer";
import "./admin.css";
const { Header, Sider, Footer, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key={13}>
      <NavLink to={"/ll"}>LOGIN</NavLink>
    </Menu.Item>
    <Menu.Item key={14}>
      <NavLink to={"/pp"}>REGISTER</NavLink>
    </Menu.Item>
  </Menu>
);

const CompanyLayout = (props) => {
  const data = useSelector((state) => state.userAuth.data);
  console.log("company company ", data);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const light = useSelector((state) => state.mode.light);
  const [showLogin, setShowLogin] = React.useState(false);
  const handleShowLoginOpen = () => setShowLogin(true);
  const handleShowLoginClose = () => setShowLogin(false);
  const profileMenu = (
    <Menu>
      <Menu.Item key={10}>
        <NavLink to={"/admin/profile"}>Profile</NavLink>
      </Menu.Item>
      <Menu.Item key={12}>
        <NavLink
          onClick={() => {
            dispatch(logout());
          }}
          to={"#logout"}
        >
          Logout
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [windowWidth]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <LayoutStyle>
      <Model show={showLogin} onClosed={handleShowLoginClose}>
        <Login click={handleShowLoginClose} />
      </Model>

      <Layout className=" bg-green-500" style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          width={300}
          style={{
            backgroundColor: light ? "#F0F2F5" : "#001529",
            borderRight: !light && "1px solid #00417e",
            minHeight: "100vh",
            position: "fixed",
            zIndex: 101,
          }}
          trigger={null}
          collapsible
          collapsed={windowWidth < 1370 ? true : collapsed}
        >
          <div>
            <div
              className={`flex ${
                collapsed || windowWidth < 1370 ? "h-[67px]" : "h-60"
              } justify-center items-center bg-[#001529]   border-solid border-red-700 `}
            >
              <NavLink to={"/home"}>
                <img src={MKLogo} alt="MK Logo" />
              </NavLink>
            </div>
            <Menu
              theme={!light && "dark"}
              style={{ backgroundColor: light && "#F0F2F5" }}
              mode="inline"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to={"/admin/dashboard"}>Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to={"/admin/talents"}>Talents</Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<BankOutlined />}>
                <Link to={"/admin/companies"}>Companies</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to={"/admin/reward"}>Reward</Link>
              </Menu.Item>

              <Menu.Item key="7" icon={<SettingOutlined />}>
                <Link to={"/admin/company/register"}>Register Company</Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<UserAddOutlined />}>
                <Link to={`/admin/profile/${data?.data._id}`}>profile</Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<ChatIcon />}>
                <Link to={"/admin/chat"}>Chat</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout
          className="site-layout"
          style={{ marginLeft: windowWidth < 1370 || collapsed ? 80 : 300 }}
        >
          <Header
            style={{
              backgroundColor: !light && "#001529",
              borderBottom: !light && "1px solid #00417e",
              position: "sticky",
              top: 0,
              zIndex: 100,
            }}
            className="site-layout-background p-0 m-0"
          >
            <div className="flex  justify-between ">
              <div className="flex items-center">
                {windowWidth < 1370 ? (
                  ""
                ) : collapsed ? (
                  <MenuUnfoldOutlined
                    style={{
                      color: !light && "white",
                      padding: " 0 24px",
                      fontSize: "18px",
                      lineHeight: "64px",
                      cursor: "pointer",
                      transition: "color 0.3s",
                    }}
                    className="  "
                    onClick={toggle}
                  />
                ) : (
                  <MenuFoldOutlined
                    style={{
                      color: !light && "white",
                      padding: " 0 24px",
                      fontSize: "18px",
                      lineHeight: "64px",
                      cursor: "pointer",
                      transition: "color 0.3s",
                    }}
                    className="trigger"
                    onClick={toggle}
                  />
                )}
                <label className="flex ml-8  justify-center items-center">
                  <SearchIcon sx={{ color: !light && "white" }} />{" "}
                  <input
                    type="text"
                    placeholder="Search..."
                    className={`self-center h-7 focus:outline-none ${
                      !light && "bg-[#001529]  text-white"
                    }`}
                  />
                </label>
              </div>
              <div
                className={`${
                  light ? "navbar-a" : "navbar-a dark__navbar_a"
                } flex items-center  mx-8 `}
              >
                {windowWidth > 845 ? (
                  <div className="flex items-center mx-8">
                    {data?.token ? (
                      <Dropdown
                        overlay={profileMenu}
                        placement="bottomLeft"
                        arrow
                      >
                        <div className="flex items-center   ">
                          <p className="py-0 pl-4 pr-2 mt-[14px] ">
                            {data?.data.username}
                          </p>

                          <Avatar>M</Avatar>
                        </div>
                      </Dropdown>
                    ) : (
                      <span>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={handleShowLoginOpen}
                        >
                          LOGIN
                        </span>
                        <NavLink to={"/register"}>REGISTER</NavLink>
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="self-center flex items-center mx-5">
                    {data?.token && (
                      <Dropdown overlay={menu} placement="bottomLeft" arrow>
                        <div className="flex items-center  px-4  ">
                          <p className="py-0 pl-4 pr-2 mt-[14px] ">
                            {data?.data.username}
                          </p>

                          <Avatar>M</Avatar>
                        </div>
                      </Dropdown>
                    )}
                    <Dropdown
                      overlay={menu}
                      placement="bottomLeft"
                      arrow={{ pointAtCenter: true }}
                    >
                      <MenuIcon
                        sx={{ fontSize: "30px" }}
                        style={{ color: !light && "white" }}
                      />
                    </Dropdown>
                  </div>
                )}
                <div></div>
                {light ? (
                  <Button
                    onClick={() => dispatch(changeLight())}
                    style={{ width: "50px", backgroundColor: "#1E293B" }}
                    variant=""
                  >
                    <DarkMode style={{ color: "white" }} />{" "}
                  </Button>
                ) : (
                  <Button
                    onClick={() => dispatch(changeLight())}
                    style={{ width: "50px", backgroundColor: "#1E293B" }}
                    variant=""
                  >
                    <LightModeIcon style={{ color: "white" }} />{" "}
                  </Button>
                )}
              </div>
            </div>
          </Header>

          <Layout>
            <Content
              className={`${!light ? "bg-[#001529]" : "bg-[#FAFAFA]"}`}
              style={{
                padding: "0 16px",
                minHeight: 280,
              }}
            >
              <div className="Layoutapp__content">
                <div
                  className={`flex-grow border-solid ${
                    props.sidebar && "flex flex-1 justify-center"
                  } border-r-[1px] border-[#d2d2d2] `}
                >
                  {/* <VideoPage/> */}
                  {/* <Posts/> */}

                  {props.children}
                </div>
                {props.sidebar && (
                  <>
                    {windowWidth < 1200 ? (
                      ""
                    ) : (
                      <div className="px-10 h-[88vh] sticky top-20 ">
                        {/* <UserStatus /> */}
                      </div>
                    )}
                  </>
                )}
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </LayoutStyle>
  );
};

CompanyLayout.defaultProps = {
  sidebar: true,
};

const LayoutStyle = styled.div`
  * {
    transition: all 0.1s;
  }
  .Layoutapp__content {
    display: flex;
    justify-content: center;
  }
  .navbar-a {
    height: 61px;
  }
  .navbar-a a {
    color: black;
    padding: 0 14px;
    border-bottom: 3px solid white;
  }
  .dark__navbar_a a {
    color: white;
    border-bottom: 3px solid #001529;
  }

  .navbar-a .active {
    background-color: #e6f7ff;
    border-bottom: 3px solid #1890ff;
  }
  .navbar-a a:hover {
    color: #1890ff;
  }
  .dark__navbar_a .active {
    background-color: #1890ff;
  }
  .dark__navbar_a .active:hover {
    color: white;
  }

  @media screen and (max-width: 1200px) {
    .Layoutapp__content {
      justify-content: center;
    }
  }
  @media screen and (max-width: 1200px) {
    .Layoutapp__content {
      justify-content: center;
    }
  }
`;

export default CompanyLayout;
