// routes/productRouter.js
import express from 'express';
import {
  createProductController,
  getProductController,
  getAllProductsController,
  updateProductController,
  deleteProductController
} from '../controllers/productControllers.js';
// import { protect, admin } from "../middleware/userMiddleware.js";

const productRouter = express.Router();

// Create a product (Admin only)
productRouter.post('/products', createProductController);

// Get all products (Public)
productRouter.get('/products', getAllProductsController);

// Get a product by ID (Public)
productRouter.get('/products/:id',  getProductController);

// Update a product by ID (Admin only)
productRouter.put('/products/:id',  updateProductController);

// Delete a product by ID (Admin only)
productRouter.delete('/products/:id',  deleteProductController);

export default productRouter;
