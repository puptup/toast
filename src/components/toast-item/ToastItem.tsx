/* eslint-disable react-hooks/exhaustive-deps */

import useAnimation from "@hooks/useAnimation";
import toastService from "@service";
import { Toast } from "@types";
import React, { forwardRef, useEffect, useState } from "react";

import { CloseButton, IconWrapper, TextWrapper, ToastWrapper } from "./styled";

interface ToastItemProps {
  toast: Toast;
}

const remove = (toast: Toast) => () => {
  toastService.removeToast(toast);
};

const ToastItem = forwardRef<HTMLDivElement, ToastItemProps>(({ toast }, ref) => {
  const {
    type,
    timeToDelete,
    title,
    gap,
    description,
    animationIn,
    animationOut,
    animationDuration,
  } = toast;

  const { keyframeIn, keyframeOut } = useAnimation(animationIn, animationOut);

  const [out, setOut] = useState(false);

  const handleOutAnimation = () => {
    setOut(true);
  };

  useEffect(() => {
    setTimeout(() => {
      handleOutAnimation();
    }, timeToDelete + animationDuration);
    setTimeout(() => {
      remove(toast)();
    }, timeToDelete + 2 * animationDuration);
  }, []);

  return (
    <div ref={ref}>
      <ToastWrapper
        animationIn={keyframeIn}
        animationOut={keyframeOut}
        animationDuration={animationDuration}
        out={out}
        variant={type}
        gap={gap}
      >
        <IconWrapper className="material-icons" variant={type}>
          info
        </IconWrapper>
        <TextWrapper>
          <p>{title}</p>
          <p>{description}</p>
        </TextWrapper>
        <CloseButton type="button" onClick={remove(toast)}>
          <IconWrapper className="material-icons" variant={type}>
            close
          </IconWrapper>
        </CloseButton>
      </ToastWrapper>
    </div>
  );
});

export default React.memo(ToastItem);
