import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as r,d as s,a as n,b as a,e as o}from"./app-be253e4c.js";const d={},i=n("h1",{id:"docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),a(" Docker")],-1),k=o(`<p>Docker是一个开源的应用容器引擎，它是基于Go语言并遵从Apache2.0协议开源。是一个应用打包、分发、部署的工具，可以把它理解为一个轻量的虚拟机。</p><p>Docker可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的linux机器上，也可以实现虚拟化。 通过容器可以实现方便快速并且与平台解耦的自动化部署方式，无论你部署时的环境如何，容器中的应用程序都会运行在同一种环境下。并且它是完全使用沙箱机制，相互之间是隔离的，更重要的是容器性能开销极低。</p><p>Docker思想：</p><ul><li>集装箱</li><li>标准化： ① 运输方式 ② 存储方式 ③ API 接口</li><li>隔离</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h3><p>使用Mac中的<code>Homebrew</code>直接安装即可</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token parameter variable">--cask</span> <span class="token function">docker</span>
</code></pre></div><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><blockquote><p>以CentOS系统为例</p></blockquote><h4 id="使用yum安装" tabindex="-1"><a class="header-anchor" href="#使用yum安装" aria-hidden="true">#</a> 使用Yum安装</h4><ul><li>检查系统版本</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-r</span> 
</code></pre></div><ul><li>移除旧Docker版本</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-selinux <span class="token punctuation">\\</span>
                  docker-engine-selinux <span class="token punctuation">\\</span>
                  docker-engine
</code></pre></div><ul><li>安装docker-ce</li></ul><p>使用yum下载，可以先对yum更新</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 软件更新</span>
yum update

<span class="token comment">## 安装docker社区版</span>
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce
</code></pre></div><h4 id="使用官方脚本安装" tabindex="-1"><a class="header-anchor" href="#使用官方脚本安装" aria-hidden="true">#</a> 使用官方脚本安装</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 下载脚本</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> get.docker.com <span class="token parameter variable">-o</span> get-docker.sh

<span class="token comment">## 执行安装</span>
<span class="token function">sh</span> get-docker.sh <span class="token parameter variable">--mirror</span> Aliyun
</code></pre></div><p>当docker安装完成后，建议设置开机启动启动服务</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启docker服务开机自启动命令</span>
systemctl <span class="token builtin class-name">enable</span> docker.service

<span class="token comment"># 关闭docker服务开机自启动命令</span>
systemctl disable docker.service
</code></pre></div><h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载docker-ce</span>
<span class="token function">sudo</span> yum remove docker-ce

<span class="token comment"># 删除docker文件数据</span>
<span class="token function">sudo</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre></div><h2 id="启动-停止服务" tabindex="-1"><a class="header-anchor" href="#启动-停止服务" aria-hidden="true">#</a> 启动|停止服务</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 启动docker</span>
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
</code></pre></div><h3 id="容器退出" tabindex="-1"><a class="header-anchor" href="#容器退出" aria-hidden="true">#</a> 容器退出</h3><ul><li>exit命令</li></ul><p>run命令进入容器，通过exit命令退出后，容器停止运行</p><ul><li>ctrl+p+q 命令</li></ul><p>run命令进入容器，通过<code>ctrl+p+q</code>退出，容器不停止</p><h3 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## exec命令进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> XXX /bin/bash

<span class="token comment">## attach命令进入容器</span>
<span class="token function">docker</span> attach 容器ID

</code></pre></div><p>attach命令和exec命令的执行区别：</p><ul><li><code>attach</code>命令直接进入容器启动命令的终端，不会启动新的进程；用<code>exit</code>命令退出时，会导致容器停止运行</li><li><code>exec</code>命令实在容器中打开新的终端，并且可以启动新的进程；用<code>exit</code>命令退出时，不会导致容器的停止</li></ul><p>一般用<code>-d</code>命令后台启动的程序，再用<code>exit</code>命令进行对应容器实例</p><h3 id="后台守护容器" tabindex="-1"><a class="header-anchor" href="#后台守护容器" aria-hidden="true">#</a> 后台守护容器</h3><blockquote><p>在大部分场景下，希望docker的服务在后台运行的，可以通过<code>-d</code>指定容器的后台运行模式</p></blockquote><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 运行后台守护容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> xxxx

<span class="token comment">## 运行前台交互容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> xxxx

</code></pre></div><h4 id="文件相关" tabindex="-1"><a class="header-anchor" href="#文件相关" aria-hidden="true">#</a> 文件相关</h4><h3 id="文件拷贝" tabindex="-1"><a class="header-anchor" href="#文件拷贝" aria-hidden="true">#</a> 文件拷贝</h3><p>通过docker cp指令能够将文件复制到容器中，也可以将容器中的文件复制出来</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 复制到容器中</span>
<span class="token function">docker</span> <span class="token function">cp</span> 当前主机待保存的路径 容器ID:容器中文件路径 

<span class="token comment">## 将容器中的文件复制到容器外</span>
<span class="token function">docker</span> <span class="token function">cp</span> 容器ID:容器中文件路径 当前主机待保存的路径

</code></pre></div><h3 id="导入-导出" tabindex="-1"><a class="header-anchor" href="#导入-导出" aria-hidden="true">#</a> 导入|导出</h3>`,51),u={href:"https://blog.csdn.net/clj198606061111/article/details/50450793",target:"_blank",rel:"noopener noreferrer"},h=o(`<h4 id="导出export命令" tabindex="-1"><a class="header-anchor" href="#导出export命令" aria-hidden="true">#</a> 导出export命令</h4><blockquote><p>可以自定义容器导出后文件的格式</p></blockquote><p>命令格式： docker export 容器ID &gt; 文件名.tar</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 例如：</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> xxx xxx.tar
<span class="token function">docker</span> <span class="token builtin class-name">export</span> <span class="token parameter variable">-o</span> <span class="token string">&quot;xxx.tar&quot;</span> xxx

</code></pre></div><h4 id="导入import命令" tabindex="-1"><a class="header-anchor" href="#导入import命令" aria-hidden="true">#</a> 导入import命令</h4><blockquote><p>将本地保存的容器快照导入为镜像</p></blockquote><p>命令格式： docker import -镜像用户/镜像名：镜像版本号</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 例如：</span>
<span class="token function">docker</span> <span class="token function">import</span> web.tar web:v1
</code></pre></div><h2 id="容器数据卷" tabindex="-1"><a class="header-anchor" href="#容器数据卷" aria-hidden="true">#</a> 容器数据卷</h2><p>注意开启文件权限，避免权限不够出现错误</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 开启文件权限</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true

</code></pre></div><h3 id="什么是数据卷" tabindex="-1"><a class="header-anchor" href="#什么是数据卷" aria-hidden="true">#</a> 什么是数据卷</h3><p>卷就是目录或者文件，存在于一个或多个容器中，由于docker挂载到容器，但不属于<code>联合文件系统</code>，因此能够绕过Union File System提供一些用于持续存储或者共享数据的特性；</p><p>卷的设计目的就是数据持久化，完全独立于容器的生存周期，因此Docker不会在容器删除时<code>删除容器挂载的数据卷</code></p><p>重要特点：</p><ul><li>数据卷可以在容器之间共享或者重用数据</li><li>数据卷中的更改可以直接实时生效，非常方便</li><li>数据卷中的更改不会包含在镜像的更新中</li><li>数据卷的生命周期一直持续到没有容器使用它为止</li></ul><h3 id="文件映射" tabindex="-1"><a class="header-anchor" href="#文件映射" aria-hidden="true">#</a> 文件映射</h3><blockquote><p>方便进行文件映射，完成数据的持久化，保存重要数据</p></blockquote><p>命令格式： <code>-v xxx容器文件路径:宿主机文件路径</code></p><h3 id="读写规则" tabindex="-1"><a class="header-anchor" href="#读写规则" aria-hidden="true">#</a> 读写规则</h3><ul><li>ro: 只读</li><li>rw：可读可写</li></ul><p>命令格式： <code>-v xxx容器文件路径:宿主机文件路径:读写规则</code></p><h2 id="实战操作" tabindex="-1"><a class="header-anchor" href="#实战操作" aria-hidden="true">#</a> 实战操作</h2><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,24),m={href:"https://docs.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"};function b(f,x){const t=c("Mermaid"),e=c("ExternalLinkIcon");return l(),r("div",null,[i,s(t,{id:"mermaid-3",code:"eJzLzcxLyU0s4FJQKMrPL9FwyU/OTi3SBHJBQOP5uoanvVOf7O5+vrsXLvhy6pynzf1PJ+59snsJXPDpup1PZ65AE3w2dcOz3nVPe7drcgEAgkQsbQ=="}),k,n("blockquote",null,[n("p",null,[a("参考："),n("a",u,[a("https://blog.csdn.net/clj198606061111/article/details/50450793"),s(e)])])]),h,n("ul",null,[n("li",null,[n("a",m,[a("https://docs.docker.com/get-started/"),s(e)])])])])}const y=p(d,[["render",b],["__file","docker.html.vue"]]);export{y as default};
