import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-be253e4c.js";const u={},r=t(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> Vuepress</h1><p>Vue 驱动的静态网站生成器，具有简介至上、高性能、Vue驱动等特点。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 在你的项目中安装</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/client@next vue

<span class="token comment"># 新建一个 markdown 文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># 开始写作</span>
<span class="token function">pnpm</span> vuepress dev

<span class="token comment"># 构建静态文件</span>
<span class="token function">pnpm</span> vuepress build

</code></pre></div><p>这样在本地就可以生成一个静态网站</p>`,5),i={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="使用主题" tabindex="-1"><a class="header-anchor" href="#使用主题" aria-hidden="true">#</a> 使用主题</h2><p>VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。</p><h3 id="默认主题" tabindex="-1"><a class="header-anchor" href="#默认主题" aria-hidden="true">#</a> 默认主题</h3><p>VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。 <strong>如果你不指定要使用的主题，那么就会自动使用默认主题。</strong></p><p>为了配置默认主题，你需要在你的配置文件中通过<code>theme</code>配置项来使用它：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 默认主题配置</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6),h={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="社区主题" tabindex="-1"><a class="header-anchor" href="#社区主题" aria-hidden="true">#</a> 社区主题</h3><p>除了默认主题外，Vuepress社区也提供了一些比较好的主题，这里主要介绍自己使用非常频繁的主题 —— 【Vuepress-Theme-Hope】</p><h2 id="网站部署" tabindex="-1"><a class="header-anchor" href="#网站部署" aria-hidden="true">#</a> 网站部署</h2><h3 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> Github Pages</h3><p>将编译、打包后的静态文件，推送到Github Pages指定的分支</p><ul><li>基于shell脚本</li></ul><p>通过脚本，本地手动执行编译、推送代码</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>
<span class="token function">npm</span> run docs:build

<span class="token comment"># 进入生成的文件夹</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo &#39;www.example.com&#39; &gt; CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre></div><ul><li>基于Github Actions</li></ul><p>使用Github流水线，将编译后的静态文件，推送到Github Pages中指定的分支中，Github获取新的推送后自动部署静态文件</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> CD
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master
      <span class="token punctuation">-</span> next
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment">## 部署到Github-Pages</span>
  <span class="token key atrule">deploy-github</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;部署到Github-Pages&quot;</span>
    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.repository == &#39;142vip/JavaScriptCollection&#39;
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> macos<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout Code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token comment"># 安装Node环境</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> 18.18.0
          <span class="token comment">## 淘宝镜像加速</span>
          <span class="token key atrule">registry-url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://registry.npmmirror.com&#39;</span>

      <span class="token comment">## 下载依赖</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ./scripts/ci</span>

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress Site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ./scripts/bundle build_proxy</span>

      <span class="token comment">## 部署到Github Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy To GitHub Page
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> pages/github
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>

</code></pre></div><h3 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h3><h3 id="netlify" tabindex="-1"><a class="header-anchor" href="#netlify" aria-hidden="true">#</a> Netlify</h3><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,14),m={href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"};function b(y,f){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("VuePress 会在 "),n("a",i,[s("http://localhost:8080"),e(a)]),s(" 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新")]),k,n("p",null,[s("更多关于默认主题的配置，可以参考： "),n("a",h,[s("https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html"),e(a)])]),d,n("ul",null,[n("li",null,[s("Vuepress："),n("a",m,[s("https://vuepress.vuejs.org/zh/guide/getting-started.html"),e(a)])]),n("li",null,[s("Hope主题："),n("a",g,[s("https://theme-hope.vuejs.press/zh/"),e(a)])])])])}const x=p(u,[["render",b],["__file","vuepress.html.vue"]]);export{x as default};
