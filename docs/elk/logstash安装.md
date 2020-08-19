## logstash安装

### 镜像下载

```bash
docker pull docker.elastic.co/logstash/logstash:7.1.1
```

### 编辑配置

logstash.conf

```js
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

### 容器启动

```bash
docker run -p 5044:5044 --name logstash -d -v /var/elk/logstash.conf:/usr/share/logstash/pipeline/logstash.conf     docker.elastic.co/logstash/logstash:7.1.1
```

