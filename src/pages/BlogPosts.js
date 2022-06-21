import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/fragments/BlogCard";
import { getAllblogPost } from "../redux/blogpostReducer";
import api from "../api/api";
import { Image } from "antd";
import styled from "styled-components";
import { ButtonBase } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
const BlogPosts = () => {
  const { blogposts, loading, error } = useSelector((state) => state.blogPostData);

  const dispatch = useDispatch();
  console.log("ooooooooooooooooo", blogposts);
  useEffect(() => {
    async function fetchPost() {
      dispatch(getAllblogPost({ loading: true }));
      try {
        const { data } = await api.get("/blogposts/getallpost");
        console.log("***************************",data.data);
        console.log("***************************", data.data);
        dispatch(getAllblogPost({ loading: false, blogposts: data.data }));
      } catch (err) {
        dispatch(
          getAllblogPost({
            error: err.response && err.response.data.message,
            loading: false,
          })
        );
      }
    }
    fetchPost();
    // console.log
  }, []);
  // const openPost = ()=>navigate(`/blog/blogpost/${blogposts._id}`);
    
  
  const navigate = useNavigate();
  return (
    <div className="flex flex-row flex-wrap">
      {loading && <h1 className="text-3xl">Loading</h1>}
      {blogposts &&
        blogposts.map((post, i) => (
          <Link to={`blogpost/${post._id}`} 
          // onClick={openPost}
          >
          <BlogCard
  
      
            photo={post.photo}
            postId={post._id}
            title={post.title}
            user={post.user.username}
            desc={post.desc}
    
            key={i}
          />
          </Link>
        ))}
    </div>
  );
};

export default BlogPosts;
