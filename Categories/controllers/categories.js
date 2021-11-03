const catModule = require('../models/categories')
const mongoose = require('mongoose')


const getAllCategories = async (req, res) => {
    try{
        const allCategories = await catModule.find()
        res.status(201).json(allCategories)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const getCategoryById = async (req, res) => {
    res.status(200).send(res.category)
}

const createCategory = async (req, res) => {
    const category = new catModule({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    })
    try{
        const newCategory = await category.save()
        res.status(200).json(newCategory)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
    
};

const updateCategory = async (req, res) => {
    if(req.body.name != null){
        res.category.name = req.body.name
    }
    if(req.body.image != null){
        res.category.image = req.body.image
    }
    if(req.body.description != null){
        res.category.description = req.body.description
    }
    try{
        const updatedCategory = await res.category.save()
        res.status(200).json(updatedCategory)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const deleteCategory = async (req, res) => {
    try{
        await res.category.remove()
        res.status(200).json({ messege: 'Deleted Category' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

const deleteAllCategories = async (req, res) => {
    try{
        await catModule.deleteMany({})
        res.status(200).json({ messege: 'Deleted All Categories' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    deleteAllCategories,
    deleteCategory,
    createCategory,
    updateCategory
}