export const developSkillSidebar = [
  {
    text: '软件安装',
    link: 'software-install/readme.md'
  },
  {
    text: 'npm&pnpm&yarn',
    link: 'package-manager.md',
  },
  {
    text: 'monorepo',
    link:"monorepo.md",
  },
  {
    text: '编译工具',
    // collapsible: true,
    prefix:"build-tools",
    children: [
      {
        text: 'webpack',
        link: 'webpack.md'
      },
      {
        text: 'vite',
        link: 'vite.md'
      }
    ]
  },
  {
    text: '代码管理',
    prefix:"code-manager",
    children: [
      {
        text: 'GIT',
        link:"git.md",
      },
      {
        text: '托管平台',
        link: 'github.md'
      },
      {
        text: '流水线',
        link: 'github-actions.md'
      },
      {
        text: 'CI & CD',
        link: 'CI-CD.md'
      },
      {
        text: 'Jenkins',
        link: 'jenkins.md'
      }
    ]
  },
  {
    text: '代码风格',
    // collapsible: true,
    prefix: "code-style",
    children: [
      {
        text: 'Eslint',
        link: 'eslint.md'
      },
      {
        text: 'Prettier',
        link: 'prettier.md'
      }
    ]
  }

]
