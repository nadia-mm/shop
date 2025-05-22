import { Schema, model } from "mongoose";

export type TCategory = {
  name: string;
};

const categorySchema = new Schema<TCategory>(
  {
    name: { type: String, unique: true, required: true},
  }
);

export default model<TCategory>("Category", categorySchema);