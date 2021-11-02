const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
}, { timestamps: true })

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;