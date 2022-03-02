// .myMarkdown.js
// local plugin implementation to enrich the markdown with
// - replace-link -- patch all internal *.md links
// - containers: excerpt, board, element, sensor, warning

// https://v0-5-1.11ty.dev/docs/languages/markdown/
// https://www.11ty.dev/docs/languages/markdown/
// https://www.npmjs.com/package/markdown-it-replace-link5
// https://github.com/markdown-it/markdown-it-footnote

const markdownIt = require("markdown-it");
const mdContainer = require('markdown-it-container');
const mdReplaceLink = require('markdown-it-replace-link');
const mdFootnotes = require('markdown-it-footnote');

module.exports = {

  initArguments: {},
  configFunction: function (eleventyConfig, options = {}) {
    console.log("myMarkdown setup");

    let markdownLib = markdownIt({
      html: true,
      breaks: false,
      linkify: true,
      replaceLink: function (link, env) {
        // console.log("--", link);
        link = link.replace(/(^\/[^.]*)\.md$/, "$1.htm");
        return (link);
      }
    });

    markdownLib.use(mdReplaceLink);
    markdownLib.use(mdFootnotes, { backref: false });

    function renderIconCard(icon, title, linkFolder, link) {
      var div = '<div class="iconcard">';
      var img = '<svg class="icon"><use href="/icons.svg#' + icon + '"></use></svg>';

      if ((title) && (linkFolder) && (link)) {
        return (div
          + `<a href="#page=/${linkFolder}/${link}.md">`
          + img + '<h3>' + title + '</h3>' + '</a>');
      } else {
        return (div + img);
      }
    }

    function renderImageCard(image, title, linkFolder, link) {
      var div = '<div class="imgcard">';
      var img = `<img src="/${linkFolder}/${image}.jpg">`;

      if ((title) && (linkFolder) && (link)) {
        return (div
          + `<a href="#page=/${linkFolder}/${link}.md">`
          + img + '<h3>' + title + '</h3>' + '</a>');
      } else {
        return (div + img);
      }
    }


    // ::: excerpt [icon]
    markdownLib.use(mdContainer, 'excerpt', {
      render: function (tokens, idx) {
        var t = tokens[idx];
        if (t.nesting === 1) {
          var m = t.info.trim().match(/^\s*excerpt\s+(.*)$/);
          if (m) {
            return renderIconCard(m[1]);
          } else {
            return '<div class="plaincard">';
          }
        } else {
          return '</div>\n';
        }
      }
    });

    // card for boards in boards folder
    // ::: board image
    markdownLib.use(mdContainer, 'board', {
      render: function (tokens, idx) {
        var t = tokens[idx];
        if (t.nesting === 1) {
          var m = t.info.trim().match(/^\s*board\s+(.*)$/);
          return renderImageCard(m[1], undefined, 'boards', m[1]);
        } else {
          return '</div>\n';
        }
      }
    });


    // card for elements in elements folder
    // ::: element title [icon]
    markdownLib.use(mdContainer, 'element', {
      render: function (tokens, idx) {
        var t = tokens[idx];
        if (t.nesting === 1) {
          var m = t.info.trim().match(/^\s*element\s+(\S+)\s*(\S*)/);
          return renderIconCard(m[2] ? m[2] : "no", m[1], 'elements', m[1]);

        } else {
          return '</div>\n';
        }
      }
    });

    // card for sensors in sensors folder
    // ::: sensor image
    markdownLib.use(mdContainer, 'sensor', {
      render: function (tokens, idx) {
        var t = tokens[idx];
        if (t.nesting === 1) {
          var m = t.info.trim().match(/^\s*sensor\s+(\S+)/);
          return renderImageCard(m[1], undefined, 'sensors', m[1]);
        } else {
          return '</div>\n';
        }
      }
    });

    markdownLib.use(mdContainer, 'warning', {
      render: function (tokens, idx) {
        var t = tokens[idx];
        if (t.nesting === 1) {
          var m = t.info.trim().match(/^\s*warning\s+(.*)$/);
          return '<div class="warning"><h3>Warning</h3>\n';
        } else {
          return '</div>\n';
        }
      }
    });

    eleventyConfig.setLibrary("md", markdownLib);
  }

}
