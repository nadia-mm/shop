import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CATEGORY_API_URL = "http://localhost:5000/api/v1/categories";

export type TCategory = {
  _id: string; 
  name: string;
    __v?: number;
} 
export const useCategories = () =>
  useQuery<TCategory[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(CATEGORY_API_URL);
      return response.data;
    },
  });
