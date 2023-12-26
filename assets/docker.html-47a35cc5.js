import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as t,c as p,a as n,b as a,d as r,e as s}from"./app-be253e4c.js";const l={},i=s(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="docker-ce安装" tabindex="-1"><a class="header-anchor" href="#docker-ce安装" aria-hidden="true">#</a> docker-ce安装</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载docker原有镜像</span>
yum remove <span class="token function">docker</span> docker-common docker-selinux docker-engine <span class="token parameter variable">-y</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2

yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

yum makecache fast

yum <span class="token function">install</span> docker-ce <span class="token parameter variable">-y</span>

</code></pre></div><h3 id="后台自启动" tabindex="-1"><a class="header-anchor" href="#后台自启动" aria-hidden="true">#</a> 后台自启动</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span> 
</code></pre></div><h3 id="服务控制" tabindex="-1"><a class="header-anchor" href="#服务控制" aria-hidden="true">#</a> 服务控制</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动docker</span>
<span class="token function">service</span> <span class="token function">docker</span> start
<span class="token comment">#停止docker</span>
<span class="token function">service</span> <span class="token function">docker</span> stop
<span class="token comment">#重启docker</span>
<span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre></div><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><p>基于linux系统使用</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 启动docker</span>
systemctl start <span class="token function">docker</span>

<span class="token comment">## 停止docker</span>
systemctl stop <span class="token function">docker</span> 

<span class="token comment">## 重启docker</span>
systemctl restart <span class="token function">docker</span>

<span class="token comment">## 查看docker状态</span>
systemctl status <span class="token function">docker</span>

<span class="token comment">## 设置docker开机启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment">## 查看docker概要信息</span>
<span class="token function">docker</span> info

<span class="token comment">## 查看docker总体帮助文档</span>
<span class="token function">docker</span> <span class="token parameter variable">--help</span>

<span class="token comment">## 查看docker命令帮助文档</span>
<span class="token function">docker</span> xxx命令 <span class="token parameter variable">--help</span>
<span class="token comment">## 例如create/log/network</span>
<span class="token function">docker</span> create/log <span class="token parameter variable">--help</span>

</code></pre></div><h2 id="镜像命令" tabindex="-1"><a class="header-anchor" href="#镜像命令" aria-hidden="true">#</a> 镜像命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查看本地所有镜像</span>
<span class="token function">docker</span> images

<span class="token comment">## 在仓库中查找镜像</span>
<span class="token function">docker</span> search XXXX
<span class="token comment">## 例如 查找mysql</span>
<span class="token function">docker</span> search mysql

<span class="token comment">## 拉取镜像，没有带tag直接拉取最新latest</span>
<span class="token function">docker</span> pull XXXX
<span class="token comment">## 例如 拉取不同版本mysql</span>
<span class="token function">docker</span> pull mysql:latest
<span class="token function">docker</span> pull mysql:5.7

<span class="token comment">##查看镜像/容器/数据卷所占用的空间</span>
<span class="token function">docker</span> system <span class="token function">df</span>
<span class="token comment">## 例如</span>
fix@mmdapl <span class="token function">docker</span> %  <span class="token function">docker</span> system <span class="token function">df</span>
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          <span class="token number">3</span>         <span class="token number">2</span>         <span class="token number">1</span>.254GB   <span class="token number">692</span>.6MB <span class="token punctuation">(</span><span class="token number">55</span>%<span class="token punctuation">)</span>
Containers      <span class="token number">2</span>         <span class="token number">2</span>         90B       0B <span class="token punctuation">(</span><span class="token number">0</span>%<span class="token punctuation">)</span>
Local Volumes   <span class="token number">3</span>         <span class="token number">1</span>         184B      92B <span class="token punctuation">(</span><span class="token number">50</span>%<span class="token punctuation">)</span>
Build Cache     <span class="token number">0</span>         <span class="token number">0</span>         0B        0B

<span class="token comment">## 删除镜像</span>
<span class="token function">docker</span> rmi XXXX
<span class="token comment">## 可以是镜像名称/ID等唯一确定镜像的标记</span>

<span class="token comment">## 强制删除镜像</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> XXX

<span class="token comment">## 查看显示虚悬镜像</span>
<span class="token function">docker</span> images <span class="token parameter variable">-f</span> <span class="token assign-left variable">dangling</span><span class="token operator">=</span>true
<span class="token comment">## 删除所有虚悬镜像</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-q</span> <span class="token parameter variable">-f</span> <span class="token assign-left variable">dangling</span><span class="token operator">=</span>true<span class="token variable">)</span></span>
<span class="token function">docker</span> image prune

<span class="token comment">## prune： 修剪 裁剪</span>

</code></pre></div><p>特别注意指令<code>docker system df</code>和<code>docker images -f dangling=true</code>的使用</p><p><strong>谈谈什么是docker虚悬镜像？</strong></p><blockquote><p>虚悬镜像名字很高大上，实际就是指：镜像没有仓库名或没有标签</p></blockquote><h2 id="容器命令" tabindex="-1"><a class="header-anchor" href="#容器命令" aria-hidden="true">#</a> 容器命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 运行容器</span>
<span class="token function">docker</span> run xxx

<span class="token comment">## 列出正在运行的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> 

<span class="token comment">## 列出所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment">## 启动已停止运行的容器</span>
<span class="token function">docker</span> start 容器ID或者容器名

<span class="token comment">## 重启容器</span>
<span class="token function">docker</span> restart 容器ID或者容器名

<span class="token comment">## 停止容器</span>
<span class="token function">docker</span> stop 容器ID或者容器名

<span class="token comment">## 强制停止容器</span>
<span class="token function">docker</span> <span class="token function">kill</span> 容器ID或者容器名

<span class="token comment">## 删除已停止容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID

<span class="token comment">## 一次性删除多个容器实例(两个方法)</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable">\${docker ps -a -q}</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>


<span class="token comment">## 查看容器日志</span>
<span class="token function">docker</span> logs xxxx

<span class="token comment">## 查看容器内运行的进程</span>
<span class="token function">docker</span> <span class="token function">top</span> xxxx

<span class="token comment">## 查看容器详细信息</span>
<span class="token function">docker</span> inspect 容器ID



</code></pre></div><h2 id="容器退出" tabindex="-1"><a class="header-anchor" href="#容器退出" aria-hidden="true">#</a> 容器退出</h2><h3 id="exit命令" tabindex="-1"><a class="header-anchor" href="#exit命令" aria-hidden="true">#</a> exit命令</h3><p>run命令进入容器，通过exit命令退出后，容器停止运行</p><h3 id="ctrl-p-q-命令" tabindex="-1"><a class="header-anchor" href="#ctrl-p-q-命令" aria-hidden="true">#</a> ctrl+p+q 命令</h3><p>run命令进入容器，通过<code>ctrl+p+q</code>退出，容器不停止</p><h2 id="容器进入" tabindex="-1"><a class="header-anchor" href="#容器进入" aria-hidden="true">#</a> 容器进入</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## exec命令进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> XXX /bin/bash

<span class="token comment">## attach命令进入容器</span>
<span class="token function">docker</span> attach 容器ID

</code></pre></div><p>attach命令和exec命令的执行区别：</p><ul><li><code>attach</code>命令直接进入容器启动命令的终端，不会启动新的进程；用<code>exit</code>命令退出时，会导致容器停止运行</li><li><code>exec</code>命令实在容器中打开新的终端，并且可以启动新的进程；用<code>exit</code>命令退出时，不会导致容器的停止</li></ul><p>一般用<code>-d</code>命令后台启动的程序，再用<code>exit</code>命令进行对应容器实例</p><h2 id="启动后台守护容器" tabindex="-1"><a class="header-anchor" href="#启动后台守护容器" aria-hidden="true">#</a> 启动后台守护容器</h2><blockquote><p>在大部分场景下，希望docker的服务在后台运行的，可以通过<code>-d</code>指定容器的后台运行模式</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 运行后台守护容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> xxxx

<span class="token comment">## 运行前台交互容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> xxxx

</code></pre></div><h2 id="文件相关" tabindex="-1"><a class="header-anchor" href="#文件相关" aria-hidden="true">#</a> 文件相关</h2>`,31),d={href:"https://blog.csdn.net/clj198606061111/article/details/50450793",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="拷贝cp命令" tabindex="-1"><a class="header-anchor" href="#拷贝cp命令" aria-hidden="true">#</a> 拷贝cp命令</h2><p>docker cp 容器ID : 容器中文件路径 当前主机待保存的路径</p><h2 id="export命令" tabindex="-1"><a class="header-anchor" href="#export命令" aria-hidden="true">#</a> export命令</h2><p>docker export 容器ID &gt; 文件名.tar</p><h2 id="import命令" tabindex="-1"><a class="header-anchor" href="#import命令" aria-hidden="true">#</a> import命令</h2><p>cat 文件名.tar | docker import -镜像用户/镜像名：镜像版本号</p><h2 id="容器数据卷" tabindex="-1"><a class="header-anchor" href="#容器数据卷" aria-hidden="true">#</a> 容器数据卷</h2><p>注意开启文件权限，避免权限不够出现错误</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 开启文件权限</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true

</code></pre></div><p>卷就是目录或者文件，存在于一个或多个容器中，由于docker挂载到容器，但不属于<code>联合文件系统</code>，因此能够绕过Union File System提供一些用于持续存储或者共享数据的特性；</p><p>卷的设计目的就是数据持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时<code>删除容器挂载的数据卷</code></p><p>重要特点：</p><ul><li>数据卷可以在容器之间共享或者重用数据</li><li>数据卷中的更改可以直接实时生效，非常方便</li><li>数据卷中的更改不会包含在镜像的更新中</li><li>数据卷的生命周期一直持续到没有容器使用它为止</li></ul><h3 id="文件映射" tabindex="-1"><a class="header-anchor" href="#文件映射" aria-hidden="true">#</a> 文件映射</h3><blockquote><p>方便进行文件映射，完成数据的持久化，保存重要数据</p></blockquote><p>命令格式： <code>-v xxx容器文件路径:宿主机文件路径</code></p><h3 id="读写规则" tabindex="-1"><a class="header-anchor" href="#读写规则" aria-hidden="true">#</a> 读写规则</h3><ul><li>ro: 只读</li><li>rw：可读可写</li></ul><p>命令格式： <code>-v xxx容器文件路径:宿主机文件路径:读写规则</code></p><h2 id="推送至阿里云" tabindex="-1"><a class="header-anchor" href="#推送至阿里云" aria-hidden="true">#</a> 推送至阿里云</h2><h3 id="用户登录" tabindex="-1"><a class="header-anchor" href="#用户登录" aria-hidden="true">#</a> 用户登录</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 注意密码</span>
<span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>mmdapl registry.cn-hangzhou.aliyuncs.com
</code></pre></div><h3 id="镜像拉取" tabindex="-1"><a class="header-anchor" href="#镜像拉取" aria-hidden="true">#</a> 镜像拉取</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/142vip/docker-yapi:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
</code></pre></div><p><em>注意:不同的仓库需要匹配镜像的版本</em></p><h3 id="镜像推送" tabindex="-1"><a class="header-anchor" href="#镜像推送" aria-hidden="true">#</a> 镜像推送</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">### 修改本地镜像tag标签</span>
<span class="token function">docker</span> tag <span class="token punctuation">[</span>ImageId<span class="token punctuation">]</span> registry.cn-hangzhou.aliyuncs.com/142vip/docker-yapi:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>
<span class="token function">docker</span> tag a27c1a247a64 registry.cn-hangzhou.aliyuncs.com/142vip/oauth2:0.0.1.0
<span class="token comment">### 修改后的镜像按照版本号推送到阿里云</span>
<span class="token function">docker</span> push registry.cn-hangzhou.aliyuncs.com/142vip/docker-yapi:<span class="token punctuation">[</span>镜像版本号<span class="token punctuation">]</span>

</code></pre></div><h3 id="退出登录" tabindex="-1"><a class="header-anchor" href="#退出登录" aria-hidden="true">#</a> 退出登录</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">logout</span>
</code></pre></div>`,29);function u(h,m){const e=o("ExternalLinkIcon");return t(),p("div",null,[i,n("blockquote",null,[n("p",null,[a("export和import命令可以参考："),n("a",d,[a("https://blog.csdn.net/clj198606061111/article/details/50450793"),r(e)])])]),k])}const g=c(l,[["render",u],["__file","docker.html.vue"]]);export{g as default};
