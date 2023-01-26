import { keyframes } from "styled-components";

const fromLeftToRight = keyframes`
  from {
    transform: translateX(calc(100% - 100vw));
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fromRightToLeft = keyframes`
  from {
    transform: translateX(calc(100% + 100vw));
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fromBottomToTop = keyframes`
  from {
    transform: translateY(calc(100% + 100vh));
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fromTopToBottom = keyframes`
  from {
    transform: translateY(calc(100% - 100vh));
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default {
  fromLeftToRight,
  fromRightToLeft,
  fromBottomToTop,
  fromTopToBottom,
};
