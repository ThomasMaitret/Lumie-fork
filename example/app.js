const express = require("express");
const path = require("path");
const Lumie = require("../src");
const permissions = require("./permissions");

const app = express();

Lumie.load(app, {
  verbose: process.env.NODE_ENV !== "test",
  preURL: "api",
  ignore: ["*.spec", "*.action"],
  permissions,
  controllers_path: path.join(__dirname, "controllers"),
});

const server = app.listen(3000, "127.0.0.1", () => {
  const { address, port } = server.address();
  if (process.env.NODE_ENV !== "test") {
    console.log("Example app listening at http://%s:%s", address, port);
  }
});

module.exports = app;
