import { useEffect, useState } from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import TopBar from '../../topbar/TopBar'
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  return (
    <div className="home1_blog">
    <TopBar/>
   < Outlet/>
     
      </div>
      

  );
}
