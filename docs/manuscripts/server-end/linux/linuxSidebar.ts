export const LinuxSidebar = [{
  text: 'Linux',
  children: [
    {
      text: '基本指令',
      link: 'base-shell.md'
    },
    {
      text: '软件安装',
      link: 'soft-install.md'
    },
    {
      text: '包管理器',
      link: 'package-manage.md'
    },
    {
      text: '常用软件',
      collapsible: true,
      children: [
        {
          text: 'vim',
          link: 'vim.md'
        },
        {
          text: 'curl',
          link: 'curl.md'
        }
      ]
    }
  ]
}]
