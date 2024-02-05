const mongoose = require("mongoose");
const Schema = mongoose.Schema


const DisneyItemSchema = new Schema({
    title: String,
    description: String,
    image: String,
    price: Number,
  },{timestamps: true});
  
  module.exports = mongoose.model("DisneyItem", DisneyItemSchema);