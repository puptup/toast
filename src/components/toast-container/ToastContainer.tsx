/* eslint-disable no-plusplus */
import { AnimationINKeysType, AnimationOUTKeysType } from "@animation";
import ToastPortal from "@components/toast-portal";
import { PositionsKeysType, VariantsKeys } from "@constants";
import useToasts from "@hooks/useToasts";
import React, { FC } from "react";

import { Button, ContainerWrapper } from "./styled";

export interface ToastContainerProps {
  type: VariantsKeys;
  timeToDelete: number;
  position: PositionsKeysType;
  animationIn: AnimationINKeysType;
  animationOut: AnimationOUTKeysType;
  animationDuration: number;
}

const ToastContainer: FC<ToastContainerProps> = ({
  type,
  position,
  timeToDelete,
  animationIn,
  animationOut,
  animationDuration,
}) => {
  const { addToast } = useToasts();

  const handleToasts = () => {
    addToast({ type, timeToDelete, position, animationIn, animationOut, animationDuration });
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
