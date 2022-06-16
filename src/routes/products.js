import express from "express";
import ProductsController from "../controllers/products";
const productController = new ProductsController();
const router = express.Router();

router.get("/", (req, res) => productController.get(req, res));

export default router;
