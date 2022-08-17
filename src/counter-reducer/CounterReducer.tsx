import { Fragment, useReducer } from "react";
import * as counterActions from "./actions/counter.actions";
import { ICounterState } from "./interfaces/counter.interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: ICounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(counterActions.doReset());
  };

  const increaseBy = (val: number) => {
    dispatch(counterActions.doIncreaseBy(val));
  };

  return (
    <Fragment>
      <h1>CounterReducer</h1>
      <h2> previous: {state.previous}</h2>
      <h2>current: {state.counter}</h2>
      <h2>changes: {state.changes}</h2>
      <button onClick={handleReset}>Reset</button>
      <button onClick={increaseBy.bind(null, 1)}>+1</button>
      <button onClick={increaseBy.bind(null, 5)}>+5</button>
      <button onClick={increaseBy.bind(null, 10)}>+10</button>
    </Fragment>
  );
};

export default CounterReducer;
