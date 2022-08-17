import { Fragment, useReducer } from "react";

interface ICounterState {
  counter: number;
  previous: number;
  changes: number;
}

type CounterAction =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | {
      type: "reset";
    };

const INITIAL_STATE: ICounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const counterReducer = (
  state: ICounterState,
  action: CounterAction
): ICounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };

    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseBy = (val: number) => {
    dispatch({ type: "increaseBy", payload: { value: val } });
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
