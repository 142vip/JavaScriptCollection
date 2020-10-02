## ElasticSearch-Head简单部署
### 拉取镜像
```bash
$ docker pull mobz/elasticsearch-head:5
```

### 运行容器
```bash
docker run -d --name es_admin -p 9100:9100 mobz/elasticsearch-head:5
```
### 查看启动

```bash
root@default:/home/docker# docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                                            NAMES
e51f6233cef0        mobz/elasticsearch-head:5   "/bin/sh -c 'grunt s…"   39 minutes ago      Up 39 minutes       0.0.0.0:9100->9100/tcp                           es_admin

```
### 查看日志
```bash
root@default:/home/docker# docker logs es_admin
Running "connect:server" (connect) task
Waiting forever...
Started connect web server on http://localhost:9100
root@default:/home/docker# 
```

### 访问页面
浏览器访问http://localhost:9100或者curl http://localhost:9100
```bash
root@default:/home/docker# curl http://localhost:9100
<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>elasticsearch-head</title>
		<link rel="stylesheet" href="_site/base/reset.css">
		<link rel="stylesheet" href="_site/vendor.css">
		<link rel="stylesheet" href="_site/app.css">
		<script src="_site/i18n.js" data-baseDir="_site/lang" data-langs="en,fr,pt,zh,tr"></script>
		<script src="_site/vendor.js"></script>
		<script src="_site/app.js"></script>
		<script>
			window.onload = function() {
				if(location.href.contains("/_plugin/")) {
					var base_uri = location.href.replace(/_plugin\/.*/, '');
				}
				var args = location.search.substring(1).split("&").reduce(function(r, p) {
					r[decodeURIComponent(p.split("=")[0])] = decodeURIComponent(p.split("=")[1]); return r;
				}, {});
				new app.App("body", {
					id: "es",
					base_uri: args["base_uri"] || base_uri,
					auth_user : args["auth_user"] || "",
					auth_password : args["auth_password"],
					dashboard: args["dashboard"]
				});
			};
		</script>
		<link rel="icon" href="base/favicon.png" type="image/png">
	</head>
	<body></body>
</html>
root@default:/home/docker# 

```

参考资料：https://www.cnblogs.com/jianxuanbing/p/9410800.html

### 创建索引报错406
- 解决方法

F12查看发现406错误,原来是请求头的问题,所以要修改head的 Content-Type 设置.

- 进入容器
```bash
root@default:/home/docker# docker exec -it es_admin /bin/bash
```
- 安装vim

在使用docker容器时，有可能没有安装Vim, 安装Vim:apt-get install vim,如果提示：Unable to locate package vim,则需要敲：apt-get update

```bash
root@e51f6233cef0:/usr/src/app# apt-get update
Ign http://deb.debian.org jessie InRelease                               
Get:1 http://deb.debian.org jessie-updates InRelease [16.3 kB]           
Get:2 http://security.debian.org jessie/updates InRelease [44.9 kB]                                                                    
Get:3 http://deb.debian.org jessie Release.gpg [1652 B]                                                                                
Get:4 http://deb.debian.org jessie Release [77.3 kB]                                                                                   
Get:5 http://security.debian.org jessie/updates/main amd64 Packages [948 kB]                                                           
Get:6 http://deb.debian.org jessie-updates/main amd64 Packages [20 B]                                                                  
Get:7 http://deb.debian.org jessie/main amd64 Packages [9098 kB]                                                                       
Get:8 http://deb.debian.org jessie/main amd64 Packages [9098 kB]                                                                       
Get:9 http://security.debian.org jessie/updates/main amd64 Packages [948 kB]                                                           
Fetched 8962 kB in 16min 12s (9217 B/s)                                                                                                
Reading package lists... Done
W: There is no public key available for the following key IDs:
AA8E81B4331F7F50

```

等更新完毕以后再敲命令： apt-get install vim

