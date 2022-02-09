import React from "react";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const { label, value, isValid, name, type, onChange, onBlur } = props;

  return (
    <div
      className={`${styles.control} ${
        isValid === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default FormInput;
