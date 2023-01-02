import { RefObject } from "react";
export type ChildrenWithRef = (JSX.Element & {
    ref: RefObject<HTMLDivElement>;
})[];
type AnimatedToastListProps = {
    children: JSX.Element[];
};
declare const AnimatedToastList: ({ children }: AnimatedToastListProps) => JSX.Element;
export default AnimatedToastList;
