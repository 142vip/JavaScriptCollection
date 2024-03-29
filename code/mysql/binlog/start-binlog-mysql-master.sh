#!/bin/bash

###
# @Description: binlog方式搭建一主一从mysql，主库初始化脚本
# @Version: Beata1.0
# @Author: 微信公众号：储凡
# @Date: 2020-09-03 22:35:07
# @LastEditors: 微信公众号：储凡
# @LastEditTime: 2020-09-03 22:35:43
###


## 执行脚本开始

echo '------start shell to  create binlog-mysql-master container-----'
## docker启动基于binlog主从的mysql-master容器，容器名：binlog-mysql-master

docker run --name binlog-mysql-master \
--restart=always \
-p 3001:3306 \
-v /web-project/mysql/binlog/config:/etc/mysql/conf.d \
-v /web-project/mysql/binlog/data:/var/lib/mysql \
-v /web-project/mysql/binlog/logs:/logs \
-e MYSQL_ROOT_PASSWORD=123456 \
-e TZ=Asia/Shanghai \
-d mysql:5.7

## 用户：root   密码：123456
## 端口：3001
echo '--------shell ending , you can find the container--------'

## 打印正在运行的容器
echo '--------list all runnint containers--------'
docker ps

## 查询容器ip
echo '--------binlog-mysql-slave container IPAddress in docker--------'
docker inspect --format='{{.NetworkSettings.IPAddress}}' binlog-mysql-master