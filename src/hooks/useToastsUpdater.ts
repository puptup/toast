/* eslint-disable react-hooks/exhaustive-deps */
import { PositionsKeysType } from "@constants";
import { SubscribeToEvent } from "@service/eventBus";
import Events from "@service/events";
import { Toast } from "@types";
import { useEffect, useState } from "react";

export const useToastsUpdater = (positon: PositionsKeysType) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const AddToastUnsubscribe = SubscribeToEvent(Events.AddToast(positon), (toast: Toast) => {
      setToasts((prev) => [...prev, toast]);
    });

    const DeleteToastUnsubscribe = SubscribeToEvent(Events.DeleteToast(positon), (toast: Toast) => {
      setToasts((prev) => prev.filter((element) => element.id !== toast.id));
    });

    return () => {
      AddToastUnsubscribe();
      DeleteToastUnsubscribe();
    };
  }, []);

  return toasts;
};
