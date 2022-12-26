import { defaultToast } from "@constants";
import toastService from "@service";
import { Toast } from "@types";
import { useCallback } from "react";
import uniqid from "uniqid";

const useToasts = () => {
  const addToast = useCallback((toast?: Partial<Omit<Toast, "id">>) => {
    toastService.addToast({
      id: uniqid(),
      ...defaultToast,
      ...toast,
    });
  }, []);

  return {
    addToast,
  };
};

export default useToasts;
