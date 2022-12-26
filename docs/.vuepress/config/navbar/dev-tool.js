module.exports = {
    text: "开发工具",
    children: [
        {
            text: 'npm',
            link: '/npm'
        },
        {
            text: 'pnpm',
            link: '/pnpm'
        },
        {
            text: 'monorepo',
            link: '/monorepo'
        },
        {
            text: 'turborepo',
            link: '/turborepo'
        },
        {
            text: '编译工具',
            children: [
                {
                    text: 'webpack',
                    link: '/'
                },
                {
                    text: 'vite',
                    link: '/'
                },
            ]
        },
        {
            text: '项目管理',
            children: [
                {
                    text: 'Git',
                    link: '/git'
                },
                {
                    text: 'Github && GitLab',
                    link: '/'
                },
            ]
        },
        {
            text: '代码风格',
            children: [
                {
                    text: 'Eslint',
                    link: '/eslint'
                },
                {
                    text: 'Prettier',
                    link: '/prettier'
                },
            ]
        },

    ],
}