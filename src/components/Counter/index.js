import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "../Icons";
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
        <PlusIcon />
      </button>
      <span className="counter__display"> {counter} </span>
      <button className="counter__button" onClick={decCounter}>
        <MinusIcon />
      </button>
    </div>
  );
};
export default Counter;
