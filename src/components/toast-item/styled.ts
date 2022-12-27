import { Variants, VariantsKeysType } from "@constants";
import styled, { css, Keyframes } from "styled-components";

interface ToastWrapperProps {
  variant: VariantsKeysType;
  gap: number;
  animationIn: Keyframes;
  animationOut: Keyframes;
  animationDuration: number;
  out: boolean;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  position: relative;
  background-color: ${({ variant }) => Variants[variant].background};
  color: ${({ variant }) => Variants[variant].color};
  margin: ${({ gap }) => `${gap}px`};
  animation: ${({ animationIn, animationOut, animationDuration, out }) =>
    css`
      ${out ? animationOut : animationIn} ${animationDuration}ms linear forwards
    ` || ""};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CloseButton = styled.button`
  display: block;
  background-color: inherit;
  border: 0;
  height: fit-content;
  cursor: pointer;
`;

interface IconWrapperProps {
  variant: VariantsKeysType;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  color: ${({ variant }) => Variants[variant].color};
  user-select: none;
`;
