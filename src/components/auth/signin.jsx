import React from "react";
import { ReactComponent as SvgAuth } from "../../sass/svg/auth.svg";
import { useState, useEffect } from "react";
import { ReactComponent as SvgGoogle } from "../../sass/svg/google.svg";
import { connect } from "react-redux";
import { googleSign, signInHandle } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

//style=signin.scss
function SignIn({ googleLogin, login, signin }) {
  const signinHandler = (e) => {
    e.preventDefault();
    signin(user);
  };
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState({});

  const changeHandler = (e) => {
    e.persist();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setLoginStatus(login);
  }, [login]);

  const googleHandler = () => {
    googleLogin();
  };
  if (loginStatus) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="signin">
        <SvgAuth />
        <h2>Sign In</h2>

        <div className="signin__img"></div>

        <form className="signin__form" onSubmit={signinHandler}>
          <button className="signin__form__google" onClick={googleHandler}>
            <SvgGoogle />
            <span>Sign In With Google</span>
          </button>
          <span>Or</span>
          <div>
            <label htmlFor="email" className="signin__form__label-email">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="signin__form__input-email"
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="signin__form__label-password">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={changeHandler}
              className="signin__form__input-password"
              required
            />
          </div>
          <div>
            <input
              type="submit"
              className="signin__form__submit"
              value="Sign In"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user, login: state.user.loginStatus };
};
const mapDispatchToProps = (dispatch) => {
  return {
    googleLogin: () => {
      dispatch(googleSign());
    },
    signin: (user) => {
      dispatch(signInHandle(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
