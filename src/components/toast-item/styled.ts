import { Variants, VariantsKeys } from "@constants";
import styled from "styled-components";

interface ToastWrapperProps {
  variant: VariantsKeys;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  width: 200px;
  background-color: ${({ variant }) => Variants[variant].background};
  color: ${({ variant }) => Variants[variant].color};
`;
