const mongoose = require('mongoose');
const orderType = require('./types/order')
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
    total_price: { type: Number, default: 0.0 },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    order_type: { type: rderType.order, default: orderType.order.SHIPMENT }
}, { timestamps: true })

const Orders = mongoose.model('Orders', ordersSchema);
module.exports = Orders;