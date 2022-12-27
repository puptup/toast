import { ChildrenWithRef } from "@components/animated-toast-list/AnimatedToastList";
import { useEffect, useRef } from "react";

const usePrevious = (value: ChildrenWithRef): ChildrenWithRef | undefined => {
  const prevChildrenRef = useRef<ChildrenWithRef>();

  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);

  return prevChildrenRef.current;
};

export default usePrevious;
