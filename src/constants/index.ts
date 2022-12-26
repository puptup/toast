import { Toast } from "@types";

export const Variants = {
  info: { background: "#8E3EC8", color: "white" },
  warning: { background: "#F2D94F", color: "black" },
  error: { background: "#DC4D35", color: "white" },
  success: { background: "#38DD93", color: "white" },
};

export type VariantsKeys = keyof typeof Variants;

export const Positions = {
  leftTop: { left: 0, top: 0 },
  rightTop: { right: 0, top: 0 },
  leftBottom: { left: 0, bottom: 0 },
  rightBottom: { right: 0, bottom: 0 },
};

export type PositionsKeysType = keyof typeof Positions;

export const defaultToast: Omit<Toast, "id"> = {
  type: "info",
  gap: 20,
  animationDuration: 400,
  timeToDelete: 5000,
  animationIn: "fromBottomToTop",
  animationOut: "fromLeftToRight",
  position: "rightBottom",
  title: "Toast",
  description: "Toast description",
};
