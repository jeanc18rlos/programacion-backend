const express = require("express");

class App {
  constructor(port) {
    this.app = express();
    this.port = port;
  }
  listen() {
    this.app.listen(this.port);
  }
  start() {
    this.app.get("/queryparams", (req, res) => {
      const { ...rest } = req.query;
      res.send({ "Hello World": rest });
    });

    this.app.get("/pathparams/:id", (req, res) => {
      const { ...rest } = req.params;

      res.send({ "Hello World": rest });
    });
  }
}

module.exports = App;
