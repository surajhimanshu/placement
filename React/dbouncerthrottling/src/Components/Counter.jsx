import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter((prev) => prev + 1);
    
  const debouncer = (fn, delay) => {
    let id;
    return () => {
      id && clearTimeout(id);
      id = setTimeout(() => fn(), delay);
    };
  };


  return (
    <>
      <h1>{counter}</h1>
      <button onClick={debouncer(handleClick, 1000)}>Increase by 1</button>
    </>
  );
};

export default Counter;
