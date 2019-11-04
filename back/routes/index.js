const randomArr =  require ("../functions/randomArr");
const express = require("express");
const { sessionChecker } = require("../middleware/auth");
const User = require("../models/users");
const Skills = require("../models/skill");
const TestJS = require("../models/questionJS");

const router = express.Router();

router.get("/", sessionChecker, (req, res) => {

});

router.get("/api/test-js", async (req, res) => {
    const questions = await TestJS.find();  
    // console.log(questions);
    const test = randomArr(questions,0,questions.length);
    res.json(test);
});

router.get("/api/skills", async (req,res) => {
    const skills = await Skills.find();
    res.json(skills);
})


module.exports = router;
