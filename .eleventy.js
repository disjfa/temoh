const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setUseGitIgnore(false);

  // eleventyConfig.addCollection("nav", function(collection) {
  //   return collection.getFilteredByTag("menu").sort((a, b) => a.data.order - b.data.order);
  // });

  eleventyConfig.addFilter('highlight', function (myVariable, lang = 'html') {
    let html = Prism.highlight(myVariable, Prism.languages[lang], lang);
    html = `<pre class="language-${lang}"><code class="language-${lang}">${html}</code></pre>`;

    return html;
  });

  return {
    pathPrefix: "/css-test",

    dir: {
      input: "_site",
      output: "dist"
    }
  };
};
