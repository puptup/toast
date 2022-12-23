import { Positions, PositionsKeys } from "@constants";
import styled from "styled-components";

interface ToastListWrapperProps {
  position: PositionsKeys;
}

export const ToastListWrapper = styled.div<ToastListWrapperProps>`
  position: fixed;
  ${({ position }) => {
    return Positions[position];
  }};
`;
