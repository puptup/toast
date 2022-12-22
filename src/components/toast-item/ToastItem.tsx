/* eslint-disable react-hooks/exhaustive-deps */
import { Toast } from "@types";
import React, { FC, useEffect } from "react";

interface ToastItemProps {
  toast: Toast;
  remove: (toastID: string) => void;
}

const ToastItem: FC<ToastItemProps> = ({ toast, remove }) => {
  useEffect(() => {
    setTimeout(() => {
      remove(toast.id);
    }, toast.timeToDelete);
  }, []);

  return (
    <div>
      <p>{toast.title}</p>
      <p>{toast.description}</p>
    </div>
  );
};

export default ToastItem;
