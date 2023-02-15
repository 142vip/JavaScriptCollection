import {searchProPlugin} from "vuepress-plugin-search-pro";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance"
// @ts-ignore
import {path} from "@vuepress/utils";
/**
 * 使用的插件配置
 */
export default {
    plugins:[
        searchProPlugin({
            // 索引全部内容
            indexContent: true,
            // 为分类和标签添加索引
            customFields: [
                {
                    getter: (page:any) => page.frontmatter.category,
                    formatter: "分类：$content",
                },
                {
                    getter: (page) => page.frontmatter.tag,
                    formatter: "标签：$content",
                },
            ],
        }),
        mdEnhancePlugin({
            // your options
            // todo 引入代码文件时的路径替换 支持@code别名
            include: {
                resolvePath: (str) =>{
                    console.log(2222,str,str.replace(/^@code/, path.resolve(__dirname, '../../code/')))
                    return str.replace(/^@code/, path.resolve(__dirname, '../../code/'))
                }
            },
        }),
    ]
}