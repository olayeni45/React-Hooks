import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { type, className, onClick, disabled, children } = props;
  const classes = `${styles.button} ${className}`;

  return (
    <button
      type={type || "button"}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
