/* eslint-disable no-param-reassign */
import { PositionsKeysType } from "@constants";
import calculateBoundingBoxes, { BoundingBoxes } from "@helpers/calculateBoundingBoxes";
import usePreviousValue from "@hooks/usePreviousValue";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Wrapper } from "./styled";

type AnimatedToastListProps = {
  children: JSX.Element[];
  position: PositionsKeysType;
};

const AnimatedToastList = ({ children, position }: AnimatedToastListProps): JSX.Element => {
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
        const toasts = [...ref.current.children] as HTMLDivElement[];
        toasts.forEach((toast) => {
          const id = toast.getAttribute("id")!;
          const firstBox = prevBoundingBoxes[id]?.top;
          const lastBox = boundingBoxes[id]?.top;
          const changeInY = firstBox - lastBox;
          if (changeInY) {
            requestAnimationFrame(() => {
              toast.style.transform = `translateY(${changeInY}px)`;
              toast.style.transition = "transform 0s";
              requestAnimationFrame(() => {
                toast.style.transform = "";
                toast.style.transition = "transform 300ms";
              });
            });
          }
        });
      }
    }
  }, [prevBoundingBoxes, boundingBoxes]);

  return (
    <Wrapper position={position} ref={ref}>
      {children}
    </Wrapper>
  );
};

export default AnimatedToastList;
