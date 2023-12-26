import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as i,a as n,b as a,d as e,e as t}from"./app-be253e4c.js";const l={},r=n("h1",{id:"nginx面试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx面试","aria-hidden":"true"},"#"),a(" Nginx面试")],-1),d=n("h2",{id:"什么是nginx",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#什么是nginx","aria-hidden":"true"},"#"),a(" 什么是Nginx")],-1),k={href:"https://blog.csdn.net/weixin_43122090/article/details/105461971",target:"_blank",rel:"noopener noreferrer"},u=t("<p><code>Stub_status</code>指令：该指令用于了解<code>Nginx</code>当前状态的当前状态，如当前的活动连接，接受和处理当前读/写/等待连接的总数</p><p><code>Sub_filter</code>指令：它用于搜索和替换响应中的内容，并快速修复陈旧的数据</p><p>可以使用<code>Nginx</code>模块<code>gunzip</code>将请求压缩到上游。<code>gunzip</code>模块是一个过滤器，它可以对不支持“gzip”编码方法的客户机或服务器使用“内容编码:gzip”来解压缩响应</p>",3),h={href:"https://baike.baidu.com/item/%E7%A1%AC%E8%BF%9E%E6%8E%A5/3923435",target:"_blank",rel:"noopener noreferrer"},m=t(`<h2 id="限制浏览器方式" tabindex="-1"><a class="header-anchor" href="#限制浏览器方式" aria-hidden="true">#</a> 限制浏览器方式</h2><blockquote><p>变量$http_user_agent</p></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code> <span class="token comment">## 不允许谷歌浏览器访问 如果是谷歌浏览器返回500</span>
  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$http_user_agent</span> ~ Chrome)</span> <span class="token punctuation">{</span>   
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">500</span></span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>
</code></pre></div><h2 id="禁止特定ip不能访问" tabindex="-1"><a class="header-anchor" href="#禁止特定ip不能访问" aria-hidden="true">#</a> 禁止特定IP不能访问</h2><blockquote><p>变量$remote_addr</p></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 如果访问的ip地址为192.168.9.115,则返回403</span>
<span class="token directive"><span class="token keyword">if</span>  (<span class="token variable">$remote_addr</span> = 192.168.9.115)</span> <span class="token punctuation">{</span>  
     <span class="token directive"><span class="token keyword">return</span> <span class="token number">403</span></span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span> 
</code></pre></div><h2 id="nginx配置高可用" tabindex="-1"><a class="header-anchor" href="#nginx配置高可用" aria-hidden="true">#</a> Nginx配置高可用</h2><blockquote><p>利用proxy_pass 指向上游负载均衡</p></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">###nginx与上游服务器(真实访问的服务器)超时时间 后端服务器连接的超时时间_发起握手等候响应超时时间</span>
<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
<span class="token comment">###nginx发送给上游服务器(真实访问的服务器)超时时间</span>
<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
<span class="token comment">### nginx接受上游服务器(真实访问的服务器)超时时间</span>
<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">1s</span></span><span class="token punctuation">;</span>
</code></pre></div><h2 id="nginx负载均衡的算法怎么实现的-策略有哪些" tabindex="-1"><a class="header-anchor" href="#nginx负载均衡的算法怎么实现的-策略有哪些" aria-hidden="true">#</a> Nginx负载均衡的算法怎么实现的?策略有哪些</h2><ul><li>轮询（默认）</li><li>权重</li><li>IP_Hash</li><li>fair(第三方插件)</li><li>url_hash</li></ul><h3 id="轮询-默认" tabindex="-1"><a class="header-anchor" href="#轮询-默认" aria-hidden="true">#</a> 轮询（默认）</h3><blockquote><p>每个请求按事件顺序逐一分配到不同的后端服务器，上游服务宕机能自动剔除</p></blockquote><h3 id="权重" tabindex="-1"><a class="header-anchor" href="#权重" aria-hidden="true">#</a> 权重</h3><blockquote><p>权重weight分配的越大，访问的频率越高，用于上游服务器性能不均衡的情况下，合理利用主机资源</p></blockquote><h3 id="ip-hash-ip绑定" tabindex="-1"><a class="header-anchor" href="#ip-hash-ip绑定" aria-hidden="true">#</a> IP_Hash（IP绑定）</h3><blockquote><p>请求按照访问IP进行哈希分配，均匀的落在上游服务中，<strong>可以有效的解决session共享问题</strong></p></blockquote><h4 id="fair-第三方插件" tabindex="-1"><a class="header-anchor" href="#fair-第三方插件" aria-hidden="true">#</a> fair（第三方插件）</h4><blockquote><p><strong>必须安装upstream_fair模块</strong></p><p>比权重、IP_Hash更加智能的负载均衡算法</p><p>fair算法可以根据页面大小和加载时间长短智能地进行负载均衡，<strong>响应时间短的优先分配</strong></p></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">## 哪个服务器的响应速度快，就将请求分配到那个服务器上</span>
<span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span> 
 <span class="token directive"><span class="token keyword">server</span> server1</span><span class="token punctuation">;</span> 
 <span class="token directive"><span class="token keyword">server</span> server2</span><span class="token punctuation">;</span> 
 <span class="token directive"><span class="token keyword">fair</span></span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre></div><h3 id="url-hash-第三方插件" tabindex="-1"><a class="header-anchor" href="#url-hash-第三方插件" aria-hidden="true">#</a> Url_Hash（第三方插件）</h3><blockquote><p><strong>必须安装Nginx的hash软件包</strong></p><p>按访问url的hash结果来分配请求，每个url定向到同一个后端服务器，可以进一步提高后端缓存服务器的效率</p></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> backserver</span> <span class="token punctuation">{</span> 
 <span class="token directive"><span class="token keyword">server</span> squid1:3128</span><span class="token punctuation">;</span> 
 <span class="token directive"><span class="token keyword">server</span> squid2:3128</span><span class="token punctuation">;</span> 
 <span class="token directive"><span class="token keyword">hash</span> <span class="token variable">$request_uri</span></span><span class="token punctuation">;</span> 
 <span class="token directive"><span class="token keyword">hash_method</span> crc32</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre></div><h2 id="为什么要做动静分离" tabindex="-1"><a class="header-anchor" href="#为什么要做动静分离" aria-hidden="true">#</a> 为什么要做动静分离？</h2><ul><li>Nginx的静态处理能力很强，但是动态处理能力不足，因此，在企业中常用动静分离技术</li><li>静态资源nginx直接处理，动态资源时通过反向带来在服务器上处理</li><li>动态网站里的动态网页根据一定规则把不变的资源和经常变的资源区分开来，动静资源做好了拆分以后，根据静态资源的特点将其做压缩、缓存操作</li></ul><h2 id="漏桶流算法和令牌桶算法知道" tabindex="-1"><a class="header-anchor" href="#漏桶流算法和令牌桶算法知道" aria-hidden="true">#</a> 漏桶流算法和令牌桶算法知道？</h2><h3 id="漏桶算法" tabindex="-1"><a class="header-anchor" href="#漏桶算法" aria-hidden="true">#</a> 漏桶算法</h3><blockquote><ul><li>流量整形</li><li>速率限制</li></ul><p>目的： 控制数据注入到网络的速率，平滑网络上的突发流量</p></blockquote><p><strong>突发流量会进入到一个漏桶，漏桶会按照我们定义的速率依次处理请求，如果水流过大也就是突发流量过大就会直接溢出，则多余的请求会被拒绝</strong></p><h3 id="令牌桶算法" tabindex="-1"><a class="header-anchor" href="#令牌桶算法" aria-hidden="true">#</a> 令牌桶算法</h3><blockquote><ul><li>流量整形</li><li>速率限制</li></ul><p>用来控制发送到网络上的数据的数目，并允许突发数据的发送</p></blockquote><p><strong>存在一个大小固定的令牌桶，会以恒定的速率源源不断产生令牌。如果令牌消耗速率小于生产令牌的速度，令牌就会一直产生直至装满整个令牌桶</strong></p><h2 id="限流怎么做的" tabindex="-1"><a class="header-anchor" href="#限流怎么做的" aria-hidden="true">#</a> 限流怎么做的？</h2><blockquote><p>限制用户请求速度，防止服务器负载过高或宕机</p></blockquote><p>限制方式【基于漏桶算法】：</p><ul><li>正常限制访问频率（正常流量）</li><li>突发限制访问频率（突发流量）</li><li>限制并发连接数</li></ul><h3 id="正常流量" tabindex="-1"><a class="header-anchor" href="#正常流量" aria-hidden="true">#</a> 正常流量</h3><blockquote><p>限制一个用户发送的请求或者Nginx多久接收一个请求</p><ul><li>ngx_http_limit_req_module模块限制的访问频率【基于漏桶算法】</li><li>limit_req_zone命令及limit_req命令限制单个IP的请求处理频率</li><li>1r/s代表1秒一个请求，1r/m一分钟接收一个请求， <strong>如果Nginx这时还有别人的请求没有处理完，Nginx就会拒绝处理该用户请求</strong></li></ul></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#定义限流维度，一个用户一分钟一个请求进来，多余的全部漏掉</span>
<span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/m</span><span class="token punctuation">;</span>
<span class="token comment">#绑定限流维度</span>
<span class="token directive"><span class="token keyword">server</span></span><span class="token punctuation">{</span>
  
 <span class="token directive"><span class="token keyword">location/seckill.html</span></span><span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=zone</span><span class="token punctuation">;</span> 
  <span class="token directive"><span class="token keyword">proxy_pass</span> http://lj_seckill</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="突发流量" tabindex="-1"><a class="header-anchor" href="#突发流量" aria-hidden="true">#</a> 突发流量</h3><blockquote><p>如果突发流量超出请求被拒绝处理，无法处理活动时候的突发流量，这时候应该如何进一步处理呢？</p><p><strong>Nginx提供burst参数结合nodelay参数可以解决流量突发的问题</strong></p><ul><li>可以设置能处理的超过设置的请求数外能额外处理的请求数</li></ul></blockquote><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment">#定义限流维度，一个用户一分钟一个请求进来，多余的全部漏掉</span>
<span class="token directive"><span class="token keyword">limit_req_zone</span> <span class="token variable">$binary_remote_addr</span> zone=one:10m rate=1r/m</span><span class="token punctuation">;</span>
<span class="token comment">#绑定限流维度</span>
<span class="token directive"><span class="token keyword">server</span></span><span class="token punctuation">{</span>
 <span class="token directive"><span class="token keyword">location/seckill.html</span></span><span class="token punctuation">{</span>
        <span class="token comment"># burst=5 nodelay :Nginx对于一个用户的请求会立即处理前五个，多余的就慢慢来落，没有其他用户的请求我就处理你的，有其他的请求的话我Nginx就漏掉不接受你的请求</span>
  <span class="token directive"><span class="token keyword">limit_req</span> zone=zone burst=5 nodelay</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span> http://lj_seckill</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="限制并发连接数" tabindex="-1"><a class="header-anchor" href="#限制并发连接数" aria-hidden="true">#</a> 限制并发连接数</h2><ul><li><code>ngx_http_limit_conn_module</code>模块提供了限制并发连接数的功能</li><li>使用<code>limit_conn_zone</code>指令以及<code>limit_conn</code>执行进行配置</li></ul><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
 <span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$binary_remote_addr</span> zone=myip:10m</span><span class="token punctuation">;</span>
 <span class="token directive"><span class="token keyword">limit_conn_zone</span> <span class="token variable">$server_name</span> zone=myServerName:10m</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
     <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment">## 单个IP同时并发连接数最多只能10个连接</span>
        <span class="token directive"><span class="token keyword">limit_conn</span> myip <span class="token number">10</span></span><span class="token punctuation">;</span>
        <span class="token comment">## 整个虚拟服务器同时最大并发数最多只能100个链接</span>
        <span class="token directive"><span class="token keyword">limit_conn</span> myServerName <span class="token number">100</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">rewrite</span> / https://www.142vip.cn permanent</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>只有当请求的header被服务器处理后，虚拟服务器的连接数才会计数</strong></p><h2 id="location的作用是什么" tabindex="-1"><a class="header-anchor" href="#location的作用是什么" aria-hidden="true">#</a> location的作用是什么？</h2><p>location指令的作用是根据用户请求的URI来执行不同的应用,即：根据用户请求的网站URL进行匹配，匹配成功即进行相关的操作</p><h2 id="nginx目录结构有哪些" tabindex="-1"><a class="header-anchor" href="#nginx目录结构有哪些" aria-hidden="true">#</a> Nginx目录结构有哪些？</h2><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code>[root@localhost ~]# tree /usr/local/nginx
/usr/local/nginx
├── client_body_temp
├── conf                             <span class="token comment"># Nginx所有配置文件的目录</span>
│   ├── fastcgi.conf                 <span class="token comment"># fastcgi相关参数的配置文件</span>
│   ├── fastcgi.conf.default         <span class="token comment"># fastcgi.conf的原始备份文件</span>
│   ├── fastcgi_params               <span class="token comment"># fastcgi的参数文件</span>
│   ├── fastcgi_params.default       
│   ├── koi-utf
│   ├── koi-win
│   ├── mime.types                   <span class="token comment"># 媒体类型</span>
│   ├── mime.types.default
│   ├── nginx.conf                   <span class="token comment"># Nginx主配置文件</span>
│   ├── nginx.conf.default
│   ├── scgi_params                  <span class="token comment"># scgi相关参数文件</span>
│   ├── scgi_params.default  
│   ├── uwsgi_params                 <span class="token comment"># uwsgi相关参数文件</span>
│   ├── uwsgi_params.default
│   └── win-utf
├── fastcgi_temp                     <span class="token comment"># fastcgi临时数据目录</span>
├── html                             <span class="token comment"># Nginx默认站点目录</span>
│   ├── 50x.html                     <span class="token comment"># 错误页面优雅替代显示文件，例如当出现502错误时会调用此页面</span>
│   └── index.html                   <span class="token comment"># 默认的首页文件</span>
├── logs                             <span class="token comment"># Nginx日志目录</span>
│   ├── access.log                   <span class="token comment"># 访问日志文件</span>
│   ├── error.log                    <span class="token comment"># 错误日志文件</span>
│   └── nginx.pid                    <span class="token comment"># pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件</span>
├── proxy_temp                       <span class="token comment"># 临时目录</span>
├── sbin                             <span class="token comment"># Nginx命令目录</span>
│   └── nginx                        <span class="token comment"># Nginx的启动命令</span>
├── scgi_temp                        <span class="token comment"># 临时目录</span>
└── uwsgi_temp                       <span class="token comment"># 临时目录</span>

</code></pre></div><h2 id="nginx配置文件nginx-conf有哪些属性模块" tabindex="-1"><a class="header-anchor" href="#nginx配置文件nginx-conf有哪些属性模块" aria-hidden="true">#</a> Nginx配置文件nginx.conf有哪些属性模块?</h2><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span>  1；                     <span class="token comment"># worker进程的数量</span>
events</span> <span class="token punctuation">{</span>                                   <span class="token comment"># 事件区块开始</span>
    worker_connections  1024；                <span class="token comment"># 每个worker进程支持的最大连接数</span>
<span class="token punctuation">}</span>                                         <span class="token comment"># 事件区块结束</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>                                    <span class="token comment"># HTTP区块开始</span>
    <span class="token directive"><span class="token keyword">include</span>       mime.types；                <span class="token comment"># Nginx支持的媒体类型库文件</span>
    default_type  application/octet-stream；       <span class="token comment"># 默认的媒体类型</span>
    sendfile        on；              <span class="token comment"># 开启高效传输模式</span>
    keepalive_timeout  65；             <span class="token comment"># 连接超时</span>
    server</span> <span class="token punctuation">{</span>                    <span class="token comment"># 第一个Server区块开始，表示一个独立的虚拟主机站点</span>
        <span class="token directive"><span class="token keyword">listen</span>       80；             <span class="token comment"># 提供服务的端口，默认80</span>
        server_name  localhost；            <span class="token comment"># 提供服务的域名主机名</span>
        location /</span> <span class="token punctuation">{</span>                  <span class="token comment"># 第一个location区块开始</span>
            root   html；             <span class="token comment"># 站点的根目录，相当于Nginx的安装目录</span>
            index  index.html index.htm；         <span class="token comment"># 默认的首页文件，多个用空格分开</span>
        <span class="token punctuation">}</span>                    <span class="token comment"># 第一个location区块结果</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500502503504</span>  /50x.html；       <span class="token comment"># 出现对应的http状态码时，使用50x.html回应客户</span>
        location = /50x.html</span> <span class="token punctuation">{</span>              <span class="token comment"># location区块开始，访问50x.html</span>
            root   html；             <span class="token comment"># 指定对应的站点目录为html</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  
    ......
</code></pre></div><h2 id="nginx应用场景" tabindex="-1"><a class="header-anchor" href="#nginx应用场景" aria-hidden="true">#</a> Nginx应用场景？</h2><ul><li>http服务器（存放静态资源，动静分离...）</li><li>虚拟主机（基于域名、IP、端口的不同主机）</li><li>反向代理、负载均衡</li><li>配置安全管理，SSL证书...</li></ul><h2 id="nginx的优缺点" tabindex="-1"><a class="header-anchor" href="#nginx的优缺点" aria-hidden="true">#</a> Nginx的优缺点？</h2><p>优点：</p><ul><li>占内存小，可实现高并发连接，处理响应快</li><li>可实现http服务器、虚拟主机、反向代理、负载均衡</li><li>配置简单，可以不用暴露正式的IP地址</li></ul><p>缺点：</p><ul><li>nginx处理静态文件耗费内存小，处理动态页面则明显不足，需要依靠反向代理抗住流量压力</li><li>动静分离 -----&gt; 处理资源</li></ul><h2 id="为什么要用nginx" tabindex="-1"><a class="header-anchor" href="#为什么要用nginx" aria-hidden="true">#</a> 为什么要用Nginx？</h2>`,60),g=n("li",null,"跨平台（多系统支持）、配置简单、反向代理、高并发连接（官方检测：5万并发）",-1),x=n("li",null,"内存消耗小（开10个nginx内存才占150M），处理静态资源性能优越---->耗费内存小",-1),_=n("strong",null,"ngx_http_proxy_module和ngx_http_upstream_module",-1),b={href:"https://www.cnblogs.com/xingxia/p/nginx_healthcheck.html",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,"节阅流量、加速前端页面访问（支持GZIP压缩，可以添加浏览器本地缓存）",-1),f=n("li",null,"稳定性高、宕机的概率小",-1),w=n("code",null,"异步非阻塞",-1),y=n("strong",null,"epoll模型",-1),q={href:"https://zhuanlan.zhihu.com/p/77887952",target:"_blank",rel:"noopener noreferrer"},N=n("h2",{id:"解释下代理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解释下代理","aria-hidden":"true"},"#"),a(" 解释下代理")],-1),z=n("p",null,[n("strong",null,"正向代理隐藏真实客户端，反向代理隐藏真实服务端")],-1),I={href:"https://www.cnblogs.com/taostaryu/p/10547132.html",target:"_blank",rel:"noopener noreferrer"},P=t(`<h3 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h3><p>例如：翻墙访问google、买票的黄牛 用途：</p><ul><li>访问原来无法访问的资源，如google</li><li>可以做缓存，加速访问资源</li><li>对客户端访问授权，上网进行认证</li><li>代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息</li></ul><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>例如：租房的中介</p><p>代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个服务器</p><p>用途：</p><ul><li>负载均衡，通过反向代理服务器来优化网站的负载</li><li>保证内网的安全，阻止web攻击，大型网站，通常将反向代理作为公网访问地址，Web服务器是内网</li></ul><h2 id="nginx常用命令有哪些" tabindex="-1"><a class="header-anchor" href="#nginx常用命令有哪些" aria-hidden="true">#</a> Nginx常用命令有哪些？</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#重启Nginx</span>
nginx <span class="token parameter variable">-s</span> reopen 

<span class="token comment">#重新加载Nginx配置文件，然后以优雅的方式重启Nginx</span>
nginx <span class="token parameter variable">-s</span> reload 

<span class="token comment">#强制停止Nginx服务</span>
nginx <span class="token parameter variable">-s</span> stop 

<span class="token comment">#优雅地停止Nginx服务（即处理完所有请求后再停止服务）</span>
nginx <span class="token parameter variable">-s</span> quit 

<span class="token comment">#检测配置文件是否有语法错误，然后退出</span>
nginx <span class="token parameter variable">-t</span> 

<span class="token comment">#打开帮助信息</span>
nginx -?,-h 

<span class="token comment">#显示版本信息并退出</span>
nginx <span class="token parameter variable">-v</span> 

<span class="token comment">#显示版本和配置选项信息，然后退出</span>
nginx <span class="token parameter variable">-V</span> 

<span class="token comment">#检测配置文件是否有语法错误，然后退出</span>
nginx <span class="token parameter variable">-t</span>

<span class="token comment">#检测配置文件是否有语法错误，转储并退出</span>
nginx <span class="token parameter variable">-T</span> 

<span class="token comment">#在检测配置文件期间屏蔽非错误信息</span>
nginx <span class="token parameter variable">-q</span> 

<span class="token comment">#设置前缀路径(默认是:/usr/share/nginx/)</span>
nginx <span class="token parameter variable">-p</span> prefix 

<span class="token comment">#设置配置文件(默认是:/etc/nginx/nginx.conf)</span>
nginx <span class="token parameter variable">-c</span> filename

<span class="token comment">#设置配置文件外的全局指令</span>
nginx <span class="token parameter variable">-g</span> directives 

<span class="token comment">#杀死所有nginx进程</span>
<span class="token function">killall</span> nginx 

<span class="token comment"># 退出某个进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-quit</span> <span class="token number">61333</span> 
</code></pre></div>`,10);function $(E,S){const s=p("ExternalLinkIcon");return c(),i("div",null,[r,d,n("blockquote",null,[n("p",null,[a("参考链接："),n("a",k,[a("https://blog.csdn.net/weixin_43122090/article/details/105461971"),e(s)])])]),u,n("p",null,[a("gunzip就是gzip的"),n("a",h,[a("硬连接"),e(s)]),a("，不论是压缩或解压缩，都可通过gzip指令单独完成")]),m,n("ul",null,[g,x,n("li",null,[a("提供内置的健康检查功能，服务宕机会被剔除，后面的请求会提交到其他上游服务上（基于nginx自带模块"),_,a("对后端节点做健康检查）"),n("a",b,[a("链接"),e(s)])]),v,f,n("li",null,[a("接收用户请求是异步操作的【Nginx事件处理机制是"),w,a("事件处理机制，运用了"),y,a("，提供了一个队列，排队解决】 "),n("a",q,[a("链接"),e(s)])])]),N,z,n("blockquote",null,[n("p",null,[a("参考链接："),n("a",I,[a("https://www.cnblogs.com/taostaryu/p/10547132.html"),e(s)])])]),P])}const B=o(l,[["render",$],["__file","nginx.html.vue"]]);export{B as default};
