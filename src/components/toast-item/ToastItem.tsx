/* eslint-disable react-hooks/exhaustive-deps */
import useAnimation from "@hooks/useAnimation";
import toastService from "@service";
import { Toast } from "@types";
import React, { FC, useEffect, useLayoutEffect, useState } from "react";

import { ToastWrapper } from "./styled";

interface ToastItemProps {
  toast: Toast;
}

const remove = (toast: Toast) => () => {
  toastService.removeToast(toast);
};

const ToastItem: FC<ToastItemProps> = ({ toast }) => {
  const { type, timeToDelete, title, gap, description, animationIn, animationOut } = toast;
  const duration = 400;
  const { keyframeIn, keyframeOut } = useAnimation(animationIn, animationOut);

  const [out, setOut] = useState(false);
  const handleOutAnimation = () => {
    setOut(true);
  };

  useEffect(() => {
    setTimeout(() => {
      handleOutAnimation();
    }, timeToDelete + duration);
    setTimeout(() => {
      remove(toast)();
    }, timeToDelete + 2 * duration);
  }, []);

  useLayoutEffect(() => {}, []);

  return (
    <ToastWrapper
      animationIn={keyframeIn}
      animationOut={keyframeOut}
      animationDuration={duration}
      out={out}
      variant={type}
      gap={gap}
    >
      <p>{title}</p>
      <p>{description}</p>{" "}
      <button type="button" onClick={remove(toast)}>
        close
      </button>
    </ToastWrapper>
  );
};

export default React.memo(ToastItem);
