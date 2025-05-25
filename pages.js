// pages.js

"use strict";


// lazy load any htm content
function lazyLoadHTM(container, url) {
  fetch(url, { overrideMimeType: 'application/text' })
    .then(res => res.text())
    .then(txt => {
      document.querySelector(container).appendChild(document.createRange().createContextualFragment(txt));
    });
}

