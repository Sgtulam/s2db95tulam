const mongoose = require("mongoose")
const elementSchema = mongoose.Schema({element_name: String,symbol: String,number: Number})
module.exports = mongoose.model("element",elementSchema)