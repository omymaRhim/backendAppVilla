const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
 firstname: {
  type: String,
  trim: true,  
  required: true,
 },
 lastname: {
   type: String,
   trim: true,  
   required: true,
  },
 email: {
  type: String,
  trim: true,
  required: true
 },
 tel: {
  type: String,
  trim: true,
  required: true
 },
 
 logement: {
    type: String,
    trim: true,
    required: true
   },
   nbrepersonne: {
      type: String,
      trim: true,
      required: true
   },
   chekin: {
    type: String,
    trim: true,
    required: true
   },
   chekout: {
    type: String,
    trim: true,
    required: true
   },
   price: {
    type: String,
    trim: true,
    required: true
   },
   avance :{
      type: String,
      trim: true,
      required: true
   },
   paid:{
      type:Boolean,
      default:false
    },
   avanceC :{
      type: String,
      trim: true,
      required: true
   },
   detail: {
    type: String,
    trim: true,
    required: true
   },
},);

module.exports = mongoose.model('Customer', CustomerSchema);