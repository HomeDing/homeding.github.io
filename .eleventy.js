const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const myMarkdown = require("./.myMarkdown");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setQuietMode(true);

  // Copy any images and css to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("**/*.svg");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");

  eleventyConfig.addPassthroughCopy("./pages.js");
  eleventyConfig.addPassthroughCopy("element*.json");

  // https://www.11ty.dev/docs/data-global-custom/
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.htm");
  eleventyConfig.addGlobalData("layout", "default.njk");

  // https://www.11ty.dev/docs/copy/#passthrough-by-file-extension
  // eleventyConfig.setTemplateFormats([
  //   "md",
  //   "css" // css is not yet a recognized template extension in Eleventy
  // ]);

  eleventyConfig.addFilter("stringify", function (value) {
    return JSON.stringify(value);
  });

  eleventyConfig.addFilter("keys", function (value) {
    let result = [];
    for (const k in value) {
      result.push(k);
    }
    return JSON.stringify(result);
  });

  eleventyConfig.addFilter("print", function (value) {
    const seen = new Set();

    function detect(k, v) {
      // console.log(">>", k, v);
      if (k === 'data') {
        return ("...0");
      } else if (k === 'all') {
        return ("...1");

      } else if (typeof v === 'function') {
        return ("f()");
      } else if (typeof v === 'object') {
        if (seen.has(v)) {
          return ("--");
        } else {
          seen.add(v);
        }
      }
      return (v);
    };

    eleventyConfig.addFilter("debugger", (...args) => {
      console.log(...args)
      // debugger;
      // console.log('>>', value);
    })


    const res = JSON.stringify(value, detect, 2);
    // console.log('>>', res);
    return (res);

  });

  // ===== Shortcodes =====

  // eleventyConfig.addShortcode("excerpt", function (icon, text) {
  //   return `<div class="iconcard">
  //   <svg class="icon"><use href="/icons.svg#${icon}"></use></svg>
  //   ${text}
  //   </div>`;
  // });


  // ===== Markdown configuration =====

  eleventyConfig.addPlugin(myMarkdown);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  }
};