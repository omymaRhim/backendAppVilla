const evenementModel = require('../models/Evenement.Model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {

    create: function (req, res, next) {

        console.log("body ", req.body)
        evenementModel.create(req.body, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error" + err, data: null });
            else
                res.json({ status: "success", message: "Customer added successfully!", data: result });

        });
    },
    find: function (req, res, next) {

        evenementModel.find({}, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error", data: null });
            else
                res.json({ status: "success", message: "Customer find successfully!!!", data: result });

        });
    },

    getEvenement: function (req, res, next) {
        //const {logement} =req.body;
        //console.log({logement})
        evenementModel.find({ chekin: 1, chekout: 1 }, function (err, result) {

            if (err) {
                res.json({ status: "error", data: null });
            } else {
                res.json({ status: "success", data: result });
            }
            
        });

    },
}