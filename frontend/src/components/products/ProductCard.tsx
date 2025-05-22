import { useCallback, useState } from "react";
import { TProduct } from "./ProductList";
import ProductForm from "./ProductForm";
import "./ProductCard.css";
import Card from "../card/Card";
import useSnackbar from "../../hooks/useSnackbar";
import { useMutateProduct } from "../../hooks/useProduct";
import Modal from "../modal/Modal";
import { addButtonStyle, ERROR_MESSAGE } from "../../pages/ProductListPage";
import { useNavigate } from "react-router-dom";

interface ICard {
  product: TProduct;
}

const ProductCard = ({ product }: ICard) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] = useState(false);

  const handleEditClick = useCallback(() => {
    setIsFormOpen(true);
  }, [setIsFormOpen]);

  const handleCloseFormClick = useCallback(() => {
    setIsFormOpen(false);
  }, [setIsFormOpen]);

  const deleteMutation = useMutateProduct("delete");

  const { showSnackbar, SnackbarComponent } = useSnackbar();

  const handleDeleteClick = useCallback(() => {
    deleteMutation.mutate(product, {
        onSuccess: (_data, variables) => {
          showSnackbar(
            "Produit supprimé avec succès",
            "success"
          );
        },
        onError: (error) => {
          showSnackbar(error.message || ERROR_MESSAGE, "error");
        },
      });
      setIsDeleteConfirmationVisible(false);
  }, [setIsDeleteConfirmationVisible,showSnackbar, deleteMutation, product]);

    const handleShowDeleteModal = useCallback(() => {
    setIsDeleteConfirmationVisible(true);
  }, [setIsDeleteConfirmationVisible]);

  const handleCloseDeleteModal = useCallback(() => {
    setIsDeleteConfirmationVisible(false);
  }, [setIsDeleteConfirmationVisible]);

  const navigate = useNavigate();
  const handleShowProduct = useCallback(() => navigate(`/products/${product._id}`), [navigate, product._id]);

  return (
    <Card>
      <SnackbarComponent  />
      <div className="product-card">
        <h2 className="product-category">{product.category}</h2>
        <h1 className="product-title">{product.name}</h1>
        <div className="product-card-actions">
          <button className="btn-edit" onClick={handleEditClick}>
            Modifier
          </button>
          <button className="btn-delete" onClick={handleShowDeleteModal}>
            Supprimer
          </button>
          <button className="btn-view" style={addButtonStyle} onClick={handleShowProduct}>
            Voir
          </button>
        </div>
        <ProductForm
          product={product}
          action="edit"
          isVisible={isFormOpen}
          onClose={handleCloseFormClick}
        />
      </div>
      <Modal
        isOpen={isDeleteConfirmationVisible}
        onClose={handleCloseDeleteModal}
        onSubmit={handleDeleteClick}
        isLoading={deleteMutation.isPending}
        submitButtonText="Supprimer">
        <h2>Êtes-vous sûr(es) de vouloir supprimer ce produit ?</h2>
        </Modal>
    </Card>
  );
};
export default ProductCard;
