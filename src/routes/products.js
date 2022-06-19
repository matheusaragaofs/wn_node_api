import express from "express";
import ProductsController from "../controllers/products";
import Product from "../models/product";
const productController = new ProductsController(Product);
const router = express.Router();

router.get("/", (req, res) => productController.get(req, res));

export default router;
