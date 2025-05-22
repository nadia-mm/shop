import React from "react";
import ProductCard from "./ProductCard";

export type TProduct = {
  _id?: string;
  name: string;
  description: string;
  imgUrl: string;
  category: string;
  price: string;
  quantity: number;
  rating: number;
    __v?: number;
};

interface IProductList {
  products: TProduct[];
}

const ProductList = ({ products }: IProductList) => {
  return (
    <div className="product-list">
      {products.map((product: TProduct) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;
