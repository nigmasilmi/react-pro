import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const useCounter = () => {
  const counterRef = useRef<HTMLHeadingElement>(null);
  const [counter, setCounter] = useState<number>(1);
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
  return { counter, handleClick, counterRef };
};
