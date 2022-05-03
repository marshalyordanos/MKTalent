import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/fragments/PostCard";
import { getAllPost } from "../redux/postReducer";
import api from "../api/api";
import { Image } from "antd";
import styled from "styled-components";
const Posts = () => {
  const { posts, loading, error } = useSelector((state) => state.postData);
  const dispatch = useDispatch();
  console.log("ooooooooooooooooo", posts);
  useEffect(() => {
    async function fetchPost() {
      dispatch(getAllPost({ loading: true }));
      try {
        const { data } = await api.get("/posts/?limit=10");
        console.log(data.data);
        dispatch(getAllPost({ loading: false, posts: data.data }));
      } catch (err) {
        dispatch(
          getAllPost({
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
          <PostCard
            postId={post._id}
            comments={post.comments}
            images={post.images}
            description={post.description}
            key={i}
          />
        ))}
    </div>
  );
};

export default Posts;
