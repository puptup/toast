import ErrorBoundary from "@components/error-boundary";
import ToastList from "@components/toast-list";
import { usePortal } from "@hooks/usePortal";
import React, { FC } from "react";
import { createPortal } from "react-dom";

interface ToastProviderProps {}

const ToastProvider: FC<ToastProviderProps> = () => {
  const target = usePortal();

  return createPortal(
    <ErrorBoundary>
      <ToastList />
    </ErrorBoundary>,
    target
  );
};

export default React.memo(ToastProvider);
