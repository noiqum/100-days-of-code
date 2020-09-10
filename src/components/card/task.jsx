import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateTask, getPath } from "../../store/actions/path";

function Task({ task, loginStatus, setTask, user, count, index, getPathDB }) {
  const [link, setLink] = useState({});
  const linkRef = useRef(null);
  useEffect(() => {
    setLink(task);
  }, [task]);

  const linkHandler = () => {
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
