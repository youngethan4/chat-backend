const userRouter = require("./user.route");
const authRouter = require("./auth.route");
const authorize = require("../util/authorize");
const groupRouter = require("./group.route");
const relationshipRouter = require("./relationship.route");

const router = (app) => {
  app.use("/api/user", authorize, userRouter);
  app.use("/auth", authRouter);
  app.use("api/group", authorize, groupRouter);
  app.use("api/relationship", authorize, relationshipRouter);
};

module.exports = router;
