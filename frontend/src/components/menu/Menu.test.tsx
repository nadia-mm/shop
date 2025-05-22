import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu, { menuItems } from "./Menu";

jest.mock("./MobileMenu", () => () => <div>Mobile Menu</div>);

describe("Navbar Component", () => {
  it("renders all menu items with correct links", () => {
    render(<Menu />);

    menuItems.forEach((menu) => {
      const menuItem = screen.getByText(menu.name);
      expect(menuItem).toBeInTheDocument();
      expect(menuItem.closest("a")).toHaveAttribute("href", menu.path);
    });
  });

  it("renders NavbarMobile component", () => {
    render(<Menu />);
    expect(screen.getByText("Mobile Menu")).toBeInTheDocument();
  });
});
