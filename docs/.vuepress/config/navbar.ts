import {battleInterviewSidebar} from "../../manuscript/battle-interview/battle-interview.sidebar";

export default [
    {
        text: "首页", link: "/",
    },
    {
        text: "前端", link: "/manuscript/front-end",
    },
    {
        text: "Node后端", link: "/manuscript/server-end",
    },
    {
        text: "Solo算法", link: "/manuscript/solo-algorithm",
    },
    {
        text: "开发技巧", link: "/manuscript/develop-skill",
    },
    {
        text: "读书整理", link: "/manuscript/read-books",
    },
    {
        text: '微服务',
        collapsible: true,
        children: [
            {
                text: "RPC框架",
                children: [
                    {
                        text: "grpc",
                        link: "/manuscript/server-end/database/redis",
                    },
                    {
                        text: "egg-grpc-client",
                        link: "/manuscript/server-end/database/mysql",
                    },
                    {
                        text: "egg-grpc-server",
                        link: "/manuscript/server-end/database/mongo",
                    },
                ],
            },
            {
                text: "服务注册|发现",
                children: [
                    {
                        text: "Apollo",
                        link: "/manuscript/server-end/database/redis",
                    },
                    {
                        text: "Consul",
                        link: "/manuscript/server-end/database/mysql",
                    },
                    {
                        text: "Nacos",
                        link: "/manuscript/server-end/database/mongo",
                    },
                ],
            },
            {
                text: '网关Kong',
                link: '/manuscript/kong'
            },
            {
                text: 'ELK',
                link: '/manuscript/elk'
            },
            {
                text: "消息中间件",
                children: [
                    {
                        text: "RabbitMQ",
                        link: "/manuscript/mq",
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
                        text: "docker",
                        link: "/manuscript/server-end/container-learn/docker-base",
                    },

                    {
                        text: "docker-compose",
                        link: "/manuscript/server-end/container-learn/server-deploy",
                    },
                    {
                        text: "k8s",
                        link: "/manuscript/server-end/container-learn/docker-layout",
                    },
                ],
            }]
    },
    {
        text: "Battle面试官",
        collapsible: true,
        children: battleInterviewSidebar,
    },
    {
        text: "其他", link: "/manuscript/other",
    },
];
