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
  },
};

export const Default = (args: ToastContainerProps) => <ToastContainer {...args} />;
