const randomArr = require("../functions/randomArr");
const express = require("express");
const User = require("../models/users");
const Skills = require("../models/skill");
const TestJS = require("../models/questionJS");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/api/test", async (req, res) => {
  const questions = await TestJS.find();
  const test = randomArr(questions, 0, questions.length - 1);
  res.json(test);
});

router.get("/api/skills", async (req, res) => {
  const skills = await Skills.find();
  res.json(skills);
});

router.route("/api/login").post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email });

  if (!user) {
    console.log("error user");
    res.json({ status: 1, error: "Такой пользователь не найден" });
  } else {
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      const message = "Не правильный password или email";
      res.json({ status: 1, error: message });
    } else {
      console.log("nashel");
      req.session.user = user;
      res.json({ username: user.username, hero: user.hero });
    }
  }
});

router.route("/api/signup").post(async (req, res) => {
  let newUser = await User.findOne({ email: req.body.email });
  if (!newUser) {
    const pass = await bcrypt.hash(req.body.password, 12);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: pass,
      player: {
        type: "player",
        name: req.body.username,
        avatar:
          "https://img.gifmagazine.net/gifmagazine/images/1301133/original.gif",
        percs: [],
        stats: {
          lvl: 1,
          health: 300,
          damage: 10
        },
        gold: 5
      }
    });
    await user.save();
    req.session.user = user;
    res.json({
      username: user.username,
      player: {
        type: user.type,
        name: user.username,
        avatar: user.avatar,
        percs: [user.percs],
        stats: { ...user.stats },
        gold: user.gold
      }
    });
  } else {
    const message = "Такой пользователь уже существует";
    res.json({ status: 1, error: message });
  }
});

router.get("/api/check-session", async (req, res) => {
  const user = req.session.user;
  const error = false;
  if (user === undefined) {
    res.json(error);
  } else {
    res.json(user);
  }
});

router.put("/api/endFight", async (req, res) => {
  const userInitial = await User.findOne({ username: req.body.playerName });
  userInitial.player.gold += req.body.gold;
  userInitial.markModified("player.gold");
  await userInitial.save();
  res.json(userInitial);
  console.log(userInitial);
});

router.post("/api/update-store", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });;
  res.json(user);
});

router.get("/api/logout", async (req, res) => {
  req.session.destroy();
  res.json(true);
});

router.post("/api/skill-learn", async (req, res) => {
  const user = await User.findOne({ _id: req.session.user._id });
  let skills = user.player.percs;
  const learnedSkill = await Skills.findOne({ title: req.body.skill });
  skills.push(learnedSkill);
  const playerUpdate = user.player;
  playerUpdate.percs = skills;
  await User.findByIdAndUpdate({ _id: req.session.user._id }, { player: playerUpdate })
  res.json(user);
});

router.post("/api/gold-update", async (req, res) => {
  const user = await User.findOne({ _id: req.session.user._id });
  let goldUpdate = req.body.goldUpdate;
  const playerUpdate = user.player;
  playerUpdate.gold = goldUpdate;
  const userUpdate = await User.findByIdAndUpdate({ _id: req.session.user._id }, { player: playerUpdate })
  res.json(userUpdate);
});





module.exports = router;
