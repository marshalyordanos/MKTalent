import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkMode, Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./navbardd.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLight } from "../../redux/counter/mode";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";
import { Dropdown, Menu } from "antd";
import { logout } from "../../redux/authReducer";
import porofileApi from "../../api/profileApi";
const NavbarApp = (props) => {
  const data = useSelector((state) => state.userAuth.data);
  // console.log(data, "bettty");
  const light = useSelector((state) => state.mode.light);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const feachData = async () => {
      if (data.data) {
        const prof = await porofileApi(data?.data?._id);
        setProfile(prof);
      }
    };
    feachData();
  }, []);
  const profileMenu = (
    <Menu>
      <Menu.Item key={10}>
        <NavLink to={`/profile/${profile?.user}/activity/personal`}>
          Profile
        </NavLink>
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
  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        borderBottom: "1px solid black",
        zIndex: 1,
      }}
    >
      {/* <Button  variant="primary">Button #1</Button> */}
      <Navbar
        collapseOnSelect
        bg="dark"
        className={
          light ? "navbarcon__mk" : "navbarcon__mk navbarcon__mk__mk_dark"
        }
        expand="lg"
        variant="dark"
      >
        <Container className="navbarcon__mk1">
          <NavLink to="/home">
            <Navbar.Brand>MK-Talent</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navbar__left__mk">
              {/* <Nav.Link href="#deets">
                {" "}
                <SearchIcon />{" "}
              </Nav.Link> */}
              {data?.token ? (
                <Dropdown overlay={profileMenu} placement="bottomLeft" arrow>
                  <div className="flex items-center  text-white ">
                    <p className="py-0 pl-4 pr-2 mt-[14px] ">
                      {data?.data.username}
                    </p>
                    <Avatar>M</Avatar>
                  </div>
                </Dropdown>
              ) : (
                <>
                  {" "}
                  <Nav.Link
                    onClick={props.modelOpen}
                    eventKey={2}
                    href="#memes"
                  >
                    Login
                  </Nav.Link>
                  <NavLink to={"/register"}>Register</NavLink>
                </>
              )}
              {light ? (
                <Nav.Link href="#deets">
                  {" "}
                  <Button
                    onClick={() => dispatch(changeLight())}
                    className="navbar__lightBtn"
                    style={{ width: "50px" }}
                    variant=""
                  >
                    <DarkMode style={{ color: "white" }} />{" "}
                  </Button>{" "}
                </Nav.Link>
              ) : (
                <Nav.Link href="#deets">
                  <Button
                    onClick={() => dispatch(changeLight())}
                    className="navbar__lightBtn"
                    style={{ width: "50px" }}
                    variant=""
                  >
                    <LightModeIcon style={{ color: "white" }} />{" "}
                  </Button>{" "}
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarApp;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

// // const pages = ['Products', 'Pricing', 'Blog'];
// // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [login,setLogin] = React.useState(false);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl" style={{backgroundColor:'#00C853'}}>
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//           >
//            MKTALENT
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >

//                 <MenuItem  onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">Products</Typography>
//                 </MenuItem>
//                 <MenuItem  onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">Products</Typography>
//                 </MenuItem>
//                 <MenuItem  onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">Products</Typography>
//                 </MenuItem>

//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//            MKTALENT
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

//               <Button

//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >

//               </Button>
//               <Button

//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                Products
//               </Button>
//               <Button

//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                Products
//               </Button>

//           </Box>

//           <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }  }}>

//               <Button

//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                Product
//               </Button>
//               <Button

//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                Products
//               </Button>
//               <Button

//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                Products
//               </Button>

//           </Box>

//           {/* <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >

//                 <MenuItem onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">Profile</Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">Dashboard</Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">Account</Typography>
//                 </MenuItem>
//                 <MenuItem onClick={handleCloseUserMenu}>
//                  <a href='products'> <Typography textAlign="center">Logout</Typography></a>
//                 </MenuItem>

//             </Menu>
//           </Box> */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;
