//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useUnifiedTopology: true ,useNewUrlParser: true} );
mongoose.Promise = global.Promise;
module.exports = mongoose;
//'mongodb://localhost/Myapp';
//process.env.MONGODB_URI