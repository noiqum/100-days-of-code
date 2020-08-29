import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPath } from "../../store/actions/path";
// import { record } from "../../path/path";
//style=container.scss

function Container({ getPathDB, loginStatus, user, days }) {
  const [daysArray, setDaysArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loginStatus) {
      getPathDB(user).then(() => {
        setLoading(false);
        setDaysArray(days);
      });
    } else {
      getPathDB("default").then(() => {
        setLoading(false);
        setDaysArray(days);
      });
    }
  }, [loginStatus, days]);

  return (
    <div className="day-list">
      {loading && <p>loading</p>}
      {daysArray !== [] &&
        daysArray.map((day) => {
          return <div>{day.title}</div>;
        })}
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
