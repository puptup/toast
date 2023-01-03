/* eslint-disable react-hooks/exhaustive-deps */

import { IconsNamesByVariant } from "@constants";
import useAnimation from "@hooks/useAnimation";
import { DispatchEvent } from "@service/eventBus";
import Events from "@service/events";
import { Toast } from "@types";
import React, { useEffect, useState } from "react";

import { CloseButton, IconWrapper, TextWrapper, ToastWrapper } from "./styled";

export interface ToastItemProps {
  toast: Toast;
}

export const remove = (toast: Toast) => {
  DispatchEvent<Toast>(Events.DeleteToast(toast.position), toast);
};

const ToastItem = ({ toast }: ToastItemProps) => {
  const {
    id,
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

  const iconName = IconsNamesByVariant[type];

  return (
    <div id={id}>
      <ToastWrapper
        animationIn={keyframeIn}
        animationOut={keyframeOut}
        animationDuration={animationDuration}
        out={out}
        variant={type}
        spaceToEdge={spaceToEdge}
        spaceBetweenToasts={spaceBetweenToasts}
        data-testid={`toast-${id}`}
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
};

export default React.memo(ToastItem);
