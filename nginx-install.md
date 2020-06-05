## Nginx安装

在日常的各种web项目中，我们会采用形形色色的web服务器来构建网站，例如常见的Tomcat、IIS，当然也一定听说过 Nginx；若没听说过它，那么一定听过它的"同行"Apache 吧，如果这都没听说过，那那那那那那那...（王总）

好的，言归正传，到底什么是Nginx呢？

> Nginx 同 Apache 一样都是一种 Web 服务器。基于 REST 架构风格，以统一资源描述符（Uniform Resources Identifier）URI 或者统一资源定位符（Uniform Resources Locator）URL 作为沟通依据，通过 HTTP 协议提供各种网络服务。
>
> 然而，这些服务器在设计之初受到当时环境的局限，例如当时的用户规模，网络带宽，产品特点等局限并且各自的定位和发展都不尽相同。这也使得各个 Web 服务器有着各自鲜明的特点。

那Nginx到底能做什么呢？就我目前的搭建的站点而言，Nginx主要的功能是：

-  搭建基础http服务器，配置SSL证书，支持https服务请求
- 反向代理，这里涉及到常见的正向代理、反向代理，对服务器端口和目标服务器地址进行保护和隐藏；

- 负载均衡,提高服务的响应速度，通过不同的负载均衡策略，减轻单一目标服务的访问压力，将访问请求“有规律”的分发到不同的不服务中；

关于上面提到的正向代理和反向代理，我特意找来两张图，进行简单说明：

> 正向代理，是在用户端的。比如需要访问某些国外网站，我们可能需要购买vpn。
>
> 并且**vpn是在我们的用户浏览器端设置的**(并不是在远端的服务器设置)。
>
> 浏览器先访问vpn地址，vpn地址转发请求，并最后将请求结果原路返回来。

![image-20200605211150150](C:\Users\Taylor\Desktop\github\article-notes\img\image-20200605211150150.png)

> 有正向代理，就有反向代理。(哈哈，因为起名字的人也会考虑，为什么不叫代理，而是取名"正向"代理)。
>
> **反向代理是作用在服务器端的，是一个虚拟ip(VIP)**。对于用户的一个请求，会转发到多个后端处理器中的一台来处理该具体请求。
>
> 大型网站都有DNS(域名解析服务器)，load balance(负载均衡器)等。

![image-20200605211203512](C:\Users\Taylor\Desktop\github\article-notes\img\image-20200605211203512.png)

好的，基础就先到这里，我们来进行Nginx的安装；



Nginx的安装方法有多种，针对不同的平台有不一样的安装方式，下面主要介绍window、linux和docker环境下的安装和配置；

### window环境下

