import { Request, Response } from 'express';
import Product from './product.model';


const NOT_FOUND_PRODUCT_MESSAGE :string = 'Product not found';


export const createProduct = async (req: Request, res: Response) => {
    const { name, description, imgUrl, category, price, quantity, rating} = req.body;

    const newProduct = new Product({name, description, imgUrl, category, price, quantity, rating });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).send({ message: `${error}` });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedProduct) {
            res.status(404).send({ message: NOT_FOUND_PRODUCT_MESSAGE });
        }
        await updatedProduct?.save()
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).send({ message: `${error}` });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deleted = await Product.findByIdAndDelete({_id:id});

        if (!deleted) {
            res.status(404).send({ message: NOT_FOUND_PRODUCT_MESSAGE });
        }

        res.status(204).send();
    } catch (error) {
        res.status(400).send({ message: `${error}` });
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
};   

export const getProductById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const products = await Product.findById({_id:id});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
};  