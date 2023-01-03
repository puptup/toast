import { PositionsKeysType } from "@constants";
import styled from "styled-components";

interface WrapperProps {
  position: PositionsKeysType;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ position }) => (position.includes("left") ? "flex-start" : "flex-end")};
`;
