import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Form, FormGroup, Label, Input, Table, Button } from "reactstrap";
import { Modal } from "antd";
import "./reward.css";
import { useDispatch, useSelector } from "react-redux";
import RewardCard from "../../fragments/RewardCard";
import styled from "styled-components";
import Rewardpic from "../../../assets/page/reward.png";
import api from "../../../api/api";
const Reward = (props) => {
  const [urls, setUrls] = useState([]);

  const { data: userData } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const light = useSelector((state) => state.mode.light);

  const [value, setValue] = useState({
    price: "",
    name: "",
  });
  console.log("lllllllllllllllll", value);
  const [image1, setImage1] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const feachData = async () => {
      const reward = await api.get("/reward");

      setRewards(reward.data.data);
    };
    feachData();
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("price", value.price);
    formData.append("name", value.name);
    formData.append("image", image1);

    const res = await api.post(`/reward/`, formData, {
      headers: {
        "Access-Control-Allow-Origin": true,
        authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
      },
    });
    const data = {
      price: value.price,
      name: value.name,
      image: res.data.data.image,
    };
    setRewards([data, ...rewards]);
    showModal();
    setValue({ name: "", price: "" });
    setUrls([]);
    setImage1(null);

    // navigate(`/profile/${userData.data._id}/activity/personal`);
  };
  return (
    <Rewardstyle>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>Rewar is added 👍</h1>
      </Modal>
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
                      setImage1(e.target.files[0]);
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
                    name="name"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    id="rewardname"
                    placeholder="Reward Name"
                    required
                  />
                  <Label for="rewardpoint">Price</Label>
                  <Input
                    type="text"
                    name="price"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    id="rewardpoint"
                    placeholder="Reward Price"
                    required
                  />
                </div>
                <Button
                  onClick={submitHandler}
                  disabled={!value.price || !value.name || !image1}
                  className="button_login bg-success"
                  type="submit"
                >
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
          <div className="rewards flex  justify-center flex-wrap">
            {rewards.map((reward) => (
              <RewardCard reward={reward} />
            ))}
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
