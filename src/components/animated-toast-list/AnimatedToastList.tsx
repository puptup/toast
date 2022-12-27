/* eslint-disable react/jsx-no-useless-fragment */
import calculateBoundingBoxes, { BoundingBoxes } from "@helpers/calculateBoundingBoxes";
import usePrevious from "@hooks/usePrevious";
import React, { RefObject, useEffect, useLayoutEffect, useState } from "react";

type AnimatedToastListProps = {
  children: React.ReactElement[];
};

export type ChildrenWithRef = (React.ReactElement & { ref: RefObject<HTMLDivElement> })[];

const AnimatedToastList = ({ children }: AnimatedToastListProps): JSX.Element => {
  const childrenWithRef = children as unknown as ChildrenWithRef;

  const [boundingBox, setBoundingBox] = useState<BoundingBoxes>({});
  const [prevBoundingBox, setPrevBoundingBox] = useState<BoundingBoxes>({});
  const prevChildren = usePrevious(childrenWithRef);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(childrenWithRef);
    setBoundingBox(newBoundingBox);
  }, [childrenWithRef]);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(newBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const prevBoundingBoxLength = Object.keys(prevBoundingBox).length;
    if (prevBoundingBoxLength) {
      React.Children.forEach(childrenWithRef, (child) => {
        const { key, ref } = child;
        if (!key || !ref.current) return;
        const domNode = ref.current;
        const firstBox = prevBoundingBox[key];
        const lastBox = boundingBox[key];
        if (firstBox) {
          const changeInY = firstBox.top - lastBox.top;
          if (changeInY) {
            requestAnimationFrame(() => {
              domNode.style.transform = `translateY(${changeInY}px)`;
              domNode.style.transition = "transform 0s";
              requestAnimationFrame(() => {
                domNode.style.transform = "";
                domNode.style.transition = "transform 100ms";
              });
            });
          }
        }
      });
    }
  }, [boundingBox, prevBoundingBox, childrenWithRef]);

  return childrenWithRef as unknown as JSX.Element;
};

export default AnimatedToastList;
