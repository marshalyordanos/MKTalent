import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../PostCard";
import { getAllPost } from "../../../redux/postReducer";
import api from "../../../api/api";
import { Image } from "antd";
import styled from "styled-components";
const PersonalPost = () => {
  const { posts, loading, error } = useSelector((state) => state.postData);
  const dispatch = useDispatch();
  // console.log("ooooooooooooooooo", posts);
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
  }, []);
  if (loading) {
    return <h1>Loding .....</h1>;
  }
  return (
    <div className="Posts">
      {posts.map((p) => (
        <>
          {}

          <PostCard
            images={p.images}
            comments={p.comments}
            description={p.description}
            postId={p._id}
            key={p._id}
          />
        </>
      ))}
    </div>
  );
};

export default PersonalPost;
