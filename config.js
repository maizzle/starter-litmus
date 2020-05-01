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
  build: {
    assets: {
      source: 'src/assets/images',
      destination: 'images',
    },
    destination: {
      path: 'build_local',
    },
    tailwind: {
      css: 'src/assets/css/main.css',
    },
    templates: {
      root: 'src/templates',
    },
  },
  baseImageURL: 'https://res.cloudinary.com/maizzle/image/upload/v1574765449/litmus/',
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
