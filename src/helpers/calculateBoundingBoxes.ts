import { ChildrenWithRef } from "@components/animated-toast-list/AnimatedToastList";
import React from "react";

export type BoundingBoxes = { [key: string]: DOMRect };

const calculateBoundingBoxes = (children: ChildrenWithRef) => {
  const boundingBoxes: BoundingBoxes = {};

  React.Children.forEach(children, (child) => {
    if (child) {
      const domNode = child.ref.current;
      if (domNode && child.key) {
        const nodeBoundingBox = domNode.getBoundingClientRect();

        boundingBoxes[child.key] = nodeBoundingBox;
      }
    }
  });

  return boundingBoxes;
};

export default calculateBoundingBoxes;
