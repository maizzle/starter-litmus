/*
|-------------------------------------------------------------------------------
| Development config               https://maizzle.com/docs/environments/#local
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run the `maizzle build` or `maizzle serve` and it
| has the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  baseImageURL: 'https://res.cloudinary.com/maizzle/image/upload/v1574765449/litmus/',
  build: {
    tailwind: {
      css: 'src/assets/css/main.css',
    },
    templates: {
      source: 'src/templates',
      destination: {
        path: 'build_local',
      },
    },
  },
  inlineCSS: {
    applySizeAttribute: {
      width: ['IMG'],
    },
  },
  extraAttributes: {
    table: {
      border: 0,
      cellpadding: 0,
      cellspacing: 0,
      role: 'presentation',
    },
  },
}
