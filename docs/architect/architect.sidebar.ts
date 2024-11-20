export const architectSidebar = [
  {
    text: '综合知识',
    collapsible: true,
    link: '/architect/综合知识/',
  },
  {
    text: '案例分析',
    base: '/architect/案例分析/',
    collapsible: true,
    children: [
      { text: '软件架构设计', link: '1-软件架构设计.md' },
      { text: '系统开发基础', link: '2-系统开发基础.md' },
      { text: '数据库系统', link: '3-数据库系统.md' },
      { text: 'Web应用开发', link: '4-Web应用开发.md' },
      { text: '设计模式', link: '5-设计模式.md' },
    ],
  },
  {
    text: '论文写作',
    collapsible: true,
    link: '/architect/论文写作/',
  },
  {
    text: '在线刷题',
    collapsible: true,
    children: [
      {
        text: '报名',
        link: 'https://www.nowcoder.com/',
      },
      {
        text: '查分',
        link: 'https://leetcode-cn.com/',
      },
    ],
  },
]
