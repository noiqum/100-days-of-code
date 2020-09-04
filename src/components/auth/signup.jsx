import React, { useState, useEffect } from "react";
import { ReactComponent as SvgGoogle } from "../../sass/svg/google.svg";
import { connect } from "react-redux";
import { googleSign } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

function SignUp({ googleLogin, loginStatus }) {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(loginStatus);
  }, [loginStatus]);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const googleHandler = () => {
    googleLogin();
  };

  if (login) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="signup">
        <h2>Register</h2>

        <div className="signup__img">Register</div>
        <form className="signup__form" onSubmit={submitHandler}>
          <div className="signup__form__google">
            <button onClick={googleHandler}>
              <SvgGoogle />
              <span>Sign Up With Google</span>
            </button>
          </div>
          <span>Or</span>
          <div className="signup__form__name">
            <label htmlFor="name">Display Name</label>
            <input name="name" type="text" />
          </div>
          <div className="signup__form__email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="signup__form__password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="signup__form__password2">
            <label htmlFor="password2">Password Repeat</label>
            <input type="password" />
          </div>
          <div className="signup__form__submit">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return { loginStatus: state.user.loginStatus };
};
const mapDispatch = (dispatch) => {
  return {
    googleLogin: () => {
      dispatch(googleSign());
    },
  };
};

export default connect(mapState, mapDispatch)(SignUp);
