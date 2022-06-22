import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation,useParams } from "react-router";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
// import "./singlePost.css";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import { Image } from "antd";
import './blogpostdet.css'
export default function SinglePost() {
const {data, blogposts } = useSelector((state) => state.blogPostData);

  const location = useLocation();
  const id = useParams().id;
const path=location.pathname.split('/')[4];
const [post, setPost]=useState("");
const [readMore, setReadMore]=useState(0);

useEffect(() => {
const getPost= async ()=>{ 
  const res =await api.get('/blogposts/'+id)
  setPost(res.data)
  console.log(res)}
  getPost();
}, [path]);
const handlReadMore=()=>{
  setReadMore(1);
}
const handlReadMore2=()=>{
  setReadMore(0);
}
  return (
    <div className="blog_det">
      
     
<div><img
className="border-4 box-content border-red-600 one_image py-5 w-[900px] flex flex-wrap object-cover"

src={`/assets/img/blogpost/${post.data?.photo[0]}`}
/></div>


             
<div className=""> <h1>Title: {post.data?.title}</h1>
      <div className="blo_desc">{readMore==0 &&<div><p className="truncate">Description: {post.data?.desc.split('').splice(0,200).join("")}</p><button className="text-2xl" onClick={handlReadMore}>Read More...</button></div>}
      {readMore==1&&<div><p className="">Description: {post.data?.desc}</p><button className="text-2xl" onClick={handlReadMore2}>Read Less...</button></div>}
      </div>
      <h3>Author:{post.data?.user.username}</h3>
</div>
     
    </div>
  );
}
