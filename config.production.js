module.exports = {
  build: {
    destination: {
      path: 'dist',
    },
  },

  inlineCSS: {
    enabled: true,
  },

  cleanup: {
    removeUnusedCSS: {
      enabled: true,
    },

    replaceStrings: {
      '\\n\\n': '\n',
      '\\n<!-->': '<!-->',
    },
  },

  prettify: {
    enabled: true,
  },
}
