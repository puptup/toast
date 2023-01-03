import { Toast } from "@types";

export const defaultToast: Omit<Toast, "id"> = {
  type: "info",
  spaceToEdge: 10,
  spaceBetweenToasts: 20,
  animationDuration: 400,
  timeToDelete: 5000,
  animationIn: "fromBottomToTop",
  animationOut: "fromLeftToRight",
  position: "rightBottom",
  title: "Toast",
  description: "Toast description",
};
