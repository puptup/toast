/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PositionsKeysType } from "@constants";
import { EventBus } from "@service/eventBus";
import { Toast } from "@types";
import { useEffect, useMemo, useState } from "react";

export const useToastsUpdater = (positon: PositionsKeysType) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const AddToast = EventBus.getInstance().register(`add-toast-${positon}`, (toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
    });

    const DeleteToast = EventBus.getInstance().register(
      `delete-toast-${positon}`,
      (toast: Toast) => {
        setToasts((prev) => prev.filter((element) => element.id !== toast.id));
      }
    );

    return () => {
      AddToast.unregister();
      DeleteToast.unregister();
    };
  }, []);

  return toasts;
};
