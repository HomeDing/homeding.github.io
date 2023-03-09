const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const myMarkdown = require("./.myMarkdown");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.chokidarConfig = {
    usePolling: true
  };

  // eleventy global settings
  eleventyConfig.setQuietMode(true);

  // Copy any images and css to `_site`, via Glob pattern (in 0.9.0+)
  // Keeps the same directory structure.

  eleventyConfig.ignores.add("_site/**");
  eleventyConfig.ignores.add(".vscode/**");

  const contentFolders = ["boards", "boards/esp32", "concepts", "dev", "elements/audio", "elements/display", "elements", "examples", "portal", "recipes", "sensors", "steps", "stories"];
  const assetFolders = ["i", "v03", "v03m", "v09", "v09m", "home"];

  contentFolders.forEach(f => {
    eleventyConfig.addPassthroughCopy(f + "/*.svg");
    eleventyConfig.addPassthroughCopy(f + "/*.jpg");
    eleventyConfig.addPassthroughCopy(f + "/*.png");
    eleventyConfig.addWatchTarget(f);
  })
  eleventyConfig.setWatchThrottleWaitTime(2000); // in milliseconds

  assetFolders.forEach(f => {
    eleventyConfig.ignores.add(f);
    eleventyConfig.addPassthroughCopy(f);
  })

  eleventyConfig.addPassthroughCopy("./robots.txt");
  eleventyConfig.addPassthroughCopy("./favicon*.*");
  eleventyConfig.addPassthroughCopy("./pages.js");
  eleventyConfig.addPassthroughCopy("./story.js");
  eleventyConfig.addPassthroughCopy("./microsvg.js");
  eleventyConfig.addPassthroughCopy("./elementsvg.js");
  eleventyConfig.addPassthroughCopy("./element*.json");
  eleventyConfig.addPassthroughCopy("./*.svg");
  eleventyConfig.addPassthroughCopy("./homeding.png");

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

  eleventyConfig.addFilter("item", function (obj, name) {
    return obj[name];
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

    const res = JSON.stringify(value, detect, 2);
    // console.log('>>', res);
    return (res);

  });

  // ===== Shortcodes =====

  // include excerpt text by using: {% excerptOf collections, "map" %}
  eleventyConfig.addShortcode("excerptOf", function (col, name) {
    if (!col) {
      console.error("excerptOf: no collection given.")
    }
    if (Array.isArray(col)) {
      const page = col.find(e => e.url.includes('/' + name + '.'));
      if (page) {
        return (page.data.excerpt);
      }
    }
    console.error(`excerptOf: entry ${name} not found.`)
    return ('');
  }
  );


  // include excerpt text by using: {% dataOf collections.Board, "map" %}
  eleventyConfig.addShortcode("dataOf", function (col, name, item) {
    if (!col) {
      console.error("dataOf: no collection given.")
    }
    if (Array.isArray(col)) {
      const page = col.find(e => e.url.includes(name + '.htm'));
      if (page) {
        return (page.data[item]);
      }
    }
    console.error("dataOf: entry not found.")
    return ('');
  }
  );


  // include excerpt text by using: {% excerptOf collections, "map" %}
  eleventyConfig.addPairedShortcode("imgcard", function (content, img, link) {
    var out = `<div class="imgcard"><a href="${link}"><img src="${img}"></a>\n${content}\n</div>`;
    return (out);
  });

  eleventyConfig.addPairedShortcode("iconcard", function (content, icon, link) {
    var out = `<div class="iconcard"><a href="${link}"><svg class="icon"><use href="/icons.svg#${icon}"></use></svg></a>\n`
      + `<a href="${link}"><h3>${icon}</h3></a>\n${content}\n</div>`;
    return (out);
  });

  // ===== Markdown configuration =====

  eleventyConfig.addPlugin(myMarkdown);

  // console.log(eleventyConfig.ignores);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  }
};