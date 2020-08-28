import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgLogo } from "../../sass/svg/100.svg";
import { connect } from "react-redux";
import { logoutHandler } from "../../store/actions/auth";
//style=navbar.scss
function Navbar({ login, user, logoutClick }) {
  const logoutHandler = () => {
    logoutClick();
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <SvgLogo />
      </div>
      <nav>
        {login ? (
          <ul className="navbar__login">
            <span>{user.displayName}</span>
            <Link onClick={logoutHandler}>
              <span>Log Out</span>
            </Link>
          </ul>
        ) : (
          <ul>
            <Link to="/signin">
              <li>Sign In</li>
            </Link>
            <Link to="/signup">
              {" "}
              <li>Sign Up</li>
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
}
const mapState = (state) => {
  return {
    login: state.user.loginStatus,
    user: state.user.user,
  };
};
const mapDispatch = (dispatch) => {
  return {
    logoutClick: () => {
      dispatch(logoutHandler());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
