import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Form, FormGroup, Label, Input, Table, Button } from "reactstrap";
import "./reward.css";
import { useDispatch, useSelector } from "react-redux";
import RewardCard from "../../fragments/RewardCard";
import styled from "styled-components";
import Rewardpic from "../../../assets/page/reward.png";
const Reward = (props) => {
  const [urls, setUrls] = useState([]);
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);
  console.log("lllllllllllllllll", urls.length);
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
                  {urls.length !== 0 ? (
                    <img className="image" src={urls[0]} />
                  ) : (
                    <img className="image" src={Rewardpic} />
                  )}
                </div>
                <div className="contains ">
                  <Label for="profilepic" className="changephoto">
                    Update Photo
                  </Label>
                  <Input
                    onChange={(e) => {
                      setUrls([URL.createObjectURL(e.target.files[0])]);
                    }}
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
                  Add Reward
                </Button>
              </div>
            </FormGroup>
          </Form>
        </div>
        <div className="minicontainers">
          <h1>Search Reward</h1>
          <hr></hr>

          <div class="search">
            <Input
              type="text"
              class="searchTerm"
              placeholder="which Reward are you looking for?"
            />
            <button type="submit" class="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="flex row minicontainers">
          <h1>Rewards</h1>
          <hr></hr>
          <div className="rewards flex justify-between flex-wrap">
            <RewardCard
              reward={{
                price: 200000000,
                name: "Mohammed",
                image: "user-62af939ac1999b3810f26f71-1655845171169.jpeg",
              }}
            />
            <RewardCard
              reward={{
                price: 45,
                name: "Nike",
                image: "sho1.jpg",
              }}
            />
            <RewardCard
              reward={{
                price: 93,
                name: "Lether shoe",
                image: "sho2.jpg",
              }}
            />
            <RewardCard
              reward={{
                price: 45,
                name: "skechers",
                image: "sho3.jpg",
              }}
            />
            <RewardCard
              reward={{
                price: 45,
                name: "Nike",
                image: "hood1.jpg",
              }}
            />
          </div>
        </div>
      </div>
    </Rewardstyle>
  );
};
const Rewardstyle = styled.div`
  background: #f2f2f2;
  font-family: "Open Sans", sans-serif;
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

  .search {
    width: 50%;
    position: relative;
    display: flex;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid #00b4cc;
    border-right: none;
    padding: 5px;
    height: 20px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9dbfaf;
  }

  .searchTerm:focus {
    color: #00b4cc;
  }

  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid #00b4cc;
    background: #00b4cc;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }

  /*Resize the wrap to see the search bar change!*/
  .wrap {
    width: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default Reward;
