import { useMemo, useState } from "react";
import { TProduct } from "../components/products/ProductList";
import { PRODUCT_FORM_FIELDS } from "../components/products/ProductForm.config";

export const useProductForm = (item: TProduct, originalItem: TProduct) => {
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const isFormValid = useMemo(() => {
    let isValid = true;
    const newErrors: Record<string, string | null> = {};

    Object.entries(PRODUCT_FORM_FIELDS).forEach(([key, validationField]) => {
      const typedKey = key as keyof TProduct;
      const { required, pattern, name, title } = validationField;
      const value = String(item[typedKey]);

      if (required && !value.trim()) {
        newErrors[key] = `Le champ ${name} est requis.`;
        isValid = false;
      } else if (pattern && !new RegExp(pattern).test(value)) {
        newErrors[key] = `Le champ ${validationField.label} n'est pas valide.${title ?? ""}`;
        isValid = false;
      } else {
        newErrors[key] = null;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [item]);

  const hasAnyFieldChanged = useMemo(() =>
    Object.entries(item).some(
      ([key, fieldValue]) => fieldValue !== originalItem[key as keyof TProduct]
    ),
    [item, originalItem]
  );

  return {
    errors,
    isFormValid,
    hasAnyFieldChanged,
  };
};
