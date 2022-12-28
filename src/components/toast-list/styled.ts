import { Positions, PositionsKeysType } from "@constants";
import styled from "styled-components";

interface ToastListWrapperProps {
  position: PositionsKeysType;
}

export const ToastListWrapper = styled.div<ToastListWrapperProps>`
  position: fixed;
  ${({ position }) => {
    return Positions[position];
  }};
  display: flex;
  flex-direction: column;
  align-items: ${({ position }) => (position.includes("left") ? "flex-start" : "flex-end")};
`;
