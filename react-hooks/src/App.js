import React, { Fragment, useState, useEffect } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./components/hooks/use-http";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const FIREBASE_URL = process.env.REACT_APP_FIREBASE_URL;

  const requestConfig = {
    url: `${FIREBASE_URL}/tasks.json`,
  };

  const transformTasks = (taskObject) => {
    const loadedTasks = [];

    for (const taskId in taskObject) {
      loadedTasks.push({ id: taskId, text: taskObject[taskId].text });
    }
    setTasks(loadedTasks);
  };

  const {
    error,
    isLoading,
    sendRequest: fetchTasks,
  } = useHttp(requestConfig, transformTasks);

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
