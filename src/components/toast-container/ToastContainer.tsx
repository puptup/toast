/* eslint-disable no-plusplus */
import ToastProvider from "@components/toast-provider";
import useToasts from "@hooks/useToasts";
import React, { useRef } from "react";

const ToastContainer = () => {
  const { addToast } = useToasts();
  const ref = useRef(0);

  const handleToasts = () => {
    addToast({
      timeToDelete: 1500,
      title: "title",
      description: "description",
      type: "success",
      id: String(ref.current++),
      gap: 25,
    });
  };

  return (
    <div>
      <ToastProvider />
      <button type="button" onClick={handleToasts}>
        show
      </button>
    </div>
  );
};

export default ToastContainer;
