import pluginsConfig from "./config/plugins.config";
import themeConfig from "./config/theme.config";


export default {
    title: "凡是过往、皆为序章",
    description: "一本有趣的JavaScript合集",
    base: "/JavaScriptCollection/",
    port: 5000,
    head: [
        ["link", {rel: "icon", href: "/fight_favicon.ico"}]
    ],
    theme: themeConfig,
    // 插件配置
    plugins:pluginsConfig,
};