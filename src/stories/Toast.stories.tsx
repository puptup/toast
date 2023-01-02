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
      options: [1500, 5000, 7000, 10000],
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
    title: {
      type: "string",
      defaultValue: "Title",
    },
    description: {
      type: "string",
      defaultValue: "Description",
    },
    spaceToEdge: {
      type: "number",
      defaultValue: 10,
    },
    spaceBetweenToasts: {
      type: "number",
      defaultValue: 20,
    },
  },
};

export const Default = (args: ToastContainerProps) => <ToastContainer {...args} />;
