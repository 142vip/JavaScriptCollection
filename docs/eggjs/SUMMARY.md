# Node开发技术文档

* [文档概述](README.md)
* [联系作者](CONTACT.md)

### 

## 基础篇

- [第一部分：Git概述](git-README.md)

    * [1.1 下载和安装](git-download.md)
    * [1.2 基本配置](git-config.md)
    * [1.3 常用命令](git-dns.md)
    * [1.4 GitHub简单使用](git-github.md)
    * [1.5 GitBook简单使用](git-gitbook.md)
        * [1.5.1 Typora简介](git-typora.md)
        * [1.5.2 MarkDown语法](git-markdown.md)
    * [1.6 码云和GitHub的选择](git-choice.md)

- [第二部分：数据库概述](mysql-README.md)

    - [2.1 下载和安装](mysql-download.md)
    - [2.2 连接数据库](git-connect.md)
    - [2.3 CURD操作](mysql-curd.md)
    - [2.4 Redis缓存](mysql-redis.md)
    - [2.4.1 redis安装](mysql-redis-install.md)
    - [2.4.2 redis常用指令](mysql-redis-dns.md)
    - [2.5 可视化管理](mysql-redis-view.md)

### 

## 入门篇

- [第一部分：Egg框架快速入门](egg-README.md)

- [1.1 基础功能](egg-base.md)
  - [1.1.1 接口参数获取](egg-request-params.md)
  - [1.1.2 Egg内置对象 ](egg-object.md)
  - [1.1.3 Config配置](egg-config.md)
  - [1.1.4 Egg生命周期](egg-life.md)
  - [1.1.5 中间件理解](egg-middleware.md)
  - [1.1.6 Router路由分发](egg-router.md)
  - [1.1.7 Controller控制器](egg-controller.md)
  - [1.1.8 Service服务](egg-service.md)
  - [1.1.9 常用插件](egg-plugin.md)
- [1.2 核心功能](egg-core.md)
  - [1.2.1 日志输出](egg-logger.md)
  - [1.2.2 定时任务](egg-schedule.md)
  - [1.2.2 HttpClient网络请求](egg-httpclient.md)
  - [1.2.3 Cookie的基本使用](egg-cookies.md)
  - [1.2.4 Session的基本使用](egg-session.md)
  - [1.2.5 统一异常-错误处理](egg-try-catch.md)
  - [1.2.6 CSRF防范和XSS攻击](egg-csrf-xss.md)
  - [1.2.7 RESTful API接口风格](egg-restful.md)

- [第二部分：插件开发](plugin-README.md)

    - [2.1 egg-validate参数校验](plugin-egg-validate.md)
    - [2.2 egg-view-ejs页面渲染](plugin-egg-view.ejs.md)
    - [2.3 egg-redis缓存](plugin-egg-redis.md)
    - [2.4 egg-mysql](plugin-egg-mysql.md)
    - [2.5 egg-axios-plus](plugin-egg-axios-plus.md)
    - [2.6 egg-sequelize](plugin-egg-sequelize.md)
    - [2.7 egg-sequelize-plus](plugin-egg-sequelize-plus.md)
    - [2.8 egg-socket.io即时通讯](plugin-egg-socket.io.md)

## 

## 代码实战篇

- [第一部分：常用代码](project-README-CODE.md)

    - [1.1 图片前端在线剪辑](project-images-cropper.md)
    - [1.2 文件上传后台处理](project-upload.md)
    - [1.3 MD5加密-解密算法](project-md5.md)
    - [1.4 Egg Jwt加密和校验](project-token.md)
- [第二部分：项目简介](project-README-INTRODUCE.md)

    - [2.1 基于OAuth2的统一认证中心系统](project-ssoCenterSystem.md)
    - [2.2 常用前后端分页比较与实现](project-pagenation.md)
    - [2.3基于Spring Boot实现的个人博客](project-spring-boot-blog.md)
    - [2.4 基于Yapi搭建的接口管理系统](project-webapi.md)
    - [2.5 GitBook开源笔记总结站点搭建](project-gitbook.md)
    - [2.6 个人网站及接口服务搭建搭建](project-142vip.cn.md)
- [第三部分：手把手搭建基础Egg开发框架](egg-egg-example.md)