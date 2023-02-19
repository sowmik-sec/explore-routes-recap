import React from "react";
import { useLoaderData } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const postDetail = useLoaderData();
  console.log("inside postDetails", postDetail);
  const { title, body } = postDetail;
  return (
    <div className="post-details">
      <h1>Title: {title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
