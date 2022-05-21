import { useEffect, useState } from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import TopBar from '../../topbar/TopBar'
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  return (
    <div className="home1_blog">
    <TopBar/>
    <div className='home_con_blog'>
      <Header />
    
     
      <h1>some posts will be here</h1><Sidebar />
        </div>
     
      </div>
      

  );
}
