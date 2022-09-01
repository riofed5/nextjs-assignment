/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "../test-utils";
import Home from "../../pages/index";
import { products } from "../../data";

describe("Home page", () => {
  it("should render the text New Arrivals", () => {
    const textToFind = "New Arrivals";

    render(<Home products={products} />);
    const heading = screen.getByText(textToFind);

    expect(heading).toBeInTheDocument();
  });
});
