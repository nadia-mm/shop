import PageGeneric from "../components/pageGeneric/PageGeneric";
import "../components/products/ProductCard.css";
import { useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addButtonStyle,
  ERROR_MESSAGE,
  LOADING_MESSAGE,
} from "./ProductListPage";
import { useProductById } from "../hooks/useProduct";
import placeholder from "../placeholder.jpeg";

const renderRatingStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {"★".repeat(fullStars)}
      {hasHalfStar && "½"}
      {"☆".repeat(emptyStars)}
    </>
  );
};

const PLACEHOLDER_URL = "https://placeholder.pics/svg/300";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading, isError } = useProductById(id || "");

  const handleBackToProductList = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  if (isLoading) return <p>{LOADING_MESSAGE}</p>;
  if (isError) return <p>{ERROR_MESSAGE}</p>;


  return (
    <PageGeneric title="Produit">
      <h2 className="product-category">{product?.category}</h2>
      <h1 className="product-title">{product?.name}</h1>
      <img
        src={product?.imgUrl || placeholder}
        alt={product?.name}
        className="product-image"
      />
      <p>{product?.description}</p>
      <span style={{ color: "#f5c518", fontSize: "18px" }}>
        {renderRatingStars(product?.rating || 0)} {product?.rating?.toFixed(1)}
      </span>
      <p>Prix(€):{product?.price}</p>
      <button
        style={addButtonStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(31, 81, 177, 0.9)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#2251b1";
        }}
        onClick={handleBackToProductList}
      >
        Voir la liste de produits
      </button>
    </PageGeneric>
  );
};
export default ProductPage;
