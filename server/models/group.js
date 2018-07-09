const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema=new Schema({
    name:String,
    about:String
});

module.exports = mongoose.model('Group',groupSchema);