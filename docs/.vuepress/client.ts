import {defineClientConfig} from '@vuepress/client'
// import NotFound from './layouts/NotFound.vue'
// import {onMounted} from 'vue'
//
// import {
//     defineArtalkConfig,
//     // defineGiscusConfig,
//     // defineTwikooConfig,
//     // defineWalineConfig,
// } from "vuepress-plugin-comment2/client";
//
// defineArtalkConfig({
//     // 选项
//     provider: "Artalk",
//     server:"https://408.142vip.cn",
//     site:'JavaScriptCollection',
// });

export default defineClientConfig({
    enhance({app, router, siteData}) {
    },
    // setup() {
    //     onMounted(() => {
    //         // 在 mounted 之后使用 DOM API
    //         document.querySelector('#app')
    //     })
    // },
    layouts: {},
    rootComponents: [],
})