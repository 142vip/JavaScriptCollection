## nginx的部署
### 拉取镜像
```bash
$ docker pull nginx:<指定版本>
```
### 查看镜像

```bash
$ docker images
```

### 本地配置代理目录
```bash
## 创建web-project 文件夹
$ mkdir web-project
## 创建对应的nginx目录
$ mkdir nginx
## 创建nginx.conf文件
vi nginx.conf
## wq!退出即可保存文件
## vi filename :打开或新建文件，并将光标置于第一行首
## vi +n filename ：打开文件，并将光标置于第n行首
## vi + filename ：打开文件，并将光标置于最后一行首
## vi +/pattern filename：打开文件，并将光标置于第一个与pattern匹配的串处
## vi -r filename ：在上次正用vi编辑时发生系统崩溃，恢复filename
## vi filename....filename ：打开多个文件，依次进行编辑
```
### 默认conf
```bash

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    server {
        listen       80;
        server_name  www.test.com test.com;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }


        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
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


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

```
### 运行容器

```bash
$ docker run -d --name nginx-master -p 80:80 -v /home/web-project/nginx/nginx.conf:/etc/nginx/nginx.conf --restart=always nginx

```

### nginx原样转发
需要告诉NGINX将Host头向上游转发给Kong.您可以使用proxy_set_header这样做：
```bash
location /api {
   ## 代理地址
   proxy_pass: http://kong;
   ##  host上游转发
   proxy_set_header Host $host;
}
```