const http = require("http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/index");
const app = express();
const server = http.createServer(app);
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

router(app);

server.listen(port, () => {
  console.log("Server listening on port", port);
});

module.exports = app;
