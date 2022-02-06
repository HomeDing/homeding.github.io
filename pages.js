// pages.js

// lazy load any htm content
function lazyLoadHTM(q, url) {
  fetch(url, { overrideMimeType: 'application/text' })
    .then(res => res.text())
    .then(txt => {
      document.querySelector(q).appendChild(document.createRange().createContextualFragment(txt));
    });
}

// lazy load any markdown content
function lazyLoadMD(q, url) {
  fetch(url, { overrideMimeType: 'application/text' })
    .then(res => res.text())
    .then(txt => {
      var hText = md.render(txt);
      hText = hText.replace(/href="([\w\-\/]+).md"/g, 'href="#page=$1.md"');
      hText = hText.replace(/href="([\w\-\/]+)"/g, 'href="#page=$1.md"');
      document.querySelector(q).innerHTML = hText;
    })
    .catch(err => {
      console.err('cannot lazyLoadMD', url, err);
    });
}

