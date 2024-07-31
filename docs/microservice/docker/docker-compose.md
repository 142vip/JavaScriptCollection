---
title: Docker-Compose
permalink: /microservice/docker-compose.html
---

# Docker-Compose

## 基本介绍

## 安装

```bash
## 文件下载 可能下载有点慢
curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-uname -s-uname -m -o /usr/local/bin/docker-compose

## 【推荐】下载慢，可以尝试：
curl -L https://get.daocloud.io/docker/compose/releases/download/1.24.1/docker-compose-uname -s-uname -m > /usr/local/bin/docker-compose

## 配置docker-compose执行权限
chmod +x /usr/local/bin/docker-compose

## 查看版本
docker-compose version
安装完成后，就可以查看docker-compose版本信息
[root@172-16-203-143 ~]# docker-compose version
docker-compose version 1.24.1, build 4667896b
docker-py version: 3.7.3
CPython version: 3.6.8
OpenSSL version: OpenSSL 1.1.0j  20 Nov 2018
另外，docker-compose的操作和docker非常类似，可以简单记忆：
## 服务启动，默认Dockerfile  -d:后台启动，不加为前台启动
docker-compose up -d

## 服务down 相当于kill
docker-compose down
```
