import { VariantsKeysType } from "../../constants";
import { Keyframes } from "styled-components";
interface ToastWrapperProps {
    variant: VariantsKeysType;
    animationIn: Keyframes;
    animationOut: Keyframes;
    animationDuration: number;
    out: boolean;
    spaceBetweenToasts: number;
    spaceToEdge: number;
}
export declare const ToastWrapper: import("styled-components").StyledComponent<"div", any, ToastWrapperProps, never>;
export declare const TextWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CloseButton: import("styled-components").StyledComponent<"button", any, {}, never>;
interface IconWrapperProps {
    variant: VariantsKeysType;
}
export declare const IconWrapper: import("styled-components").StyledComponent<"div", any, IconWrapperProps, never>;
export {};
