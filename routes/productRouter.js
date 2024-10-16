// routes/productRouter.js
import express from 'express';
import {
  createProductController,
  getProductController,
  getAllProductsController,
  updateProductController,
  deleteProductController
} from '../controllers/productControllers.js';


const productRouter = express.Router();
productRouter.post('/products', createProductController);

productRouter.get('/products', getAllProductsController);

productRouter.get('/products/:id',  getProductController);

productRouter.put('/products/:id',  updateProductController);

productRouter.delete('/products/:id',  deleteProductController);

export default productRouter;
