export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "凡是过往、皆为序章",
  "description": "一本有趣的JavaScript合集",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "./favicon.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
