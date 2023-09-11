export const developSkillSidebar = [
  {
    text: '软件安装',
    link: 'software-install/readme.md'
  },
  {
    text: '包管理器',
    collapsible: true,
    children: [
      {
        text: 'npm',
        link: 'npm/npm'
      },
      {
        text: 'pnpm',
        link: 'npm/pnpm'
      },
      {
        text: 'yarn',
        link: 'npm/yarn'
      }
    ]
  },
  {
    text: 'monorepo',
    collapsible: true,
    children: [
      {
        text: 'pnpm实现',
        link: 'monorepo/pnpm-style.md'
      },
      {
        text: 'turboRepo',
        link: 'monorepo/turboRepo.md'
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
            link: 'code-manager/git.md'
          },
          {
            text: '分支版本规范',
            link: 'code-manager/git-branch-rule.md'
          },
          {
            text: '提交规范',
            link: 'code-manager/git-commit-rule.md'
          },
          {
            text: '修改历史提交信息',
            link: 'code-manager/git-info-reset.md'
          }
        ]
      },
      {
        text: 'Github && GitLab',
        link: 'code-manager/github.md'
      },
      {
        text: 'CI && CD',
        children: [{
          text: 'Jenkins',
          link: 'code-manager/jenkins.md'
        }]
      }
    ]
  },
  {
    text: '代码风格',
    collapsible: true,
    children: [
      {
        text: 'Eslint',
        link: 'code-style/eslint'
      },
      {
        text: 'Prettier',
        link: 'code-style/prettier'
      }
    ]
  }

]
