import {defineClientConfig} from '@vuepress/client'
// import NotFound from './layouts/NotFound.vue'
// import {onMounted} from 'vue'

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