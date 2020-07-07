const express = require('express');
const app = express();
const statsRoute = express.Router();
// const wrap = require("./middleware/wrap");
const ServerStats = require('../services/server-stats');

statsRoute.route("/stats").get((req, res) => {
  const server = ServerStats
  res.json(server);

});



module.exports = statsRoute;
