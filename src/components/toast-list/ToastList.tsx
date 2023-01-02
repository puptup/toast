import AnimatedToastList from "@components/animated-toast-list/AnimatedToastList";
import ToastItem from "@components/toast-item";
import { PositionsKeysType } from "@constants";
import { useToastsUpdater } from "@hooks/useToastsUpdater";
import React, { FC } from "react";

import { ToastListWrapper } from "./styled";

interface Props {
  position: PositionsKeysType;
}

const ToastList: FC<Props> = ({ position }) => {
  const toasts = useToastsUpdater(position);

  return (
    <ToastListWrapper position={position}>
      <AnimatedToastList>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} />
        ))}
      </AnimatedToastList>
    </ToastListWrapper>
  );
};

export default ToastList;
