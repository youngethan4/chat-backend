const userRouter = require("./user.route");
const authRouter = require("./auth.route");
const authorize = require("../util/authorize");

const router = (app) => {
  app.use("/api/user", userRouter);
  app.use("/auth", authRouter);
};

module.exports = router;
