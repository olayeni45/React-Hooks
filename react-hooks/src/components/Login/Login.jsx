import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import styles from "./Login.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { formActions } from "../../types";
import AuthContext from "../../store/auth-context";
import FormInput from "../UI/Input/FormInput";

const emailReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case formActions.input:
      return { value: payload, isValid: payload.includes("@") };

    case formActions.blur:
      return { value: state.value, isValid: state.value.includes("@") };

    default:
      return { value: "", isValid: false };
  }
};

const passwordReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case formActions.input:
      return { value: payload, isValid: payload.trim().length > 6 };

    case formActions.blur:
      return { value: state.value, isValid: state.value.trim().length > 6 };

    default:
      return { value: "", isValid: false };
  }
};

const Login = () => {
  const ctx = useContext(AuthContext);
  const { onLogIn } = ctx;

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsVallid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsVallid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsVallid, passwordIsValid]);

  const formInputHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        dispatchEmail({ type: formActions.input, payload: value });
        break;

      case "password":
        dispatchPassword({ type: formActions.input, payload: value });
        break;

      default:
        return;
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
    if (formIsValid) {
      onLogIn(emailState.value, passwordState.value);
    } else if (!emailIsVallid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <FormInput
          label="E-Mail"
          name="email"
          type="email"
          ref={emailInputRef}
          value={emailState.value}
          isValid={emailIsVallid}
          onChange={formInputHandler}
          onBlur={validateEmailHandler}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          ref={passwordInputRef}
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={formInputHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={styles.actions}>
          <Button type="submit" className={styles.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
