const fs = require("fs");
const key = fs.readFileSync("./secret.key");
const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) return res.sendStatus(401);
  try {
    jwt.verify(token, key);
    next();
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) return res.sendStatus(401);
    return res.sendStatus(400);
  }
};

module.exports = authorize;
