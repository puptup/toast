/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PositionsKeys } from "@constants";
import toastService from "@service";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useToastsUpdater = (positon: PositionsKeys) => {
  const [_, setRerender] = useState(true);

  const forceupdate = useCallback(() => {
    setRerender((prev) => !prev);
  }, []);

  useEffect(() => {
    toastService.setRerenderFunction(positon, forceupdate);
  }, []);

  return toastService.getToasts().filter((toast) => toast.position === positon);
};
