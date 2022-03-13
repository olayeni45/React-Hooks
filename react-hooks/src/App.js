import React, { Fragment, useState, useEffect } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${FIREBASE_URL}/tasks.json`);

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskId in data) {
        loadedTasks.push({ id: taskId, text: data[taskId].text });
      }
      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message || "Something went wrong.");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskHandler = (task) => {
    setTasks((prevTask) => prevTask.concat(task));
  };

  return (
    <Fragment>
      <NewTask onAddTask={taskHandler} />
      <Tasks
        items={tasks}
        error={error}
        onFetch={fetchTasks}
        loading={isLoading}
      />
    </Fragment>
  );
};

export default App;
