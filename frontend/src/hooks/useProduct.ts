import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { TProduct } from "../components/products/ProductList";

const PRODUCT_API_URL = "http://localhost:5000/api/v1/products";

export const useProducts = () =>
  useQuery<TProduct[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(PRODUCT_API_URL);
      return response.data;
    },
  });

export const useProductById = (id: string) => {
  return useQuery<TProduct>({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await axios.get(`${PRODUCT_API_URL}/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useMutateProduct = (action: "edit" | "delete" | "add") => {
  return useMutation({
    mutationFn: async (product: TProduct) => {
      console.log(product)
      if (action === "edit") {
         await axios.put(`${PRODUCT_API_URL}/${product._id}`, product);
      } else if (action === "add") {
         await axios.post(PRODUCT_API_URL, product);
      } else {
         await axios.delete(`${PRODUCT_API_URL}/${product._id}`);
      }

    }
  });
};
