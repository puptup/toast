import { ChildrenWithRef } from "../components/animated-toast-list/AnimatedToastList";
export type BoundingBoxes = {
    [key: string]: DOMRect;
};
declare const calculateBoundingBoxes: (children: ChildrenWithRef) => BoundingBoxes;
export default calculateBoundingBoxes;
