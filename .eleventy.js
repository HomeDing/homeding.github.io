const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const myMarkdown = require("./.myMarkdown");
const pluginMermaid = require("@kevingimbel/eleventy-plugin-mermaid");


module.exports = function(eleventyConfig) {
  console.log("eleventy setup...");
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
  eleventyConfig.ignores.add("**/_*");
  eleventyConfig.ignores.add("**/_*.*");

  const contentFolders = ["boards", "boards", "concepts", "dev", "elements", "examples", "portal", "recipes", "sensors", "steps", "stories"];
  const assetFolders = ["i", "v09", "v09m", "home"];

  contentFolders.forEach(f => {
    eleventyConfig.addPassthroughCopy(f + "/**/*.svg");
    eleventyConfig.addPassthroughCopy(f + "/**/*.jpg");
    eleventyConfig.addPassthroughCopy(f + "/**/*.png");
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
  eleventyConfig.addGlobalData("layout", "page.njk");

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

  
  // Modify all URLs pointing to .md files in all .htm output in your project
  eleventyConfig.htmlTransformer.addUrlTransform(
    "htm",
   
    /**
     * transform internal links to markdown fils to the final url using the htm format.
     * @this {object}
     * @param {string} url given url in the document
     */
    (url) => {
      let lUrl = url.toLowerCase();
      if ((! lUrl.startsWith('http')) && (lUrl.endsWith('.md'))) {
        return(url.substring(0, url.length-2) + 'htm');
      }  
      return (url);
    },

    {
    	priority: -1, // run last (especially after PathToUrl transform)
    }
  );


  eleventyConfig.addTransform("insp", function(content) {
    // console.log( this.inputPath, this.outputPath );
    // note that this.outputPath is `false` for serverless templates
    // simply remove whitespace at the beginning of all textlines starting with a tag
    // content = content.replace(/$\s+</mg, "<");
    return (content);
  });

  eleventyConfig.addFilter("stringify", function(value) {
    console.log(value);
    return "logged";
  });

  eleventyConfig.addFilter("keys", function(value) {
    let result = [];
    for (const k in value) {
      result.push(k);
    }
    return JSON.stringify(result);
  });

  eleventyConfig.addFilter("item", function(obj, name) {
    return obj[name];
  });

  eleventyConfig.addFilter("print", function(value) {
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

  eleventyConfig.addFilter('unique', (list) => {
    const map = new Map(list.map((x) => [x, x]));
    return [...map.values()]
  })
  
  // ===== Shortcodes =====

  function findItem(col, name) {
    let item = undefined;

    if (!col) {
      console.error("findItem: no collection given.")

    } else if (!Array.isArray(col)) {
      console.error("findItem: bad collection given.")

    } else {
      item = col.find(e => e.url.includes('/' + name + '.'));
    }
    if (!item) {
      console.error(`findItem: entry ${name} not found.`)
    }
    return (item);
  }


  // include excerpt text by using: {% excerptOf collections, "map" %}
  eleventyConfig.addShortcode("excerptOf", function(col, name) {
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


  // include page title text by using: {% title collections, "map" %}
  eleventyConfig.addShortcode("titleOf", function(col, name) {
    if (!col) {
      console.error("titleOf: no collection given.")
    }
    if (Array.isArray(col)) {
      const page = col.find(e => e.url.includes('/' + name + '.'));
      if (page) {
        return (page.data.title);
      }
    }
    console.error(`titleOf: entry ${name} not found.`)
    return ('');
  }
  );


  // include page title text by using: {% title collections, "map" %}
  eleventyConfig.addShortcode("urlOf", function(col, name) {
    if (!col) {
      console.error("titleOf: no collection given.")
    }
    if (Array.isArray(col)) {
      const page = col.find(e => e.url.includes('/' + name + '.'));
      if (page) {
        return (page.url);
      }
    }
    console.error(`urlOf: entry ${name} not found.`)
    return ('');
  }
  );


  eleventyConfig.addNunjucksGlobal("findItem", function(col, name) {
    return findItem(col, name);
  });

  // include excerpt text by using: {% dataOf collections.Board, "map" %}
  eleventyConfig.addShortcode("dataOf", function(col, name, item) {
    if (!col) {
      console.error("dataOf: no collection given.")
    }
    if (Array.isArray(col)) {
      let page = col.find(e => e.url.includes('/' + name + '.htm'));
      if (!page) {
        page = col.find(e => e.url.includes(name + '.htm'));
      }
      if (page) {
        return (page.data[item]);
      }
    }
    console.error("dataOf: entry `" + name + "` not found.")
    return ('');
  }
  );


  // include excerpt text by using: {% excerptOf collections, "map" %}
  eleventyConfig.addPairedShortcode("card", function(content, img) {
    let out = `<div class="card autolink">`;
    if (img) out += `<img src="${img}">`;
    out += `<div class="body">\n${content}\n</div></div>\n`;
    return (out);
  });

  // include excerpt text by using: {% excerptOf collections, "map" %}
  eleventyConfig.addPairedShortcode("imgcard", function(content, img, link) {
    link = link.replace(/\.md$/, ".htm");
    let out = `<div class="imgcard">`;
    if (link) out += `<a href="${link}">`;
    if (img) out += `<img src="${img}">`;
    if (link) out += `</a>\n`;
    out += `\n${content}\n</div>\n`;
    return (out);
  });

  // ===== Markdown configuration =====

  eleventyConfig.addPlugin(myMarkdown);
  eleventyConfig.addPlugin(pluginMermaid);

  // console.log(eleventyConfig.ignores);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  }
};