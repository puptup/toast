import { Variants, VariantsKeys } from "@constants";
import styled, { css, Keyframes } from "styled-components";

interface ToastWrapperProps {
  variant: VariantsKeys;
  gap: number;
  animationIn: Keyframes;
  animationOut: Keyframes;
  animationDuration: number;
  out: boolean;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  width: 200px;
  position: relative;
  background-color: ${({ variant }) => Variants[variant].background};
  color: ${({ variant }) => Variants[variant].color};
  margin: ${({ gap }) => `${gap}px`};
  animation: ${({ animationIn, animationOut, animationDuration, out }) =>
    css`
      ${out ? animationOut : animationIn} ${animationDuration}ms linear forwards
    ` || ""};
`;
