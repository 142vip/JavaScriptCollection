export const MicroserviceSidebar = [
  {
    text: 'RPC远程服务',
    prefix: 'rpc',
    children: [
      {
        text: 'grpc',
        link: 'grpc.md',
      },
      {
        text: 'node-grpc',
        link: 'node-grpc.md',
      },
    ],
  },
  {
    text: '服务注册|发现',
    collapsible: true,
    children: [
      {
        text: 'Apollo',
        link: 'apollo.md',
      },
      {
        text: 'Consul',
        link: 'consul.md',
      },
      {
        text: 'Nacos',
        link: 'nacos.md',
      },
    ],
  },
  {
    text: '网关',
    link: 'gateway.md',
  },
  {
    text: 'ELK',
    prefix: 'elk',
    children: [
      {
        text: 'Elasticsearch',
        link: 'elasticsearch.md',
      },
      {
        text: 'Kibana',
        link: 'kibana.md',
      },
      {
        text: 'Logstash',
        link: 'logstash.md',
      },
      {
        text: 'Filebeat',
        link: 'filebeat.md',
      },
    ],
  },
  {
    text: '消息中间件',
    // prefix: 'mq',
    children: [
      {
        text: 'RabbitMQ',
        link: 'mq/rabbitmq',
      },
      {
        text: 'Kafka',
        link: 'mq/kafka.md',
      },
      {
        text: 'RocketMQ',
        link: 'mq/rocketmq.md',
      },
    ],
  },
  {
    text: '容器相关',
    prefix: '',
    children: [
      {
        text: 'Dockerfile',
        link: 'docker/dockerfile.md',
      },
      {
        text: 'docker',
        link: 'docker/docker.md',
      },
      {
        text: 'docker-compose',
        link: 'docker/docker-compose.md',
      },
      {
        text: 'k8s',
        link: 'k8s.md',
      },
    ],
  },
]
