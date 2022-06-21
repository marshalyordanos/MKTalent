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
      <div className="dd">
        <img width={400} src={Sho} alt="" />
      </div>
      <Button variant="contained">Collect Reward</Button>
    </RewardCardStyle>
  );
};

const RewardCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  border: 1px solid lightgray;
  width: 300px;
  margin: 10px;
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
