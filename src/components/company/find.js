import React, { useEffect, useState } from "react";
import MKLogo from "../../assets/page/MK logo/MK logo.png";
import "./company.css";
import "./company.css";
import styled from "styled-components";
import api from "../../api/api";
import PeopleSearchCard from "../fragments/people/PeopleSearchCard";
import { Input, Button, Empty } from "antd";

import { SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const Find = (props) => {
  const light = useSelector((state) => state.mode.light);
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState([]);

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
  const sortHandler = async (param) => {
    const users = await api.get(`/profile?${param}`);
    console.log("marshalwwwwwwwwwwwwww", users.data.data);
    setUsers(users.data.data);
    setSearchUser(users.data.data);
  };
  const follerHandler = () => {
    const yy = [...searchUser];
    console.log("ppppppppppppppppppp", yy);
    yy.sort((a, b) => {
      return b.follower.length - a.follower.length;
    });
    console.log("llllllllll", yy);
    setSearchUser(yy);
  };

  const pointHandler = () => {
    const yy = [...searchUser];
    console.log("ppppppppppppppppppp", yy);
    yy.sort((a, b) => {
      return b.point - a.point;
    });
    console.log("llllllllll", yy);
    setSearchUser(yy);
  };
  const ratingHandler = () => {
    const yy = [...searchUser];
    console.log("ppppppppppppppppppp", yy);
    yy.sort((a, b) => {
      return b.point - a.point;
    });
    console.log("llllllllll", yy);
    setSearchUser(yy);
  };
  const getAllUser = async () => {
    const users = await api.get("/profile");
    console.log("marshalwwwwwwwwwwwwww", users.data.data);
    setUsers(users.data.data);
    setSearchUser(users.data.data);
  };

  return (
    <FindStyle>
      <div>
        <h1>Filter</h1>
        <div className="flex justify-center">
          <p onClick={getAllUser} className="cat">
            All Users
          </p>
          <p onClick={follerHandler} className="cat">
            top 10 followers
          </p>
          <p onClick={ratingHandler} className="cat">
            top 10 rating
          </p>
          {/* <p className="cat">top 10 likes</p> */}
          <p onClick={pointHandler} className="cat">
            top 10 points
          </p>
        </div>
      </div>
      <div>
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
              type="text"
              onChange={handleChange}
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
                  image={user.profileImage}
                  name={user.user.username}
                  userId={user.user._id}
                  follower={user.follower}
                  following={user.following}
                  ratingUser={user.ratingUser}
                  ratingAvarage={user.ratingAvarage}
                  profileId={user._id}
                  rating={user.rating}
                  isCompany={true}
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
    </FindStyle>
  );
};

const FindStyle = styled.div`
  .cat {
    border: 1px solid lightgray;
    padding: 6px 14px;
    margin: 7px 7px;
    border-radius: 20px;
    max-width: 200px;
    min-width: 180px;
    text-align: center;
  }
`;

export default Find;
