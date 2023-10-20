---
title: 哨兵模式
permalink: /manuscripts/server-end/database/redis/sentinel.html
---
# 哨兵模式

基本原理
Redis的Sentinel系统用于管理多个Redis，主要执行:

- 监控：Sentinel会不断的检查主从服务器运行状态
- 提醒：当某个Redis服务器出现故障，可通过API或者其他应用程序发送通知
- 自动故障迁移：当一个主服务器不能正常工作时，Sentinel会进行一次故障自动迁移，会将失效主服务器的从服务器选举出一个新的主服务器，剩下的从服务器将会自动连接复制选举出来的新服务器的数据。
- 配置提供者：在 Redis Sentinel 模式下，客户端应用 在初始化时连接的是 Sentinel 节点集合，从中获取主节点 的信息。
  

![基本原理](images/sentinel.png)

Redis的Sentinel系统是一个分布式的系统，可以在系统中配置一个或多个Sentinel

主观下线和客观下线
默认情况下，每个Sentinel 节点会以 每秒一次 的频率对 Redis 节点和 其它 的 Sentinel 节点发送 PING 命令，并通过节点的 回复
来判断节点是否在线。

- 主观下线：适用于所有 主节点 和 从节点。如果在 down-after-milliseconds 毫秒内，Sentinel 没有收到 目标节点 的有效回复，则会判定
  该节点为主观下线。

![主观下线](images/subjective-down.png)

- 客观下线： 只适用于 主节点。如果 主节点 出现故障，Sentinel 节点会通过 sentinel is-master-down-by-addr 命令，向其它
  Sentinel 节点询问对该节点的状态判断。如果超过 `quorum` 设置的数据量判定 主节点 不可达，则该 Sentinel 节点会判断 主节点 为
  客观下线。

![客观下线](images/objective-down.png)

### 快速搭建

结合相关conf配置，本地执行`docker-compose up -d` 即可启动服务

@[code yaml](@code/redis/sentinel/docker-compose.yaml)


- redis-sentinel-26380配置文件

@[code conf](@code/redis/sentinel/conf/redis-sentinel-26380.conf)

- redis-sentinel-26381配置文件

@[code conf](@code/redis/sentinel/conf/redis-sentinel-26381.conf)

- redis-sentinel-26382配置文件

@[code conf](@code/redis/sentinel/conf/redis-sentinel-26382.conf)

注意修改各容器redis映射的配置文件;