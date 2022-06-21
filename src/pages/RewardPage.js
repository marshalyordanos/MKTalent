import React, { useEffect, useState } from "react";
import RewardCard from "../components/fragments/RewardCard";
import styled from "styled-components";
import api from "../api/api";
import { useSelector } from "react-redux";
const RewardPage = () => {
  const [change, setChange] = useState(false);
  const [rewards, setRewards] = useState([]);
  const [userReward, setUserReward] = useState([]);

  const { data: userData } = useSelector((state) => state.userAuth);

  useEffect(() => {
    const feachData = async () => {
      const reward = await api.get("/reward");
      const x = await api.get(`/profile/filter/${userData.data._id}`);
      const y = await api.get(`/profile/${x.data.data._id}`, {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      });
      setRewards(reward.data.data);
      setUserReward(y.data.data);
      console.log(
        "55555555555555555555555555555555555555555555555555555",
        y.data.data
      );
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
        <div className=" flex flex-wrap justify-center">
          {userReward.rewards.map((reward) => (
            <RewardCard reward={reward} />
          ))}
        </div>
      ) : (
        <div className=" flex flex-wrap justify-center">
          {rewards.map((reward) => (
            <RewardCard reward={reward} />
          ))}
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
