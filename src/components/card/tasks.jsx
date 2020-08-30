import React from "react";
import Task from "./task";
// sytle=task.scss

function Tasks({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </div>
  );
}

export default Tasks;
