const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, quantity, category } = {name:"name1",description:"des1", price:21,quantity:43, category:"Man"};
        const newProduct = await Product.create({ name, description, price, quantity, category });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a product by id
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a product by id
exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, quantity, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            { name, description, price, quantity, category },
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product by id
exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
