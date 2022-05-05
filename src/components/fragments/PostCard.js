import React from "react";
import RightSideBarUserCard from "../layout/RightSideBarUserCard";
import Postimg from "../../assets/page/profile.png";
import { useState } from "react";
import Commentlist from "./Commentlist";
import CreateComment from "./CreateComment";
import { PropaneSharp } from "@mui/icons-material";
import { Image } from "antd";
import styled from "styled-components";

const PostCard = (props) => {
  console.log("hahahahahahaha", props);
  const [comments, setComments] = useState(props.comments);
  return (
    <PostCardStyle className=" border-[1px] m-5 box-content  w-[600px] p-4 justify-start overflow-hidden">
      <RightSideBarUserCard
        username="John Doe"
        status="7 hours, 57 minutes ago"
      />
      <div className=" px-9">
        <h1 className="text-ellipsis text-sm">{props.description}</h1>
        <div className="  box-content w-[500px] overflow-hidden">
          {props.images?.length == 1 && (
            <div>
              <Image.PreviewGroup>
                <Image width={500} src={`assets/img/post/${props.images[0]}`} />
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
                      <Image width={250} src={`assets/img/post/${image}`} />
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
                      <Image src={`assets/img/post/${image}`} />
                    </div>
                  );
                })}
              </Image.PreviewGroup>
            </div>
          )}
        </div>
        <CreateComment
          postId={props.postId}
          comments={comments}
          setComments={setComments}
        />

        <div>
          <Commentlist comments={comments} />
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
`;

export default PostCard;
