const express = require("express");
const debug = require("debug");
// const fs = require("fs");

console.log('Homeding Doku Web Server starting...');

const app = express();
const log = {
  info: debug("iot:info"),
  error: debug("iot:error"),
  send: debug("iot:send")
};
log.info.log = console.log.bind(console);
log.error.log = console.error.bind(console);
log.send.log = console.log.bind(console);

debug.enable('*:info');


// ===== Start =====

log.info("This processor architecture is " + process.arch);
log.info("This platform is " + process.platform);
log.error("This platform is a problem");

// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  var startTime = process.hrtime();
  next();
  var duration = process.hrtime(startTime);
  log.send(`url=${req.originalUrl} (${Math.ceil(duration[0] * 1000000 + duration[1] / 1000)}ms)`);
});

// ----- enable favicon requests -----
// var favicon = require("serve-favicon");
// app.use(favicon(__dirname + "/favicon.ico"));

/**
 * Express middleware that adds header to avoid caching
 */
function noCache(req, res, next) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
}

// ----- enable start page redirect -----
app.get("/", function (req, res, next) {
  log.info("redirect...");
  res.redirect("/index.htm");
  // next();
});


// ----- handle listing of all existing files -----

function isoDate() {
  function pad02(num) {
    return (((num < 10) ? '0' : '') + num);
  };

  var d = new Date();
  var ds = d.getFullYear() + '-' + pad02(d.getMonth() + 1) + '-' + pad02(d.getDate()) +
    ' ' + pad02(d.getHours()) + ':' + pad02(d.getMinutes()) + ':' + pad02(d.getSeconds());
  return (ds);
}


// ===== serving file system 

// setup serving static files
app.use(express.static(__dirname, {
  index: false
}));

// ----- enable error reports -----
app.use(function (err, req, res, next) {
  log.error(err.stack);
  res.status(500).send("Something broke!");
});

// // ----- enable 404 responses -----
app.use(function (req, res, next) {
  log.error(`could not find ${req.originalUrl}: 404`);
  res.status(404).send("Sorry, can't find that.");
});


app.listen(3123, () => {
  console.log('Homeding Doku Web Server...');
  console.log("open http://localhost:3123/");
});
