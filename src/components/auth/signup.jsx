import React, { useState, useEffect } from "react";
import { ReactComponent as SvgGoogle } from "../../sass/svg/google.svg";
import { ReactComponent as Spinner } from "../../sass/svg/spinner.svg";
import { connect } from "react-redux";
import { googleSign, signUpHandle } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";
import useForm from "../hooks/useForm";
import { validate } from "../utils/utils";

function SignUp({ googleLogin, loginStatus, register, registerProcess }) {
  const [login, setLogin] = useState(false);

  const signupHandler = () => {
    const { name, email, password } = values;
    const user = {
      displayName: name,
      email,
      password,
    };
    register(user);
  };

  const { values, errors, submitHandler, changeHandler } = useForm(
    signupHandler,
    validate
  );
  useEffect(() => {
    setLogin(loginStatus);
  }, [loginStatus]);

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
          <div
            className={
              errors.name ? "signup__form__name danger" : "signup__form__name"
            }
          >
            <label htmlFor="name">Display Name</label>
            <input
              name="name"
              type="text"
              placeholder="At least 3 characters long"
              onChange={changeHandler}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>
          <div
            className={
              errors.email
                ? "signup__form__email danger"
                : "signup__form__email"
            }
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={changeHandler}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>
          <div className="signup__form__password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="min 8 characters"
              onChange={changeHandler}
            />
            {errors.password && <small>{errors.password}</small>}
          </div>
          <div className="signup__form__password2">
            <label htmlFor="password2">Password Repeat</label>
            <input
              type="password"
              name="password2"
              onChange={changeHandler}
              placeholder="repeat password"
            />
            {errors.password2 && <small>{errors.password2}</small>}
          </div>

          <div className="signup__form__submit">
            <input
              type="submit"
              value="Register"
              disabled={registerProcess}
            ></input>
            {registerProcess && <Spinner />}
          </div>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.user.loginStatus,
    registerProcess: state.user.register,
  };
};
const mapDispatch = (dispatch) => {
  return {
    googleLogin: () => {
      dispatch(googleSign());
    },
    register: (user) => {
      dispatch(signUpHandle(user));
    },
  };
};

export default connect(mapState, mapDispatch)(SignUp);
