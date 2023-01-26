/* eslint-disable react/jsx-fragments */
import ToastList from "@components/toast-list/ToastList";
import { Positions, PositionsKeysType } from "@constants";
import React from "react";

const ToastStack = () => {
  const positions = Object.keys(Positions) as PositionsKeysType[];

  return (
    <React.Fragment>
      {positions.map((position) => (
        <ToastList key={position} position={position} />
      ))}
    </React.Fragment>
  );
};

export default ToastStack;
