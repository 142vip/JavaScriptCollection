### konga简介

> KongA 是 Kong 的一个 GUI 工具。GitHub 地址是 https://github.com/pantsel/konga ，名字的由来可以理解为kong-admin的简写，主要特性如下：
>
> - 多用户管理
> - 管理多个 Kong 节点
> - 电子邮件异常信息通知
> - 管理所有Kong Admin API
> - 使用快照备份，还原和迁移Kong节点
> - 使用运行状况检查监控节点和API状态
> - 轻松的数据库集成（MySQL，postgresSQL，MongoDB）

### konga的部署

#### 预部署

```bash
## 若数据库与konga容器不在同一个docker桥接网络下，可以采用地址连接
docker run --rm pantsel/konga:latest -c prepare -a postgres -u postgresql://kong:kong@172.18.0.1:5432/konga
## 在一个网络下，可以直接用容器名称,注意写清楚network配置
docker run --rm --network=kong-net pantsel/konga:latest -c prepare -a postgres -u postgresql://kong:kong@kong-database:5432/konga
```

实际效果：

![image-20200716224418012](images/image-20200716224418012.png)

#### 部署konga

```bash
## 创建容器
docker run -p 1337:1337 \
        --network kong-net \
        --name konga \
        -e "NODE_ENV=production"  \
        -e "DB_ADAPTER=postgres" \
        -e "DB_URI=postgresql://kong:kong@kong-database:5432/konga" \
        pantsel/konga
## 暴露1337端口

```

实际效果：

![image-20200716225315825](images/image-20200716225315825.png)