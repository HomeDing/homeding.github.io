// .myMarkdown.js
// local plugin implementation to enrich the markdown with
// - containers: excerpt, board, element, sensor

// https://v0-5-1.11ty.dev/docs/languages/markdown/
// https://www.11ty.dev/docs/languages/markdown/
// https://github.com/markdown-it/markdown-it-footnote


const markdownIt = require('markdown-it');
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
      typographer: true
    });

    markdown.use(mdTaskLists, { enabled: true, label: true });
    markdown.use(mdItAttrs);
    markdown.use(mdFootnotes, { backref: false });

    eleventyConfig.addFilter("markdown", (content) => {
      let r = '';
      if (content) r = markdown.render(content.trim());
      return r;
    });
  
    eleventyConfig.setLibrary("md", markdown);
  }

}