1. 下载软件
   进入[nginx下载官网](http://nginx.org/en/download.html)，下载对应的window版本的nginx，推荐下载stable稳定版

![image-20200605211754928](C:\Users\Taylor\Desktop\github\article-notes\img\image-20200605211754928.png)

下载完成后，进行解压：

![image-20200605212034767](C:\Users\Taylor\Desktop\github\article-notes\img\image-20200605212034767.png)


2. 启动nginx

  有很多种方法启动nginx

  - 直接双击nginx.exe，双击后一个黑色的弹窗一闪而过

  - 打开cmd命令窗口，切换到nginx解压目录下，输入命令 nginx.exe 或者 start nginx ，回车即可

3. 检查nginx是否启动成功

  直接在浏览器地址栏输入网址 http://localhost:80，回车，出现以下页面说明启动成功

  ![image-20200605212243866](C:\Users\Taylor\Desktop\github\article-notes\img\image-20200605212243866.png)

### linux环境下

- **安装依赖包**

```bash
## 一键安装上面四个依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
```

- **下载并解压安装包**

```bash
## 切换到/usr/local文件路径下
cd /usr/local
## 创建nginx目录
mkdir nginx
## 切换到刚创建好的nginx目下
cd nginx
## 下载tar包
wget http://nginx.org/download/nginx-1.13.7.tar.gz
## 解压
tar -xvf nginx-1.13.7.tar.gz
```

- **安装nginx**

```bash
## 进入nginx目录
cd /usr/local/nginx
## 进入目录
cd nginx-1.13.7
## 执行命令
./ configure
## 执行make命令
make
## 执行make install命令
make install
```

- **nginx目录**

```bash
### nginx目录说明
/usr/local/nginx
├── client_body_temp
├── conf                             # Nginx所有配置文件的目录
│   ├── fastcgi.conf                 # fastcgi相关参数的配置文件
│   ├── fastcgi.conf.default         # fastcgi.conf的原始备份文件
│   ├── fastcgi_params               # fastcgi的参数文件
│   ├── fastcgi_params.default       
│   ├── koi-utf
│   ├── koi-win
│   ├── mime.types                   # 媒体类型
│   ├── mime.types.default
│   ├── nginx.conf                   # Nginx主配置文件
│   ├── nginx.conf.default
│   ├── scgi_params                  # scgi相关参数文件
│   ├── scgi_params.default  
│   ├── uwsgi_params                 # uwsgi相关参数文件
│   ├── uwsgi_params.default
│   └── win-utf
├── fastcgi_temp                     # fastcgi临时数据目录
├── html                             # Nginx默认站点目录
│   ├── 50x.html                     # 错误页面优雅替代显示文件，例如当出现502错误时会调用此页面
│   └── index.html                   # 默认的首页文件
├── logs                             # Nginx日志目录
│   ├── access.log                   # 访问日志文件
│   ├── error.log                    # 错误日志文件
│   └── nginx.pid                    # pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件
├── proxy_temp                       # 临时目录
├── sbin                             # Nginx命令目录
│   └── nginx                        # Nginx的启动命令
├── scgi_temp                        # 临时目录
└── uwsgi_temp                       # 临时目录
```

- **启动nginx**

```bash
## 执行命令
/usr/local/nginx/sbin/nginx -s reload
```

-  检查是否启动成功

```bash
## 查看进程中端口是否启动
ps -ef | grep nginx
```

也可以像上面那样，访问80端口，查看web服务是否正常；

**若使用虚拟机或者云服务器发现端口启动，但web服务无法访问， 注意查看访问的ip+端口是否正确，其次注意关闭虚拟机的防火墙释放对应端口，或者打开云服务器安全组中的对应端口**

### docker环境下

好了，重头戏来，其实不论是在window还是linux环境中安装nginx，都需要进行配置，安装、卸载有些繁琐，随着容器化技术的发展，docker已经成为不得不学习的技能了，如果你对docker不是很了解，可以查看我其他的docker笔记或者网上search一些资料，giao~

#### 拉取镜像

```bash
$ docker pull nginx
```

#### 创建映射文件

比如，我希望在`/etc/web-project`目录下实现对nginx的日志、配置、html网页进行文件映射，需要创建对应的本地映射文件；

- 创建映射主目录

```bash
## 关于nginx容器映射文件，都保存在/etc/web-project/nginx下
$ mkdir nginx
```

- 创建对应子文件目录

`/etc/web-project/nignx/conf` ： 挂载容器里面的配置，即nginx.conf

`/etc/web-project/nignx/conf.d`：挂载容器里面的子配置,即nginx.conf里面include的配置文件

`/etc/web-project/nignx/logs` ：挂载容器里面的代理的日志文件

`/etc/web-project/nignx/html` ：挂载容器里面的界面的访问

```bash
## 批量创建
$ mkdir -p /data/nginx/{conf,conf.d,html,logs}
## 注意：批量创建可能会失败，建议手动直接创建； 
```

#### 创建配置文件

- 路径：`/etc/web-project/nginx/conf/nginx.conf`

```bash
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

- 路径：`/etc/web-project/conf.d/default.conf`

```bash
server {  
    listen       80;  
    server_name  localhost;  
  
    #charset koi8-r;  
    #access_log  /var/log/nginx/log/host.access.log  main;  
  
    location / {  
        #root   /data/nginx/html;  
        root   /usr/share/nginx/html;  
        index  index.html index.htm;  
        #autoindex  on;  
        #try_files $uri /index/index/page.html;  
        #try_files $uri /index/map/page.html;  
    }  
  
    #error_page  404              /404.html;  
  
    # redirect server error pages to the static page /50x.html  
    #  
    error_page   500 502 503 504  /50x.html;  
    location = /50x.html {  
        root   /usr/share/nginx/html;  
    }  
  
    # proxy the PHP scripts to Apache listening on 127.0.0.1:80  
    #  
    #location ~ \.php$ {  
    #    proxy_pass   http://127.0.0.1;  
    #}  
  
    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000  
    #  
    #location ~ \.php$ {  
    #    root           html;  
    #    fastcgi_pass   127.0.0.1:9000;  
    #    fastcgi_index  index.php;  
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;  
    #    include        fastcgi_params;  
    #}  
  
    # deny access to .htaccess files, if Apache's document root  
    # concurs with nginx's one  
    #  
    #location ~ /\.ht {  
    #    deny  all;  
    #}  
}
```

#### 配置网页html

- 路径：`/etc/web-project/nginx/html/index`

```html
<!-- 简单html内容  -->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>系统时间</title>
</head>
<body>
<div id="datetime">
    <script>
        setInterval("document.getElementById('datetime').innerHTML=new Date().toLocaleString();", 1000);
    </script>
</div>
</body>　　

```

#### 容器启动

```bash
docker run --name nginx -d -p 80:80 -p 443:443 \
-v /data/nginx/html:/usr/share/nginx/html  \
-v /data/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /data/nginx/logs:/var/log/nginx \
-v /data/nginx/conf.d:/etc/nginx/conf.d  nginx:latest

## 80端口 默认http监听端口
## 443端口 默认https监听端口 若使用ssl证书时 需要开发443端口监听

### 可以配置网桥，指定ip
--network=network-bridge --ip 172.0.0.1
```

#### 容器操作

```bash
## 查看正在运行的容器
$ docker ps
## 查看所有容器
$ docker ps -a
## 查看所有镜像
$ docker images
```

#### 日志查看

当按照上述步骤进行配置、网页、日志文件映射后，可以比较直观的在宿主机里面看到容器内部的文件数据，因为映射之后，宿主机和容器内映射的文件是一一对应的；

可以在`/etc/web-project/nignx/logs`文件中查看nginx的所有access.log和error.log日志记录；

#### 后续Nginx操作

修改对应的nginx.conf、index.html文件来修改容器配置，修改保存后，采用`docker restart nginx`启动容器



### docker-compose集群

到这里，我想基本的nginx环境安装你应该会了；但是我觉得既然你都学会了docker的安装了，那你能根据docker的安装写出对应的docker-compose安装的yaml文件吗？？？

简单提供一下：

```yaml
version: '3.1'
services:
  nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
      - 80:80
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf 
      - ./conf.d:/etc/nginx/conf.d 
      - ./log:/var/log/nginx　　　 - ./wwwroot:/usr/share/nginx/wwwroot
docker-compose up -ddocker-compose down
```

过程嘛，也简单来一下：

```bash
## 创建yaml文件，默认为docker-compose.yml
touch docker-compose.yml
## 进入存放docker-compose.yml目录，
## todo cd ...

## 启动集群
dokcer-compose -f docker-compose.yml up -d
## 注意，默认为docker-compose.yml, 若采用其他名称，操作时务必-f指定yml文件
## -d 后台启动
```

至此，nginx的安装大致就到这里了~



晚安~   