import { keyframes } from "styled-components";

const fromRightToLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(calc(100% - 100vw));
    opacity: 0;
  }
`;

const fromLeftToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }

  to {
    transform: translateX(calc(100% + 100vw));
    opacity: 0;
  }
`;

const fromTopToBottom = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(calc(100% + 100vh));
    opacity: 0;
  }
`;

const fromBottomToTop = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(calc(100% - 100vh));
    opacity: 0;
  }
`;

export default {
  fromLeftToRight,
  fromRightToLeft,
  fromBottomToTop,
  fromTopToBottom,
};
