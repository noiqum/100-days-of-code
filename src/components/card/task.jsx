import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateTask, getPath } from "../../store/actions/path";
import ConfettiComponent from "../confetti/confetti";
import { AnimatePresence } from "framer-motion";

function Task({
  task,
  loginStatus,
  setTask,
  user,
  count,
  index,
  getPathDB,
  total,
}) {
  const [link, setLink] = useState({});
  const [done, setDone] = useState(false);
  const linkRef = useRef(null);
  useEffect(() => {
    setLink(task);
  }, [task]);

  const linkHandler = () => {
    if (total === index + 1) {
      if (link.done === false) {
        setDone(true);
        setInterval(() => {
          setDone(false);
        }, 6000);
      }
    }
    setLink({ ...link, done: !link.done });
    setTask(user, count, index);
    getPathDB(user);
  };

  return (
    <div className="task">
      <a href={link.source} target="blank" key={link.source}>
        link
      </a>
      <input ref={linkRef} type="checkbox" id="link" />
      {loginStatus && (
        <label
          htmlFor="link"
          className={link.done ? "task__label done" : "task__label"}
          onClick={linkHandler}
        ></label>
      )}
      <AnimatePresence>{done && <ConfettiComponent />}</AnimatePresence>
    </div>
  );
}
const mapState = (state) => {
  return {
    loginStatus: state.user.loginStatus,
    user: state.user.user.uid,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setTask: (user, day, linkIndex) => {
      dispatch(updateTask(user, day, linkIndex));
    },
    getPathDB: (user) => {
      return dispatch(getPath(user));
    },
  };
};

export default connect(mapState, mapDispatch)(Task);
