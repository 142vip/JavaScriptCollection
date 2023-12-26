import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-be253e4c.js";const t={},c=s(`<h1 id="linux下软件安装" tabindex="-1"><a class="header-anchor" href="#linux下软件安装" aria-hidden="true">#</a> Linux下软件安装</h1><p>linux系统，主要分debian系和redhat系，还有其它自由的发布版本</p><ul><li>debian系主要有：<code>Debian</code>、<code>Ubuntu</code>、<code>Mint</code>等及其衍生版本；</li><li>redhat系主要有：<code>RedHat</code>、<code>Fedora</code>、<code>CentOs</code>等，</li></ul><p>在日常的服务端开发中，接触频率较高为：<code>Debian</code>、<code>Ubuntu</code>、<code>CentOs</code>，我们需要知道在不同类型的服务器中，掌握基础软件安装、卸载方式 ；</p><h2 id="redhat系列" tabindex="-1"><a class="header-anchor" href="#redhat系列" aria-hidden="true">#</a> RedHat系列</h2><ul><li>安装包格式：rpm包</li><li>包管理工具 yum</li><li>支持tar包</li></ul><h2 id="debian系列" tabindex="-1"><a class="header-anchor" href="#debian系列" aria-hidden="true">#</a> Debian系列</h2><ul><li>安装包格式 deb包</li><li>包管理工具 apt-get</li><li>支持tar包</li></ul><h2 id="包管理器" tabindex="-1"><a class="header-anchor" href="#包管理器" aria-hidden="true">#</a> 包管理器</h2><h3 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h3><ul><li>下载rpm安装包并自动安装</li><li>一次性安装所有的依赖包</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装 -y 默认安装，不需要询问</span>
yum <span class="token function">install</span> xx
<span class="token comment">## 卸载</span>
yum remove xxx
<span class="token comment">## 更新</span>
yum update xxx
</code></pre></div><h3 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h3><ul><li>可以用于运作deb包</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装</span>
<span class="token function">apt-get</span> <span class="token function">install</span>
<span class="token comment">##卸载</span>
<span class="token function">apt-get</span> remove
<span class="token comment">## 更新</span>
<span class="token function">apt-get</span> update
</code></pre></div><h3 id="wget" tabindex="-1"><a class="header-anchor" href="#wget" aria-hidden="true">#</a> wget</h3><p><strong>本质是一个下载工具</strong> 特点如下：</p><ul><li>只管下载，不会安装</li><li>安装的时候需要找rpm命令帮忙</li><li>遵循协议：http fpt https这三个都是tcp/ip协议</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 一般步骤：直接下载---&gt;解压---&gt;编译安装</span>
<span class="token function">wget</span> https://curl.haxx.se/download/curl-7.30.1.tar.gz
<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-xzvf</span>  curl-7.30.1.tar.gz 
<span class="token builtin class-name">cd</span> curl-7.30.1
./configure
<span class="token comment">## 编译安装</span>
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre></div><p>当然，如果没有<code>wget</code>可以用包管理器下载，也可以使用<code>curl</code>命令来代替下载</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://curl.haxx.se/download/curl-7.30.1.tar.gz
<span class="token comment">## 替换curl -o 保存本地</span>
<span class="token function">curl</span> <span class="token parameter variable">-O</span> https://curl.haxx.se/download/curl-7.30.1.tar.gz
</code></pre></div><h2 id="curl" tabindex="-1"><a class="header-anchor" href="#curl" aria-hidden="true">#</a> curl</h2><h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> vim</h2><h2 id="gcc" tabindex="-1"><a class="header-anchor" href="#gcc" aria-hidden="true">#</a> gcc</h2>`,24),l=[c];function o(i,d){return e(),n("div",null,l)}const h=a(t,[["render",o],["__file","soft-install.html.vue"]]);export{h as default};
