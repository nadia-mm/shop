import express from "express";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRouter from "./categories/category.router";
import productRouter from "./products/product.router";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/products", productRouter);

const swaggerDocs = YAML.load(path.join(__dirname, '../swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT, () => {
  console.log(`[server] Server running on http://localhost:${process.env.PORT || 5000}`);
  mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
    console.log("[mongoose] Successfully connected to the database!");
  });
});