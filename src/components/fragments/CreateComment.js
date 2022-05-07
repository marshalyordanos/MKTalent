import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Profile from "../../assets/page/profile.png";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CreateComment = ({ comments, setComments, postId }) => {
  const [comment, setComment] = useState({
    message: "",
    post: postId,
    user: { username: "Marshal", _id: "qwertyuioplkjhgfdsbn" },
  });
  console.log("3333333333333333333", comment);
  function handleComment(evt) {
    setComment({ ...comment, message: evt.target.value });
  }
  function handleCreateComment(e) {
    e.preventDefault();
    const newComment = { comment };
    setComments([comment, ...comments]);
    setComment({ ...comment, message: "" });
  }
  return (
    <div>
      <PlaceHolder className="flex flex-row">
        <img
          src={Profile}
          className="my-3 mx-3 bg-contain
    bg-center h-9 w-9
     object-cover rounded-3xl"
        />
        <form className="flex flex-row">
          <input
            type="text"
            className="comment_input my-3 rounded-xl 
    bg-slate-200 w-[300px] h-[35px]"
            placeholder="Write your comment here"
            value={comment.message}
            onChange={handleComment}
          />
          <IconButton
            type="submit"
            className="mx-2 my-3"
            onClick={(e) => handleCreateComment(e)}
          >
            <SendIcon size={"small"} />
          </IconButton>
       

        </form>
      </PlaceHolder>
      {/*  */}
      {/* <p className="my-1 mx-14">{comment}</p> */}
    </div>
  );
};

const PlaceHolder = styled.div`
  input::placeholder {
    padding-left: 10px;
  }
  input {
    padding-left: 20px;
  }
  @media screen and (max-width: 821px) {
    .comment_input {
      width: 210px;
      padding: 3px 5px;
    }
  }
`;
export default CreateComment;
