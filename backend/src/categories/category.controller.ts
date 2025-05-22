import { Request, Response } from 'express';
import Category from "./category.model"

export const getAllCategories =  async (req: Request, res: Response) => {

    try {
        const categories = await Category.find({});
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).send({ message: `${error}` });
    }
};