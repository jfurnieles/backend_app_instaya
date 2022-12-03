let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let OrderSchema = require('../models/Order')

//CRUD

//CREATE
//localhost:5000/order/create
router.route('/create').post((req, res, next) => {
    OrderSchem.create(req, body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//READ ORDER
//localhost:5000/order/1
router.route('/:id').get((req, res) => {
    OrderSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


//Update Order
//localhost:5000/order/edit/2
router.route('edit/:id').put((req, res) => {
    OrderSchema.findByIdandUpdate(req.params.id, {
        $set: req.body,
    },
        
        (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data) 
        }
    })
})

//Delete Order
//localhost:5000/order/delete/2
router.route('delete/:id').delete((req, res) => {
    OrderSchema.findByIdandRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json ({
                msg: data
        
        })
       }
    })
})

module.exports = router