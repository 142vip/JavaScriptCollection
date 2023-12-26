import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c,a,b as p,d as o,e as r}from"./app-be253e4c.js";const l={},i=r(`<h1 id="基础安装" tabindex="-1"><a class="header-anchor" href="#基础安装" aria-hidden="true">#</a> 基础安装</h1><h2 id="脚本方式" tabindex="-1"><a class="header-anchor" href="#脚本方式" aria-hidden="true">#</a> 脚本方式</h2><p>利用官方脚本进行安装，注意更新apt工具：<code>apt-get update -y</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://packages.redis.io/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/redis-archive-keyring.gpg

<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/redis.list

<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> redis

</code></pre></div><h2 id="压缩包方式" tabindex="-1"><a class="header-anchor" href="#压缩包方式" aria-hidden="true">#</a> 压缩包方式</h2><h3 id="获取redis压缩包" tabindex="-1"><a class="header-anchor" href="#获取redis压缩包" aria-hidden="true">#</a> 获取redis压缩包</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 下载redis</span>
<span class="token function">wget</span> http://download.redis.io/releases/redis-4.0.8.tar.gz

<span class="token comment">## 解压到当前目录</span>
<span class="token function">tar</span> xzvf redis-4.0.8.tar.gz
</code></pre></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> redis-4.0.8

<span class="token comment">## 编译</span>
<span class="token function">make</span>
<span class="token builtin class-name">cd</span> src
<span class="token function">make</span> <span class="token function">install</span> <span class="token assign-left variable">PREFIX</span><span class="token operator">=</span>/usr/local/redis
</code></pre></div><h3 id="移动配置文件到安装目录下" tabindex="-1"><a class="header-anchor" href="#移动配置文件到安装目录下" aria-hidden="true">#</a> 移动配置文件到安装目录下</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/

<span class="token function">mkdir</span> /usr/local/redis/etc

<span class="token comment">## 移动配置文件</span>
<span class="token function">mv</span> redis.conf /usr/local/redis/etc
</code></pre></div><h3 id="redis配置后台启动" tabindex="-1"><a class="header-anchor" href="#redis配置后台启动" aria-hidden="true">#</a> redis配置后台启动</h3><p>将<code>daemonize no</code> 改成<code>daemonize yes</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 编辑redis.conf配置</span>
<span class="token function">vi</span> /usr/local/redis/etc/redis.conf 

<span class="token comment">## wq！退出</span>
</code></pre></div><h3 id="设置开启启动" tabindex="-1"><a class="header-anchor" href="#设置开启启动" aria-hidden="true">#</a> 设置开启启动</h3><p>编辑<code>/etc/rc.local</code>文件，添加内容：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf 
</code></pre></div><p>意思是：开机调用这段开启redis的命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/rc.local 
</code></pre></div><h3 id="手动开启服务" tabindex="-1"><a class="header-anchor" href="#手动开启服务" aria-hidden="true">#</a> 手动开启服务</h3><p>注意到redis相关目录下执行<code>redis-server</code>命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 指定配置启动</span>
/usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf 

<span class="token comment">## 后台启动  加上\`&amp;\`号使redis以后台程序方式运行</span>
redis-server <span class="token operator">&amp;</span>
</code></pre></div><h3 id="检查redis相关服务" tabindex="-1"><a class="header-anchor" href="#检查redis相关服务" aria-hidden="true">#</a> 检查Redis相关服务</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查看redis进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span><span class="token function">grep</span> redis

<span class="token comment">## 查看redis监听的端口，默认6379</span>
<span class="token function">netstat</span> <span class="token parameter variable">-lntp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">6379</span>

</code></pre></div><h2 id="docker容器方式" tabindex="-1"><a class="header-anchor" href="#docker容器方式" aria-hidden="true">#</a> docker容器方式</h2><h3 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> redis <span class="token punctuation">\\</span>
<span class="token parameter variable">--appendonly</span> <span class="token function">yes</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/redis/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /usr/local/docker/redis/data:/data  <span class="token punctuation">\\</span>
redis:alpine redis-server /etc/redis/redis.conf
</code></pre></div><h3 id="相关命令" tabindex="-1"><a class="header-anchor" href="#相关命令" aria-hidden="true">#</a> 相关命令</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 重启</span>
<span class="token function">docker</span> restart redis

<span class="token comment">## 启动</span>
<span class="token function">docker</span> start redis

<span class="token comment">## 停止</span>
<span class="token function">docker</span> stop redis

<span class="token comment">## 删除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> redis

<span class="token comment">## 查看容器详情</span>
<span class="token function">docker</span> inspect redis

<span class="token comment">## 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> xxx <span class="token function">bash</span>

</code></pre></div><h2 id="docker-compose方式" tabindex="-1"><a class="header-anchor" href="#docker-compose方式" aria-hidden="true">#</a> docker-compose方式</h2><h3 id="创建服务" tabindex="-1"><a class="header-anchor" href="#创建服务" aria-hidden="true">#</a> 创建服务</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">##</span>
<span class="token comment">## 功能：集群方式启动redis服务</span>
<span class="token comment">## 使用：</span>
<span class="token comment">##   - docker-compose up -d</span>
<span class="token comment">## 默认密码：123456</span>
<span class="token comment">##</span>
<span class="token comment">## 参考链接：https://blog.51cto.com/u_15127508/4395149</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server <span class="token punctuation">-</span><span class="token punctuation">-</span>port 6379 <span class="token punctuation">-</span><span class="token punctuation">-</span>requirepass 123456  <span class="token punctuation">-</span><span class="token punctuation">-</span>appendonly yes
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6379:6379&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.19.0.3

<span class="token comment">## 创建桥接网络</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token comment">## 参考：https://www.jianshu.com/p/d70c61d45364</span>
  <span class="token key atrule">net</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token comment"># external: true</span>
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.19.0.0/24
          <span class="token comment">## 网关</span>
          <span class="token key atrule">gateway</span><span class="token punctuation">:</span> 172.19.0.1
</code></pre></div><h3 id="相关命令-1" tabindex="-1"><a class="header-anchor" href="#相关命令-1" aria-hidden="true">#</a> 相关命令</h3><p>容器操作命令和上面的类似</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 下线</span>
<span class="token function">docker-compose</span> down

<span class="token comment">## 后台启动</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,36),d={href:"https://redis.io/docs/getting-started/installation/",target:"_blank",rel:"noopener noreferrer"};function u(k,h){const s=e("ExternalLinkIcon");return t(),c("div",null,[i,a("ul",null,[a("li",null,[a("a",d,[p("https://redis.io/docs/getting-started/installation/"),o(s)])])])])}const b=n(l,[["render",u],["__file","base-install.html.vue"]]);export{b as default};
