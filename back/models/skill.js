const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
   title: String,
   opisanie: String,
    params: Object,
    img: String
});

module.exports = mongoose.model('Skill', skillSchema);
