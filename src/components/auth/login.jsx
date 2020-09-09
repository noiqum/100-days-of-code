import React from "react";
import useForm from "../hooks/useForm";
import { validate } from "../utils/utils";

function Login() {
  const logy = () => {
    console.table(values);
  };
  const { values, errors, submitHandler, changeHandler } = useForm(
    logy,
    validate
  );

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="email">email</label>
      <input
        type="email"
        name="email"
        value={values.email || ""}
        onChange={changeHandler}
      ></input>
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        value={values.password || ""}
        onChange={changeHandler}
      />
      {errors.password ? (
        <p>{errors.password}</p>
      ) : (
        <small>
          must contain 8 characters and at least one number, one letter and one
          unique character
        </small>
      )}
      <input type="submit" value="submit" />
    </form>
  );
}

export default Login;
