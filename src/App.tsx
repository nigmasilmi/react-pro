import { Fragment } from "react";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";

function App() {
  return (
    <Fragment>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy initialValue={4} />
      <CounterEffect initialValue={2} />
      <CounterHook />
    </Fragment>
  );
}

export default App;
