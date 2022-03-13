import React, { useRef } from "react";
import styles from "./TaskForm.module.css";

const TaskForm = (props) => {
  const { loading, onEnterTask } = props;

  const taskInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input type="text" ref={taskInputRef} />
      <button> {loading ? "Sending" : "Add Task"} </button>
    </form>
  );
};

export default TaskForm;
