import React from "react";
import { render, screen } from "@testing-library/react";
import PageGeneric from "./PageGeneric";

describe("PageGeneric", () => {
  it("renders the title and children correctly", () => {
    render(
      <PageGeneric title="Test Title">
        <p>Test Content</p>
      </PageGeneric>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Test Title");
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
