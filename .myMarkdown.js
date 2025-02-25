// .myMarkdown.js
// local plugin implementation to enrich the markdown with
// - replace-link -- patch all internal *.md links
// - containers: excerpt, board, element, sensor

// https://v0-5-1.11ty.dev/docs/languages/markdown/
// https://www.11ty.dev/docs/languages/markdown/
// https://www.npmjs.com/package/markdown-it-replace-link5
// https://github.com/markdown-it/markdown-it-footnote


const markdownIt = require('markdown-it');
const mdContainer = require('markdown-it-container');
const mdReplaceLink = require('markdown-it-replace-link');
const mdFootnotes = require('markdown-it-footnote');
const mdTaskLists = require('markdown-it-task-lists');
const mdItAttrs = require('markdown-it-attrs');

module.exports = {

  initArguments: {},
  configFunction: function(eleventyConfig, options = {}) {
    console.log("myMarkdown setup...");

    let markdown = markdownIt({
      html: true,
      breaks: false,
      linkify: true,
      typographer: true,
      replaceLink: function(link, env) {
        // console.log("--", link);
        link = link.replace(/(^\/[^.]*)\.md$/, "$1.htm");
        return (link);
      }
    });

    markdown.use(mdReplaceLink);
    markdown.use(mdTaskLists, { enabled: true, label: true });
    markdown.use(mdItAttrs);
    markdown.use(mdFootnotes, { backref: false });

    eleventyConfig.addFilter("markdown", (content) => {
      let r = '';
      if (content) r = markdown.render(content.trim());
      return r;
    });
  
    function renderIconCard(icon, title, linkFolder, link) {
      var div = '<div class="iconcard">';
      var img = '<svg class="icon"><use href="/icons.svg#' + icon + '"></use></svg>';

      if ((title) && (linkFolder) && (link)) {
        return (div
          + `<a href="/${linkFolder}/${link}.htm">`
          + img + '<h3>' + title + '</h3>' + '</a>');
      } else {
        return (div + img);
      }
    }

    // ::: excerpt [icon]
    markdown.use(mdContainer, 'excerpt', {
      render: function(tokens, idx) {
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


    // card for elements in elements folder
    // :::element title [icon]
    markdown.use(mdContainer, 'element', {
      render: function(tokens, idx) {
        var t = tokens[idx];
        if (t.nesting === 1) {
          var m = t.info.trim().match(/^\s*element\s+(\S+)\s*(\S*)/);
          return renderIconCard(m[2] ? m[2] : m[1].replace(/\//g, ""), m[1], 'elements', m[1]);

        } else {
          return '</div>\n';
        }
      }
    });


    eleventyConfig.setLibrary("md", markdown);
  }

}
