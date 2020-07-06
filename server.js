/**
 * Starts the Express server on port 3000 by default
 */

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// test data
const jsonObj = { this: 'that', value: 'good', thing: 'other', age: 12 }

if (process.env.NODE_ENV !== 'production') {
  console.log("Node is starting in DEVELOPMENT mode");
  console.log(process.env)
}

// Set up express
const app = express();

// Middleware
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

// Routes
app.get("/api/stats", function (req, res) {
  res.status(200).json(jsonObj);

});

module.exports = server;
