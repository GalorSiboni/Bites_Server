const express = require('express');
const router = express.Router();
const addressModule = require('../models/addresses')

const {
    getAllAddresses,
    getAddressById,
    deleteAllAddresses,
    deleteAddress,
    createAddress,
    updateAddress
} = require('../controllers/addresses')

router.get('/address/:id', findSingleAddress, getAddressById)

router.post('/address', createAddress)

router.put('/address/:id', findSingleAddress, updateAddress)

router.delete('/address/:id', findSingleAddress, deleteAddress)

router.get('/addresses', getAllAddresses)

router.delete('/addresses', deleteAllAddresses)

async function findSingleAddress(req, res, next){
    let address
    try{
        address = await addressModule.findById(req.params.id)
        if(address == null){
            return res.status(404).json({ message: 'cannot find address' })
        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
    res.address = address
    next()
}
module.exports = router
