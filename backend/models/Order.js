const mongoose = require('mongoose')
const Schema = mongoose.Schema

let OrderSchema = new Schema({

    Date: {
        type: Date, default: Date.now,
        required: true,
    },
    Hora: {
        type: Date, default: Date.now,
        required: true,
    },
    Largo: {
        type: Number,
        required: true,
    },
    Ancho: {
        type: Number,
        required: true,
    },
    Alto: {
        type: Number,
        required: true,
    },
    Peso: {
        type: Number,
        required: true,
    },
    PickupAddress: {
        type: String,
        required: true,
    },
    City : {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    ID: {
        type: Number,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    City : {
        type: String,
        required: true,
    },
    
}, {
    collection: 'Order'

})

mongoose.exports = mongoose.model('Order', OrderSchema)
