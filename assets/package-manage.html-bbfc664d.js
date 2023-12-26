import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c,a as n,b as p,d as u,e as s}from"./app-be253e4c.js";const i={},o=s(`<h1 id="包管理工具" tabindex="-1"><a class="header-anchor" href="#包管理工具" aria-hidden="true">#</a> 包管理工具</h1><h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h2><p>apt-get 命令适用于 deb 包管理式的 Linux 操作系统（Debian、Ubuntu等），主要用于自动从互联网软件仓库中搜索、下载、安装、升级、卸载软件或操作系统</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 普通安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span> xxxx 
<span class="token comment">#安装指定包的指定版本</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token assign-left variable">xxx</span><span class="token operator">=</span>version     
<span class="token comment">#重新安装</span>
<span class="token function">apt-get</span> <span class="token parameter variable">--reinstall</span> <span class="token function">install</span> xxx      
 
<span class="token comment"># 安装源码包所需要的编译环境</span>
<span class="token function">apt-get</span> build-dep xxx                
<span class="token comment">#修复依赖关系</span>
<span class="token function">apt-get</span> <span class="token parameter variable">-f</span> <span class="token function">install</span>                          
<span class="token comment">#下载软件包的源码</span>
<span class="token function">apt-get</span> <span class="token builtin class-name">source</span> xxx                  
</code></pre></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#删除软件包, 保留配置文件</span>
<span class="token function">apt-get</span> remove xxx              
<span class="token comment">#删除软件包, 同时删除配置文件</span>
<span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> remove xxx      
删除软件包, 同时删除配置文件
<span class="token function">apt-get</span> purge xxx               
 
删除软件包, 同时删除为满足依赖,而自动安装且不再使用的软件包
<span class="token function">apt-get</span> autoremove xxx          
<span class="token comment">#删除软件包, 删除配置文件, 删除不再使用的依赖包</span>
<span class="token function">apt-get</span> <span class="token parameter variable">--purge</span> autoremove xxx  
<span class="token comment">#清除 已下载的软件包 和 旧软件包</span>
<span class="token function">apt-get</span> clean <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> autoclean       

</code></pre></div><h3 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新安装源（Source）</span>
<span class="token function">apt-get</span> update                   
<span class="token comment">#更新已安装的软件包</span>
<span class="token function">apt-get</span> upgrade                  
<span class="token comment">#更新已安装的软件包（识别并处理依赖关系的改变）</span>
<span class="token function">apt-get</span> dist-upgrade            
</code></pre></div><h3 id="帮助命令" tabindex="-1"><a class="header-anchor" href="#帮助命令" aria-hidden="true">#</a> 帮助命令</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token parameter variable">--help</span>
</code></pre></div><h3 id="配置软件源" tabindex="-1"><a class="header-anchor" href="#配置软件源" aria-hidden="true">#</a> 配置软件源</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 1. 配置备份</span>
<span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list.bak

<span class="token comment">## 2.新建配置</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/apt/sources.list

<span class="token comment">## 3. 配置列表</span>
<span class="token comment"># 阿里镜像</span>
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse 
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse 
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse

<span class="token comment"># 中科大</span>
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-updates main restricted
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-updates main restricted
deb http://mirrors.ustc.edu.cn/ubuntu/ precise universe
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise universe
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-updates universe
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-updates universe
deb http://mirrors.ustc.edu.cn/ubuntu/ precise multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-updates multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-updates multiverse
deb http://mirrors.ustc.edu.cn/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.ustc.edu.cn/ubuntu/ precise-backports main restricted universe multiverse

<span class="token comment"># 搜狐源</span>
deb http://mirrors.sohu.com/ubuntu/ precise-updates main restricted
deb-src http://mirrors.sohu.com/ubuntu/ precise-updates main restricted
deb http://mirrors.sohu.com/ubuntu/ precise universe
deb-src http://mirrors.sohu.com/ubuntu/ precise universe
deb http://mirrors.sohu.com/ubuntu/ precise-updates universe
deb-src http://mirrors.sohu.com/ubuntu/ precise-updates universe
deb http://mirrors.sohu.com/ubuntu/ precise multiverse
deb-src http://mirrors.sohu.com/ubuntu/ precise multiverse
deb http://mirrors.sohu.com/ubuntu/ precise-updates multiverse
deb-src http://mirrors.sohu.com/ubuntu/ precise-updates multiverse
deb http://mirrors.sohu.com/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.sohu.com/ubuntu/ precise-backports main restricted universe multiverse

<span class="token comment"># 网易源</span>
deb http://mirrors.163.com/ubuntu/ precise-updates main restricted
deb-src http://mirrors.163.com/ubuntu/ precise-updates main restricted
deb http://mirrors.163.com/ubuntu/ precise universe
deb-src http://mirrors.163.com/ubuntu/ precise universe
deb http://mirrors.163.com/ubuntu/ precise-updates universe
deb-src http://mirrors.163.com/ubuntu/ precise-updates universe
deb http://mirrors.163.com/ubuntu/ precise multiverse
deb-src http://mirrors.163.com/ubuntu/ precise multiverse
deb http://mirrors.163.com/ubuntu/ precise-updates multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-updates multiverse
deb http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ precise-backports main restricted universe multiverse

<span class="token comment">#ubuntu的源， 最好也加上，避免某些库下载不到</span>
deb http://archive.ubuntu.com/ubuntu/ trusty main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-security main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-updates main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-proposed main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ trusty-backports main restricted universe multiverse


<span class="token comment">### 4. 更新</span>
<span class="token function">apt-get</span> update
<span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade

</code></pre></div><h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h2><p>使用yum安装和卸载软件，软件包都是rpm格式的</p><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## -y:不询问，默认安装</span>
yum  <span class="token function">install</span> XXX <span class="token parameter variable">-y</span>

<span class="token comment">## 升级</span>
yum install/update xxx
</code></pre></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 使用YUM查找软件包</span>
yum search

<span class="token comment">## 列出所有可安装的软件包</span>
yum list

<span class="token comment">## 列出所有可更新的软件清单</span>
yum check-update

<span class="token comment">## 列出所有已安装的软件包</span>
yumlist installed

<span class="token comment">## 列出所有已安装但不在Yum Repository內的软件包</span>
yumlist extras

<span class="token comment">## 获取所有软件包信息</span>
yum info

<span class="token comment">## 列出软件包提供哪些文件</span>
yum provides~
</code></pre></div><h3 id="清除" tabindex="-1"><a class="header-anchor" href="#清除" aria-hidden="true">#</a> 清除</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 卸载</span>
yum erase 安装包名称
yum remove xxx

<span class="token comment">## 清除缓存目录下的软件包</span>
yum clean packages

<span class="token comment">## 清除缓存目录下的 headers</span>
yum clean headers

<span class="token comment">## 清除缓存目录下旧的 headers</span>
yum clean oldheaders
</code></pre></div><h3 id="更换软件源" tabindex="-1"><a class="header-anchor" href="#更换软件源" aria-hidden="true">#</a> 更换软件源</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 1. 安装wget</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span>

<span class="token comment">## 2.修改原yum源文件名称，备份</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak

<span class="token comment">## 3.下载阿里yum源或163都可以</span>
<span class="token comment"># 163的yum源</span>
<span class="token function">wget</span> http://mirrors.163.com/.help/CentOS7-Base-163.repo
<span class="token comment"># 阿里yum源</span>
<span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

<span class="token comment">## 4.清楚缓存</span>
yum makecache
</code></pre></div><h2 id="apk" tabindex="-1"><a class="header-anchor" href="#apk" aria-hidden="true">#</a> apk</h2><p>Alpine Linux 下的包管理工具</p><p>优势：</p><ul><li>Alpine Linux的Docker镜像特点是轻巧（大小只有5M）且有完整的包管理工具(APK)。</li><li>Docker官方镜像可能会用Alpine Linux替换Ubuntu。</li></ul><p>劣势:</p><ul><li>Alpine Linux使用了musl，可能和其他Linux发行版使用的glibc实现会有些不同。</li><li>musl实现的DNS服务不会使用resolv.conf文件中的search和domain两个配置，通过DNS来进行服务发现时需要注意</li></ul><p>Alpine使用apk进行包管理，通过apk --help命令查看完整的包管理命令</p><h3 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>apk <span class="token function">install</span> xxx
<span class="token comment"># 搜索软件包 支持正则</span>
apk search xxx 
<span class="token comment"># 查看包的详细信息</span>
apk info xxx 
<span class="token comment">#显示完整的软件包信息</span>
apk info <span class="token parameter variable">-a</span> zlib 
<span class="token comment">#显示指定文件属于的包</span>
apk info --who-owns /sbin/lbu 

<span class="token comment"># list local package</span>
apk show 
<span class="token comment"># 卸载并删除 包</span>
apk del openssh openntp <span class="token function">vim</span>

$ apk info <span class="token comment">#列出所有已安装的软件包</span>

</code></pre></div><h3 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h3><p>upgrade命令升级系统已安装的所以软件包（一般包括内核），当然也可指定仅升级部分软件包（通过-u或–upgrade选择指定）。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新最新本地镜像源</span>
apk update
<span class="token comment"># 升级软件</span>
apk upgrade
<span class="token comment"># 指定升级部分软件包 </span>
apk <span class="token function">add</span> <span class="token parameter variable">--upgrade</span> busybox 
<span class="token comment">## 指定仓库</span>
apk <span class="token function">add</span> <span class="token function">docker</span> --update-cache <span class="token parameter variable">--repository</span> http://mirrors.ustc.edu.cn/alpine/v3.4/main/ --allow-untrusted
</code></pre></div><h3 id="配置软件源-1" tabindex="-1"><a class="header-anchor" href="#配置软件源-1" aria-hidden="true">#</a> 配置软件源</h3>`,36),l={href:"https://mirrors.tuna.tsinghua.edu.cn/help/alpine/",target:"_blank",rel:"noopener noreferrer"},m=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/apk/repositories

<span class="token comment"># /media/cdrom/apks</span>
http://mirrors.ustc.edu.cn/alpine/v3.5/main
http://mirrors.ustc.edu.cn/alpine/v3.5/community

<span class="token comment">## 替换阿里源</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g&#39;</span> /etc/apk/repositories

<span class="token comment">## 替换中科大源</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g&#39;</span> /etc/apk/repositories
</code></pre></div>`,1);function d(h,b){const e=t("ExternalLinkIcon");return r(),c("div",null,[o,n("ul",null,[n("li",null,[n("a",l,[p("https://mirrors.tuna.tsinghua.edu.cn/help/alpine/"),u(e)])])]),m])}const g=a(i,[["render",d],["__file","package-manage.html.vue"]]);export{g as default};
