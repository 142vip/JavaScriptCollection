## 第二章 Nodejs安装与入门

#### 3m安装Node.js

- nvm（node version manager）：用于开发阶段，解决多版本共存、切换、测试等问题；

- npm（node package manager）：解决Node.js模块安装问题，自身也是个Node.js模块，每次安装都会内置某个版本的npm；

- nrm（node registry manager）：解决npm镜像访问慢的问题，提供测速、切换下载源仓库（registry）功能；


#### npm

```bash
## node版本
node -v

## npm版本
npm -v

## 安装指定版本npm
sudo npm install -g npm@2.9

## 安装在node_module下，不保存在package.json中
npm install  

## 安装在node_module目录下，同时保存到package.json的dependencies，在安装模块时必须安装
npm install --save-prod 或 npm install -P

## 安装在node_module下，保存在package的devDependencies中，供开发时使用
npm install --save-dev 或 npm install -D

## 安装的模块为全局模块，如果时命令行模块，会直接链接到环境变量中
npm install --global 或 npm install -g 
```

#### nrm 

```bash
## 安装
sudo npm install -global nrm 或者 npm install -g nrm

## 测速
nrm test

## 查看源
nrm ls

## 切换源(cnpm 淘宝源)
nrm use cnpm

## 查看nrm的帮助信息
nrm -h

```

#### Hello Node.js

Node.js是基于CommonJS规范的实现，即每个文件都是一个模块，每个模块内代码的写法都必须遵守CommonJS规范，**多文件调用的核心基于模块对外暴露接口和相互引用；**

- 使用module.exports定义模块
- 通过require关键字引用模块


**编程的三等境界：**

1. 测试驱动开发，在写代码之前先写测试
2. 断点调试，直观的跟踪代码执行逻辑、调用栈、变量等。
3. 打日志；
