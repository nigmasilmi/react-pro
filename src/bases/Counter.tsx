import { Fragment, useState } from "react";

interface ICounterProps {
  initialValue: number;
  children?: React.ReactNode;
}

const Counter = ({ initialValue }: ICounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const handleClick = () => {
    setCounter((prevState) => prevState + 1);
  };
  return (
    <Fragment>
      <h1>CounterBy</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </Fragment>
  );
};

export default Counter;
