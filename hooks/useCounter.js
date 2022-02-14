import { useState } from "react";

export const useCounter = (initialCounter = 10) => {
  const [counter, setCounter] = useState(initialCounter);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reload = () => {
    setCounter(initialCounter);
  };

  return {
    counter,
    increment,
    decrement,
    reload,
  };
};
