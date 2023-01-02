import { Toast } from "../types";
export declare const Variants: {
    info: {
        background: string;
        color: string;
    };
    warning: {
        background: string;
        color: string;
    };
    error: {
        background: string;
        color: string;
    };
    success: {
        background: string;
        color: string;
    };
};
export type VariantsKeysType = keyof typeof Variants;
export declare const Positions: {
    leftTop: {
        left: number;
        top: number;
    };
    rightTop: {
        right: number;
        top: number;
    };
    leftBottom: {
        left: number;
        bottom: number;
    };
    rightBottom: {
        right: number;
        bottom: number;
    };
};
export type PositionsKeysType = keyof typeof Positions;
export declare const defaultToast: Omit<Toast, "id">;
export declare const ADD_TOAST_EVENT = "add-toast";
export declare const DELETE_TOAST_EVENT = "delete-toast";
export declare const IconsNamesByWariant: Record<VariantsKeysType, string>;
