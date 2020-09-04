import React from "react";

function SignUp() {
  return (
    <div className="signup">
      <h2>Register</h2>
      <div className="signup__img">Register</div>
      <form className="signup__form">
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

export default SignUp;
