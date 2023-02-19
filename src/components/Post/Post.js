import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./post.css";

const Post = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${id}`);
  };
  return (
    <div className="post">
      <h1>Title: {title}</h1>
      <p>{body}</p>
      <Link to={`${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleNavigate}>Show Details2</button>
    </div>
  );
};

export default Post;
