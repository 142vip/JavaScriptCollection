export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "JavaScriptCollection",
  "description": "A lightweight creator for VuePress project.",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/assets/logo.png"
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
