import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/mmdapl/Desktop/github/JavaScriptCollection/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/mmdapl/Desktop/github/JavaScriptCollection/docs/.vuepress/theme/layouts/Layout.vue")),
}
