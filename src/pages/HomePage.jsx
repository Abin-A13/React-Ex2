import React from "react";
import Comment from "../components/Comment";

const HomePage = (props) => {
  return (
    <div className="home__page">
      <h1>POSTS</h1>
      <Comment />
    </div>
  );
};

export default HomePage;
