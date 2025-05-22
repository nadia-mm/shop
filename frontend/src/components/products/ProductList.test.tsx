import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList, { TProduct } from "./ProductList";

jest.mock("./ProductCard", () => ({ product }: any) => (
  <div data-testid="product-card">{product.name}</div>
));

describe("ProductList", () => {
  const mockProducts: TProduct[] = [
    {
      _id: "1",
      name: "Product 1",
      description: "Desc 1",
      imgUrl: "url1",
      category: "Cat 1",
      price: "10",
      quantity: 1,
      rating: 4,
    },
    {
      _id: "2",
      name: "Product 2",
      description: "Desc 2",
      imgUrl: "url2",
      category: "Cat 2",
      price: "20",
      quantity: 2,
      rating: 5,
    },
  ];

  it("renders a list of ProductCard components", () => {
    render(<ProductList products={mockProducts} />);
    const cards = screen.getAllByTestId("product-card");
    expect(cards).toHaveLength(mockProducts.length);
    expect(cards[0]).toHaveTextContent("Product 1");
    expect(cards[1]).toHaveTextContent("Product 2");
  });

  it("renders empty container when no products", () => {
    render(<ProductList products={[]} />);
    expect(screen.queryByTestId("product-card")).toBeNull();
  });
});
