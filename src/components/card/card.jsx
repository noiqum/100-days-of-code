import React from "react";

function Card({ count, tasks }) {
  return (
    <div className="card">
      <div>{count}</div>
      <div>{tasks.length}</div>
      <div>task links</div>
    </div>
  );
}

export default Card;
