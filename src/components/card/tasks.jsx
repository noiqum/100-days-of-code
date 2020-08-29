import React from "react";

function Tasks({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return <div>{task}</div>;
      })}
    </div>
  );
}

export default Tasks;
