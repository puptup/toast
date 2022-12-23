import ToastList from "@components/toast-list/ToastList";
import React from "react";

const ToastStack = () => {
  return (
    <>
      <ToastList position="leftBottom" />
      <ToastList position="rightBottom" />
      <ToastList position="leftTop" />
      <ToastList position="rightTop" />
    </>
  );
};

export default ToastStack;
