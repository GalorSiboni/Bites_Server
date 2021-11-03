const addressModule = require('../models/addresses')
const mongoose = require('mongoose')


const getAllAddresses = async (req, res) => {
    try{
        const allAddresses = await addressModule.find()
        res.status(201).json(allAddresses)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const getAddressById = async (req, res) => {
    res.status(200).send(res.address)
}

const createAddress = async (req, res) => {
    const address = new addressModule({
        _id: mongoose.Types.ObjectId(),
        city: req.body.city,
        street: req.body.street,
        building: req.body.building,
        apartment: req.body.apartment,
        floor: req.body.floor
    })
    try{
        const newAddress = await address.save()
        res.status(200).json(newAddress)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
    
};

const updateAddress = async (req, res) => {
    if(req.body.city != null){
        res.address.city = req.body.city
    }
    if(req.body.street != null){
        res.address.street = req.body.street
    }
    if(req.body.building != null){
        res.address.building = req.body.building
    }
    if(req.body.apartment != null){
        res.address.apartment = req.body.apartment
    }
    if(req.body.floor != null){
        res.address.floor = req.body.floor
    }
    try{
        const updatedAddress = await res.address.save()
        res.status(200).json(updatedAddress)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const deleteAddress = async (req, res) => {
    try{
        await res.Address.remove()
        res.status(200).json({ messege: 'Deleted Address' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

const deleteAllAddresses = async (req, res) => {
    try{
        await addressModule.deleteMany({})
        res.status(200).json({ messege: 'Deleted All Addresses' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllAddresses,
    getAddressById,
    deleteAllAddresses,
    deleteAddress,
    createAddress,
    updateAddress
}