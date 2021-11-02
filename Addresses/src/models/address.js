const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressesSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    city: { type: String, required: true },
    street: { type: String, required: true },
    building: { type: String, required: true },
    apartment: { type: String, required: true },
    floor: { type: String, required: true }
}, { timestamps: true })

const Addresses = mongoose.model('Addreses', addressesSchema);
module.exports = Addresses;