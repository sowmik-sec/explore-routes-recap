import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  const { name, username, email, id } = friend;
  console.log(friend);
  return (
    <div>
      <h1>Here are some details about this fake friend.</h1>
      <h1>{name}</h1>
      <p>{id}</p>
      <p>
        <small>{username}</small>
      </p>
      <p>{email}</p>
    </div>
  );
};

export default FriendDetails;
