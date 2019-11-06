const express = require("express");
const User = require("../models/users");
const router = express.Router();

router.get("/api/test", async (req, res) => {
  const questions = await TestJS.find();
  const test = randomArr(questions, 0, questions.length - 1);
  res.json(test);
});

router.route("/lose").put(async (req, res) => {
  console.log(req.body);

  const player = await User.findOne({ username: req.body.playerName });
  console.log(player);
});

router.route("/win").put(async (req, res) => {
  console.log(req.body);

  const player = await User.findOne({ username: req.body.playerName });
  console.log(player);
});

module.exports = router;
