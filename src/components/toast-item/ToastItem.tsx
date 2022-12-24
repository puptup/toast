/* eslint-disable react-hooks/exhaustive-deps */
import toastService from "@service";
import { Toast } from "@types";
import React, { FC, useEffect } from "react";

import { ToastWrapper } from "./styled";

interface ToastItemProps {
  toast: Toast;
}

const remove = (toast: Toast) => () => {
  toastService.removeToast(toast);
};

const ToastItem: FC<ToastItemProps> = ({ toast }) => {
  const { type, timeToDelete, title, description } = toast;

  useEffect(() => {
    setTimeout(() => {
      remove(toast)();
    }, timeToDelete);
  }, []);

  return (
    <ToastWrapper variant={type}>
      <p>{title}</p>
      <p>{description}</p>
      <button type="button" onClick={remove(toast)}>
        close
      </button>
    </ToastWrapper>
  );
};

export default React.memo(ToastItem);
