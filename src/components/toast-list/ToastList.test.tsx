import "@testing-library/jest-dom";

import { defaultToast } from "@constants";
import { render, screen } from "@testing-library/react";
import { Toast } from "@types";
import React from "react";

import ToastList from "./ToastList";

let mockToasts: Toast[] = [];

jest.mock("../../hooks/useToastsUpdater.ts", () => ({
  useToastsUpdater: () => {
    return mockToasts;
  },
}));

jest.setTimeout(10000);
describe("ToastContainer", () => {
  it("s", async () => {
    mockToasts = [{ ...defaultToast, id: "test" }];
    const { queryByTestId } = render(<ToastList position="leftTop" />);
    const element = queryByTestId("toast-test");
    expect(element).toBeInTheDocument();
    // const { animationDuration, timeToDelete } = mockToasts[0];

    screen.debug();
  });
});
