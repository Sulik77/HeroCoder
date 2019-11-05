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
});

router.route("/login")
.post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });

  if (!user) {
    res.json({ status: 1 });
  } else if (user.password !== password) {
    const massege = "не правильный пароль или емайл";
    res.json({ status: 1, error: massege });
  } else {
    req.session.user = user;
    res.json({ username: user.username, email: user.email });
  }
});



router.route("/signup").post(async (req, res) => {
    let newUser = await User.findOne({ email: req.body.email });
  
    if (!newUser) {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      });
      await user.save();
      req.session.user = user;
      res.json({ username: user.username, email: user.email });
    } else {
      const message = "Такой пользователь уже существует";
      res.json({ status: 1, error: message });
    }
  });

module.exports = router;
