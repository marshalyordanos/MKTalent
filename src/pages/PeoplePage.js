import React, { useEffect, useState } from "react";
import PeopleSearchCard from "../components/fragments/people/PeopleSearchCard";
import VideoCard from "../components/fragments/VideoCard";
import { Input, Button } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import api from "../api/api";
import { Empty } from "antd";
const PeoplePage = () => {
  const [searchUser, setSearchUser] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const feachData = async () => {
      const users = await api.get("/profile");
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setUsers(users.data.data);
      setSearchUser(users.data.data);
    };
    feachData();
  }, []);
  const handleChange = (e) => {
    // setSearch(e.target.value);
    console.log("ddddd", e.target.value);
    console.log(users, e.target.value);
    const xx = users.filter((user) =>
      user.user.username.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    console.log("pppppp", xx);
    setSearchUser(xx);
  };
  const light = useSelector((state) => state.mode.light);
  return (
    <Videopage1 className="">
      <div className=" border-b-[1px] mx-7 border-[#e7e7e7]">
        <p
          className={`text-lg mt-10 pb-0 border-b-[3px] w-20 border-[#1890FF]  mb-0 ${
            !light && "dark:text-white "
          }`}
        >
          All Members
        </p>
      </div>
      <div className="vedioSearch w-60 mt-7 pb-7 mx-7">
        <form className="flex justify-between">
          <input
            className={`w-[12rem] ${
              !light && "dark:text-white dark:bg-slate-900"
            }`}
            onChange={handleChange}
            type="text"
            placeholder="Search Members..."
          />
          <Button
            size={"lage"}
            type="primary"
            shape="circle"
            icon={<SearchOutlined />}
          />
        </form>
      </div>
      <hr className="ml-7 mr-7 border-[#e7e7e7] " />
      <div className="self-center flex flex-wrap justify-center m-auto ">
        {searchUser ? (
          searchUser.map((user) => (
            <div className="flex flex-row">
              <PeopleSearchCard
                image={user?.profileImage}
                name={user?.user?.username}
                userId={user?.user?._id}
                follower={user.follower}
                following={user.following}
                ratingUser={user.ratingUser}
                ratingAvarage={user.ratingAvarage}
                profileId={user._id}
                rating={user.rating}
              />{" "}
            </div>
          ))
        ) : (
          <Empty />
        )}

        {/* <PeopleSearchCard/>
      <PeopleSearchCard/>
      <PeopleSearchCard/>
      <PeopleSearchCard/>
      <PeopleSearchCard/>
      <PeopleSearchCard/> */}
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
export default PeoplePage;
