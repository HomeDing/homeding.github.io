const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const myMarkdown = require("./.myMarkdown");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // eleventy global settings
  eleventyConfig.setQuietMode(true);

  // Copy any images and css to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.

  eleventyConfig.ignores.add(".git/**");
  eleventyConfig.ignores.add("_site/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add(".vscode/**");

  const contentFolders = ["boards", "concepts", "dev", "elements", "examples", "portal", "recipes", "sensors", "steps", "stories"];
  const assetFolders = ["i", "v02", "v02m", "v03", "v03m"];

  contentFolders.forEach(f => {
    eleventyConfig.addPassthroughCopy(f + "/*.svg");
    eleventyConfig.addPassthroughCopy(f + "/*.jpg");
    eleventyConfig.addPassthroughCopy(f + "/*.png");
  })

  assetFolders.forEach(f => {
    eleventyConfig.ignores.add(f);
    eleventyConfig.addPassthroughCopy(f);
  })

  eleventyConfig.addPassthroughCopy("./robots.txt");
  eleventyConfig.addPassthroughCopy("./favicon*.*");
  eleventyConfig.addPassthroughCopy("./pages.js");
  eleventyConfig.addPassthroughCopy("./element*.json");
  eleventyConfig.addPassthroughCopy("./*.svg");

  // https://www.11ty.dev/docs/data-global-custom/
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.htm");
  eleventyConfig.addGlobalData("layout", "default.njk");

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "--- excerpt ---"
  });

  // https://www.11ty.dev/docs/copy/#passthrough-by-file-extension
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "css" // css is not yet a recognized template extension in Eleventy
  ]);

  eleventyConfig.addTransform("insp", function (content) {
    // console.log( this.inputPath, this.outputPath );
    // note that this.outputPath is `false` for serverless templates
    // simply remove whitespace at the beginning of all textlines starting with a tag
    // content = content.replace(/$\s+</mg, "<");
    return (content);
  });

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

  // console.log(eleventyConfig.ignores);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  }
};