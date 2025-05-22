import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Snackbar from "./Snackbar";

describe("Snackbar", () => {
  it("renders message when visible", () => {
    render(
      <Snackbar
        isVisible={true}
        message="Test message"
        severity="success"
        onClose={jest.fn()}
      />
    );
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("does not render when not visible", () => {
    render(
      <Snackbar
        isVisible={false}
        message="Should not be visible"
        severity="error"
        onClose={jest.fn()}
      />
    );
    expect(screen.queryByText("Should not be visible")).toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Snackbar
        isVisible={true}
        message="Close test"
        severity="error"
        onClose={onClose}
      />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape key is pressed", () => {
    const onClose = jest.fn();
    render(
      <Snackbar
        isVisible={true}
        message="Escape test"
        severity="success"
        onClose={onClose}
      />
    );
    fireEvent.keyDown(window, { key: "Escape", code: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
