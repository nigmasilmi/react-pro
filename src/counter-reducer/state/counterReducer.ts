import { CounterAction } from "../actions/counter.actions";
import { ICounterState } from "../interfaces/counter.interfaces";

export const counterReducer = (
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
