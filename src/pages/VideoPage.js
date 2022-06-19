import React, { useState } from "react";
import VideoCard from "../components/fragments/VideoCard";
import { Input, Button } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import api from "../api/api";
import PostApi from "../api/postApi";
const { Search } = Input;
const VideoPage = () => {
  const light = useSelector((state) => state.mode.light);
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const x = await PostApi("?dataType=video");
      setPost(x);
      console.log(
        ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        x
      );
    };
    featchData();
  }, []);
  return (
    <Videopage1 className="">
      <div className=" border-b-[1px] mx-7 border-[#e7e7e7]">
        <p
          className={`text-lg mt-10 pb-0 border-b-[3px] w-20 border-[#1890FF]  mb-0 ${
            !light && "dark:text-white "
          }`}
        >
          All Videos
        </p>
      </div>
      <div className="vedioSearch w-60 mt-7 pb-7 mx-7">
        <form className="flex justify-between">
          <input
            className={`w-[12rem] ${
              !light && "dark:text-white dark:bg-slate-900"
            }`}
            type="text"
            placeholder="Search vedio"
          />
          <Button
            size={"4"}
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
          />
        </form>
      </div>
      <hr className="ml-7 mr-7 border-[#e7e7e7] " />
      <div className="flex flex-wrap justify-evenly">
        {posts.map((post) => (
          <VideoCard
            videoImage={post.videoImage}
            userId={post.user._id}
            video={post.video}
          />
        ))}
      </div>
    </Videopage1>
  );
};

const Videopage1 = styled.div`
  .vedioSearch input {
    border: 1px solid lightgray;
    padding: 5px;
    border-radius: 7px;
  }
  .vedioSearch input:focus {
    outline: none;
  }
  .vedioSearch button {
  }
`;

export default VideoPage;
