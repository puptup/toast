/* eslint-disable no-plusplus */
import ToastPortal from "@components/toast-portal";
import { PositionsKeys, VariantsKeys } from "@constants";
import useToasts from "@hooks/useToasts";
import React, { FC } from "react";

import { Button, ContainerWrapper } from "./styled";

export interface ToastContainerProps {
  type: VariantsKeys;
  timeToDelete: number;
  position: PositionsKeys;
}

const ToastContainer: FC<ToastContainerProps> = ({ type, position, timeToDelete }) => {
  const { addToast } = useToasts();

  const handleToasts = () => {
    addToast({ type, timeToDelete, position });
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
