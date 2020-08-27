import React from "react";
import { ReactComponent as SvgAuth } from "../../sass/svg/auth.svg";
import { useState } from "react";
import { ReactComponent as SvgGoogle } from "../../sass/svg/google.svg";
//style=signin.scss
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputHandler = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);

      default:
        break;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const googleSignIn = () => {
    console.log("gogle");
  };

  return (
    <div className="signin">
      <SvgAuth />
      <h2>Sign In</h2>

      <div className="signin__img"></div>

      <form className="signin__form" onSubmit={submitHandler}>
        <button className="signin__form__google" onClick={googleSignIn}>
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
            value={email}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="password" className="signin__form__label-password">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={inputHandler}
            className="signin__form__input-password"
            value={password}
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

export default SignIn;
