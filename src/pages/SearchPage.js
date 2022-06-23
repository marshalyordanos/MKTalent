import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import api from "../api/api";
import PeopleSearchCard from "../components/fragments/people/PeopleSearchCard";
import { Empty } from "antd";

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const username = useParams().username;
  console.log("DDDDDDDDDDDDDDDDDDDDD", username);
  useEffect(() => {
    const feachData = async () => {
      const users = await api.get(`/profile?username=${username}`);
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setUsers(users.data.data);
    };
    feachData();
  }, []);
  const light = useSelector((state) => state.mode.light);
  return (
    <div>
      {/* <PeopleSearchCard /> */}
      <div className="self-center flex flex-wrap justify-center m-auto ">
        {users.length !== 0 ? (
          users.map((user) => (
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

export default SearchPage;
