import ToastContainer from "@components/toast-container";
import { ToastContainerProps } from "@components/toast-container/ToastContainer";
import React from "react";

export default {
  title: "Container",
  component: ToastContainer,
  argTypes: {
    type: {
      defaultValue: "success",
      options: ["success", "info", "warning", "error"],
      control: {
        type: "select",
      },
    },
    timeToDelete: {
      type: "number",
      defaultValue: 5000,
      options: [5000, 7000, 10000],
      control: {
        type: "radio",
      },
    },
    position: {
      defaultValie: "rightTop",
      options: ["rightTop", "rightBottom", "leftTop", "leftBottom"],
      control: {
        type: "select",
      },
    },
    animationIn: {
      defaultValie: "fromBottomToTop",
      options: ["fromBottomToTop", "fromTopToBottom", "fromLeftToRight", "fromRightToLeft"],
      control: {
        type: "select",
      },
    },
    animationOut: {
      defaultValie: "fromLeftToRight",
      options: ["fromBottomToTop", "fromTopToBottom", "fromLeftToRight", "fromRightToLeft"],
      control: {
        type: "select",
      },
    },
    animationDuration: {
      type: "number",
      defaultValue: 400,
      options: [200, 400, 600],
      control: {
        type: "radio",
      },
    },
  },
};

export const Default = (args: ToastContainerProps) => <ToastContainer {...args} />;
