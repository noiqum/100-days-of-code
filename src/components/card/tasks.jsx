import React from "react";
import Task from "./task";
// sytle=task.scss

function Tasks({ tasks, count }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <Task key={task.index} task={task} count={count} index={index} />
        );
      })}
    </div>
  );
}

export default Tasks;
