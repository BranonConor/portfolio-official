const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/branoneusebio/Documents/Software Dev/branon-eusebio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/branoneusebio/Documents/Software Dev/branon-eusebio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/branoneusebio/Documents/Software Dev/branon-eusebio/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/branoneusebio/Documents/Software Dev/branon-eusebio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/branoneusebio/Documents/Software Dev/branon-eusebio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/branoneusebio/Documents/Software Dev/branon-eusebio/src/pages/projects.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/branoneusebio/Documents/Software Dev/branon-eusebio/src/pages/using-typescript.tsx")))
}

