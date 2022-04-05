import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import TvIcon from '@mui/icons-material/Tv';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RightSideBarUserCard from './RightSideBarUserCard';
import UserStatus from './userStatusBar';

const { Header, Sider,Footer, Content } = Layout;

const LayoutApp =()=> {
  const [collapsed,setCollapsed]=useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };

 
    return (
      <LayoutStyle>
         <Layout className=' bg-green-500' style={{minHeight:"100vh"}}>
        <Sider breakpoint="lg" style={{backgroundColor:"#F4F5F8",minHeight:"100vh"}}  trigger={null} collapsible collapsed={collapsed}>
          <div >
          <div className={`flex ${collapsed?"h-[67px]":"h-40"} justify-center items-center bg-slate-800   border-solid border-red-700 `}  >
           
            <h1 className='text-white'>Logo</h1>
          </div>
          <Menu  style={{backgroundColor:"#F4F5F8"}} mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Video
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              People
            </Menu.Item>
            <Menu.Item key="4" icon={<TvIcon/>}>
              Advert
            </Menu.Item>
            <Menu.Item key="5" icon={<FestivalOutlinedIcon />}>
              Event
            </Menu.Item>
            
            <Menu.Item key="6" icon={<WorkOutlineOutlinedIcon />}>
              
            <Link to={"ooo"}>Job</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<StickyNote2OutlinedIcon />}>
              Blog
            </Menu.Item>
            <Menu.Item key="8" icon={<EmojiEventsOutlinedIcon />}>
              Reward
            </Menu.Item>
          </Menu>
        
          </div>
          </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background p-0 m-0" >
             <div className='flex  justify-between border-solid border-blue-400 border-2'>
                 <div>
                 {collapsed?<MenuUnfoldOutlined  className=' trigger ' onClick={toggle}/>:<MenuFoldOutlined className='trigger' onClick={toggle} />}
                 
                 </div>
                 <div className='navbar-a flex  mx-8 '>
                   <NavLink  to={'/ww'}>ABOUT US</NavLink>
                   <NavLink to={'/ee'}>CONTACT</NavLink>
                   <NavLink to={'/ll'}>LOGIN</NavLink>
                   <NavLink to={'/pp'}>REGISTER</NavLink>
                   
                 </div>
                   
              </div>            
          </Header>
          <Layout>
          <Content
            className=""
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            
          </Content>
          <Sider style={{backgroundColor:"#F0F2F5"}} width={400} breakpoint="md">
           <UserStatus/>

          </Sider>
          </Layout>
          
        </Layout>
      </Layout> 
    </LayoutStyle>
    );
  
}



const LayoutStyle = styled.div`
   .navbar-a{
    
    height: 61px;
   }
   .navbar-a a{
     color: black;
     padding: 0 14px;
     border-bottom:3px solid white ;
     
   }
   .navbar-a .active{
    background-color: #E6F7FF;
     border-bottom:3px solid #1890FF ;
     
   }
   .navbar-a a:hover{
     color:#1890FF;
     
   }
   
`;


export default LayoutApp




 