import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Section from "../UI/Section";

const NewTask = (props) => {
  const { onAddTask } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${FIREBASE_URL}/tasks.json`, {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };
      onAddTask(createdTask);
      
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
