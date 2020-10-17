

import express = require('express');

import fs = require('fs');
import path = require('path');

function htmlEncode(s: string): string {
  return (s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;'));
}

/**
 * return iterator on all *.md files
 * @param {string} path
 * @returns {string*}
 */
async function* scanFiles(dir: string): AsyncIterable<string> {

  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const de of entries) {
    const res = path.resolve(dir, de.name);
    // console.log('>' + res);
    if (de.isDirectory()) {
      if (de.name !== 'node_modules') { yield* scanFiles(res); }
    } else {
      if (de.name.endsWith('.md')) { yield res; }
    }
  }
} // scanFiles()


/**
 * filter, include only filenames with given extension.
 * @param {AsyncIterable<string>} it
 * @param {string} ext
 */
async function* filterExtension(it: AsyncIterable<string>, ext: string): AsyncIterable<string> {
  for await (const e of it) {
    if (e.endsWith(ext)) {
      // console.log('>>' + e);
      yield e;
    }
  }
} // filterExtension()


/**
 * return text lines containing the query as Promise.
 * @param {string} filename
 * @param {string} query
 * @returns {Promise<string[]>}
 */
async function fileTextLines(filename: string, query: string) {
  const l = fs.promises.readFile(filename)
    .then(b => b.toString('utf8'))
    .then(c => c.split('\n').filter(line => line.includes(query)));
  return (l);
} // fileTextLines


module.exports = function (root: string, options: any) {
  options = Object.assign({ query: '???', fileType: null }, options);

  return (async function (req: express.Request, res: express.Response) {
    const query = req.query.query || options.query;
    // Implement the middleware function based on the options object
    // console.log('Find - Unfinished files...');

    let buffer = '';
    buffer += '<html>';
    buffer += '<head><title>Unfinished Files</title>';
    buffer += '<link Content-Type="text/css" href="iotstyle.css" rel="stylesheet" />';
    buffer += '<style>.r{margin-bottom:8px;} .r>h3{margin-bottom:4px;} .r>p{margin:0 0 4px 4px;}</style>';
    buffer += '</head>';
    buffer += '<body>';
    buffer += '<div class="container-fluid">';
    buffer += `<h1>Files with ${htmlEncode(query)}</h1>`;

    const rootLen = root.length;

    let itFiles = scanFiles(root);
    if (options.fileType) {
      itFiles = filterExtension(itFiles, options.fileType);
    }

    for await (const f of itFiles) {
      const lines = await fileTextLines(f, query);
      if (lines.length > 0) {
        // console.log(f.substr(rootLen));
        buffer += '<div class="r">';
        buffer += `<h3><a href="index.htm#page=${f.substr(rootLen)}">${f.substr(rootLen)}</a></h3>`;
        lines.forEach(l => {
          buffer += `<p>${htmlEncode(l)}</p>`;
        });
        buffer += '</div>';
      }
    }

    buffer += '</body>';

    res.set('Content-Type', 'text/html');
    res.send(buffer);
  });
};
