import React from "react";
import Tasks from "./tasks";
import { motion } from "framer-motion";
//style=card.scss

function Card({ count, tasks, title }) {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 200,
    },
  };

  return (
    <motion.div
      animate="visible"
      variants={variants}
      initial="hidden"
      className="card"
    >
      <div className="card__count">{count}</div>
      <div className="card__title">{title}</div>
      <div className="card__task">
        {tasks.length} {tasks.length > 1 ? "tasks" : "task"}
      </div>
      {<Tasks tasks={tasks} count={count} />}
    </motion.div>
  );
}

export default Card;
