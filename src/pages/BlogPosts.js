import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/fragments/BlogCard"
import { getAllblogPost } from "../redux/blogpostReducer";
import api from "../api/api";
import { Image } from "antd";
import styled from "styled-components";
const Posts = () => {
  const { posts, loading, error } = useSelector((state) => state.postData);
  const dispatch = useDispatch();
  console.log("ooooooooooooooooo", posts);
  useEffect(() => {
    async function fetchPost() {
      dispatch(getAllblogPost({ loading: true }));
      try {
        const { data } = await api.get("/blogposts/getallpost?limit=5");
        console.log(data.data);
        dispatch(getAllblogPost({ loading: false, posts: data.data }));
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
  return (
    <div className="Posts">
      {loading && <h1 className="text-3xl">Loading</h1>}
      {posts &&
        posts.map((post, i) => (
          <BlogCard
          photo={post.photo}
          postId={post._id}
            title={post.title}
            desc={post.desc}
            key={i}
          />
        ))}
    </div>
  );
};

export default Posts;
