import { useCallback, useState } from "react";
import { TProduct } from "./ProductList";
import "./ProductForm.css";
import Modal from "../modal/Modal";
import { useMutateProduct } from "../../hooks/useProduct";
import { TCategory, useCategories } from "../../hooks/useCategory";
import useSnackbar from "../../hooks/useSnackbar";
import { ERROR_MESSAGE } from "../../pages/ProductListPage";
import { PRODUCT_FORM_FIELDS } from "./ProductForm.config";
import { useProductForm } from "../../hooks/useProductForm";

interface IProductForm {
  product: TProduct;
  isVisible: boolean;
  onClose: () => void;
  action: "add" | "edit";
}

const Asterix = () => <span style={{ color: "red", marginLeft: 4 }}>*</span>;

export const ProductForm = ({
  product,
  isVisible,
  onClose,
  action,
}: IProductForm) => {
  const [item, setItem] = useState<TProduct>(product);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setItem((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [setItem]
  );

  const mutation = useMutateProduct(action);
  const { showSnackbar, SnackbarComponent } = useSnackbar();
  const { errors, isFormValid, hasAnyFieldChanged } = useProductForm(
    item,
    product
  );

  const handleSubmit = useCallback(() => {
    if (isFormValid) {
      mutation.mutate(
        { ...item, rating: 0, quantity: 0 },
        {
          onSuccess: (_data, variables) => {
            showSnackbar("Produit enregistré avec succès", "success");
          },
          onError: (error) => {
            showSnackbar(error.message || ERROR_MESSAGE, "error");
          },
        }
      );
      onClose();
    }
  }, [mutation, item, showSnackbar, onClose, isFormValid]);

  const { data: categories } = useCategories();

  return (
    <div>
      <SnackbarComponent />
      <Modal
        isOpen={isVisible}
        onClose={onClose}
        onSubmit={handleSubmit}
        isLoading={mutation.isPending}
        isSubmitDisabled={
          !hasAnyFieldChanged || !isFormValid || mutation.isPending
        }
      >
        <div>
          <h2 className="product-header">
            {action === "add" ? "Ajouter un produit" : "Modifier le produit"}
          </h2>

          {Object.entries(PRODUCT_FORM_FIELDS).map(([key, value]) => {
            const typedKey = key as keyof TProduct;
            return (
              value.type !== "select" && (
                <div key={key} className="product-form-field">
                  <label htmlFor={key} className="product-header">
                    {value.label}
                    <Asterix />
                  </label>
                  <input
                    id={key}
                    value={item[typedKey] || ""}
                    onChange={handleChange}
                    {...PRODUCT_FORM_FIELDS[typedKey]}
                  />
                  {errors[typedKey] && (
                    <span style={{ color: "red" }}>{errors[typedKey]}</span>
                  )}
                </div>
              )
            );
          })}

          <div className="product-form-field">
            <label htmlFor="categorySelect" className="product-header">
              Catégorie
              <Asterix />
            </label>
            <select
              id="categorySelect"
              value={item.category}
              onChange={handleChange}
              {...PRODUCT_FORM_FIELDS["category"]}
            >
              <option value="" disabled>
                -- Choisissez une catégorie --
              </option>
              {categories &&
                categories.map((category: TCategory) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errors["category"] && (
              <span style={{ color: "red" }}>{errors["category"]}</span>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductForm;
