import React from "react";
import styled from "styled-components";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { Button } from "@mui/material";
import Sho from "../../assets/page/reward/sho2.jpg";
import { CurrencyExchange } from "@mui/icons-material";
const RewardCard = () => {
  return (
    <RewardCardStyle>
      <span>
        5000
        <CurrencyExchange className="coin" />
      </span>
      <div>
        <img
          src="/assets/img/post/user-62712d3873424d4f44674381-1651702975025.jpeg"
          alt="betty"
        />
        <img src={Sho} alt="" />
      </div>
      <Button variant="contained">Collect Reward</Button>
    </RewardCardStyle>
  );
};

const RewardCardStyle = styled.div`
  /* border: 1px solid red; */
  width: 300px;
  margin: 10px;
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
    width: 250px;
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
