/* eslint-disable no-plusplus */
import { AnimationINKeysType, AnimationOUTKeysType } from "@animation";
import ToastPortal from "@components/toast-portal";
import { PositionsKeysType, VariantsKeysType } from "@constants";
import addToast from "@service/addToast";
import React, { FC } from "react";

import { Button, ContainerWrapper } from "./styled";

export interface ToastContainerProps {
  type: VariantsKeysType;
  timeToDelete: number;
  position: PositionsKeysType;
  animationIn: AnimationINKeysType;
  animationOut: AnimationOUTKeysType;
  animationDuration: number;
  title: string;
  description: string;
  spaceToEdge: number;
  spaceBetweenToasts: number;
}

const ToastContainer: FC<ToastContainerProps> = ({
  type,
  position,
  timeToDelete,
  animationIn,
  animationOut,
  animationDuration,
  title,
  description,
  spaceToEdge,
  spaceBetweenToasts,
}) => {
  const handleToasts = () => {
    addToast({
      type,
      timeToDelete,
      position,
      animationIn,
      animationOut,
      animationDuration,
      title,
      description,
      spaceBetweenToasts,
      spaceToEdge,
    });
  };

  return (
    <ContainerWrapper>
      <ToastPortal />
      <Button type="button" onClick={handleToasts}>
        SHOW
      </Button>
    </ContainerWrapper>
  );
};

export default ToastContainer;
