import { ToastContainerProps } from "../components/toast-container/ToastContainer";
import React from "react";
declare const _default: {
    title: string;
    component: React.FC<ToastContainerProps>;
    argTypes: {
        type: {
            defaultValue: string;
            options: string[];
            control: {
                type: string;
            };
        };
        timeToDelete: {
            type: string;
            defaultValue: number;
            options: number[];
            control: {
                type: string;
            };
        };
        position: {
            defaultValie: string;
            options: string[];
            control: {
                type: string;
            };
        };
        animationIn: {
            defaultValie: string;
            options: string[];
            control: {
                type: string;
            };
        };
        animationOut: {
            defaultValie: string;
            options: string[];
            control: {
                type: string;
            };
        };
        animationDuration: {
            type: string;
            defaultValue: number;
            options: number[];
            control: {
                type: string;
            };
        };
        title: {
            type: string;
            defaultValue: string;
        };
        description: {
            type: string;
            defaultValue: string;
        };
        spaceToEdge: {
            type: string;
            defaultValue: number;
        };
        spaceBetweenToasts: {
            type: string;
            defaultValue: number;
        };
    };
};
export default _default;
export declare const Default: (args: ToastContainerProps) => JSX.Element;
