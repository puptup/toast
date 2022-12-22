/* eslint-disable @typescript-eslint/naming-convention */
import toastService from "@service";
import { useCallback, useEffect, useState } from "react";

export const useUpdatingToasts = () => {
  const [_, setRerender] = useState(true);

  const forceupdate = useCallback(() => {
    setRerender((prev) => !prev);
  }, []);

  useEffect(() => {
    toastService.setRerenderFunction(forceupdate);
  }, [forceupdate]);

  return toastService.getToasts();
};
