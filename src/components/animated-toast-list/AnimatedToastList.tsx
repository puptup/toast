/* eslint-disable no-param-reassign */
import calculateBoundingBoxes, { BoundingBoxes } from "@helpers/calculateBoundingBoxes";
import usePreviousValue from "@hooks/usePreviousValue";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

type AnimatedToastListProps = {
  children: JSX.Element[];
};

const AnimatedToastList = ({ children }: AnimatedToastListProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [boundingBoxes, setBoundingBoxes] = useState<BoundingBoxes>({});

  const prevBoundingBoxes = usePreviousValue<BoundingBoxes>(boundingBoxes);

  useLayoutEffect(() => {
    if (ref.current) {
      const boxes = calculateBoundingBoxes(ref.current);
      setBoundingBoxes(boxes);
    }
  }, [children]);

  useEffect(() => {
    if (prevBoundingBoxes) {
      const prevBoundingBoxesLength = Object.keys(prevBoundingBoxes).length;
      if (prevBoundingBoxesLength && ref.current) {
        const container = [...ref.current.children] as HTMLDivElement[];
        container.forEach((child) => {
          const id = child.getAttribute("id")!;
          const firstBox = prevBoundingBoxes[id]?.top;
          const lastBox = boundingBoxes[id]?.top;
          const changeInY = firstBox - lastBox;
          if (changeInY) {
            requestAnimationFrame(() => {
              child.style.transform = `translateY(${changeInY}px)`;
              child.style.transition = "transform 0s";
              requestAnimationFrame(() => {
                child.style.transform = "";
                child.style.transition = "transform 300ms";
              });
            });
          }
        });
      }
    }
  }, [prevBoundingBoxes, boundingBoxes]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedToastList;
