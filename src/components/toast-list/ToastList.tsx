import ToastItem from "@components/toast-item";
import { ToastProviderWrapper } from "@components/toast-provider/styled";
import { useUpdatingToasts } from "@hooks/useToastsUpdater";
import toastService from "@service";
import React from "react";

const ToastList = () => {
  const toasts = useUpdatingToasts();

  const handleRemoveItem = (toastID: string) => {
    toastService.removeToast(toastID);
  };

  return (
    <ToastProviderWrapper>
      {toasts.length > 0 &&
        toasts.map((toast) => <ToastItem toast={toast} remove={handleRemoveItem} />)}
    </ToastProviderWrapper>
  );
};

export default ToastList;
