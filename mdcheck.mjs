#!node

// Link Checker for .md files

import * as fs from 'fs';
import path from 'node:path';

const rootFolder = '.';

/// ignore these foldernames
const folderExclude = ['node_modules'];

/// further scan the files with extensions
const extensionsInclude = ['.md', '.svg', '.jpg', '.png', '.pdf'];

const debugLevel = true;

// all file names
let allFiles = [];
let countBroken = 0;
let externalLinks = 0;

function debug(v) {
  if (debugLevel) console.debug(...arguments);
}

function info(v) {
  console.log(v);
}

info('Markdown Internal Link Checker');

/// Recursively walk through all folders and files to collect all relevant filenames.
/// recursive is not used to enable early filtering on directory names and filetypes
/// avoiding huge buffers and unrequired scanning directories.
/// @param {String} folderName 
/// @returns array of files and folders. 
async function walk(folderName) {
  const scans = await fs.promises.readdir(folderName, { withFileTypes: true })
    .then((entries) => entries.flatMap((entry) => {
      const childPath = path.join(folderName, entry.name);

      if (entry.isDirectory()) {
        if (!folderExclude.includes(entry.name)) {
          //  recursion on included subdirectories only.
          return walk(childPath);
        }

      } else {
        const ext = path.extname(entry.name);
        if (extensionsInclude.includes(ext)) {
          return childPath;
        }
      }
      return [];
    }));
  return Promise.all(scans);
};


// simple markdown file parser to find links and picture reference in format [txt](link)
function parseMarkdown(fName) {
  // debug('parsing ' + fName);
  if (fName.indexOf("@Architecture\\index.md") >= 0)
    debugger;

  let fNameReported = false;
  const fldr = path.dirname(fName);

  // get file content as text
  let textLines = fs.readFileSync(fName, { encoding: 'utf-8' }).replace(/\r/g, '').split('\n');
  let insideCode = false;
  let insideComment = false;

  textLines = textLines
    .flatMap((line) => {
      if (line.startsWith('```')) {
        insideCode = !insideCode;
      } else if (line.startsWith('<!--')) {
        insideComment = true;
      } else if (insideComment && line.indexOf('-->') >= 0) {
        insideComment = false;

      } else if ((!insideCode) && (!insideComment)) {
        return (line);
      }
      return ("");
    });

  textLines.forEach((lineText, lineNumber) => {
    const m = lineText.matchAll(/!?\[[^\]]+\]\(([^")]+)/g);
    for (const link of m) {
      let target = link[1].trim();

      if (target.indexOf('#') >= 0) {
        target = target.split('#')[0];
      }

      if (target.startsWith('http://') || target.startsWith('https://')) {
        // do not check internet links
        externalLinks++;

      } else if (target.indexOf('{{') >= 0) {
        // do not check links with variables

      } else if (target.length == 0) {
        // nothing to check on empty internal links

      } else {
        let fullTarget = target;
        fullTarget = decodeURIComponent(fullTarget);

        if (fullTarget.startsWith('/')) {
          fullTarget = path.resolve(fullTarget.slice(1));
        } else {
          fullTarget = path.resolve(fldr, fullTarget);
        }

        const n = allFiles.indexOf(fullTarget);
        if (n >= 0) {
          // console.log("found.");
        } else {
          if (!fNameReported) {
            console.log(`${fName}`);
            fNameReported = true;
          }
          console.log(`  ${lineNumber + 1}: Broken link: (${target}) to (${fullTarget})`);
          countBroken++;
        }
      }
    }

  });

  if (fNameReported) {
    console.log("");
  }
} // parseMarkdown()


debug("root:", rootFolder, path.resolve(rootFolder));
allFiles = (await walk(rootFolder))
  .flat(Number.POSITIVE_INFINITY)
  .map(fn => path.resolve(fn));

console.log("");

allFiles
  .filter(fName => path.extname(fName) == '.md')
  .filter(fName => ! path.basename(fName).startsWith('_'))
  .forEach(fName => {
    parseMarkdown(fName);
  });

console.log("");
console.log(` ${countBroken.toString().padStart(4, ' ')} Broken Links`);
console.log(` ${externalLinks.toString().padStart(4, ' ')} External Links`);
