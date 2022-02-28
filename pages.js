// pages.js

// simplified YAML parser supporting only a key:value object. 
function extractFrontData(txt) {
  var fd = {};
  var fMatch = txt
    .match(/^-{3,}\s*[\r\n]+([^\0]*)[\r\n]+-{3,}[\r\n]*/);

  if (fMatch) {
    var fText = fMatch[1].replace(/[\r\n]+/g, "\n");

    // reformat multiline values
    fText = fText.replaceAll(/>\s*(\n  [^\n]+)+(?=\n*$|\n\S)/g, m => {
      return (m.substring(1).replace(/\n\s*/g, ' '));
    });

    var matches = fText.matchAll(/^(?<key>\S+)\s*:\s*(.*)$/gm);
    for (const match of matches) {
      fd[match[1]] = match[2];
    }
    return ({
      length: fMatch[0].length,
      data: fd
    });

  } else {
    return ({ length: 0, data: {} });
  }
} // extractFrontData

// lazy load any htm content
function lazyLoadHTM(container, url) {
  fetch(url, { overrideMimeType: 'application/text' })
    .then(res => res.text())
    .then(txt => {
      document.querySelector(container).appendChild(document.createRange().createContextualFragment(txt));
    });
}

