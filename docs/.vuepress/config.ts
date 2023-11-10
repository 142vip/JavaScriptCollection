import pluginsConfig from "./config/plugins.config";
import themeConfig from "./config/theme.config";
import {defineUserConfig, viteBundler} from "vuepress";
import {fileURLToPath} from 'node:url'
import {getDirname, path} from "@vuepress/utils";
// @ts-ignore
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 用于区分base路径，是否nginx代理
const PROXY_DOMAIN = process.env.PROXY_DOMAIN || false

export default defineUserConfig({
    title: "凡是过往、皆为序章",
    description: "一本有趣的JavaScript合集",
    base: PROXY_DOMAIN ? "/JavaScriptCollection/" : "/",
    port: 5000,
    head: [
        [
            "link", {rel: "icon", href: "fight_favicon.ico"}
        ],
        // vercel统计 相关配置
        [
            'script', {type: 'text/javascript', src: '/_vercel/insights/script.js'}
        ],
        // 百度统计
        [
        'script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?613c9d7af9e1c9a7f9eef6a55aa2399d";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();`
        ]
    ],
    markdown: {
        // todo 引入代码文件时的路径替换
        importCode: {
            handleImportPath: (str) => {
                console.log(str,__dirname)
                if (str.includes('@code')) {
                    return str.replace(/^@code/, path.resolve(__dirname, '../../code/'))
                }
                if (str.includes('@algorithm')) {
                    return str.replace(/^@algorithm/, path.resolve(__dirname, '../../code/algorithm/'))
                }
                if (str.includes('~')) {
                    return str.replace(/^~/, path.resolve(__dirname, '../../'))
                }
                return str
            },
        },
        // md doc formatter  headerDepth
        headers: {
            level: [2, 3, 4]
        }
    },
    // 主题配置
    ...themeConfig,
    // 插件配置
    ...pluginsConfig,
    shouldPrefetch: false,
})

