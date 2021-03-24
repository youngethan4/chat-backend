const db = require("../models/index.js");
const fs = require("fs");
const key = fs.readFileSync("./secret.key");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  console.log("Logging in...");
  const { username, password } = req.body;
  let data;
  try {
    data = await db.User.findOne({ where: { username: username } });
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
  if (!username || !data || !password) {
    console.log("User not found.");
    return res.status(401).send("User not found.");
  }
  const user = data.dataValues;
  if (user.password !== password) {
    console.log("Invalid password.");
    return res.sendStatus(401);
  }
  const token = jwt.sign({ username }, key, { expiresIn: "7d" });
  res.cookie("token", token, { maxAge: 7 * 24 * 60 * 60 * 100 });
  res.send({ username: username, id: user.id });
};

exports.register = async (req, res) => {
  const data = req.body;
  try {
    let user = await db.User.create(data);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
