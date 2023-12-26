import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-be253e4c.js";const t={},o=e(`<h1 id="静态文件部署" tabindex="-1"><a class="header-anchor" href="#静态文件部署" aria-hidden="true">#</a> 静态文件部署</h1><p>目前，前端静态资源部署主要分为<code>前端独立部署</code>和<code>后端混合部署</code>两种方式； 就Node技术栈而言，更加推荐前端独立部署，有利于在微服务场景下进行问题定位</p><div class="language-nginx" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 部署前端构建后的dist静态文件</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>
    <span class="token directive"><span class="token keyword">access_log</span>  /var/log/nginx/host.access.log  main</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log  error</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token comment"># root 根目录，默认nginx镜像的html文件夹，可以指定其他</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token comment"># 如果vue-router使用的是history模式，需要设置这个</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>
    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>和Docker结合起来使用，快速构建镜像、容器部署，在工程中经常使用，例如：</p><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 设置基础镜像</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:latest</span>

<span class="token comment"># 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面</span>
<span class="token instruction"><span class="token keyword">COPY</span> dist/  /usr/share/nginx/html/</span>
<span class="token comment"># 用本地的 default.conf 配置来替换nginx镜像里的默认配置</span>
<span class="token instruction"><span class="token keyword">COPY</span> default.conf /etc/nginx/conf.d/default.conf</span>
</code></pre></div><p>可以在<code>package.json</code>中添加相关脚本</p><div class="language-json5" data-ext="json5"><pre class="language-json5"><code><span class="token comment">// 前端工程项目中脚本统一配置</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --open&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service lint&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docker-build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;docker build -t build-web .&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>bash 下执行多个命令时， <code>;</code>、<code>&amp;&amp;</code> 、<code>||</code> 操作符的区别：</p><ul><li><code>cmd1 ; cmd2</code> ：cmd1 和 cmd2 都会 被执行</li><li><code>cmd1 &amp;&amp; cmd2</code>：如果 cmd1 执行 成功 则执行 cmd2</li><li><code>cmd1 || cmd2</code>：如果 cmd1 执行 失败 则执行 cmd2</li></ul>`,9),p=[o];function c(l,r){return s(),a("div",null,p)}const k=n(t,[["render",c],["__file","static-deploy.html.vue"]]);export{k as default};
