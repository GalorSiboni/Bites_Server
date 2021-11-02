const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    image: { type: String },
    description: { type: String }

}, { timestamps: true });

const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;