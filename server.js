/**
 * Starts the Express server on port 3000 by default
 */

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// test data
const apiStatus = { version: "0.1.0", status: 'up', author: 'Frederick John' }

// routes
const statsRoute = require('./server/routes/stats')

if (process.env.NODE_ENV !== 'production') {
  console.log("Node is starting in DEVELOPMENT mode");
}

// Set up express
const app = express();

// Middleware
//CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  next();
});
app.use(function (req, res, next) {
  let ts = Date.now();
  console.log(`Request received at ${ts}`);
  console.log(`${req.method} - ${req.url}`);
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Assign port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

// Routing
app.get("/", function (req, res) {
  res.status(200).json(apiStatus);
});
app.use('/api', statsRoute)

module.exports = server;
