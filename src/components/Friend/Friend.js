import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, email, id, username } = friend;
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>{email}</p>
      <p>
        <small>
          userName: <Link to={`/friend/${id}`}>{username}</Link>
        </small>
      </p>
    </div>
  );
};

export default Friend;
