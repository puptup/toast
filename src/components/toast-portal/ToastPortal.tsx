import ErrorBoundary from "@components/error-boundary";
import ToastStack from "@components/toast-stack";
import { usePortal } from "@hooks/usePortal";
import { GlobalStyle } from "@theme";
import React, { FC } from "react";
import { createPortal } from "react-dom";

interface ToastPortalProps {}

const ToastPortal: FC<ToastPortalProps> = () => {
  const target = usePortal();

  return createPortal(
    <ErrorBoundary>
      <ToastStack />
      <GlobalStyle />
    </ErrorBoundary>,
    target
  );
};

export default React.memo(ToastPortal);
