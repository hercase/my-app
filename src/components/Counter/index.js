import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

import { PlusIcon, MinusIcon } from "../Icons";
import "./styles.scss";

const Counter = ({ stock }) => {
  const { state, setState } = useContext(AppContext);

  const { counter } = state;

  const incCounter = () => {
    if (counter < stock) setState({ ...state, counter: counter + 1 });
  };

  const decCounter = () => {
    if (counter > 0) setState({ ...state, counter: counter - 1 });
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={() => incCounter()}>
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
