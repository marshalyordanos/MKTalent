import React, { useState } from "react";
import styled from "styled-components";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Button } from "@mui/material";
import Sho from "../../assets/page/reward/sho2.jpg";
import { CurrencyExchange } from "@mui/icons-material";
import { useSelector } from "react-redux";
import api from "../../api/api";
import BasicModal from "../../utils/Model";
import { Modal } from "antd";
const RewardCard = (props) => {
  const { data: userData } = useSelector((state) => state.userAuth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const rewardHandler = async () => {
    const x = await api.get(`/profile/filter/${userData.data._id}`);
    console.log(
      ":::::::::::::::::::::::::::::::::::::::::::::::::KKKKKKKKKKKK",
      x.data.data
    );
    if (props.reward.price < x.data.data.point) {
      const y = await api.patch(
        `/profile/${x.data.data._id}`,
        {
          rewards: [...x.data.data.rewards, props.reward._id],
          point: x.data.data.point - props.reward.price,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": true,
            authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
          },
        }
      );
    }
    showModal();
  };
  return (
    <div>
      <div>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h2>Congratulations you have claimed your reward🎁🎁🎁</h2>
        </Modal>
      </div>
      <RewardCardStyle>
        <span>
          {props.reward.price}
          <CurrencyExchange className="coin" />
        </span>
        <div className="dd">
          <img
            width={400}
            src={`/assets/img/reward/${props.reward.image}`}
            alt=""
          />
        </div>
        <p className="rr">{props.reward.name}</p>
        <Button onClick={rewardHandler} variant="contained">
          Collect Reward
        </Button>
      </RewardCardStyle>
    </div>
  );
};

const RewardCardStyle = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid lightgray;
  width: 300px;
  margin: 10px;

  .rr {
    padding-top: 15px;
    font-size: 20px;
    text-transform: capitalize;
  }
  .dd {
    width: 295px;
  }
  span {
    display: flex;
    align-items: center;
    /* border: 1px solid green; */
    padding: 5px 20px;
    font-size: 30px;
  }
  .coin {
    color: #ffb01c;
  }

  > div {
    width: 250px;
    height: 210px;
  }
  div img {
    width: 350px;
    height: 210px;
    object-fit: cover;
  }
  button {
    padding: 10px 20px;
    margin: 10px 0;
  }
  @media only screen and (max-width: 750px) {
    > div {
      width: 330px;
      height: 280px;
    }
    div img {
      width: 330px;
      height: 280px;
      object-fit: cover;
    }
  }
`;

export default RewardCard;
