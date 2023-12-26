import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-be253e4c.js";const o={},c=e(`<h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> Docker-Compose</h1><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 文件下载 可能下载有点慢</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://github.com/docker/compose/releases/download/1.21.2/docker-compose-uname -s-uname <span class="token parameter variable">-m</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose

<span class="token comment">## 【推荐】下载慢，可以尝试：</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://get.daocloud.io/docker/compose/releases/download/1.24.1/docker-compose-uname -s-uname <span class="token parameter variable">-m</span> <span class="token operator">&gt;</span> /usr/local/bin/docker-compose

<span class="token comment">## 配置docker-compose执行权限</span>
<span class="token function">chmod</span> +x /usr/local/bin/docker-compose

<span class="token comment">## 查看版本</span>
<span class="token function">docker-compose</span> version
安装完成后，就可以查看docker-compose版本信息
<span class="token punctuation">[</span>root@172-16-203-143 ~<span class="token punctuation">]</span><span class="token comment"># docker-compose version</span>
<span class="token function">docker-compose</span> version <span class="token number">1.24</span>.1, build 4667896b
docker-py version: <span class="token number">3.7</span>.3
CPython version: <span class="token number">3.6</span>.8
OpenSSL version: OpenSSL <span class="token number">1.1</span>.0j  <span class="token number">20</span> Nov <span class="token number">2018</span>
另外，docker-compose的操作和docker非常类似，可以简单记忆：
<span class="token comment">## 服务启动，默认Dockerfile  -d:后台启动，不加为前台启动</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> 

<span class="token comment">## 服务down 相当于kill</span>
<span class="token function">docker-compose</span> down
</code></pre></div>`,4),p=[c];function r(t,l){return s(),a("div",null,p)}const k=n(o,[["render",r],["__file","docker-compose.html.vue"]]);export{k as default};
