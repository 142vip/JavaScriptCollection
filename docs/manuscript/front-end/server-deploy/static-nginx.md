
# 静态文件部署

目前，前端静态资源部署主要分为前端独立部署和后端混合部署两种方式；就node技术栈而言，更加推荐前端独立部署，这样便于在微服务场景下进行问题定位

```bash
# nginx配置
server {
    listen       80;
    server_name  localhost;
 
    #charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;
 
    location / {
        # root 根目录，默认nginx镜像的html文件夹，可以指定其他
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        # 如果vue-router使用的是history模式，需要设置这个 
        try_files $uri $uri/ /index.html;
    }
 
    #error_page  404              /404.html;
 
    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

```bash
# 设置基础镜像
FROM nginx:latest
 
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/
# 用本地的 default.conf 配置来替换nginx镜像里的默认配置
COPY default.conf /etc/nginx/conf.d/default.conf
```

可以在package.json中添加相关脚本

```bash
  "scripts": {
    "dev": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "docker-build": "docker build -t bim-web ."
  },
```



bash 下执行多个命令时， `;`、`&&` 、`||` 操作符的区别 ：


- cmd1 ; cmd2

cmd1 和 cmd2 都会 被执行

- cmd1 && cmd2

如果 cmd1 执行 成功 则执行 cmd2


- cmd1 || cmd2

如果 cmd1 执行 失败 则执行 cmd2