import { Toast } from "../../types";
import React from "react";
export interface ToastItemProps {
    toast: Toast;
}
export declare const remove: (toast: Toast) => void;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ToastItemProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;
