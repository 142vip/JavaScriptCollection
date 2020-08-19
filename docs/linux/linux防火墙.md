## Centos7下防火墙操作

1、查看firewall服务状态
```bash
systemctl status firewalld
# 出现Active: active (running)切高亮显示则表示是启动状态。
# 出现 Active: inactive (dead)灰色表示停止，看单词也行。

```

2、查看firewall的状态
```bash
firewall-cmd --state
```
3、开启、重启、关闭、firewalld.service服务
```bash
# 开启
service firewalld start
# 重启
service firewalld restart
# 关闭
service firewalld stop
```

4、查看防火墙规则
```bash
firewall-cmd --list-all 
```
5、查询、开放、关闭端口
```bash
# 查询端口是否开放
firewall-cmd --query-port=8080/tcp
# 开放80端口
firewall-cmd --permanent --add-port=80/tcp
# 移除端口
firewall-cmd --permanent --remove-port=8080/tcp
# 重启防火墙(修改配置后要重启防火墙)
firewall-cmd --reload
```

### 具体参数解释
- firwall-cmd：是Linux提供的操作firewall的一个工具；
- --permanent：表示设置为持久；
- --add-port：标识添加的端口；

 
### 防火墙服务
```bash
# 关闭firewall：

# 停止firewall
systemctl stop firewalld.service

# 禁止firewall开机启动
systemctl disable firewalld.service

# 查看默认防火墙状态（关闭后显示notrunning，开启后显示running）
firewall-cmd --state
```


