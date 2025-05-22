import ProductList from "../components/products/ProductList";
import PageGeneric from "../components/pageGeneric/PageGeneric";
import { useProducts } from "../hooks/useProduct";
import Modal from "../components/modal/Modal";
import { useCallback, useState } from "react";
import ProductForm from "../components/products/ProductForm";

export const LOADING_MESSAGE = "Chargement...";
export const ERROR_MESSAGE = "Une erreur est survenue.";

export const addButtonStyle: React.CSSProperties = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "0.5rem 1rem",
  border: "1px solid transparent",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: 500,
  transition:
    "background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s, background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1)",
};

const ProductListPage = () => {
  const { data: products, isLoading, isError } = useProducts();
  const [isAddFormVisible, setIsAddFormVisible] = useState<boolean>(false);

  const handleAddProductClick = useCallback(() => {
    setIsAddFormVisible(true);
  }, [setIsAddFormVisible]);

  const handleCloseModalClick = useCallback(() => {
    setIsAddFormVisible(false);
  }, [setIsAddFormVisible]);

  return (
    <PageGeneric title="Liste des produits">
      <button
        style={addButtonStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(31, 81, 177, 0.9)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#2251b1";
        }}
        onClick={handleAddProductClick}
      >
        Créer produit
      </button>
      {isLoading ? (
        LOADING_MESSAGE
      ) : isError ? (
        ERROR_MESSAGE
      ) : (
        <ProductList products={products ?? []} />
      )}
      <Modal
        isOpen={isAddFormVisible}
        onClose={handleCloseModalClick}
        onSubmit={handleAddProductClick}
      >
        <ProductForm
          product={{
            _id: "",
            name: "",
            description: "",
            imgUrl: "",
            category: "",
            price: "",
            quantity: 0,
            rating: 0,
          }}
          isVisible={isAddFormVisible}
          onClose={handleCloseModalClick}
          action={"add"}
        />
      </Modal>
    </PageGeneric>
  );
};
export default ProductListPage;
