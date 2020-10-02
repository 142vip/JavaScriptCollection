## MySQL主从方案

#### 创建mysql容器

```bash
docker run -d --name sql-master -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 \
-v /web-project/mysql/conf:/etc/mysql/conf.d \
-v /web-project/mysql:/var/lib/mysql \
-v /etc/localtime:/etc/localtime:ro \
mysql:5.7


docker run -d --name mysql-slave -p 4000:3306 -e MYSQL_ROOT_PASSWORD=Taylor2237221210 \
-v /web-project/mysql/config/mysql-slave.cnf:/etc/mysql/mysql.cnf \
-v /web-project/mysql/data:/var/lib/mysql \
-v /etc/localtime:/etc/localtime:ro \
mysql:5.7
```

```bash
CREATE USER 'sync'@'%' IDENTIFIED BY '123456';

GRANT REPLICATION SLAVE ON *.* TO 'sync'@'39.108.131.168' IDENTIFIED BY '123456';

FLUSH PRIVILEGES;

drop user 'sync'@'%';

stop slave;

CHANGE MASTER TO  
    MASTER_HOST='39.108.131.168',    
    MASTER_USER='sync',    
    MASTER_PASSWORD='123456',    
    MASTER_PORT=3306,    
    MASTER_AUTO_POSITION = 1;
		
reset slave;

start slave;

show slave status;

show grants for 'sync'@'39.108.131.168';
```

```bash
## node-exporter安装
docker run -d --name node-exporter \
--network=pga-net \
--ip=172.24.0.3 \
-p 9100:9100 \
-v /proc:/host/proc:ro \
-v /sys:/host/sys:ro \
-v /:/rootfs:ro \
prom/node-exporter

docker run -d --name node-exporter \
-p 9100:9100 \
--restart=always \
prom/node-exporter
```





```bash
## 查询最大错误连接数
show variables like '%max_connection_errors%';

## 设置全局最大连接数
set global max_connect_errors = 1000;

## 查询最大错误连接数，即是否生效
show variables like '%max_connection_errors%'

## 查看最大连接
show variables like 'max_connect%'

## 断开主从关系
reset slave all;
```



```bash
docker run -d -p 1234:1234 -p 2345:2345 --name 360atlas \
-v /web-project/atlas/conf/:/usr/local/mysql-proxy/conf \
-v /web-project/atlas/logs:/usr/local/mysql-proxy/log \
cuiyf/atlas:1.0.0
```

