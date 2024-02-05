const mongoose = require("mongoose");
const Schema = mongoose.Schema


const DisneyAdultSchema = new Schema({
    name: String,
    items: [{ 
        type: mongoose.Types.ObjectId, ref: 'DisneyItem' 
    }],
    park: String,
  },{timestamps: true});
  
  module.exports = mongoose.model("DisneyAdult", DisneyAdultSchema);