import React, { useEffect, useState } from "react";
import MKLogo from "../../assets/page/MK logo/MK logo.png";
import "./company.css";
import "./company.css";
import styled from "styled-components";
import api from "../../api/api";
import PeopleSearchCard from "../fragments/people/PeopleSearchCard";
import { Input, Button, Empty } from "antd";
import { useSelector } from "react-redux";
const TalentList = () => {
  const light = useSelector((state) => state.mode.light);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  const usernames = users.map((user) => user.user.username);

  useEffect(() => {
    const feachData = async () => {
      const users = await api.get("/profile");
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setUsers(users.data.data);
      setSearchUser(users.data.data);
    };
    feachData();
  }, []);
  return (
    <div>
      <h1>Talent List</h1>
      <div className="self-center flex flex-wrap justify-center m-auto ">
        {searchUser ? (
          searchUser.map((user) => (
            <div className="flex flex-row">
              <PeopleSearchCard
                image={user.profileImage}
                name={user.user.username}
                userId={user.user._id}
                follower={user.follower}
                following={user.following}
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
    </div>
  );
};

export default TalentList;
