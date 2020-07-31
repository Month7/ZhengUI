const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yinzheng/Desktop/组件库/ZhengUI/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/yinzheng/Desktop/组件库/ZhengUI/README.md"))),
  "component---src-example-index-mdx": hot(preferDefault(require("/Users/yinzheng/Desktop/组件库/ZhengUI/src/example/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/yinzheng/Desktop/组件库/ZhengUI/.docz/src/pages/404.js")))
}

