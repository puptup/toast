import { useEffect, useRef } from "react";

const usePreviousValue = <T>(value: T): T | undefined => {
  const prevValue = useRef<T>();

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return prevValue.current;
};

export default usePreviousValue;
