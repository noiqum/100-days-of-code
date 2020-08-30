import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPath } from "../../store/actions/path";
import Card from "../card/card";
import { AnimatePresence } from "framer-motion";
// import { record } from "../../path/path";
//style=container.scss

function Container({ getPathDB, loginStatus, user, days }) {
  const [daysArray, setDaysArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loginStatus) {
      getPathDB(user).then(() => {
        setLoading(false);
      });
    } else {
      getPathDB("default").then(() => {
        setLoading(false);
      });
    }
  }, [loginStatus]);

  return (
    <div className="day-list">
      {loading && <p>loading</p>}
      <AnimatePresence>
        {days !== [] &&
          days.map((day) => {
            return (
              <Card
                key={day.day}
                count={day.day}
                title={day.title}
                tasks={day.links}
              />
            );
          })}
      </AnimatePresence>
    </div>
  );
}

const mapState = (state) => {
  return {
    days: state.path.days,
    user: state.user.user.uid,
    loginStatus: state.user.loginStatus,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getPathDB: (user) => {
      return dispatch(getPath(user));
    },
  };
};

export default connect(mapState, mapDispatch)(Container);
