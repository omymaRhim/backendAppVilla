const express = require('express');
const router = express.Router();

const customerController = require('../controllers/Customer.Controller');
router.post('/create', customerController.create);
router.get('/find', customerController.find)
router.delete('/remove/:id', customerController.remove)
router.put('/update/:id', customerController.update)
router.post('/getReservation/', customerController.getReservation)
router.get('/getLogement/', customerController.getLogement)

module.exports = router;

