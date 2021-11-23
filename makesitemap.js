// packdist.js
// copy all files for the full featured web server into the dist folder
// ready to be published on http://homeding.github.io/vxx 

// ===== Packages used =====

const yargs = require('yargs');
const debug = require('debug');
const shell = require('shelljs');
const fs = require("fs");

const outFile = "sitemap2.xml";

// ===== Command line support =====
console.log('HomeDing: Build a sitemap');
const options = yargs
  .usage('Usage: $0')
  .option('v', { alias: 'verbose', describe: 'Verbose logging', type: 'boolean', demandOption: false, default: false })
  .argv;

debug.enable(options.verbose ? '*' : '*:info');

// ===== initializing modules =====

const logInfo = debug('sm:info');
const logTrace = debug('sm:trace');
debug.log = console.log.bind(console);

logInfo(`Starting...`);


// ===== create list file =====

let files = shell.find('.').grep("\.md$").grep('-v', /_/).grep('-v', "^\s*$").stdout.split('\n');

files.forEach(f => {
  if (f) {
    fs.stat(f, (err, fileStats) => {
      let entry = '<url>';
      entry += '<loc>https://homeding.github.io/#page=' + f + '</loc>';
      entry += '<lastmod>' + fileStats.mtime.toISOString() + '</lastmod>';
      entry += '</url>';
      console.log(entry);
    });
  }
});

// console.log("<", listText, ">");
// listText.split('\n').forEach( l => logInfo(l));
// logInfo(listText); // 

logInfo(`done.`);
