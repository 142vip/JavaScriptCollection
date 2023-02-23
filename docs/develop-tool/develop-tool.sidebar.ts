export const developToolSidebar = [
  {
    text: '软件安装',
    collapsible: true,
    children: [
      {
        text: 'IDEA',
        link: '/develop-tool/npm/npm'
      },
      {
        text: '软件大杂烩',
        link: '/develop-tool/software-install/readme.md'
      }
    ]
  },
  {
    text: '包管理器',
    collapsible: true,
    children: [
      {
        text: 'npm',
        link: '/develop-tool/npm/npm'
      },
      {
        text: 'pnpm',
        link: '/develop-tool/npm/pnpm'
      },
      {
        text: 'yarn',
        link: '/develop-tool/npm/yarn'
      }
    ]
  },
  {
    text: 'monorepo',
    collapsible: true,
    children: [
      {
        text: 'pnpm实现',
        link: '/develop-tool/monorepo/pnpm-style.md'
      },
      {
        text: 'turboRepo',
        link: '/develop-tool/monorepo/turboRepo.md'
      }
    ]
  },
  {
    text: '编译工具',
    collapsible: true,
    children: [
      {
        text: 'webpack',
        link: '/'
      },
      {
        text: 'vite',
        link: '/'
      }
    ]
  },
  {
    text: '代码管理',
    collapsible: true,
    children: [
      {
        text: 'Git',
        children: [
          {
            text: '基本操作',
            link: '/develop-tool/code-manager/git.md'
          },
          {
            text: '提交规则',
            link: '/develop-tool/code-manager/git-commit-rule.md'
          }

        ]
      },
      {
        text: 'Github && GitLab',
        link: '/develop-tool/code-manager/github.md'
      }
    ]
  },
  {
    text: '代码风格',
    children: [
      {
        text: 'Eslint',
        link: '/develop-tool/eslint'
      },
      {
        text: 'Prettier',
        link: '/develop-tool/prettier'
      }
    ]
  }

]
