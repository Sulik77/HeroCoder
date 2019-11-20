const express = require("express");
const User = require("../models/users");
const router = express.Router();

router.put("/endFight", async (req, res) => {
  const userInitial = await User.findOne({ username: req.body.playerName });
  userInitial.player.gold += req.body.gold;
  await userInitial.save();
});

module.exports = router;
