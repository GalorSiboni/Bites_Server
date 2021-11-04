const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, default: 0.0 },
    image: { type: String },
    description: { type: String },
    categories: [{  type: mongoose.Schema.Types.ObjectId, ref: 'Categories' }] 
}, { timestamps: true })

const Products = mongoose.model('Products', productsSchema);
module.exports = Products;