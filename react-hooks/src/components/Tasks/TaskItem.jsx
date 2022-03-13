import React from "react";
import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const { children } = props;
  return <li className={styles.task}>{children}</li>;
};

export default TaskItem;
