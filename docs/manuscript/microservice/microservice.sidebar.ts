export const microserviceSidebar = [
  {
    text: 'RPC远程服务',
    children: [
      {
        text: 'grpc',
        link: 'grpc.md'
      },
      {
        text: 'node-grpc',
        link: 'node-grpc.md'
      },
      {
        text: 'egg-grpc-client',
        link: 'egg-grpc-client.md'
      },
      {
        text: 'egg-grpc-server',
        link: 'egg-grpc-server.md'
      }
    ]
  },
  {
    text: '服务注册|发现',
    children: [
      {
        text: 'Apollo',
        link: '/manuscript/server-end/database/redis'
      },
      {
        text: 'Consul',
        link: '/manuscript/server-end/database/mysql'
      },
      {
        text: 'Nacos',
        link: '/manuscript/server-end/database/mongo'
      }
    ]
  },
  {
    text: '网关',
    link: '/manuscript/kong'
  },
  {
    text: 'ELK',
    link: '/manuscript/elk'
  },
  {
    text: '消息中间件',
    children: [
      {
        text: 'RabbitMQ',
        link: '/manuscript/mq'
      },
      {
        text: 'Kafka',
        link: '/'
      },
      {
        text: 'RocketMQ',
        link: '/'
      }
    ]
  },
  {
    text: '容器相关',
    children: [
      {
        text: 'docker',
        link: '/manuscript/server-end/container-learn/docker-base'
      },

      {
        text: 'docker-compose',
        link: '/manuscript/server-end/container-learn/server-deploy'
      },
      {
        text: 'k8s',
        link: '/manuscript/server-end/container-learn/docker-layout'
      }
    ]
  }]
