import { TProduct } from "./ProductList";

export type TFieldValidation = {
        label: string;
        type: string;
        placeholder?: string;
        required?: boolean;
        pattern?: string;
        title?: string;
        name: string;
};
export const PRODUCT_FORM_FIELDS :Partial<Record<keyof TProduct, TFieldValidation>>= {
    name: {
        label: "Nom",
        type: "text",
        placeholder: "Nom du produit",
        required: true,
        name:"name"
    },
    imgUrl: {
        label: "Image",
        type: "text",
        placeholder: "URL de l'image du produit",
        required: true,
        name:"imgUrl"
    },
    price: {
        label: "Prix(€)",
        type: "text",
        placeholder: "Prix du produit",
        required: true,
        pattern: "^\\d+(\\,\\d{1,2})?$",
        title:
        "Entrez un nombre valide, avec jusqu'à deux décimales (ex: 10,99)",
        name:"price"
    },
    description: {
        label: "Description",
        type: "text",
        placeholder: "Description du produit",
        required: true,
        name:"description"
    },
    category: {
        label: "Catégorie",
        required: true,
        type:"select",
        name:"category"
    },
}