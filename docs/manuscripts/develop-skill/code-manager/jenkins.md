
# Jenkins搭建


```bash
docker run \
  -u root \
  -d \
  --name=jenkins-fix \
  --restart=always \
  -p 8082:8080 \
  -p 50002:50000 \
  -v /data/jenkins-fix/data/:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkins/jenkins
```

对应docker-compose.yaml文件
