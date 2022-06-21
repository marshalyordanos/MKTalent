import React, { useEffect, useState } from "react";
import Abel from "../../assets/page/videopage/abel.mp4";
import Image from "../../assets/page/videopage/abel.jpg";
import Image2 from "../../assets/page/videopage/sec.jpg";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import { Modal, Button } from "antd";
import { useSelector } from "react-redux";
import porofileApi from "../../api/profileApi";
import api from "../../api/api";

const VideoCard = (props) => {
  const light = useSelector((state) => state.mode.light);
  const [play, setPlay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});

  const setModalVisible = () => {
    setShowModal(true);
  };
  useEffect(() => {
    const featchData = async () => {
      const y = await api.get(`/users/${props.userId}`);
      setUser(y.data.data);
      console.log(
        "//////////////////////////////////////////////////",
        y.data.data
      );
      const x = await porofileApi(props.userId);
      setProfile(x);
      return x;
    };
    featchData();
  }, []);

  return (
    <VideoCard1>
      <div className={`imgZoom  `}>
        <div onClick={setModalVisible}>
          <img
            src={`/assets/img/post/${props.videoImage}`}
            className="w-[230px] rounded-md h-[200px] object-cover  "
          />
          <IconButton sx={{ position: "absolute", top: "70px", left: "100px" }}>
            <PlayArrowIcon sx={{ fontSize: "40px", color: "#1890FF" }} />
          </IconButton>
        </div>
      </div>
      <div className="flex items-center  ">
        <img
          src={`/assets/img/profile/${profile.profileImage}`}
          className="w-[40px] m-2 h-[40px] object-cover rounded-full "
          alt=""
        />
        <p className={` m-2 text-base ${!light && "dark:text-white "}`}>
          {user.username}
        </p>
      </div>
      <div className=" absolute top-0">
        <Modal
          title="Title"
          centered
          bodyStyle={{ backgroundColor: !light && "#001529" }}
          visible={showModal}
          // onOk={() => setModalVisible(false)}
          onCancel={() => setShowModal(false)}
          okButtonProps={false}
          width={950}
          className="kkk"
          footer={[]}
        >
          <div className={`${!light && "dark:text-white dark:bg-slate-900"}`}>
            <div>
              <video width="920" height="440" controls>
                <source src={`/assets/video/${props.video}`} type="video/mp4" />
              </video>
              <div className="flex items-center  ">
                <img
                  src={`/assets/img/profile/${profile.profileImage}`}
                  className="w-[40px] m-2 h-[40px] object-cover rounded-full "
                  alt=""
                />
                <p className=" m-2 text-base">{props.video}</p>
              </div>
            </div>
            <div className=" ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              tenetur, perferendis aliquid sint iusto provident nobis laborum
              enim accusantium unde, quibusdam architecto. Excepturi explicabo
              deserunt, aliquam accusantium facere necessitatibus quos. orem
              ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              tenetur, perferendis aliquid sint iusto provident nobis laborum
              enim accusantium unde, quibusdam architecto. Excepturi explicabo
              deserunt, aliquam accusantium facere necessitatibus quos. lipsum
              dolor sit amet consectetur adipisicing elit. Ab, rerum
              perferendis. Corporis similique eos voluptas non facilis minima
              quod earum soluta, iusto obcaecati veniam magnam ullam doloremque
              explicabo deleniti natus?
            </div>
          </div>
        </Modal>
      </div>
    </VideoCard1>
  );
};

const VideoCard1 = styled.div`
  .kkk {
    background-color: red;
  }
  :hover .imgZoom img {
    transform: scale(1.5);
    transition: all 0.5s;
  }
  .imgZoom {
    width: 230px;
    position: relative;
    overflow: hidden;
    border-radius: 0.375rem;
    height: 200px;
    margin: 15px;
  }
`;

export default VideoCard;
