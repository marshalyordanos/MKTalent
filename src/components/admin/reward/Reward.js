import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Table, Button } from "reactstrap";
import "./reward.css";
import { useDispatch, useSelector } from "react-redux";
import RewardCard from "../../fragments/RewardCard";
import styled from "styled-components";
const Reward = (props) => {
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  return (
    <Rewardstyle>
      <div className="maincontainer">
        <div className="minicontainers">
          <h1>Add Reward</h1>
          <hr></hr>
          <Form id="addreward flex" method="post">
            <FormGroup>
              <div className="addcontainer flex ">
                <div className="imagediv">
                  <img className="image" src={""} />
                </div>
                <div className="contains ">
                  <Label for="profilepic" className="changephoto">
                    Update Photo
                  </Label>
                  <Input
                    type="file"
                    name="profilepic"
                    accept="image/*"
                    id="profilepic"
                    style={{ display: "none" }}
                    required
                  />
                </div>

                <div className="contains felx justify-end">
                  <Label for="rewardname">Reward Name</Label>
                  <Input
                    type="text"
                    name="rewardname"
                    id="rewardname"
                    placeholder="Reward Name"
                    required
                  />
                  <Label for="rewardpoint">Price</Label>
                  <Input
                    type="text"
                    name="rewardpoint"
                    id="rewardpoint"
                    placeholder="Reward Price"
                    required
                  />
                </div>
                <Button className="button_login bg-success" type="submit">
                  Submit
                </Button>
              </div>
            </FormGroup>
          </Form>
        </div>
        <div className="minicontainers">
          <h1>Search Reward</h1>
          <hr></hr>
        </div>
        <div className="flex row minicontainers">
          <h1>Rewards</h1>
          <hr></hr>
          <RewardCard />
          <RewardCard />
          <RewardCard />
          <RewardCard />
          <RewardCard />
          <RewardCard />
        </div>
      </div>
    </Rewardstyle>
  );
};
const Rewardstyle = styled.div`
  .addcontainer {
    margin-bottom: 20px;
    align-items: center;
  }
  .minicontainers {
    background-color: #e6e6e6;
    border-radius: 10px;
    margin: 20px 0px;
    padding: 40px;
  }
`;
export default Reward;
