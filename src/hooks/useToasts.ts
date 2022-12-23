import { defaultToast } from "@constants";
import toastService from "@service";
import { Toast } from "@types";
import { useCallback } from "react";
import uniqid from "uniqid";

const useToasts = () => {
  const addToast = useCallback((toast?: Partial<Toast>) => {
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
