import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { updateTask } from "../../store/actions/path";

function Task({ task, loginStatus }) {
  const [link, setLink] = useState({});
  const linkRef = useRef(null);
  useEffect(() => {
    setLink(task);
  }, [task]);

  const linkHandler = () => {
    setLink({ ...link, done: !link.done });
  };

  return (
    <div className="task">
      <a href={link.source} target="blank" key={link.source}>
        link
      </a>
      <input ref={linkRef} type="checkbox" id="link" />
      {
        //   loginStatus
        true && (
          <label
            htmlFor="link"
            className={link.done ? "task__label done" : "task__label"}
            onClick={linkHandler}
          ></label>
        )
      }
    </div>
  );
}
const mapState = (state) => {
  return {
    loginStatus: state.user.user.loginStatus,
  };
};
const mapDispatch = (dispatch) => {
  return {
    setTask: (user, day, linkIndex) => {
      dispatch(updateTask(user, day, linkIndex));
    },
  };
};

export default connect(mapState, mapDispatch)(Task);
