const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
   title: String,
   opisanie: String,
    params: Object
});

module.exports = mongoose.model('Skill', skillSchema);
