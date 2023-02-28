export const developSkillSidebar = [
  {
    text: '软件安装',
    link: '/develop-skill/software-install/readme.md'
  },
  {
    text: '包管理器',
    collapsible: true,
    children: [
      {
        text: 'npm',
        link: '/develop-skill/npm/npm'
      },
      {
        text: 'pnpm',
        link: '/develop-skill/npm/pnpm'
      },
      {
        text: 'yarn',
        link: '/develop-skill/npm/yarn'
      }
    ]
  },
  {
    text: 'monorepo',
    collapsible: true,
    children: [
      {
        text: 'pnpm实现',
        link: '/develop-skill/monorepo/pnpm-style.md'
      },
      {
        text: 'TurboRepo',
        link: '/develop-skill/monorepo/turboRepo.md'
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
            link: '/develop-skill/code-manager/git.md'
          },
          {
            text: '分支版本规范',
            link: '/develop-skill/code-manager/git-branch-rule.md'
          },
          {
            text: '提交规范',
            link: '/develop-skill/code-manager/git-commit-rule.md'
          },
          {
            text: '修改历史提交信息',
            link: '/develop-skill/code-manager/git-info-reset.md'
          }
        ]
      },
      {
        text: 'Github && GitLab',
        link: '/develop-skill/code-manager/github.md'
      }
    ]
  },
  {
    text: '代码风格',
    collapsible: true,
    children: [
      {
        text: 'Eslint',
        link: '/develop-skill/eslint'
      },
      {
        text: 'Prettier',
        link: '/develop-skill/prettier'
      }
    ]
  }

]
