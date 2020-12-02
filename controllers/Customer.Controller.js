const customerModel = require('../models/Customer.Model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {

    create: function (req, res, next) {

        console.log("body ", req.body)
        customerModel.create(req.body, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error" + err, data: null });
            else
                res.json({ status: "success", message: "Customer added successfully!", data: result });

        });
    },


    remove: function (req, res, next) {

        customerModel.findByIdAndDelete({ _id: req.params.id }, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error", data: null });
            else
                res.json({ status: "success", message: "Customer removed successfully!!!", data: result });

        });
    },


    update: function (req, res, next) {

        customerModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error", data: null });
            else
                res.json({ status: "success", message: "Customer updated successfully!!!", data: result });

        });
    },


    find: function (req, res, next) {

        customerModel.find({}, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error", data: null });
            else
                res.json({ status: "success", message: "Customer find successfully!!!", data: result });

        });
    },

    getReservation: function (req, res, next) {
        const {logement} =req.body;
        //console.log({logement})
        customerModel.find({logement}, { chekin: 1, chekout: 1,paid:1 }, function (err, result) {

            if (err) {
                res.json({ status: "error", data: null });
            } else {
                res.json({ status: "success", data: result });
            }
            
        });

    },
    getLogement: function (req, res, next) {
        customerModel.find({}, { logement: 1,}, function (err, result) {

            if (err) {
                res.json({ status: "error", data: null });
            } else {
                res.json({ status: "success", data: result });
            }
            
        });

    },

    
   

    
    

}