import React, { useEffect } from "react";
import RightSideBarUserCard from "../layout/RightSideBarUserCard";
import Postimg from "../../assets/page/profile.png";
import { useState } from "react";
import Commentlist from "./Commentlist";
import CreateComment from "./CreateComment";
import { PropaneSharp } from "@mui/icons-material";
import { Image } from "antd";
import styled from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";

const PostCard = (props) => {
  const { data: userData } = useSelector((state) => state.userAuth);
  const [comments, setComments] = useState(props.comments);
  const [time, setTime] = useState("");
  useEffect(() => {
    /******************   posted date */

    const y = new Date(props.createdAt);
    const x = new Date();
    const z = x - y;
    const timeInSeconed = Math.floor(z / 1000);
    const timeInMin = Math.floor(timeInSeconed / 60);
    const timeInHours = Math.floor(timeInMin / 60);
    const timeInDay = Math.floor(timeInHours / 24);
    const timeInMonth = Math.floor(timeInDay / 30);
    const timeInYear = Math.floor(timeInDay / 365);
    console.log("zzzzzzzzzzzzzzz",z,props.createdAt)
    // let time = "";
    if (timeInSeconed < 60) {
      setTime("just now");
    } else if (timeInYear > 0) {
      setTime(`${timeInYear} year ago`);
    } else if (timeInMin < 60) {
      setTime(`${timeInMin} min ago`);
    } else if (timeInHours < 24) {
      setTime(`${timeInHours} hours ago`);
    } else if (timeInDay < 30) {
      setTime(`${timeInDay} day ago`);
    } else if (timeInMonth < 24) {
      setTime(`${timeInMonth} month ago`);
    }else{
      setTime("somting is wrong")
    }
  }, []);
  console.log("jjjjjjjjjjjjjjjjjjjjjjjj",time)
  return (
    <PostCardStyle className=" border-[1px] border-gray-200 bg-white m-5 box-content  w-[600px] p-4 justify-start overflow-hidden">
      <RightSideBarUserCard username={props.username} status={time} />
      <div className=" px-9">
        <h1 className="text-ellipsis text-sm">{props.description}</h1>
        {props.audio ? (
          <div>
            <audio controls>
              <source src={`/assets/audio/${props.audio}`} type="audio/ogg" />
              <source src={`/assets/audio/${props.audio}`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ) : (
          ""
        )}

        {props.video ? (
          <div>
            <video width="500" height="240" controls>
              <source src={`/assets/video/${props.video}`} type="video/mp4" />
              {/* <source src={`/assets/abel.mp4`} type="video/ogg" /> */}
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          ""
        )}
        <div className="image_con  box-content w-[500px]  overflow-hidden">
          {props.images?.length == 1 && (
            <div>
              <Image.PreviewGroup>
                <Image
                  className=" one_image"
                  // style={{ width: 200 }}
                  src={`/assets/img/post/${props.images[0]}`}
                />
                {/* <Image width={200} src={`assets/img/post/${image}`} /> */}
              </Image.PreviewGroup>
            </div>
          )}

          {props.images?.length == 2 && (
            <div className="two">
              <Image.PreviewGroup className>
                {props.images.map((image, i) => {
                  return (
                    <div className="two_div" key={i}>
                      <Image
                        className="two_image"
                        src={`/assets/img/post/${image}`}
                      />
                    </div>
                  );
                })}
              </Image.PreviewGroup>
            </div>
          )}
          {props.images.length == 3 && (
            <div className="three">
              <Image.PreviewGroup className>
                {props.images.map((image, i) => {
                  return (
                    <div className={`three_div${i + 1} three_div`} key={i}>
                      <Image src={`/assets/img/post/${image}`} />
                    </div>
                  );
                })}
              </Image.PreviewGroup>
            </div>
          )}
          {userData?.token && (
            <div>
              <FavoriteBorderIcon className="mx-2 my-4" />
              <StarBorderIcon className="mx-2 my-4" />
              <ChatIcon className="mx-2 my-4" />{" "}
            </div>
          )}
        </div>
        {userData?.token && (
          <div className="comment_sec">
            <CreateComment
              postId={props.postId}
              comments={comments}
              setComments={setComments}
            />

            <div>
              <Commentlist comments={comments} />
            </div>
          </div>
        )}
      </div>
    </PostCardStyle>
  );
};
const PostCardStyle = styled.div`
  .two {
    display: flex;
    width: 500px;
    justify-content: space-between;
  }
  .two_div {
    width: 240px;
    height: 350px;
    /* border: 5px solid red; */
  }
  .two_div img {
    object-fit: cover;
    /* margin: 5px; */
    height: 350px;
    height: 400px;
  }
  .three {
    display: grid;
    grid-template-rows: 353px 180px;

    /* grid-template-columns: auto auto; */
    width: 500px;
    justify-content: space-between;
  }
  .three_div {
    width: 246px;
    height: 180px;
    /* border: 5px solid red; */
  }
  .three_div img {
    height: 180px;
    width: 246px;
    object-fit: cover;
  }
  .three_div1 {
    width: 500px;
    grid-column: 1 / span 2;
    height: 300px;
  }
  .three_div1 img {
    object-fit: cover;
    width: 500px;
    height: 350px;
  }
  @media screen and (max-width: 821px) {
    width: 400px;
    .image_con {
      width: 300px;

      .one_image {
        width: 300px;
      }
      .two {
        display: flex;
        width: 300px;
        justify-content: space-between;
      }
      .tow_div {
        width: 150px;
        height: 150px;
        .two_image {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
`;

export default PostCard;
