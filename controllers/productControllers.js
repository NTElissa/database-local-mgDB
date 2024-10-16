
import Product from '../models/productModel.js';

// Create a new product
const createProductController = async (req, res) => {
    const { name, price, description, image } = req.body;

    if (!name || !price || !description) {
        return res.status(400).json({ error: 'Name, price, and description are required' });
    }

    try {
        const newProduct = await Product.create({
            name,
            price,
            description,
            image
        });

        res.status(201).json({
            message: 'Product created successfully',
            data: newProduct,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a single product by ID
const getProductController = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product retrieved successfully',
            data: product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all products
const getAllProductsController = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: 'All products retrieved successfully',
            data: products,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a product by ID
const updateProductController = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, image } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(
            id,
            { name, price, description, image },
            { new: true }
        );

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product updated successfully',
            data: product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a product by ID
const deleteProductController = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({
            message: 'Product deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

export {
    createProductController,
    getProductController,
    getAllProductsController,
    updateProductController,
    deleteProductController,
};
