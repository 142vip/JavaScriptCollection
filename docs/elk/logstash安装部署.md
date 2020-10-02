#### 下载docker镜像

```bash
$ docker pull docker.elastic.co/logstash/logstash:6.5.4
```
#### 创建文件夹 (用于容器文件的挂载)

```bash
$ mkdir /usr/local/logstash/config
```

#### 创建相关配置文件
- logstash.yml (空文件就行)
- log4j2.properties
```bash
logger.elasticsearchoutput.name = logstash.outputs.elasticsearch
logger.elasticsearchoutput.level = debug
```


- pipelines.yml(那个小杠杠很重要)

```bash
- pipeline.id: my-logstash
  path.config: "/usr/share/logstash/config/*.conf"
  pipeline.workers: 3
```
*.conf 文件[建议logstash.conf]
```bash
input {
  tcp {
    mode => "server"
    host => "0.0.0.0"
    port => 4567
  }
}
output {
  elasticsearch {
    action => "index"
    hosts  => "ip:200"
    index  => "index"
  }
}
```

#### 启动命令

```bash
$ docker run -d -p 5044:5044 -p 9600:9600 
-v /usr/local/logstash/config/:/usr/share/logstash/config/  docker.elastic.co/logstash/logstash:6.5.4
```

