import { useEffect, useRef } from "react";

const root = document.body;

export const usePortal = () => {
  const rootElemRef = useRef(document.createElement("div"));

  useEffect(() => {
    const { current } = rootElemRef;
    root.appendChild(current);
    return () => {
      current.remove();
    };
  }, []);

  return rootElemRef.current;
};
