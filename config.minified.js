module.exports = {
  build: {
    destination: {
      path: 'dist/minified',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
      uglify: true,
    },
  },

  minify: {
    enabled: true,
    minifyCSS: true,
    maxLineLength: 500,
    collapseWhitespace: true,
    processConditionalComments: true,
  },
}
