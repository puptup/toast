import ToastItem from "@components/toast-item";
import { PositionsKeys } from "@constants";
import { useToastsUpdater } from "@hooks/useToastsUpdater";
import React, { FC } from "react";

import { ToastListWrapper } from "./styled";

interface Props {
  position: PositionsKeys;
}

const ToastList: FC<Props> = ({ position }) => {
  const toasts = useToastsUpdater(position);

  return (
    <ToastListWrapper position={position}>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </ToastListWrapper>
  );
};

export default ToastList;
