const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema=new Schema({
    name:String,
    power_rate:Number,
    attack_rate:Number,
    defence_rate:Number,
    groupId:String
});

module.exports = mongoose.model('Pokemon',pokemonSchema);