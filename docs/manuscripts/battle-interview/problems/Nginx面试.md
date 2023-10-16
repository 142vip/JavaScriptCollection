# Nginx面试


## 什么是Nginx

> 参考链接：https://blog.csdn.net/weixin_43122090/article/details/105461971

`Stub_status`指令：该指令用于了解`Nginx`当前状态的当前状态，如当前的活动连接，接受和处理当前读/写/等待连接的总数

`Sub_filter`指令：它用于搜索和替换响应中的内容，并快速修复陈旧的数据

可以使用`Nginx`模块`gunzip`将请求压缩到上游。`gunzip`模块是一个过滤器，它可以对不支持“gzip”编码方法的客户机或服务器使用“内容编码:gzip”来解压缩响应

gunzip就是gzip的[硬连接](https://baike.baidu.com/item/硬连接/3923435)，不论是压缩或解压缩，都可通过gzip指令单独完成



## 限制浏览器方式

> 变量$http_user_agent

```nginx
	## 不允许谷歌浏览器访问 如果是谷歌浏览器返回500
 	if ($http_user_agent ~ Chrome) {   
        return 500;  
    }
```

## 禁止特定IP不能访问

> 变量$remote_addr

```nginx
# 如果访问的ip地址为192.168.9.115,则返回403
if  ($remote_addr = 192.168.9.115) {  
     return 403;  
} 
```

## Nginx配置高可用

> 利用proxy_pass 指向上游负载均衡

```nginx
###nginx与上游服务器(真实访问的服务器)超时时间 后端服务器连接的超时时间_发起握手等候响应超时时间
proxy_connect_timeout 1s;
###nginx发送给上游服务器(真实访问的服务器)超时时间
proxy_send_timeout 1s;
### nginx接受上游服务器(真实访问的服务器)超时时间
proxy_read_timeout 1s;
```



## Nginx负载均衡的算法怎么实现的?策略有哪些

- 轮询（默认）
- 权重
- IP_Hash
- fair(第三方插件)
- url_hash

### 轮询（默认）

> 每个请求按事件顺序逐一分配到不同的后端服务器，上游服务宕机能自动剔除

### 权重

> 权重weight分配的越大，访问的频率越高，用于上游服务器性能不均衡的情况下，合理利用主机资源



### IP_Hash（IP绑定）

> 请求按照访问IP进行哈希分配，均匀的落在上游服务中，**可以有效的解决session共享问题**

#### fair（第三方插件）

> **必须安装upstream_fair模块**
>
> 比权重、IP_Hash更加智能的负载均衡算法
>
> fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，**响应时间短的优先分配**

```nginx
## 哪个服务器的响应速度快，就将请求分配到那个服务器上
upstream backserver { 
 server server1; 
 server server2; 
 fair; 
} 
```

### Url_Hash（第三方插件）

> **必须安装Nginx的hash软件包**
>
> 按访问url的hash结果来分配请求，每个url定向到同一个后端服务器，可以进一步提高后端缓存服务器的效率

```nginx
upstream backserver { 
 server squid1:3128; 
 server squid2:3128; 
 hash $request_uri; 
 hash_method crc32; 
} 
```



## 为什么要做动静分离？

- Nginx的静态处理能力很强，但是动态处理能力不足，因此，在企业中常用动静分离技术
- 静态资源nginx直接处理，动态资源时通过反向带来在服务器上处理
- 动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，根据静态资源的特点将其做压缩、缓存操作

## 漏桶流算法和令牌桶算法知道？

### 漏桶算法

> - 流量整形
> - 速率限制
>
> 目的： 控制数据注入到网络的速率，平滑网络上的突发流量

**突发流量会进入到一个漏桶，漏桶会按照我们定义的速率依次处理请求，如果水流过大也就是突发流量过大就会直接溢出，则多余的请求会被拒绝**

### 令牌桶算法

> - 流量整形
> - 速率限制
>
> 用来控制发送到网络上的数据的数目，并允许突发数据的发送

**存在一个大小固定的令牌桶，会以恒定的速率源源不断产生令牌。如果令牌消耗速率小于生产令牌的速度，令牌就会一直产生直至装满整个令牌桶**

## 限流怎么做的？

> 限制用户请求速度，防止服务器负载过高或宕机

限制方式【基于漏桶算法】：

-  正常限制访问频率（正常流量）
- 突发限制访问频率（突发流量）
- 限制并发连接数

### 正常限制访问频率（正常流量）

> 限制一个用户发送的请求或者Nginx多久接收一个请求
>
> - ngx_http_limit_req_module模块限制的访问频率【基于漏桶算法】
> - limit_req_zone命令及limit_req命令限制单个IP的请求处理频率
> - 1r/s代表1秒一个请求，1r/m一分钟接收一个请求， **如果Nginx这时还有别人的请求没有处理完，Nginx就会拒绝处理该用户请求**

```nginx
#定义限流维度，一个用户一分钟一个请求进来，多余的全部漏掉
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/m;
#绑定限流维度
server{
		
	location/seckill.html{
		limit_req zone=zone;	
		proxy_pass http://lj_seckill;
	}
}
```

### 突发限制访问频率（突发流量）

> 如果突发流量超出请求被拒绝处理，无法处理活动时候的突发流量，这时候应该如何进一步处理呢？
>
> **Nginx提供burst参数结合nodelay参数可以解决流量突发的问题**
>
> - 可以设置能处理的超过设置的请求数外能额外处理的请求数



```nginx
#定义限流维度，一个用户一分钟一个请求进来，多余的全部漏掉
limit_req_zone $binary_remote_addr zone=one:10m rate=1r/m;
#绑定限流维度
server{
	location/seckill.html{
        # burst=5 nodelay :Nginx对于一个用户的请求会立即处理前五个，多余的就慢慢来落，没有其他用户的请求我就处理你的，有其他的请求的话我Nginx就漏掉不接受你的请求
		limit_req zone=zone burst=5 nodelay;
		proxy_pass http://lj_seckill;
	}
}
```

## 限制并发连接数

> - ngx_http_limit_conn_module模块提供了限制并发连接数的功能
> - 使用limit_conn_zone指令以及limit_conn执行进行配置

```nginx
http {
	limit_conn_zone $binary_remote_addr zone=myip:10m;
	limit_conn_zone $server_name zone=myServerName:10m;
}
server {
     location / {
        ## 单个IP同时并发连接数最多只能10个连接
        limit_conn myip 10;
        ## 整个虚拟服务器同时最大并发数最多只能100个链接
        limit_conn myServerName 100;
        rewrite / http://www.lijie.net permanent;
      }
}
```

**只有当请求的header被服务器处理后，虚拟服务器的连接数才会计数**





## location的作用是什么？

> location指令的作用是根据用户请求的URI来执行不同的应用,即：根据用户请求的网站URL进行匹配，匹配成功即进行相关的操作

### Nginx虚拟主机怎么配置?

- 基于域名的虚拟主机
- 基于端口的虚拟主机
- 基于IP的虚拟主机【建议配合域名解析】

## Nginx目录结构有哪些？

```nginx
[root@localhost ~]# tree /usr/local/nginx
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

## Nginx配置文件nginx.conf有哪些属性模块?

```nginx
worker_processes  1；                					# worker进程的数量
events {                              					# 事件区块开始
    worker_connections  1024；            				# 每个worker进程支持的最大连接数
}                                    					# 事件区块结束
http {                               					# HTTP区块开始
    include       mime.types；            				# Nginx支持的媒体类型库文件
    default_type  application/octet-stream；     		# 默认的媒体类型
    sendfile        on；       							# 开启高效传输模式
    keepalive_timeout  65；       						# 连接超时
    server {            								# 第一个Server区块开始，表示一个独立的虚拟主机站点
        listen       80；      							# 提供服务的端口，默认80
        server_name  localhost；       					# 提供服务的域名主机名
        location / {            						# 第一个location区块开始
            root   html；       						# 站点的根目录，相当于Nginx的安装目录
            index  index.html index.htm；      			# 默认的首页文件，多个用空格分开
        }          										# 第一个location区块结果
        error_page   500502503504  /50x.html；     		# 出现对应的http状态码时，使用50x.html回应客户
        location = /50x.html {          				# location区块开始，访问50x.html
            root   html；      							# 指定对应的站点目录为html
        }
    }  
    ......
```

## Nginx应用场景？

- http服务器（存放静态资源，动静分离...）
- 虚拟主机（基于域名、IP、端口的不同主机）
- 反向代理、负载均衡
- 配置安全管理，SSL证书...

## Nginx的优缺点？

优点：
- 占内存小，可实现高并发连接，处理响应快
- 可实现http服务器、虚拟主机、反向代理、负载均衡
- 配置简单，可以不用暴露正式的IP地址

缺点：
- nginx处理静态文件耗费内存小，处理动态页面则明显不足，需要依靠反向代理抗住流量压力
- 动静分离 -----> 处理资源



## 为什么要用Nginx？

- 跨平台（多系统支持）、配置简单、反向代理、高并发连接（官方检测：5万并发）
- 内存消耗小（开10个nginx内存才占150M），处理静态资源性能优越---->耗费内存小
- 提供内置的健康检查功能，服务宕机会被剔除，后面的请求会提交到其他上游服务上（基于nginx自带模块**ngx_http_proxy_module和ngx_http_upstream_module**对后端节点做健康检查）[链接](https://www.cnblogs.com/xingxia/p/nginx_healthcheck.html)
-  节阅流量、加速前端页面访问（支持GZIP压缩，可以添加浏览器本地缓存）
- 稳定性高、宕机的概率小
- 接收用户请求是异步操作的【Nginx事件处理机制是`异步非阻塞`事件处理机制，运用了**epoll模型**，提供了一个队列，排队解决】 [链接](https://zhuanlan.zhihu.com/p/77887952)

##  解释下正向代理和反向代理

**正向代理隐藏真实客户端，反向代理隐藏真实服务端**

> 参考链接：https://www.cnblogs.com/taostaryu/p/10547132.html

### 正向代理

例如：翻墙访问google、买票的黄牛 用途：
 - 访问原来无法访问的资源，如google
 - 可以做缓存，加速访问资源
 - 对客户端访问授权，上网进行认证
 - 代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息



### 反向代理

例如：租房的中介

代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器

用途：
 - 负载均衡，通过反向代理服务器来优化网站的负载
 - 保证内网的安全，阻止web攻击，大型网站，通常将反向代理作为公网访问地址，Web服务器是内网



## Nginx常用指令有哪些？

```bash
nginx -s reopen #重启Nginx

nginx -s reload #重新加载Nginx配置文件，然后以优雅的方式重启Nginx

nginx -s stop #强制停止Nginx服务

nginx -s quit #优雅地停止Nginx服务（即处理完所有请求后再停止服务）

nginx -t #检测配置文件是否有语法错误，然后退出

nginx -?,-h #打开帮助信息

nginx -v #显示版本信息并退出

nginx -V #显示版本和配置选项信息，然后退出

nginx -t #检测配置文件是否有语法错误，然后退出

nginx -T #检测配置文件是否有语法错误，转储并退出

nginx -q #在检测配置文件期间屏蔽非错误信息

nginx -p prefix #设置前缀路径(默认是:/usr/share/nginx/)

nginx -c filename #设置配置文件(默认是:/etc/nginx/nginx.conf)

nginx -g directives #设置配置文件外的全局指令

killall nginx #杀死所有nginx进程
kill -quit 61333 # 退出某个进程
```

