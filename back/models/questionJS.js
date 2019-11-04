const mongoose = require("mongoose");


const questionJSSchema = new mongoose.Schema({
   question: String,
   code: String,
    variants: [String],
    trueVariants: [String]
}); 

module.exports = mongoose.model('JsQuestion', questionJSSchema);
