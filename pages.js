// pages.js

"use strict";

// poly.js: some minimal polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
// End.

// lazy load any htm content
function lazyLoadHTM(container, url) {
  fetch(url, { overrideMimeType: 'application/text' })
    .then(res => res.text())
    .then(txt => {
      document.querySelector(container).appendChild(document.createRange().createContextualFragment(txt));
    });
}

