import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./singlePost.css";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import { Image } from "antd";
export default function SinglePost() {
const {data, blogposts } = useSelector((state) => state.blogPostData);

  const location = useLocation();
const path=location.pathname.split('/')[4];
const [post, setPost]=useState("");
useEffect(() => {
const getPost= async ()=>{ 
  const res =await api.get('/blogposts/'+path)
  setPost(res.data)
  console.log(res)}
  getPost();
}, [path]);
  return (
    <div className="singlePost">
      


<img
className="one_image"

src={`/assets/img/blogpost/${post.data?.photo[0]}`}
/>

             

      <h1>{post.data?.title}</h1>
      <p>{post.data?.desc}</p>
      <h2>{post.data?.user.username}</h2>
      <input type='text' disabled='disabled'></input>
    </div>
  );
}
