const mongoose = require('mongoose')
const Schema = mongoose.Schema

let LoginSchema = new Schema({
    UserName: {
        type: String,
        required: True,
    },
    Password: {
        type: String,
        required: True,
    }

}, {
    collection: 'Login'
})

mongoose.exports = mongoose.model('Login', LoginSchema)