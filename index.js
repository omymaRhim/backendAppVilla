const express = require('express'); 
const logger = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routers/User.Router');
const customerRouter = require('./routers/Customer.Router');
const app = express();

const mongoose = require('./config/database'); //database
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.set('secretKey', 'oumaima'); // jwt secret token

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use("/users",userRouter);
app.use("/customers",customerRouter);
app.get('/', function(req, res){
 res.json({"aaa" : "Build REST API with node.js"});
});


app.use(function(req, res, next) {
    let err = new Error('Not Found');
       err.status = 404;
       next(err);
   });
   // handle errors
   app.use(function(err, req, res, next) {
    console.log(err);
    
     if(err.status === 404)
      res.status(404).json({message: "Not found"});
     else 
       res.status(500).json({message: "Something looks wrong :( !!!"});
   });
   const PORT = process.env.PORT || 3100;
app.listen(PORT, function(){ console.log('Node server listening on :' + PORT);});