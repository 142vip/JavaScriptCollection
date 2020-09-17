<!--
 * @Description: pm2进程管理
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-13 21:22:57
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-17 22:18:43
-->

> 本文已发表于个人公众号：**Rong姐姐好可爱**，若仓库访问速度受限，可以直接访问公众号文章：https://mp.weixin.qq.com/s/V_7ZMSDExj0xAZsfmmEu6Q

当你看到这篇文章的时候，其实我已经默认你了解过pm2这款工具了，特殊是在node的环境下，利用pm2来做进程管理，不论是在部署前端静态资源，还是后端服务，都是用的非常多的，甚至常见的；如果你没有了解过这款工具，也可以叫模块包，我就简单介绍一下：
> pm2是一个进程管理工具,可以用它来管理你的node进程，并查看node进程的状态，也支持性能监控，进程守护，负载均衡等功能

### 安装

目前我开发主要是依赖npm进行模块包管理，当然你也可以用yarn什么的，也是非常方便；这里简单介绍下npm包的安装

#### 全局安装

如果你学习过Java，安装过Java环境，可能对全局安装不陌生，是的，一般的包安装、环境配置，都讲究全局和局部；全局：即安装后作用范围是全部，不论是在哪个范围下，都是可以使用的。而局别的使用范围则明显会有些约束,那么在npm包安装中，全局安装只需要配置-g 这个指令即可；
> -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。



#### 局部安装

直接说明常用的npm包安装配置吧

- npm install moduleName
> 安装模块到项目目录下


- --save/--save-dev
>npm install module-name --save 自动把模块和版本号添加到dependencies部分;
> 
> npm install module-name --save-dev 自动把模块和版本号添加到devDependencies部分

- -S
> --save（保存）

包名会被注册在package.json的dependencies里面，在生产环境下这个包的依赖依然存在

- -D
> --save-dev（生产）的缩写； 
> 
> 包名会被注册在package.json的devDependencies里面，仅在开发环境下存在的包用-D，如babel，sass-loader这些解析器


- 什么也不写

> 包名不会进入package.json里面，因此别人不知道你安装了这个包

devDependencies 里面的插件只用于开发环境，不用于生产环境，而 dependencies 是需要发布到生产环境的。


### 常用配置

> 使用pm2的时候，最好是要先进入到项目根目录，防止找不到配置

```bash

## 启动进程/应用 
pm2 start bin/www 或 pm2 start app.js

## 重命名进程/应用 
pm2 start app.js --name wb123

## 添加进程/应用 watch 即：监听
pm2 start bin/www --watch

## 结束进程/应用 
pm2 stop www

## 结束所有进程/应用 
pm2 stop all

## 删除进程/应用 
pm2 delete www

## 删除所有进程/应用 
pm2 delete all

## 列出所有进程/应用 
pm2 list

## 查看某个进程/应用具体情况 
pm2 describe xxx

## 查看进程/应用的资源消耗情况 
pm2 monit

## 查看pm2的日志 
pm2 logs

## 若要查看某个进程/应用的日志,
pm2 logs xxx

## 重新启动进程/应用 
pm2 restart xxx

## 重新启动所有进程/应用 
pm2 restart all


# Fork mode
pm2 start app.js --name my-api # 启动指定名字的进程

# Cluster mode
pm2 start app.js -i 0        # 根据cpu的内核启动的最低的实例数
pm2 start app.js -i max      # Same as above, but deprecated.
pm2 scale app +3             # Scales `app` up by 3 workers
pm2 scale app 2              # Scales `app` up or down to 2 workers total

# Listing

pm2 list               # Display all processes status
pm2 jlist              # Print process list in raw JSON
pm2 prettylist         # Print process list in beautified JSON

pm2 describe 0         # Display all informations about a specific process

pm2 monit              # Monitor all processes

# Logs

pm2 logs [--raw]       # Display all processes logs in streaming
pm2 flush              # Empty all log files
pm2 reloadLogs         # Reload all logs

# Actions

pm2 stop all           # Stop all processes
pm2 restart all        # Restart all processes

pm2 reload all         # Will 0s downtime reload (for NETWORKED apps)

pm2 stop 0             # Stop specific process id
pm2 restart 0          # Restart specific process id

pm2 delete 0           # Will remove process from pm2 list
pm2 delete all         # Will remove all processes from pm2 list

# Misc

pm2 reset <process>    # Reset meta data (restarted time...)
pm2 updatePM2          # Update in memory pm2
pm2 ping               # Ensure pm2 daemon has been launched
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart

```

上面列举的这些，只是很基础的一些配置，更多配置可以参考[pm2官网](https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)





最后，送上一段后续部署将会用到的配置：
```js
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
     name: 'worker',
     script: 'worker.js'
  }]
}
```




