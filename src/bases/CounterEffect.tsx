import { Fragment, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ICounterProps {
  initialValue: number;
  children?: React.ReactNode;
}

const MAXIMUM_COUNT = 10;

const CounterEffect = ({ initialValue }: ICounterProps) => {
  const counterRef = useRef<HTMLHeadingElement>(null);
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

      const timeLine = gsap.timeline();

      timeLine
        .to(counterRef.current, {
          y: -10,
          duration: 0.2,
          ease: "ease.out",
        })
        .to(counterRef.current, {
          y: 0,
          duration: 1,
          ease: "bounce.out",
        });
    }
  }, [counter]);

  return (
    <Fragment>
      <h1>CounterEffect</h1>
      <h2 ref={counterRef}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </Fragment>
  );
};

export default CounterEffect;
