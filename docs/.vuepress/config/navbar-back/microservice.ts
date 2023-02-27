export default {
    text: '微服务',
    collapsible: true,
    children: [
        {
            text: "RPC框架",
            children: [
                {
                    text: "grpc",
                    link: "/server-end/database/redis",
                },
                {
                    text: "egg-grpc-client",
                    link: "/server-end/database/mysql",
                },
                {
                    text: "egg-grpc-server",
                    link: "/server-end/database/mongo",
                },
            ],
        },
        {
            text: "服务注册|发现",
            children: [
                {
                    text: "Apollo",
                    link: "/server-end/database/redis",
                },
                {
                    text: "Consul",
                    link: "/server-end/database/mysql",
                },
                {
                    text: "Nacos",
                    link: "/server-end/database/mongo",
                },
            ],
        },
        {
            text: '网关Kong',
            link: '/kong'
        },
        {
            text: 'ELK',
            link: '/elk'
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
                    text: "docker",
                    link: "/server-end/container-learn/docker-base",
                },

                {
                    text: "docker-compose",
                    link: "/server-end/container-learn/server-deploy",
                },
                {
                    text: "k8s",
                    link: "/server-end/container-learn/docker-layout",
                },
            ],
        }]
}