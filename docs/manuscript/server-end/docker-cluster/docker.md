
# Docker

### docker-ce安装

```bash
# 卸载docker原有镜像
yum remove docker docker-common docker-selinux docker-engine -y

yum install -y yum-utils device-mapper-persistent-data lvm2

yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum makecache fast

yum install docker-ce -y

```

#### 后台自启动
```bash
$ systemctl enable docker 
```
#### 服务控制

```bash
#启动docker
service docker start
#停止docker
service docker stop
#重启docker
service docker restart
```

### 基础命令

基于linux系统使用

```bash
## 启动docker
systemctl start docker

## 停止docker
systemctl stop docker 

## 重启docker
systemctl restart docker

## 查看docker状态
systemctl status docker

## 设置docker开机启动
systemctl enable docker

## 查看docker概要信息
docker info

## 查看docker总体帮助文档
docker --help

## 查看docker命令帮助文档
docker xxx命令 --help
## 例如create/log/network
docker create/log --help

```

### 镜像命令

```bash
## 查看本地所有镜像
docker images

## 在仓库中查找镜像
docker search XXXX
## 例如 查找mysql
docker search mysql

## 拉取镜像，没有带tag直接拉取最新latest
docker pull XXXX
## 例如 拉取不同版本mysql
docker pull mysql:latest
docker pull mysql:5.7

##查看镜像/容器/数据卷所占用的空间
docker system df
## 例如
fix@mmdapl docker %  docker system df
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          3         2         1.254GB   692.6MB (55%)
Containers      2         2         90B       0B (0%)
Local Volumes   3         1         184B      92B (50%)
Build Cache     0         0         0B        0B

## 删除镜像
docker rmi XXXX
## 可以是镜像名称/ID等唯一确定镜像的标记

## 强制删除镜像
docker rmi -f XXX

## 查看显示虚悬镜像
docker images -f dangling=true
## 删除所有虚悬镜像
docker rmi $(docker images -q -f dangling=true)
docker image prune

## prune： 修剪 裁剪

```

特别注意指令`docker system df`和`docker images -f dangling=true`的使用

**谈谈什么是docker虚悬镜像？**

> 虚悬镜像名字很高大上，实际就是指：镜像没有仓库名或没有标签


### 容器命令

```bash
## 运行容器
docker run xxx

## 列出正在运行的容器
docker ps 

## 列出所有容器
docker ps -a

## 启动已停止运行的容器
docker start 容器ID或者容器名

## 重启容器
docker restart 容器ID或者容器名

## 停止容器
docker stop 容器ID或者容器名

## 强制停止容器
docker kill 容器ID或者容器名

## 删除已停止容器
docker rm 容器ID

## 一次性删除多个容器实例(两个方法)
docker rm -f ${docker ps -a -q}
docker ps -a -q | xargs docker rm


## 查看容器日志
docker logs xxxx

## 查看容器内运行的进程
docker top xxxx

## 查看容器详细信息
docker inspect 容器ID



```

### 容器退出

#### exit命令

run命令进入容器，通过exit命令退出后，容器停止运行


#### ctrl+p+q 命令

run命令进入容器，通过`ctrl+p+q`退出，容器不停止


### 容器进入

```bash
## exec命令进入容器
docker exec -it XXX /bin/bash

## attach命令进入容器
docker attach 容器ID

```

attach命令和exec命令的执行区别：

- `attach`命令直接进入容器启动命令的终端，不会启动新的进程；用`exit`命令退出时，会导致容器停止运行
- `exec`命令实在容器中打开新的终端，并且可以启动新的进程；用`exit`命令退出时，不会导致容器的停止

一般用`-d`命令后台启动的程序，再用`exit`命令进行对应容器实例



### 启动后台守护容器

> 在大部分场景下，希望docker的服务在后台运行的，可以通过`-d`指定容器的后台运行模式

```bash
## 运行后台守护容器
docker run -d xxxx

## 运行前台交互容器
docker run -it xxxx

```


### 文件相关

> export和import命令可以参考：https://blog.csdn.net/clj198606061111/article/details/50450793


### 拷贝cp命令

docker cp 容器ID : 容器中文件路径 当前主机待保存的路径

### export命令

docker export 容器ID > 文件名.tar

### import命令

cat 文件名.tar | docker import -镜像用户/镜像名：镜像版本号


### 容器数据卷

注意开启文件权限，避免权限不够出现错误

```bash

## 开启文件权限
--privileged=true

```

卷就是目录或者文件，存在于一个或多个容器中，由于docker挂载到容器，但不属于`联合文件系统`，因此能够绕过Union File System提供一些用于持续存储或者共享数据的特性；

卷的设计目的就是数据持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时`删除容器挂载的数据卷`

重要特点：

- 数据卷可以在容器之间共享或者重用数据
- 数据卷中的更改可以直接实时生效，非常方便
- 数据卷中的更改不会包含在镜像的更新中
- 数据卷的生命周期一直持续到没有容器使用它为止

#### 文件映射

> 方便进行文件映射，完成数据的持久化，保存重要数据

命令格式： `-v  xxx容器文件路径:宿主机文件路径`


#### 读写规则

- ro: 只读
- rw：可读可写

命令格式： `-v  xxx容器文件路径:宿主机文件路径:读写规则`


### 推送至阿里云
#### 用户登录

```bash
## 注意密码
docker login --username=mmdapl registry.cn-hangzhou.aliyuncs.com
```
#### 镜像拉取
```bash
$ sudo docker pull registry.cn-hangzhou.aliyuncs.com/142vip/docker-yapi:[镜像版本号]
```
*注意:不同的仓库需要匹配镜像的版本*

#### 镜像推送

```bash

### 修改本地镜像tag标签
docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/142vip/docker-yapi:[镜像版本号]
docker tag a27c1a247a64 registry.cn-hangzhou.aliyuncs.com/142vip/oauth2:0.0.1.0
### 修改后的镜像按照版本号推送到阿里云
docker push registry.cn-hangzhou.aliyuncs.com/142vip/docker-yapi:[镜像版本号]

```


#### 退出登录

```bash
docker logout
```

















