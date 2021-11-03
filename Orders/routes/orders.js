const express = require('express');
const router = express.Router();
const ordersModule = require('../models/orders')

const {
    getAllOrders,
    getOrderById,
    deleteAllOrders,
    deleteOrder,
    createOrder,
    updateOrder
} = require('../controllers/orders')

router.get('/order/:id', findSingleOrder, getOrderById)

router.post('/order', createOrder)

router.put('/order/:id', findSingleOrder, updateOrder)

router.delete('/order/:id', findSingleOrder, deleteOrder)

router.get('/orders', getAllOrders)

router.delete('/orders', deleteAllOrders)

async function findSingleOrder(req, res, next){
    let order
    try{
        order = await orders.findById(req.params.id)
        if(order == null){
            return res.status(404).json({ message: 'cannot find order' })
        }
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
    res.order = order
    next()
}
module.exports = router
