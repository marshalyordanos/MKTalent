import React from "react";
import RightSideBarUserCard from "../layout/RightSideBarUserCard";
import Postimg from "../../assets/page/profile.png";
import { useState } from "react";
import Commentlist from "./Commentlist";
import CreateComment from "./CreateComment";
import { PropaneSharp } from "@mui/icons-material";
import { Image } from "antd";
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const PostCard = (props) => {
  console.log(props.images);
  console.log("hahahahahahaha", props);
  const [comments, setComments] = useState(props.comments);
  return (
    <PostCardStyle className=" border-[1px] border-gray-200 bg-white m-5 box-content  w-[600px] p-4 justify-start overflow-hidden">
      <RightSideBarUserCard
        username="John Doe"
        status="7 hours, 57 minutes ago"
      />
      <div className=" px-9">
        <h1 className="text-ellipsis text-sm">{props.description}</h1>
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
          <FavoriteBorderIcon className="mx-2 my-4"/>
          <StarBorderIcon className="mx-2 my-4"/>

<ChatIcon className="mx-2 my-4"/>
        </div>
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
