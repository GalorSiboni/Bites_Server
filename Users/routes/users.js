const express = require('express');
const router = express.Router();
const usersModule = require('../models/users')

const {
    getAllUsers,
    getUserById,
    deleteAllUsers,
    deleteUser,
    createUser,
    updateUser
} = require('../controllers/users')

router.get('/user/:id', findSingleUser, getUserById)

router.post('/user', createUser)

router.put('/user/:id', findSingleUser, updateUser)

router.delete('/user/:id', findSingleUser, deleteUser)

router.get('/users', getAllUsers)

router.delete('/users', deleteAllUsers)

async function findSingleUser(req, res, next){
    let user
    try{
        user = await usersModule.findById(req.params.id)
        if(user == null){
            return res.status(404).json({ message: 'cannot find user' })
        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}
module.exports = router
