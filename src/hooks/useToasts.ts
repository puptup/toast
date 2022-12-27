import { defaultToast } from "@constants";
import { EventBus } from "@service/eventBus";
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
    EventBus.getInstance().dispatch<Toast>(`add-toast-${toast.position}`, newToast);
  }, []);

  return {
    addToast,
  };
};

export default useToasts;
