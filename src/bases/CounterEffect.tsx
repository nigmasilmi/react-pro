import { Fragment, useState, useEffect } from "react";

interface ICounterProps {
  initialValue: number;
  children?: React.ReactNode;
}

const MAXIMUM_COUNT = 10;

const CounterEffect = ({ initialValue }: ICounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);
  const handleClick = () => {
    setCounter((prevState) => Math.min(prevState + 1, MAXIMUM_COUNT));
  };

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) {
      return;
    } else {
      console.log(
        "%cMaximum value reached",
        "color: pink; background-color: black;"
      );
    }
  }, [counter]);

  return (
    <Fragment>
      <h1>CounterEffect</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </Fragment>
  );
};

export default CounterEffect;
