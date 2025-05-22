import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders children correctly", () => {
    const childText = "This is a test card";
    render(<Card>{childText}</Card>);
    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
