import "@testing-library/jest-dom";

import { defaultToast } from "@constants";
import { render } from "@testing-library/react";
import { Toast } from "@types";
import React from "react";

import ToastItem from "./ToastItem";

const infoToast: Toast = {
  ...defaultToast,
  id: "test",
  type: "info",
};

const warningToast: Toast = {
  ...defaultToast,
  id: "test",
  type: "info",
};

const successToast: Toast = {
  ...defaultToast,
  id: "test",
  type: "success",
};

const errorToast: Toast = {
  ...defaultToast,
  id: "test",
  type: "error",
};

describe("Toast", () => {
  it("should be info toast", () => {
    const { queryByTestId } = render(<ToastItem toast={infoToast} />);
    const element = queryByTestId("toast-test");
    expect(element).toMatchSnapshot();
  });

  it("should be warning toast", () => {
    const { queryByTestId } = render(<ToastItem toast={warningToast} />);
    const element = queryByTestId("toast-test");
    expect(element).toMatchSnapshot();
  });

  it("should be success toast", () => {
    const { queryByTestId } = render(<ToastItem toast={successToast} />);
    const element = queryByTestId("toast-test");
    expect(element).toMatchSnapshot();
  });

  it("should be error toast", () => {
    const { queryByTestId } = render(<ToastItem toast={errorToast} />);
    const element = queryByTestId("toast-test");
    expect(element).toMatchSnapshot();
  });
});
