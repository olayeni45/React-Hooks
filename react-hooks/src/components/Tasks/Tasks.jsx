import React from "react";
import styles from "./Tasks.module.css";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";

const Tasks = (props) => {
  const { items, error, onFetch, loading } = props;

  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (error) {
    content = <button onClick={onFetch}>Try again</button>;
  }

  if (loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={styles.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
