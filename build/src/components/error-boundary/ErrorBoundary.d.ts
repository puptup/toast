import React, { Component } from "react";
interface ErrorBoundryState {
    hasError: boolean;
}
interface ErrorBoundryProps {
    children: JSX.Element | JSX.Element[] | string;
}
declare class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
    state: {
        hasError: boolean;
    };
    static getDerivededStateFromError(): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | JSX.Element | JSX.Element[];
}
export default ErrorBoundry;
