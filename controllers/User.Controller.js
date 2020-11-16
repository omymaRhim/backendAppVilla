const userModel = require('../models/User.Model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var refreshTokens = {} 
var randtoken = require('rand-token') 
module.exports = {

    create: function (req, res, next) {

        console.log("body ",req.body)
        userModel.create(req.body, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error" + err, data: null });
            else
                res.json({ status: "success", message: "User added successfully!!!", data: result });

        });
    },

    find: function (req, res, next) {

        userModel.find({}, function (err, result) {
            if (err)
                res.json({ status: "error", message: "error", data: null });
            else
                res.json({ status: "success", message: "User find successfully!!!", data: result });

        });
    },


    authenticate: function (req, res, next) {
        userModel.findOne({ email: req.body.email }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {

                console.log(userInfo);
                if(userInfo!=null){
                    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                        const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                        var refreshToken = randtoken.uid(256) 
                        refreshTokens[refreshToken] = userInfo._id
                        res.json({ status: "success", message: "user found!!!", data: { user: userInfo, token: token } });
                    } else {
                        res.json({ status: "error", message: "Invalid password!!!", data: null });
                    }
                } else {

                    res.json({ status: "error", message: "Invalid email !!!", data: null });

                }
               
            }
        });
    },

    logout: function (req, res, next) {

        var refreshToken = req.body.refreshToken 
        if(refreshToken in refreshTokens) { 
          delete refreshTokens[refreshToken]
        } 
        res.send(204) 

    },

    refresh: function (req, res, next) {
        var refreshToken = req.body.refreshToken
  if((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == req.body.id )) {
    
    var token = jwt.sign({ id :req.body.id}, req.app.get('secretKey'), { expiresIn: 300 })
    res.json({token: 'JWT ' + token})
  }
  else {
    res.send(401)
  }
}
}