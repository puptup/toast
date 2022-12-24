import ToastList from "@components/toast-list/ToastList";
import { Positions, PositionsKeys } from "@constants";
import React from "react";

const ToastStack = () => {
  const positions = Object.keys(Positions) as PositionsKeys[];
  return (
    <>
      {positions.map((position) => (
        <ToastList position={position} />
      ))}
    </>
  );
};

export default ToastStack;
