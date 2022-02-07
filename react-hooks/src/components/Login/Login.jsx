import React, { useState, useReducer } from "react";
import styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { formActions } from "../../types";

const emailReducer = (state, action) => {
  const { type, payload } = action;
  if (type === formActions.input) {
    return { value: payload, isValid: payload.includes("@") };
  }
  if (type === formActions.blur) {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  const { type, payload } = action;
  if (type === formActions.input) {
    return { value: payload, isValid: payload.trim().length > 6 };
  }
  if (type === formActions.blur) {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const { onLogin } = props;

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const formInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      dispatchEmail({ type: formActions.input, payload: value });
      setFormIsValid(value.includes("@") && passwordState.isValid);
    }
    if (name === "password") {
      dispatchPassword({ type: formActions.input, payload: value });
      setFormIsValid(emailState.isValid && value.trim().length > 6);
    }
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: formActions.blur });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: formActions.blur });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={emailState.value}
            onChange={formInputHandler}
            onBlur={validateEmailHandler}
          />
        </div>

        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            value={passwordState.value}
            onChange={formInputHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
