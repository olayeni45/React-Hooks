import React, { useRef, useImperativeHandle } from "react";
import styles from "./FormInput.module.css";

const FormInput = React.forwardRef((props, ref) => {
  const { label, value, isValid, name, type, onChange, onBlur } = props;

  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${styles.control} ${isValid === false ? styles.invalid : ""}`}
    >
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        ref={inputRef}
      />
    </div>
  );
});

export default FormInput;
