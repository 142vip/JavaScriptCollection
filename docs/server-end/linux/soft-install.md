---
title: Linux下软件安装
permalink: /server-end/linux/soft-install.html
---

# Linux下软件安装

linux系统，主要分debian系和redhat系，还有其它自由的发布版本

- debian系主要有：`Debian`、`Ubuntu`、`Mint`等及其衍生版本；
- redhat系主要有：`RedHat`、`Fedora`、`CentOs`等，

在日常的服务端开发中，接触频率较高为：`Debian`、`Ubuntu`、`CentOs`，我们需要知道在不同类型的服务器中，掌握基础软件安装、卸载方式
；

## RedHat系列

- 安装包格式：rpm包
- 包管理工具 yum
- 支持tar包

## Debian系列

- 安装包格式 deb包
- 包管理工具 apt-get
- 支持tar包

## 包管理器

### yum

- 下载rpm安装包并自动安装
- 一次性安装所有的依赖包

```bash
## 安装 -y 默认安装，不需要询问
yum install xx
## 卸载
yum remove xxx
## 更新
yum update xxx
```

### apt-get

- 可以用于运作deb包

```bash
## 安装
apt-get install
##卸载
apt-get remove
## 更新
apt-get update
```

### wget

**本质是一个下载工具** 特点如下：

- 只管下载，不会安装
- 安装的时候需要找rpm命令帮忙
- 遵循协议：http fpt https这三个都是tcp/ip协议

```bash
## 一般步骤：直接下载--->解压--->编译安装
wget https://curl.haxx.se/download/curl-7.30.1.tar.gz
#解压
tar -xzvf  curl-7.30.1.tar.gz 
cd curl-7.30.1
./configure
## 编译安装
make && make install
```

当然，如果没有`wget`可以用包管理器下载，也可以使用`curl`命令来代替下载

```bash
wget https://curl.haxx.se/download/curl-7.30.1.tar.gz
## 替换curl -o 保存本地
curl -O https://curl.haxx.se/download/curl-7.30.1.tar.gz
```

## curl

## vim

## gcc
