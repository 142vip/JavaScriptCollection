import { searchProPlugin } from 'vuepress-plugin-search-pro'

/**
 * 使用的插件配置
 */

export const pluginConfig = {
  plugins: [
    // 搜索
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page: any) => page.frontmatter.category,
          formatter: '分类：$content',
        },
        {
          getter: page => page.frontmatter.tag,
          formatter: '标签：$content',
        },
      ],
    }),
  ],
}
