---
title: 包管理工具
permalink: /server-end/linux/package-manage.html
---

# 包管理工具

## apt-get

apt-get 命令适用于 deb 包管理式的 Linux 操作系统（Debian、Ubuntu等），主要用于自动从互联网软件仓库中搜索、下载、安装、升级、卸载软件或操作系统

### 安装

```bash
## 普通安装
apt-get install xxxx
#安装指定包的指定版本
apt-get install xxx=version
#重新安装
apt-get --reinstall install xxx

# 安装源码包所需要的编译环境
apt-get build-dep xxx
#修复依赖关系
apt-get -f install
#下载软件包的源码
apt-get source xxx
```

### 卸载

```bash
#删除软件包, 保留配置文件
apt-get remove xxx
#删除软件包, 同时删除配置文件
apt-get --purge remove xxx
删除软件包, 同时删除配置文件
apt-get purge xxx

删除软件包, 同时删除为满足依赖,而自动安装且不再使用的软件包
apt-get autoremove xxx
#删除软件包, 删除配置文件, 删除不再使用的依赖包
apt-get --purge autoremove xxx
#清除 已下载的软件包 和 旧软件包
apt-get clean && apt-get autoclean

```

### 更新

```bash
# 更新安装源（Source）
apt-get update
#更新已安装的软件包
apt-get upgrade
#更新已安装的软件包（识别并处理依赖关系的改变）
apt-get dist-upgrade
```

### 帮助命令

```bash
apt-get --help
```

### 配置软件源

```bash

## 1. 配置备份
cp /etc/apt/sources.list /etc/apt/sources.list.bak

## 2.新建配置
sudo vim /etc/apt/sources.list

## 3. 配置列表
# 阿里镜像
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse

# 中科大
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-updates main restricted
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-updates main restricted
deb http://mirrors.ustc.edu.cn/ubuntu/ precise universe
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise universe
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-updates universe
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-updates universe
deb http://mirrors.ustc.edu.cn/ubuntu/ precise multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-updates multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-updates multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-backports main restricted universe multiverse

# 搜狐源
deb http://mirrors.sohu.com/ubuntu/ precise-updates main restricted
deb-src http://mirrors.sohu.com/ubuntu/ precise-updates main restricted
deb http://mirrors.sohu.com/ubuntu/ precise universe
deb-src http://mirrors.sohu.com/ubuntu/ precise universe
deb http://mirrors.sohu.com/ubuntu/ precise-updates universe
deb-src http://mirrors.sohu.com/ubuntu/ precise-updates universe
deb http://mirrors.sohu.com/ubuntu/ precise multiverse
deb-src http://mirrors.sohu.com/ubuntu/ precise multiverse
deb http://mirrors.sohu.com/ubuntu/ precise-updates multiverse
deb-src http://mirrors.sohu.com/ubuntu/ precise-updates multiverse
deb http://mirrors.sohu.com/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.sohu.com/ubuntu/ precise-backports main restricted universe multiverse

# 网易源
deb http://mirrors.163.com/ubuntu/ precise-updates main restricted
deb-src http://mirrors.163.com/ubuntu/ precise-updates main restricted
deb http://mirrors.163.com/ubuntu/ precise universe
deb-src http://mirrors.163.com/ubuntu/ precise universe
deb http://mirrors.163.com/ubuntu/ precise-updates universe
deb-src http://mirrors.163.com/ubuntu/ precise-updates universe
deb http://mirrors.163.com/ubuntu/ precise multiverse
deb-src http://mirrors.163.com/ubuntu/ precise multiverse
deb http://mirrors.163.com/ubuntu/ precise-updates multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-updates multiverse
deb http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse

#ubuntu的源， 最好也加上，避免某些库下载不到
deb http://archive.ubuntu.com/ubuntu/ trusty main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-security main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-updates main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-backports main restricted universe multiverse

### 4. 更新
apt-get update
apt update
sudo apt-get update
sudo apt-get upgrade

```

## yum

使用yum安装和卸载软件，软件包都是rpm格式的

### 安装

```bash
## -y:不询问，默认安装
yum  install XXX -y

## 升级
yum install/update xxx
```

### 查询

```bash
## 使用YUM查找软件包
yum search

## 列出所有可安装的软件包
yum list

## 列出所有可更新的软件清单
yum check-update

## 列出所有已安装的软件包
yumlist installed

## 列出所有已安装但不在Yum Repository內的软件包
yumlist extras

## 获取所有软件包信息
yum info

## 列出软件包提供哪些文件
yum provides~
```

### 清除

```bash
## 卸载
yum erase 安装包名称
yum remove xxx

## 清除缓存目录下的软件包
yum clean packages

## 清除缓存目录下的 headers
yum clean headers

## 清除缓存目录下旧的 headers
yum clean oldheaders
```

### 更换软件源

```bash
## 1. 安装wget
yum -y install wget

## 2.修改原yum源文件名称，备份
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak

## 3.下载阿里yum源或163都可以
# 163的yum源
wget http://mirrors.163.com/.help/CentOS7-Base-163.repo
# 阿里yum源
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

## 4.清楚缓存
yum makecache
```

## apk

Alpine Linux 下的包管理工具

优势：

- Alpine Linux的Docker镜像特点是轻巧（大小只有5M）且有完整的包管理工具(APK)。
- Docker官方镜像可能会用Alpine Linux替换Ubuntu。

劣势:

- Alpine Linux使用了musl，可能和其他Linux发行版使用的glibc实现会有些不同。
- musl实现的DNS服务不会使用resolv.conf文件中的search和domain两个配置，通过DNS来进行服务发现时需要注意

Alpine使用apk进行包管理，通过apk --help命令查看完整的包管理命令

### 基础使用

```bash
apk install xxx
# 搜索软件包 支持正则
apk search xxx
# 查看包的详细信息
apk info xxx
#显示完整的软件包信息
apk info -a zlib
#显示指定文件属于的包
apk info --who-owns /sbin/lbu

# list local package
apk show
# 卸载并删除 包
apk del openssh openntp vim

$ apk info #列出所有已安装的软件包

```

### 升级

upgrade命令升级系统已安装的所以软件包（一般包括内核），当然也可指定仅升级部分软件包（通过-u或–upgrade选择指定）。

```bash
# 更新最新本地镜像源
apk update
# 升级软件
apk upgrade
# 指定升级部分软件包
apk add --upgrade busybox
## 指定仓库
apk add docker --update-cache --repository http://mirrors.ustc.edu.cn/alpine/v3.4/main/ --allow-untrusted
```

### 配置软件源

- <https://mirrors.tuna.tsinghua.edu.cn/help/alpine/>

```bash
vi /etc/apk/repositories

# /media/cdrom/apks
http://mirrors.ustc.edu.cn/alpine/v3.5/main
http://mirrors.ustc.edu.cn/alpine/v3.5/community

## 替换阿里源
sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

## 替换中科大源
sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
```
