import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

const App = () => {
  const [listTitle, setListTitle] = useState("My List");

  /*
  const [showParagraph, setShowParagraph] = useState(false);

  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  */

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

 // const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  console.log("APP RUNNING");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={[100, 5, 3, 1, 10, 9]} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
};

export default App;

/*
useCallback allows us to store a function across components re-executions
*/