```bash
root@e51f6233cef0:/usr/src/app# apt-get install vim
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libgpm2 vim-common vim-runtime
Suggested packages:
  gpm ctags vim-doc vim-scripts
The following NEW packages will be installed:
  libgpm2 vim vim-common vim-runtime
0 upgraded, 4 newly installed, 0 to remove and 202 not upgraded.
Need to get 6224 kB of archives.
After this operation, 28.9 MB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://deb.debian.org/debian/ jessie/main libgpm2 amd64 1.20.4-6.1+b2 [34.0 kB]                 
Get:2 http://security.debian.org/ jessie/updates/main vim-common amd64 2:7.4.488-7+deb8u4 [185 kB]                                     
Get:3 http://security.debian.org/ jessie/updates/main vim-runtime all 2:7.4.488-7+deb8u4 [5052 kB]                                     
58% [3 vim-runtime 3367 kB/5052 kB 67%]                                                                              13.0 kB/s 3min 23s
Get:4 http://security.debian.org/ jessie/updates/main vim amd64 2:7.4.488-7+deb8u4 [953 kB]                                            
Fetched 6224 kB in 10min 18s (10.1 kB/s)                                                                                               
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package libgpm2:amd64.
(Reading database ... 21217 files and directories currently installed.)
Preparing to unpack .../libgpm2_1.20.4-6.1+b2_amd64.deb ...
Unpacking libgpm2:amd64 (1.20.4-6.1+b2) ...
Selecting previously unselected package vim-common.
Preparing to unpack .../vim-common_2%3a7.4.488-7+deb8u4_amd64.deb ...
Unpacking vim-common (2:7.4.488-7+deb8u4) ...
Selecting previously unselected package vim-runtime.
Preparing to unpack .../vim-runtime_2%3a7.4.488-7+deb8u4_all.deb ...
Adding 'diversion of /usr/share/vim/vim74/doc/help.txt to /usr/share/vim/vim74/doc/help.txt.vim-tiny by vim-runtime'
Adding 'diversion of /usr/share/vim/vim74/doc/tags to /usr/share/vim/vim74/doc/tags.vim-tiny by vim-runtime'
Unpacking vim-runtime (2:7.4.488-7+deb8u4) ...
Selecting previously unselected package vim.
Preparing to unpack .../vim_2%3a7.4.488-7+deb8u4_amd64.deb ...
Unpacking vim (2:7.4.488-7+deb8u4) ...
Processing triggers for mime-support (3.58) ...
Processing triggers for hicolor-icon-theme (0.13-1) ...
Setting up libgpm2:amd64 (1.20.4-6.1+b2) ...
Setting up vim-common (2:7.4.488-7+deb8u4) ...
Setting up vim-runtime (2:7.4.488-7+deb8u4) ...
Processing /usr/share/vim/addons/doc
Setting up vim (2:7.4.488-7+deb8u4) ...
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vim (vim) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vimdiff (vimdiff) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/rvim (rvim) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/rview (rview) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/vi (vi) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/view (view) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/ex (ex) in auto mode
update-alternatives: using /usr/bin/vim.basic to provide /usr/bin/editor (editor) in auto mode
Processing triggers for libc-bin (2.19-18+deb8u6) ...

```


- 进入head插件安装目录

```bash
root@e51f6233cef0:/usr/src/app# vim _site/vendor.js
```
修改两处

```bash
## 修改编码
1. 6886行 /contentType: "application/x-www-form-urlencoded 
    改成 contentType: "application/json;charset=UTF-8" 
2. 7574行 var inspectData = s.contentType ==`= "application/x-www-form-urlencoded" &&` 
    改成 var inspectData = s.contentType === "application/json;charset=UTF-8" &&
```
注意：`vendor.js`文件在vim编辑的时候，代码行数较多，进入后可以按shift+i,进入命令模式，在：后输入`set number`或者`set nu`显示对应函数；同时输入具体数字，进入到对应代码行
```bash
输入:n，代表跳转到第n行，如:79，就跳转到第79行。
```

### 退出并重启容器

```bash
root@e51f6233cef0:/usr/src/app# exit
exit
root@default:/home/docker# docker restart es_admin
es_admin
root@default:/home/docker# docker ps
CONTAINER ID        IMAGE                       COMMAND                  CREATED             STATUS              PORTS                                            NAMES
e51f6233cef0        mobz/elasticsearch-head:5   "/bin/sh -c 'grunt s…"   7 hours ago         Up 2 seconds        0.0.0.0:9100->9100/tcp                           es_admin
710adf802159        e2667f5db289 
```

参考资料：
1.https://blog.csdn.net/ge_csdn/article/details/100125123?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

2.https://blog.csdn.net/daijiguo/article/details/51895190

3.https://www.cnblogs.com/opsprobe/p/9156973.html

