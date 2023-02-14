import pluginsConfig from "./config/plugins.config";
import themeConfig from "./config/theme.config";

// 用于区分base路径，是否nginx代理
const PROXY_DOMAIN=process.env.PROXY_DOMAIN||false

export default {
    title: "凡是过往、皆为序章",
    description: "一本有趣的JavaScript合集",
    base: PROXY_DOMAIN ? "/JavaScriptCollection/":"/",
    port: 5000,
    head: [
        ["link", {rel: "icon", href: "/fight_favicon.ico"}]
    ],
    // 主题配置
    ...themeConfig,
    // 插件配置
    ...pluginsConfig,
};

