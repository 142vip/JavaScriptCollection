# Express框架模板项目演示Demo

`Express`框架提供了应用程序生成器，就是预先约定一些`Express`框架项目的开发规范，例如：`目录约束`、`路由约束`...

通过应用生成器工具 `express-generator`模块 可以快速创建一个应用的结构，可以在此基础上形成基于`Express`框架的模板项目

## 安装依赖

Node版本大于8.2.0或者更高时，可以使用npx命令来运行Express模板生成项目，执行命令：

```bash
npx express-generator
```

也可全局安装`express-generator`模块，执行命令：

```bash
npm install -g express-generator
```

安装完成后，执行命令：

```bash
# 列出可用命令参数
express -h
```

![可用命令参数](./images/express-cmd.png)

## 创建项目

在了解`express`命令的基本可用参数后，可以直接创建名为`template-demo`模版项目，执行命令：

```bash
# 创建模板项目，使用ejs模板引擎
express --view=ejs template-demo
```

对于纯后端的应用，可以使用`--no-view`参数，创建不带模板渲染引擎的模板项目，执行命令：

```bash
# 创建模板项目，不试用渲染引擎
express --no-view template-demo
```

可以清晰地看见新创建了`template-demo`项目：

![](../images/express-create.png)

## 目录结构

注意下项目中的目录结构：

- public目录： 存放前端静态资源，例如：js代码、css代码
- view目录：存放前端页面，在前后端混合开发中，该目录可以用渲染引擎来接受后端数据
- routes目录：后端服务路由，一般用来约定restFul接口
- app.js：项目的入口文件，Node项目一般以`index.js`、`app.js`作为入口文件，类似与Java开发中的`main.java`文件
- package.json：项目信息、依赖包管理配置文件，可以在里面声明`项目信息`、`开发脚本`、`依赖版本`等信息
- bin：这里是框架约定的入口文件，实际开发中可以将该逻辑整合到`app.js`中

## 使用项目

```bash
## 下载依赖
npm ci 

## 启动项目
npm run dev

# 查看端口
lsof -i:3000
```

当发现端口3000被监听时，可以在浏览器中打开地址：<http://localhost:3000>，查看Express模板项目的运行情况:

![](./images/express-running.png)

## 参考

- <https://www.npmjs.com/package/express-generator>
- <https://www.expressjs.com.cn/starter/generator.html>
