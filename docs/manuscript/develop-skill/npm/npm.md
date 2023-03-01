---
title: npm包管理
category: npm包管理
---

###  添加用户

```bash
npm  adduser
```

### 添加镜像

```bash
## 淘宝镜像cnpm
npm  config  set  registry  https://registry.npm.taobao.org
```

### 恢复镜像

```bash
npm  config  delete  registry

## 手动删除
npm  config  edit
```

### 安装模块

```bash
## 基础命令：
npm  -g  install  包名  #  全局安装
npm  install  #  根据package.json文件安装
npm  install  包名  #  本地安装，在npm运行目录下安装
npm  install  包名@1.x  #  安装指定版本

```

package.json文件

```json

{
    "name": "orderlee",
    "dependencies": {
        "argv": "0.0.2"
    }
}

```

### 卸载模块

```bash
npm  uninstall  包名
```

### 更新模块

```bash
npm  -g  update  包名  #  全局更新
npm  update  包名  #  本地更新
```
### 查看已安装的模块

```bash
npm  ls
```

### 生成符号链接

```bash
1、在本地安装好的模块中，运行（添加本地模块到全局链接）：
npm  link
2、在要使用的本地目录中，运行（从全局中获取链接）：
npm  link  模块名

```
### 执行脚本


```bash
npm  run  在package.json的scripts中定义的脚本命令
```

### 用户登录

```bash
npm  login
```

### 发布包：

```text

## 初始化
npm  init
## 推送
npm  publish
## 推送私有
npm publish –-access=public

```

### 撤销发布

```bash
npm  -f  unpublish  dollarphpajax@*
```


### access访问
在日常使用中,`-access=public`是需要单独总结的，非常实用!


#### 基本指令
在发布的包上设置访问级别

```bash

npm access public [<package>]
npm access restricted [<package>]

npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]

npm access ls-packages [<user>|<scope>|<scope:team>]
npm access ls-collaborators [<package> [<user>]]
npm access edit [<package>]

```


#### 指令描述

用于设置私有包的访问控制，对于所有的子命令，**如果没有包名传递给子命令，NPM的access命令将在当前的工作目录包中执行。**

- `public/restricted`：设置一个包是公开访问的还是受限的
- `grant/revoke`：添加或删除 ，用户和团队具有只读或读写访问包的权利
- `ls-packages`:显示用户或组能够访问的所有包，以及访问级别，除了只读公共包（它不会打印整个注册列表上）
- `ls-collaborators`:显示所有访问权限是私有的包，这将显示你至少有只读权限的包，如果这个参数传入，这个列表过滤只属于该用户、组的包
- `edit`:使用$ EDITOR为一个包设置私有的访问权限。


#### 详情

**NPM的访问总是直接作用于当前注册表，命令行使用–registry=<注册地址>的配置。**

无作用域包始终是公开的。

**包的作用域默认为受限制的**，但你也可以使用`npm publish –-access=public`，或在最初发布之后，使用`npm access public`将他们的访问权限为公开的。



必须有权限设置包的访问：

- 无作用域或作用域包的所有者。
- 团队中的一员,拥有一个作用域。
- 已经被赋予包的读写权限，无论是作为一个团队的一员，或者直接作为所有者。

**如果帐户没有支付，然后尝试发布作用域内的程序包将会失败**，并带有HTTP402状态码（逻辑允许），除非你使用`–access=public`。


**团队和团队成员的管理使用 npm team 命令。**

### 常用指令

```bash
## 登录
npm login

## 查看当前登录用户
npm whoami

## 全局安装 最新版本
npm install npm@latest -g

## 安装模块
npm install xxx
npm install xxx -D
npm install xxx -S 
npm install xxx -g 
npm install xxx@3.0.0
npm install xxx -save


## 更新模块
npm update xxx

## 推送私有包，可以在package.json中设置private
npm publish

## 发布npm包
npm publish --access public

## 标签
npm publish --tag xx
```


### package.json字段解析

参考：https://blog.csdn.net/tangxiujiang/article/details/119977698