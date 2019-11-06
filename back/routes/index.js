const randomArr = require("../functions/randomArr");
const express = require("express");
const { sessionChecker } = require("../middleware/auth");
const User = require("../models/users");
const Skills = require("../models/skill");
const TestJS = require("../models/questionJS");
const bcrypt = require('bcrypt');
const router = express.Router();

router.get("/", sessionChecker, (req, res) => {

});

router.get("/api/test", async (req, res) => {
  const questions = await TestJS.find();
  const test = randomArr(questions, 0, questions.length - 1);
  res.json(test);
});

router.get("/api/skills", async (req, res) => {
  const skills = await Skills.find();
  res.json(skills);
});

router.route("/login")
  .post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });
    const check = await bcrypt.compare(password, user.password);
    if (!user) {
      res.json({ status: 1, error: "Такой пользователь не найден" });
    } else if (!check) {
      const massege = "Не правильный password или email";
      res.json({ status: 1, error: massege });
    } else {
      req.session.user = user;
      res.json({ username: user.username, hero:user.hero });
    }
  });

router.route("/signup")
  .post(async (req, res) => {
    let newUser = await User.findOne({ email: req.body.email });
    if (!newUser) {
     const pass = await bcrypt.hash(req.body.password, 12);
      console.log("pass",pass);
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: pass,
        hero: {
          gold: 5,
          health: 300,
          damage: 10
        }
      });
      await user.save();
      req.session.user = user;
      res.json(
        {
          username: user.username,
          hero: { gold: user.hero.gold, health: user.hero.health, damage: user.hero.damage }
        });
    } else {
      const message = "Такой пользователь уже существует";
      res.json({ status: 1, error: message });
    }
  });



module.exports = router;
