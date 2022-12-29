import { defaultToast } from "@constants";
import { DispatchEvent } from "@service/eventBus";
import Events from "@service/events";
import { Toast } from "@types";
import uniqid from "uniqid";

const addToast = (toast: Partial<Omit<Toast, "id">>) => {
  const newToast: Toast = {
    id: uniqid(),
    ...defaultToast,
    ...toast,
  };
  DispatchEvent<Toast>(Events.AddToast(newToast.position), newToast);
};

export default addToast;
