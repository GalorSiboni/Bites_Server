const express = require('express');
const router = express.Router();
const productsModule = require('../models/products')

const {
    getAllProducts,
    getProductById,
    deleteAllProducts,
    deleteProduct,
    createProduct,
    updateProduct
} = require('../controllers/products')

router.get('/product/:id', findSingleProduct, getProductById)

router.post('/product', createProduct)

router.put('/product/:id', findSingleProduct, updateProduct)

router.delete('/product/:id', findSingleProduct, deleteProduct)

router.get('/products', getAllProducts)

router.delete('/products', deleteAllProducts)

async function findSingleProduct(req, res, next){
    let product
    try{
        product = await products.findById(req.params.id)
        if(product == null){
            return res.status(404).json({ message: 'cannot find product' })
        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
    res.product = product
    next()
}
module.exports = router
