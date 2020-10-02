## Nginx部署和文件映射

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

docker run --name nginx -d -p 80:80 -p 443:443 \
--network=kong-net --ip 172.22.0.10 \
-v /web-project/nginx/html:/usr/share/nginx/html  \
-v /web-project/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /web-project/nginx/logs:/var/log/nginx \
-v /web-project/nginx/conf.d:/etc/nginx/conf.d  nginx:latest

docker run --name nginx -d -p 80:80 -p 443:443 \
-v /web-project/nginx/html:/usr/share/nginx/html  \
-v /web-project/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /web-project/nginx/logs:/var/log/nginx \
-v /web-project/nginx/conf.d:/etc/nginx/conf.d  nginx:latest

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

#### nginx原样转发
需要告诉NGINX将Host头向上游转发给Kong.您可以使用proxy_set_header这样做：
```bash
location /api {
   ## 代理地址
   proxy_pass: http://kong;
   ##  host上游转发
   proxy_set_header Host $host;
}

## 或者设置
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header REMOTE-HOST $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

```

#### nginx映射虚拟

```bash

## kong-net :名称为kong-net的桥接网络network
$ docker network connect  kong-net nginx-master --ip 172.22.0.9

```
