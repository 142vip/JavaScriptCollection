export default {
    text: "后端【Node.js】",
    children: [
        {
            text: "Node.js",
            link: "/server-end/node-learn/",
        },
        {
            text: "ES6",
            link: "/server-end/node",
        },
        {
            text: "TypeScript",
            link: "/server-end/typescript",
        },
        {
            text: "ORM框架",
            children: [
                {
                    text: "Sequelize",
                    link: "/server-end/framework/express-learn",
                },
                {
                    text: 'TypeOrm',
                    link: '/server-end/framework/koa-learn'
                },
            ],
        },
        {
            text: "应用框架",
            children: [
                {
                    text: "Express",
                    link: "/server-end/framework/express-learn",
                },
                {
                    text: 'Koa', link: '/server-end/framework/koa-learn'
                },
                {
                    text: "Egg.js",
                    link: "/server-end/framework/egg-learn",
                },
                {
                    text: "Nest.js",
                    link: "/server-end/framework/nest-learn",
                },
                {
                    text: "Midway.js",
                    link: "/server-end/framework/midway-learn",
                },
            ],
        },
        {
            text: "数据库",
            children: [
                {
                    text: "Redis",
                    link: "/server-end/database/redis",
                },
                {
                    text: "MySQL",
                    link: "/server-end/database/mysql",
                },
                {
                    text: "MongoDB",
                    link: "/server-end/database/mongo",
                },
            ],
        },

    ],
}