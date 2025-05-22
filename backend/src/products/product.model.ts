import { Schema, model } from "mongoose";

type TProduct = {
  name: string;
  description: string;
  imgUrl: string;
  category: string;
  price: string;
  quantity: number;
  rating: number;
  createdAt: number;
  updatedAt: number;
};

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    rating: { type: Number, required: true },
  }
);

productSchema.index({ name: 1 });

export default model<TProduct>("Product", productSchema);