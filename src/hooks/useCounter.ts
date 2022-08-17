import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 10;

export const useCounter = ({ maxCount = 1 }) => {
  const elementToAnimate = useRef<any>(null);
  const [counter, setCounter] = useState<number>(1);
  const timeline = useRef(gsap.timeline());
  const handleClick = () => {
    setCounter((prevState) => Math.min(prevState + 1, MAXIMUM_COUNT));
  };

  useLayoutEffect(() => {
    timeline.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();

    return () => {};
  }, []);

  useEffect(() => {
    // if (counter < maxCount) return;
    timeline.current.play(0);
  }, [counter, maxCount]);
  return { counter, handleClick, elementToAnimate };
};
