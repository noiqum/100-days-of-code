import React from "react";
import Tasks from "./tasks";
import { motion } from "framer-motion";
import { ReactComponent as Twitter } from "../../sass/svg/twitter.svg";
//style=card.scss

function Card({ count, tasks, title, finished }) {
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
      className={finished ? "card done" : "card"}
    >
      <div className="card__count">{count}</div>
      <div className="card__title">{title}</div>
      <div className="card__task">
        {tasks.length} {tasks.length > 1 ? "tasks" : "task"}
      </div>
      {<Tasks tasks={tasks} count={count} />}
      {finished && (
        <a
          href={`https://twitter.com/intent/tweet?text=Day${count}&hashtags=100DaysOfCode`}
          target="_blank"
          className="card__tweet"
        >
          share your journey <Twitter />
        </a>
      )}
    </motion.div>
  );
}

export default Card;
