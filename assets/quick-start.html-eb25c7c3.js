import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as l,a as s,b as n,d as p,e as a}from"./app-be253e4c.js";const u={},i=a(`<h1 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门" aria-hidden="true">#</a> 快速入门</h1><p>手把手快速从0到1搭建一个基础的<code>Egg.js</code>应用</p><h2 id="基础环境" tabindex="-1"><a class="header-anchor" href="#基础环境" aria-hidden="true">#</a> 基础环境</h2><ul><li>操作系统：<code>macOS</code>、<code>Linux</code>、<code>Windows均可</code></li><li><code>Nodejs</code>环境</li></ul><h2 id="环境检测" tabindex="-1"><a class="header-anchor" href="#环境检测" aria-hidden="true">#</a> 环境检测</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查看npm版本</span>
<span class="token function">npm</span> version
</code></pre></div><h2 id="快速搭建" tabindex="-1"><a class="header-anchor" href="#快速搭建" aria-hidden="true">#</a> 快速搭建</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 创建根目录，并切换进入</span>
<span class="token function">mkdir</span> egg-demo <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> egg-demo

<span class="token comment">## 项目初始化</span>
<span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>simple

<span class="token comment">## 下载依赖</span>
<span class="token function">npm</span> i

<span class="token comment">## 开发环境下启动</span>
<span class="token function">npm</span> run dev

<span class="token comment">## 浏览器访问</span>
http://localhost:7001
</code></pre></div><h2 id="手动搭建" tabindex="-1"><a class="header-anchor" href="#手动搭建" aria-hidden="true">#</a> 手动搭建</h2><h3 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h3><p>和基础的node项目一样，先初始化目录结构</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 创建目录</span>
<span class="token function">mkdir</span> egg-demo

<span class="token comment">## 切换进入</span>
<span class="token builtin class-name">cd</span> egg-demo

<span class="token comment">## node项目初始化</span>
<span class="token function">npm</span> init

<span class="token comment">## 下载egg依赖包</span>
<span class="token function">npm</span> <span class="token function">install</span> egg <span class="token parameter variable">--save</span>

<span class="token comment">## 开发环境下，安装启动依赖包</span>
<span class="token function">npm</span> <span class="token function">install</span> egg-bin --save-dev
</code></pre></div><p>由于在开发环境下启动，运行了<code>npm run dev</code>指令，所以需要在根目录下的package.json文件中配置dev命令脚本</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;egg-demo&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;egg-bin dev&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>其实上面的配置，在通过快速搭建egg基础项目时，可以看到类似的配置</p><h3 id="编写控制器" tabindex="-1"><a class="header-anchor" href="#编写控制器" aria-hidden="true">#</a> 编写控制器</h3><p>当你有了解过Web开发或者MVC的开发模式，在项目结构中肯定会有<code>Controller</code>层和Router路由层，当然<code>Spring</code>框架的路由注解会代替Router</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// app/controller/home.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>Controller<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义类</span>
<span class="token keyword">class</span> <span class="token class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义方法</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>ctx<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;hi egg demo&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模块导出</span>
module<span class="token punctuation">.</span>export <span class="token operator">=</span> HomeController
</code></pre></div><h3 id="配置路由" tabindex="-1"><a class="header-anchor" href="#配置路由" aria-hidden="true">#</a> 配置路由</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/router.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>router<span class="token punctuation">,</span> controller<span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">;</span>
  router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> controller<span class="token punctuation">.</span>home<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>这个时候回头看，项目的基本结构：</p><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>egg-demo
├── app
│   ├── controller
│   │   └── home.js
│   └── router.js
├── config
│   └── config.default.js
└── package.json
</code></pre></div><h3 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 开发环境下启动</span>
<span class="token function">npm</span> run dev
</code></pre></div><h3 id="初次体验" tabindex="-1"><a class="header-anchor" href="#初次体验" aria-hidden="true">#</a> 初次体验</h3>`,25),r=s("code",null,"npm run dev",-1),k={href:"http://localhost:7001",target:"_blank",rel:"noopener noreferrer"},d=a(`<h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2><p><code>Egg</code> 内置了 static 插件，线上环境建议部署到 CDN，无需该插件。static 插件默认映射 <code>/public/ -&gt; app/public/</code> 目录</p><p>此处，我们把静态资源都放到 <code>app/public</code> 目录即可：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>app/public
├── css
│   └── news.css
└── js
    ├── lib.js
    └── news.js
</code></pre></div><h2 id="模板渲染" tabindex="-1"><a class="header-anchor" href="#模板渲染" aria-hidden="true">#</a> 模板渲染</h2><p>绝大多数情况，需要读取数据后渲染模板，然后呈现给用户。故我们需要引入对应的模板引擎。</p><p>框架并不强制你使用某种模板引擎，只是约定了 <code>View</code> 插件开发规范，开发者可以引入不同的插件来实现差异化定制。</p><p>在本例中，我们使用 <code>Nunjucks</code> 来渲染，先安装对应的插件 <code>egg-view-nunjucks</code> ：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装模块</span>
$ <span class="token function">npm</span> i egg-view-nunjucks <span class="token parameter variable">--save</span>
</code></pre></div><p>模块安装完成后，需要修改插件的参数配置来开启插件</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/plugin.js 注意：是 config 目录，不是 app/config!</span>
exports<span class="token punctuation">.</span>nunjucks <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-view-nunjucks&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// config/config.default.js</span>
<span class="token comment">// 此处改为你自己的 Cookie 安全字符串,建议hash值</span>
exports<span class="token punctuation">.</span>keys <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 添加 view 配置</span>
exports<span class="token punctuation">.</span>view <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">defaultViewEngine</span><span class="token operator">:</span> <span class="token string">&#39;nunjucks&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;.tpl&#39;</span><span class="token operator">:</span> <span class="token string">&#39;nunjucks&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>为列表页编写模板文件，<strong>一般放置在 <code>app/view</code>目录下</strong></p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- app/view/news/list.tpl --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Hacker News<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/public/css/news.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>news-view view<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {% for item in list %}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ item.url }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    {% endfor %}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>添加<code>Controller</code>层的页面访问逻辑</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/news.js</span>
<span class="token keyword">const</span> Controller <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controller<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">NewsController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;this is news 1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/news/1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;this is news 2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/news/2&#39;</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;news/list.tpl&#39;</span><span class="token punctuation">,</span> dataList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> NewsController<span class="token punctuation">;</span>
</code></pre></div><p>添加Router层中，路由的相关配置</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/router.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>router<span class="token punctuation">,</span> controller<span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">;</span>
  router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> controller<span class="token punctuation">.</span>home<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
  router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/news&#39;</span><span class="token punctuation">,</span> controller<span class="token punctuation">.</span>news<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,17),g={href:"http://localhost:7001/news",target:"_blank",rel:"noopener noreferrer"},m=a(`<p><strong>开发期默认开启了 <code>development</code> 插件，修改后端代码后，会自动重启 <code>Worker</code> 进程，即：热加载</strong></p><h2 id="编写-service" tabindex="-1"><a class="header-anchor" href="#编写-service" aria-hidden="true">#</a> 编写 service</h2><p><strong>在实际应用中，<code>Controller</code> 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service。</strong></p><p>添加一个 <code>Service</code> 抓取 <code>Hacker News</code> 的数据 ，如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/service/news.js</span>
<span class="token keyword">const</span> Service <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Service<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">NewsService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token parameter">page <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// read config</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>serverUrl<span class="token punctuation">,</span> pageSize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>news<span class="token punctuation">;</span>

    <span class="token comment">// use build-in http client to GET hacker-news api</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token literal-property property">data</span><span class="token operator">:</span> idList<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">curl</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>serverUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/topstories.json</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">orderBy</span><span class="token operator">:</span> <span class="token string">&#39;&quot;$key&quot;&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">startAt</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageSize <span class="token operator">*</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">endAt</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageSize <span class="token operator">*</span> page <span class="token operator">-</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// parallel GET detail</span>
    <span class="token keyword">const</span> newsList <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>
      Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>idList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>serverUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/item/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>idList<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.json</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span><span class="token function">curl</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> newsList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> NewsService<span class="token punctuation">;</span>

</code></pre></div><p><strong>框架提供了内置的 HttpClient 来方便开发者使用 HTTP 请求。</strong></p><p>然后稍微修改下之前的 <code>Controller</code>：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/news.js</span>
<span class="token keyword">const</span> Controller <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controller<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">NewsController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">;</span>
    <span class="token keyword">const</span> page <span class="token operator">=</span> ctx<span class="token punctuation">.</span>query<span class="token punctuation">.</span>page <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> newsList <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>service<span class="token punctuation">.</span>news<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;news/list.tpl&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">list</span><span class="token operator">:</span> newsList<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> NewsController<span class="token punctuation">;</span>
</code></pre></div><p>还需增加 app/service/news.js 中读取到的配置：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>
<span class="token comment">// 添加 news 的配置项</span>
exports<span class="token punctuation">.</span>news <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token literal-property property">serverUrl</span><span class="token operator">:</span> <span class="token string">&#39;https://hacker-news.firebaseio.com/v0&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="编写扩展" tabindex="-1"><a class="header-anchor" href="#编写扩展" aria-hidden="true">#</a> 编写扩展</h2><p>遇到一个小问题，资讯时间的数据是 UnixTime 格式的，我们希望显示为便于阅读的格式。</p><p>框架提供了一种快速扩展的方式，只需在 app/extend 目录下提供扩展脚本即可，具体参见扩展。</p><p>在这里，可以使用 View 插件支持的 Helper 来实现：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装依赖</span>
$ <span class="token function">npm</span> i moment <span class="token parameter variable">--save</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/helper.js</span>
<span class="token keyword">const</span> moment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;moment&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">relativeTime</span> <span class="token operator">=</span> <span class="token parameter">time</span> <span class="token operator">=&gt;</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>time <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fromNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>在模板里面使用：</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- app/view/news/list.tpl --&gt;</span>
{{ helper.relativeTime(item.time) }}
</code></pre></div><h3 id="编写-middleware" tabindex="-1"><a class="header-anchor" href="#编写-middleware" aria-hidden="true">#</a> 编写 Middleware</h3><p>假设有个需求：新闻站点禁止百度爬虫访问。</p><p>聪明的朋友们一定很快能想到可以通过 <code>Middleware</code> 判断 <code>User-Agent</code>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/middleware/robot.js</span>
<span class="token comment">// options === app.config.robot</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">robotMiddleware</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> source <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> match <span class="token operator">=</span> options<span class="token punctuation">.</span>ua<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">ua</span> <span class="token operator">=&gt;</span> ua<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设置禁止访问的http状态码</span>
      ctx<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">403</span><span class="token punctuation">;</span>
      ctx<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;Go away, robot.&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>修改配置文件：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>
<span class="token comment">// add middleware robot</span>
exports<span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;robot&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// robot&#39;s configurations</span>
exports<span class="token punctuation">.</span>robot <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ua</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Baiduspider</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>现在可以使用 <code>curl http://localhost:7001/news -A &quot;Baiduspider&quot;</code> 看看效果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://localhost:7001/news <span class="token parameter variable">-A</span> <span class="token string">&quot;Baiduspider&quot;</span>
</code></pre></div><p><strong>其实这里的middleware就是egg框架中一个非常重要的概念——中间件</strong>，就我自己的经验来看，项目中很多特定的授权、校验都可以通过中间件来完成</p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><p>写业务的时候，不可避免的需要有配置文件，框架提供了强大的配置合并管理功能：</p><p>支持按环境变量加载不同的配置文件，如 <code>config.local.js</code>、 <code>config.prod.js</code> 等等。 应用/插件/框架都可以配置自己的配置文件，框架将按顺序合并加载。 具体合并逻辑可参见配置文件。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>
exports<span class="token punctuation">.</span>robot <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ua</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">curl</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
    <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Baiduspider</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// config/config.local.js</span>
<span class="token comment">// only read at development mode, will override default</span>
exports<span class="token punctuation">.</span>robot <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ua</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Baiduspider</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/service/some.js</span>
<span class="token keyword">const</span> Service <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Service<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SomeService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rule <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>robot<span class="token punctuation">.</span>ua<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> SomeService<span class="token punctuation">;</span>
</code></pre></div><h2 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h2><p>单元测试非常重要，框架也提供了 egg-bin 来帮开发者无痛的编写测试。</p><p>测试文件应该放在项目根目录下的 test 目录下，并以 test.js 为后缀名，即 {app_root}/test/**/*.test.js。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// test/app/middleware/robot.test.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>app<span class="token punctuation">,</span> mock<span class="token punctuation">,</span> assert<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg-mock/bootstrap&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;test/app/middleware/robot.test.js&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;should block robot&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> app<span class="token punctuation">.</span><span class="token function">httpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;Baiduspider&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>配置<code>npm scripts</code>命令：</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;egg-bin test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cov&quot;</span><span class="token operator">:</span> <span class="token string">&quot;egg-bin cov&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>安装依赖</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 下载mock包</span>
<span class="token function">npm</span> i egg-mock --save-dev
<span class="token comment">## 执行测试：</span>
<span class="token function">npm</span> <span class="token builtin class-name">test</span>
</code></pre></div><p>基础的单元测试<code>mock</code>可以通过这样出处理，复杂一点的可能需要去使用<code>postman</code>调用。</p><p>至此，欢迎走进<code>Egg.js</code>框架大门，愿你一帆风顺~</p>`,43);function h(v,y){const t=e("ExternalLinkIcon");return c(),l("div",null,[i,s("p",null,[n("当执行"),r,n("指令后，在console控制台可以看到相关的启动日志，我们可以通过访问"),s("a",k,[n("http://localhost:7001"),p(t)]),n("来查看egg-demo是都正常启动")]),d,s("p",null,[n("启动浏览器，访问 "),s("a",g,[n("http://localhost:7001/news"),p(t)]),n(" 即可看到渲染后的页面。")]),m])}const x=o(u,[["render",h],["__file","quick-start.html.vue"]]);export{x as default};
