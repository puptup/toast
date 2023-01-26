import React, { Component } from "react";

interface ErrorBoundryState {
  hasError: boolean;
}

interface ErrorBoundryProps {
  children: JSX.Element | JSX.Element[] | string;
}

class ErrorBoundry extends Component<ErrorBoundryProps, ErrorBoundryState> {
  state = {
    hasError: false,
  };

  static getDerivededStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>Uuups. Something went wrong...</div>;
    }
    return children;
  }
}

export default ErrorBoundry;
