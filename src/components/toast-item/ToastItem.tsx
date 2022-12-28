/* eslint-disable react-hooks/exhaustive-deps */

import { IconsNamesByWariant } from "@constants";
import useAnimation from "@hooks/useAnimation";
import { DispatchEvent } from "@service/eventBus";
import Events from "@service/events";
import { Toast } from "@types";
import React, { forwardRef, useEffect, useState } from "react";

import { CloseButton, IconWrapper, TextWrapper, ToastWrapper } from "./styled";

export interface ToastItemProps {
  toast: Toast;
}

const remove = (toast: Toast) => {
  DispatchEvent<Toast>(Events.DeleteToast(toast.position), toast);
};

const ToastItem = forwardRef<HTMLDivElement, ToastItemProps>(({ toast }, ref) => {
  const {
    type,
    timeToDelete,
    title,
    spaceToEdge,
    spaceBetweenToasts,
    description,
    animationIn,
    animationOut,
    animationDuration,
  } = toast;

  const { keyframeIn, keyframeOut } = useAnimation(animationIn, animationOut);

  const [out, setOut] = useState(false);

  const handleOutAnimationAndRemove = () => {
    setOut(true);
    setTimeout(() => {
      remove(toast);
    }, animationDuration / 2);
  };

  useEffect(() => {
    setTimeout(() => {
      handleOutAnimationAndRemove();
    }, timeToDelete + animationDuration);
  }, []);

  const iconName = IconsNamesByWariant[type];

  return (
    <div ref={ref}>
      <ToastWrapper
        animationIn={keyframeIn}
        animationOut={keyframeOut}
        animationDuration={animationDuration}
        out={out}
        variant={type}
        spaceToEdge={spaceToEdge}
        spaceBetweenToasts={spaceBetweenToasts}
      >
        <IconWrapper className="material-icons" variant={type}>
          {iconName}
        </IconWrapper>
        <TextWrapper>
          <p>{title}</p>
          <p>{description}</p>
        </TextWrapper>
        <CloseButton type="button" onClick={handleOutAnimationAndRemove}>
          <IconWrapper className="material-icons" variant={type}>
            close
          </IconWrapper>
        </CloseButton>
      </ToastWrapper>
    </div>
  );
});

export default React.memo(ToastItem);
