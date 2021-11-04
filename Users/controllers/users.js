const usersModule = require('../models/users')
const mongoose = require('mongoose')


const getAllUsers = async (req, res) => {
    try{
        const allUsers = await usersModule.find()
        res.status(201).json(allUsers)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    res.status(200).send(res.user)
}

const createUser = async (req, res) => {
    const user = new usersModule({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        usertype: req.body.usertype 
        // address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
    })
    try{
        const newUser = await user.save()
        res.status(200).json(newUser)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
    
};

const updateUser = async (req, res) => {
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.username != null){
        res.user.username = req.body.username
    }
    if(req.body.password != null){
        res.user.password = req.body.password
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.usertype != null){
        res.user.usertype = req.body.usertype
    }
    if(req.body.address != null){
        res.user.address = req.body.address._id
    }
    try{
        const updatedUser = await res.user.save()
        res.status(200).json(updatedUser)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const deleteUser = async (req, res) => {
    try{
        await res.Users.remove()
        res.status(200).json({ messege: 'Deleted User' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

const deleteAllUsers = async (req, res) => {
    try{
        await usersModule.deleteMany({})
        res.status(200).json({ messege: 'Deleted All Users' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    deleteAllUsers,
    deleteUser,
    createUser,
    updateUser
}