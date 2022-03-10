import { useState, useEffect } from "react";

const useCounter = (positive = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (positive) {
        setCounter((prev) => prev + 1);
      } else {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [positive]);

  return counter;
};

export default useCounter;

/*
    When creating custom hooks, the function name HAS to start with the "use" keyword. 
    The use at the beginning tells React that it is a custom hook and gives it a 
    guarantee it would be used appropriately. 

    For every component, the custom hook is executed so they do not share the same state
*/
