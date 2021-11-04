const productsModule = require('../models/products')
const mongoose = require('mongoose')


const getAllProducts = async (req, res) => {
    try{
        const allProducts = await productsModule.find()
        res.status(201).json(allProducts)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const getProductById = async (req, res) => {
    res.status(200).send(res.product)
}

const createProduct = async (req, res) => {
    const product = new productsModule({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        categories: req.body.categories
    })
    try{
        const newProduct = await product.save()
        res.status(200).json(newProduct)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
    
};

const updateProduct = async (req, res) => {
    if(req.body.name != null){
        res.product.name = req.body.name
    }
    if(req.body.price != null){
        res.product.price = req.body.price
    }
    if(req.body.image != null){
        res.product.image = req.body.image
    }
    if(req.body.description != null){
        res.product.description = req.body.description
    }
    if(req.body.category != null){
        res.product.category = req.body.category
    }
    try{
        const updatedProduct = await res.product.save()
        res.status(200).json(updatedProduct)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try{
        await res.Products.remove()
        res.status(200).json({ messege: 'Deleted Product' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

const deleteAllProducts = async (req, res) => {
    try{
        await productsModule.deleteMany({})
        res.status(200).json({ messege: 'Deleted All Products' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    deleteAllProducts,
    deleteProduct,
    createProduct,
    updateProduct
}