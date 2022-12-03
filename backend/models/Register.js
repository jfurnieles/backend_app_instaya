const mongoose = require('mongoose')
const Schema = mongoose.Schema

let RegisterSchema = new Schema({
    FullName: {
        type: String,
        required: true,

    },
    User: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },





},{
    collection: 'Register'
})

mongoose.exports = mongoose.model('Register', RegisterSchema)