import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/fragments/PostCard";
import { getAllPost } from "../redux/postReducer";
import api from "../api/api";
import { Image } from "antd";
import styled from "styled-components";
import { Pagination } from "antd";
import { current } from "@reduxjs/toolkit";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const page = search.get("page");
  const limit = search.get("limit");
  const { posts, loading, error } = useSelector((state) => state.postData);
  const [data, setData] = useState(null);
  console.log("marshal ----------------- ", posts);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchPost() {
      dispatch(getAllPost({ loading: true }));
      try {
        const { data } = await api.get(
          `/posts/?page=${page || 1}&&limit=${limit || 3}`
        );
        dispatch(getAllPost({ loading: false, posts: data.data }));
        setData(data);
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
  }, [page, limit]);

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const paginationHandler = (page, pageSize) => {
    console.log(page, pageSize);
    navigate(`?page=${page}&&limit=${pageSize}`);
  };
  return (
    <div className="Posts">
      {loading && <h1 className="text-3xl">Loading</h1>}
      {posts &&
        posts.map((post, i) => (
          <PostCard
            postId={post._id}
            comments={post.comments}
            images={post.images}
            video={post.video}
            description={post.description}
            username={post.user.username}
            createdAt={post.createdAt}
            audio={post.audio}
            key={i}
          />
        ))}
      <div className=" px-10 pt-3 pb-7  flex justify-center items-center">
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          onChange={paginationHandler}
          total={data?.totalLength}
        />
      </div>
    </div>
  );
};

export default Posts;
