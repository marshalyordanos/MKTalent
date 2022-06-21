import React, { useEffect, useState } from "react";
import RewardCard from "../components/fragments/RewardCard";
import styled from "styled-components";
import api from "../api/api";
const RewardPage = () => {
  const [change, setChange] = useState(false);
  const [reward, setReward] = useState([]);
  useEffect(() => {
    const feachData = async () => {
      const users = await api.get("/profile");
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setReward(users.data.data);
    };
    feachData();
  }, []);
  return (
    <RewardPageStyled>
      <div>
        <div className=" flex flex-wrap justify-center" s>
          <button
            className={change ? "" : "active"}
            onClick={() => setChange(false)}
          >
            rewards
          </button>
          <button
            className={change ? "active" : ""}
            onClick={() => setChange(true)}
          >
            your rewards
          </button>
        </div>
      </div>
      {change ? (
        <h1>Food</h1>
      ) : (
        <div className=" flex flex-wrap justify-center">
          <RewardCard />
          <RewardCard />
          <RewardCard />
          <RewardCard />
          <RewardCard />
          <RewardCard />
        </div>
      )}
    </RewardPageStyled>
  );
};

const RewardPageStyled = styled.div`
  button {
    border: 1px solid lightgray;
    padding: 6px 14px;
    margin: 7px 7px;
  }
  .active {
    background-color: green;
    color: white;
  }
`;

export default RewardPage;
