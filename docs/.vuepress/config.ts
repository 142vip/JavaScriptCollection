import pluginsConfig from "./config/plugins.config";
import themeConfig from "./config/theme.config";
import {defineUserConfig} from "vuepress";
import { fileURLToPath } from 'node:url'
import { path } from "@vuepress/utils";
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
        ["link", {rel: "icon", href: "/fight_favicon.ico"}]
    ],
    markdown: {
        // todo 引入代码文件时的路径替换
        importCode: {
            handleImportPath: (str) =>{
                return str.replace(/^@code/, path.resolve(__dirname, '../../code/'))
            },
        },
    },
    // 主题配置
    ...themeConfig,
    // 插件配置
    ...pluginsConfig,
    shouldPrefetch: false,
})

