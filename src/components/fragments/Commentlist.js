import React from "react";

import Comment from "./Comment";

const Commentlist = (props) => {
  console.log("ssssssssssssssssssssss", props);
  return (
    <div>
      {props.comments.map((comment, i) => (
        <React.Fragment key={"comment-" + i}>
          <Comment
            username={comment.user.username}
            status="commented 2 minutes ago"
            message={comment.message}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Commentlist;
