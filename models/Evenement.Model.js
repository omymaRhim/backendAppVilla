const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const EvenementSchema = new Schema({

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
 
 Naturevenement: {
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
   Service: {
    type: String,
    trim: true,
    required: true
 },
   price: {
    type: String,
    trim: true,
    required: true
   },
   heber:{
      type:Boolean,
      default:false
    },
  
   nbreperheb: {
    type: String,
    trim: true,
    required: true
   },
},);

module.exports = mongoose.model('Evenement', EvenementSchema);