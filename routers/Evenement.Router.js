const express = require('express');
const router = express.Router();

const evenementController = require('../controllers/Evenement.Controller');
router.post('/create', evenementController.create);
router.get('/find', evenementController.find);
router.post('/getEvenement/', evenementController.getEvenement)
module.exports = router;