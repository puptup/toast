import { ChildrenWithRef } from "@components/animated-toast-list/AnimatedToastList";
import React, { useEffect, useRef } from "react";

const usePrevious = (value: ChildrenWithRef): ChildrenWithRef => {
  const prevChildrenRef = useRef<React.ReactNode>();

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current as ChildrenWithRef;
};

export default usePrevious;
