// https://commerceofthefuture.com/2020/06/getting-started-with-typescript-and-express/
// https://github.com/microsoft/TypeScript-Node-Starter/blob/master/src/app.ts

import express = require('express');
import debug = require('debug');

console.log('Homeding Documentation Web Server starting...');

const app: express.Application = express();

const logServer = debug('server');

const log = {
  info: logServer.extend('info'),
  error: debug('server:error'),
  send: debug('server:send')
};
log.info.log = console.log.bind(console);
log.error.log = console.error.bind(console);
log.send.log = console.log.bind(console);

// ===== Start =====

// debug.enable('server:info');
// debug.enable('*');

log.info('This processor architecture is ' + process.arch);
log.info('This platform is ' + process.platform);
// log.info('dir: ' + __dirname);
// log.info('cwd: ' + process.cwd());
// log.error('error');
// log.send('send');

// ===== url + duration logger =====
// a middleware with no mount path; gets executed for every request to the app

function urlLogMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  const startTime = process.hrtime();
  next();
  const duration = process.hrtime(startTime);
  log.send(`url=${req.originalUrl} (${Math.ceil(duration[0] * 1000000 + duration[1] / 1000)}ms)`);
}

app.use(urlLogMiddleware);


// ----- enable start page redirect -----
app.get('/', function (req, res, next) {
  log.info('redirect...');
  res.redirect('/index.htm');
  // next();
});


// ----- handle listing of all existing files -----

function isoDate(d: Date) {
  const ds = d.toISOString();
  return (ds.substr(0, 10));
}


// ===== Enable searching text in files (e.g. containing '???' )

const modSearch = require('./server-search.js');
app.get('/search', modSearch(process.cwd(), { fileType: '.md' }));


// ===== serving file system

// https://www.positronx.io/express-js-error-handling-tutorial-with-best-example/

// setup serving static files
app.use(express.static(process.cwd(), {
  index: false
}));

// ----- enable error reports -----

// app.use(function (err: any, req:Request, res:Response, next:express.NextFunction) {
//     log.error(err.stack);
//     res.send("Something broke!");
//   });

app.get('/ok', (req, res) => {
  res.send('OK2');
});


module.exports = {
  app: app,
  setPort: function (p: number) { app.set('port', p); },
  start: function () {
    const port: number = app.get('port');
    app.listen(port, () => {
      console.log('Web Server started.');
      console.log(`open http://localhost:${port}/`);
    });
  }
};
