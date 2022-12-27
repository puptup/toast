import { defaultToast } from "@constants";
import { DispatchEvent } from "@service/eventBus";
import Events from "@service/events";
import { Toast } from "@types";
import { useCallback } from "react";
import uniqid from "uniqid";

const useToasts = () => {
  const addToast = useCallback((toast: Partial<Omit<Toast, "id">>) => {
    const newToast: Toast = {
      id: uniqid(),
      ...defaultToast,
      ...toast,
    };
    DispatchEvent<Toast>(Events.AddToast(newToast.position), newToast);
  }, []);

  return {
    addToast,
  };
};

export default useToasts;
