const mongoose = require("mongoose")
const elementSchema = mongoose.Schema({element_name: String,symbol: String,number: {
    type: Number,
    min: 2,
    max: 99,
require:true  }})
module.exports = mongoose.model("element",elementSchema)