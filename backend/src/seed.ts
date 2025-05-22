import mongoose from "mongoose";

import dotenv from "dotenv";
import Category from "./categories/category.model";
import Product from "./products/product.model";
dotenv.config();

export const seed = async () => {
  try {
    await Category.deleteMany({});
    await Product.deleteMany({});

    const categories = await Category.insertMany([
      { name: "Fitness" },
      { name: "Accessoires" },
      { name: "Mode" },
      { name: "Technologie" },
    ]);
    console.log("[mongoose] Categories populated successfully");
  
    await Product.insertMany([
  {
    name: "Smartphone XYZ",
    description: "Un smartphone puissant avec écran OLED.",
    imgUrl: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144",
    category: "Électronique",
    price: "799,99",
    quantity: 25,
    rating: 4.5,
  },
  {
    name: "T-shirt en coton",
    description: "Confortable et durable.",
    imgUrl: "https://images.unsplash.com/photo-1585386959984-a41552265c7d",
    category: "Vêtements",
    price: "19,99",
    quantity: 100,
    rating: 4.2,
  },
  {
    name: "Lampe de bureau",
    description: "Lampe LED moderne.",
    imgUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    category: "Maison",
    price: "39,99",
    quantity: 50,
    rating: 4.6,
  },
  {
    name: "Livre de développement",
    description: "Apprenez JavaScript avec ce guide complet.",
    imgUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    category: "Livres",
    price: "29,99",
    quantity: 70,
    rating: 4.9,
  },
]);

    console.log("[mongoose] Products populated successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};
