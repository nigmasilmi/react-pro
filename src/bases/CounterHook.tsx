import { Fragment } from "react";
import { useCounter } from "../hooks/useCounter";

const CounterHook = () => {
  const { counter, counterRef, handleClick } = useCounter();

  return (
    <Fragment>
      <h1>CounterHook</h1>
      <h2 ref={counterRef}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </Fragment>
  );
};

export default CounterHook;
