// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---readme-md": () => import("./../../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---src-example-index-mdx": () => import("./../../../src/example/index.mdx" /* webpackChunkName: "component---src-example-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

