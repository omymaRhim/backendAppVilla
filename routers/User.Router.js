const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
const userController = require('../controllers/User.Controller');
router.post('/create', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/find', userController.find);
router.post('/logout', userController.logout);
router.post('/refresh', userController.refresh);
module.exports = router;

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
}