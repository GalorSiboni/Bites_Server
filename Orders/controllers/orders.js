const ordersModule = require('../models/orders')
const mongoose = require('mongoose')


const getAllOrders = async (req, res) => {
    try{
        const allOrders = await ordersModule.find()
        res.status(201).json(allOrders)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const getOrderById = async (req, res) => {
    res.status(200).send(res.order)
}

const createOrder = async (req, res) => {
    const order = new ordersModule({
        _id: mongoose.Types.ObjectId(),
        user: req.body.user,
        products: req.body.products,
        total_price: req.body.total_price,
        address: req.body.address,
        order_type: req.body.order_type
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    // products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
    // total_price: { type: Number, default: 0.0 },
    // address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    // order_type: { type: orderType.order, default: orderType.order.SHIPMENT }
    })
    try{
        const newOrder = await order.save()
        res.status(200).json(newOrder)
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
    
};

const updateOrder = async (req, res) => {
    if(req.body.user != null){
        res.order.user = req.body.user
    }
    if(req.body.products != null){
        res.order.products = req.body.products
    }
    if(req.body.total_price != null){
        res.order.total_price = req.body.total_price
    }
    if(req.body.address != null){
        res.order.address = req.body.address
    }
    if(req.body.order_type != null){
        res.order.order_type = req.body.order_type
    }
    try{
        const updatedOrder = await res.order.save()
        res.status(200).json(updatedOrder)
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
}

const deleteOrder = async (req, res) => {
    try{
        await res.Orders.remove()
        res.status(200).json({ messege: 'Deleted Order' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

const deleteAllOrders = async (req, res) => {
    try{
        await ordersModule.deleteMany({})
        res.status(200).json({ messege: 'Deleted All Orders' })
    }
    catch(error){
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    deleteAllOrders,
    deleteOrder,
    createOrder,
    updateOrder
}