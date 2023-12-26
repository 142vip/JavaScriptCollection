import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-be253e4c.js";const t={},l=e(`<h1 id="接入artalk评论系统" tabindex="-1"><a class="header-anchor" href="#接入artalk评论系统" aria-hidden="true">#</a> 接入Artalk评论系统</h1><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 为 Artalk 创建一个目录</span>
<span class="token function">mkdir</span> Artalk
<span class="token builtin class-name">cd</span> Artalk

<span class="token comment"># 拉取 docker 镜像</span>
<span class="token function">docker</span> pull artalk/artalk-go

<span class="token comment"># 生成配置文件</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/data:/data <span class="token parameter variable">--rm</span> artalk/artalk-go gen config <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/artalk.yml

<span class="token comment"># 编辑配置文件</span>
<span class="token function">vim</span> data/artalk.yml

<span class="token comment"># 运行 docker 容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> artalk <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">0.0</span>.0.0:8080:23366 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/data:/data <span class="token punctuation">\\</span>
  artalk/artalk-go

</code></pre></div>`,2),p=[l];function c(o,r){return n(),s("div",null,p)}const m=a(t,[["render",c],["__file","artalk.html.vue"]]);export{m as default};
