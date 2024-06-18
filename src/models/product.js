const mongoose = require('mongoose');

let Product;

try {
    Product = mongoose.model('Product');
} catch (error) {
    const productSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        category: { type: String, required: true }
    });

    Product = mongoose.model('Product', productSchema);
}

module.exports = Product;
