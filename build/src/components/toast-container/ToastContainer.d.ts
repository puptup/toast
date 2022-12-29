import { AnimationINKeysType, AnimationOUTKeysType } from "../../animation";
import { PositionsKeysType, VariantsKeysType } from "../../constants";
import { FC } from "react";
export interface ToastContainerProps {
    type: VariantsKeysType;
    timeToDelete: number;
    position: PositionsKeysType;
    animationIn: AnimationINKeysType;
    animationOut: AnimationOUTKeysType;
    animationDuration: number;
    title: string;
    description: string;
    spaceToEdge: number;
    spaceBetweenToasts: number;
}
declare const ToastContainer: FC<ToastContainerProps>;
export default ToastContainer;
