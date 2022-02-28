import React, { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => !prev);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>Hello there!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
};

export default App;
