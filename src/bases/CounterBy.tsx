import { Fragment, useState } from "react";

interface ICounterProps {
  initialValue: number;
  children?: React.ReactNode;
}

interface ICounterState {
  counterValue: number;
  clicks: number;
}

const CounterBy = ({ initialValue = 5 }: ICounterProps) => {
  const [counter, setCounter] = useState<ICounterState>({
    counterValue: initialValue,
    clicks: 0,
  });
  const handleClick = (val: number) => {
    setCounter(({ counterValue, clicks }) => ({
      counterValue: counterValue + val,
      clicks: clicks + 1,
    }));
  };
  return (
    <Fragment>
      <h1>CounterBy</h1>
      <h2>{counter.counterValue}</h2>
      <h2>{counter.clicks} clicks</h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </Fragment>
  );
};

export default CounterBy;
