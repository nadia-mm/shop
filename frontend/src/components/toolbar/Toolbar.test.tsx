import React from "react";
import { render, screen } from "@testing-library/react";
import Toolbar from "./Toolbar";

describe("Toolbar", () => {
  it("renders the React logo image", () => {
    render(<Toolbar />);
    const logo = screen.getByAltText("React logo");
    expect(logo).toBeInTheDocument();
  });

  it("displays the shop title", () => {
    render(<Toolbar />);
    const title = screen.getByText("ALTEN SHOP");
    expect(title).toBeInTheDocument();
  });

  it("renders the shopping cart button", () => {
    render(<Toolbar />);
    const button = screen.getByRole("button", { name: /view shopping cart/i });
    expect(button).toBeInTheDocument();
  });
});
