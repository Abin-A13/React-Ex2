import React from "react";

const CommentList = (props) => {
  const { username, body, createdAt, imgUrl } = props.users;
  const createdAttime = new Date(createdAt).toLocaleDateString();
  return (
    <div className="card">
      <div className="img">
        <img src={imgUrl} alt="Not loaded" />
      </div>
      <div className="infos">
        <div className="name">{username}</div>

        <div className="comment">{body}</div>
        <div className="text">{createdAttime}</div>
      </div>
    </div>
  );
};

export default CommentList;
