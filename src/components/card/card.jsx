import React from "react";
import Tasks from "./tasks";
//style=card.scss

function Card({ count, tasks, title }) {
  return (
    <div className="card">
      <div className="card__count">{count}</div>
      <div className="card__title">{title}</div>
      <div className="card__task">
        {tasks.length} {tasks.length > 1 ? "tasks" : "task"}
      </div>
      {<Tasks tasks={tasks} />}
    </div>
  );
}

export default Card;
