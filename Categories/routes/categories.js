const express = require('express');
const router = express.Router();
const catModule = require('../models/categories')

const {
    getAllCategories,
    getCategoryById,
    deleteAllCategories,
    deleteCategory,
    createCategory,
    updateCategory
} = require('../controllers/categories')

router.get('/category/:id', findSingleCategory, getCategoryById)

router.post('/category', createCategory)

router.put('/category/:id', findSingleCategory, updateCategory)

router.delete('/category/:id', findSingleCategory, deleteCategory)

router.get('/categories', getAllCategories)

router.delete('/categories', deleteAllCategories)

async function findSingleCategory(req, res, next){
    let category
    try{
        category = await catModule.findById(req.params.id)
        if(category == null){
            return res.status(404).json({ message: 'cannot find category' })
        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
    res.category = category
    next()
}
module.exports = router
