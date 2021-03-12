import React, { useState } from "react";
import "./styles.scss";

const Counter = ({ stock }) => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    if (counter < stock) setCounter(counter + 1);
  };

  const decCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={incCounter}>
        +
      </button>
      <span className="counter__display"> {counter} </span>
      <button className="counter__button" onClick={decCounter}>
        -
      </button>
    </div>
  );
};
export default Counter;
