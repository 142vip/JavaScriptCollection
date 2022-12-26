module.exports=  {
    text: "后端【Node.js】",
    children: [
        {
            text: "Node.js",
            link: "/server-end/node",
        },
        {
            text: "TypeScript",
            link: "/server-end/typescript",
        },
        {
            text: "常用框架",
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
                    text: "Midway",
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
                    text: "Mongo",
                    link: "/server-end/database/mongo",
                },
            ],
        },
        {
            text: "消息中间件",
            children: [
                {
                    text: "RabbitMQ",
                    link: "/mq",
                },
                {
                    text: 'Kafka',
                    link: '/'
                },
                {
                    text: 'RocketMQ',
                    link: '/'
                }
            ],
        },
        {
            text: "容器相关",
            children: [
                {
                    text: "Docker基础",
                    link: "/server-end/container-learn/docker-base",
                },

                {
                    text: "服务部署",
                    link: "/server-end/container-learn/server-deploy",
                },
                {
                    text: "服务集群编排",
                    link: "/server-end/container-learn/docker-layout",
                },
            ],
        }
    ],
}