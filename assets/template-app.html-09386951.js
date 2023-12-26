import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,a as n,b as s,d as p,e as t}from"./app-be253e4c.js";const l="/JavaScriptCollection/assets/express-cmd-3df51a09.png",r="/JavaScriptCollection/assets/express-create-f2923fcc.png",i="/JavaScriptCollection/assets/express-running-221e02c4.png",k={},d=t(`<h1 id="模板项目" tabindex="-1"><a class="header-anchor" href="#模板项目" aria-hidden="true">#</a> 模板项目</h1><p><code>Express</code>框架提供了应用程序生成器，就是预先约定一些<code>Express</code>框架项目的开发规范，例如：<code>目录约束</code>、<code>路由约束</code>...</p><p>通过应用生成器工具 <code>express-generator</code>模块 可以快速创建一个应用的结构，可以在此基础上形成基于<code>Express</code>框架的模板项目</p><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><p>Node版本大于8.2.0或者更高时，可以使用npx命令来运行Express模板生成项目，执行命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx express-generator
</code></pre></div><p>也可全局安装<code>express-generator</code>模块，执行命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> express-generator
</code></pre></div><p>安装完成后，执行命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出可用命令参数</span>
express <span class="token parameter variable">-h</span>
</code></pre></div><figure><img src="`+l+`" alt="可用命令参数" tabindex="0" loading="lazy"><figcaption>可用命令参数</figcaption></figure><p>这里重点关注下<code>-v</code>、<code>--view</code>参数，用来指定<code>Express</code>项目的前端页面模版渲染引擎</p><blockquote><p>在工程化发展历史中，很多框架在早期设计中都支持前后端一体开发，不像现在更多地是前后端分离。 模版渲染引擎就是在后端服务中去开发、渲染前端页面，类似的技术有：<code>jsp</code>、<code>ejs</code>等。</p></blockquote><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>在了解<code>express</code>命令的基本可用参数后，可以直接创建名为<code>template-demo</code>模版项目，执行命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建模板项目，使用ejs模板引擎</span>
express <span class="token parameter variable">--view</span><span class="token operator">=</span>ejs template-demo
</code></pre></div><p>对于纯后端的应用，可以使用<code>--no-view</code>参数，创建不带模板渲染引擎的模板项目，执行命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建模板项目，不试用渲染引擎</span>
express --no-view template-demo
</code></pre></div><p>可以清晰地看见新创建了<code>template-demo</code>项目：</p><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注意下项目中的目录结构：</p><ul><li>public目录： 存放前端静态资源，例如：js代码、css代码</li><li>view目录：存放前端页面，在前后端混合开发中，该目录可以用渲染引擎来接受后端数据</li><li>routes目录：后端服务路由，一般用来约定restFul接口</li><li>app.js：项目的入口文件，Node项目一般以<code>index.js</code>、<code>app.js</code>作为入口文件，类似与Java开发中的<code>main.java</code>文件</li><li>package.json：项目信息、依赖包管理配置文件，可以在里面声明<code>项目信息</code>、<code>开发脚本</code>、<code>依赖版本</code>等信息</li><li>bin：这里是框架约定的入口文件，实际开发中可以将该逻辑整合到<code>app.js</code>中</li></ul><p>在命令行中使用命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
<span class="token function">node</span> ./bin/www

<span class="token comment"># 查看端口</span>
<span class="token function">lsof</span> <span class="token parameter variable">-i:3000</span>
</code></pre></div>`,24),g={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},h=t('<figure><img src="'+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="简单改造" tabindex="-1"><a class="header-anchor" href="#简单改造" aria-hidden="true">#</a> 简单改造</h2><p>可能是由于Node发展原因，<code>express-generator</code>最近更新已经是好几年前了，这就导致了模板中的一些语法，在现在的工程化浪潮中已经那么规范了。</p><p>例如： 模板代码中随处可见的<code>var</code>关键字定义变量，会导致变量声明作用域问题，现在一般推荐使用<code>let</code>、<code>const</code>来声明</p><p>所以接下来，会对代码做一些简单的修改</p><h3 id="推荐es6语法" tabindex="-1"><a class="header-anchor" href="#推荐es6语法" aria-hidden="true">#</a> 推荐ES6语法</h3><p>统一使用Eslint规则，对模板项目中的代码做一些格式化，例如：</p><p>改造前：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* GET users listing. */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;respond with a resource&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router<span class="token punctuation">;</span>
</code></pre></div><p>改造后：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/* GET home page. */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Express&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre></div><h3 id="脚本管理" tabindex="-1"><a class="header-anchor" href="#脚本管理" aria-hidden="true">#</a> 脚本管理</h3><p>在上面的演示中，启动项目是使用命令：<code>node ./bin/www</code>，实质就是执行www文件中的服务监听方法。 在综合性项目中一般对服务命令做统一管理，即利用<code>package.json</code>中的<code>scripts</code>字段，例如：</p><div class="language-json5" data-ext="json5"><pre class="language-json5"><code><span class="token comment">// 项目脚本</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 开发环境启动服务</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./bin/www&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 清理依赖 </span>
    <span class="token property">&quot;clean&quot;</span><span class="token operator">:</span> <span class="token string">&quot;find . -name \\&quot;node_modules\\&quot; -type d -exec rm -rf &#39;{}&#39; + &quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一般项目会配置<code>dev</code>、<code>start</code>、<code>stop</code>、<code>build</code>等命令</p><h3 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件" aria-hidden="true">#</a> 入口文件</h3><p>在模板项目中，Express框架将项目启动的入口文件放在bin目录下管理，可以看到存在www的子文件，我想这里是为了方便 前后端混合开发时候，去区分业务。现在更多的是采用微服务的架构，一个项目做一类业务，让项目更加短效、精悍，目标更强。</p><p>因此这里更加推荐：<strong>利用<code>app.js</code>来整合项目的启动逻辑，将<code>app.js</code>作为入口文件，删除bin整个目录</strong></p><p>改造后的app.js:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> createError <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http-errors&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> cookieParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cookie-parser&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> logger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;morgan&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> indexRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/index&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> usersRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./routes/users&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token comment">// 配置渲染引擎</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">logger</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> indexRouter<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> usersRouter<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 访问不存在的路由，直接抛出 404 错误
 */</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token function">createError</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 错误处理中间件
 */</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span>locals<span class="token punctuation">.</span>message <span class="token operator">=</span> err<span class="token punctuation">.</span>message
  res<span class="token punctuation">.</span>locals<span class="token punctuation">.</span>error <span class="token operator">=</span> req<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;env&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span> <span class="token operator">?</span> err <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// 渲染异常页面</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>status <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">// 启动服务，监听端口：3000</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>syscall <span class="token operator">!==</span> <span class="token string">&#39;listen&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> error
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> bind <span class="token operator">=</span> <span class="token keyword">typeof</span> addr <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
    <span class="token operator">?</span> <span class="token string">&#39;pipe &#39;</span> <span class="token operator">+</span> addr
    <span class="token operator">:</span> <span class="token string">&#39;port &#39;</span> <span class="token operator">+</span> addr<span class="token punctuation">.</span>port


  <span class="token comment">// 分类输出错误信息</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;EACCES&#39;</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>bind <span class="token operator">+</span> <span class="token string">&#39; requires elevated privileges&#39;</span><span class="token punctuation">)</span>
      process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;EADDRINUSE&#39;</span><span class="token operator">:</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>bind <span class="token operator">+</span> <span class="token string">&#39; is already in use&#39;</span><span class="token punctuation">)</span>
      process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">throw</span> error
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 监听服务启动
 */</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;listening&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> addr <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> bind <span class="token operator">=</span> <span class="token keyword">typeof</span> addr <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>
    <span class="token operator">?</span> <span class="token string">&#39;pipe &#39;</span> <span class="token operator">+</span> addr
    <span class="token operator">:</span> <span class="token string">&#39;port &#39;</span> <span class="token operator">+</span> addr<span class="token punctuation">.</span>port

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;listening on:&#39;</span><span class="token punctuation">,</span> bind<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="脚本优化" tabindex="-1"><a class="header-anchor" href="#脚本优化" aria-hidden="true">#</a> 脚本优化</h3>`,21),f=n("code",null,"node app.js",-1),m={href:"http://127.0.0.1:3000",target:"_blank",rel:"noopener noreferrer"},x=t(`<p>这里比较推荐将该命令集成到scripts字段中统一管理，例如：</p><div class="language-json5" data-ext="json5"><pre class="language-json5"><code><span class="token comment">// 项目脚本</span>
<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 开发环境启动服务</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node app.js&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,3),w={href:"https://www.npmjs.com/package/express-generator",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.expressjs.com.cn/starter/generator.html",target:"_blank",rel:"noopener noreferrer"};function b(y,_){const a=e("ExternalLinkIcon");return c(),u("div",null,[d,n("p",null,[s("当发现端口3000被监听时，可以在浏览器中打开地址："),n("a",g,[s("http://localhost:3000"),p(a)]),s("，查看Express模板项目的运行情况:")]),h,n("p",null,[s("将入口文件改造好后，可以直接使用"),f,s("启动项目，再访问"),n("a",m,[s("http://127.0.0.1:3000"),p(a)]),s("访问路由。")]),x,n("ul",null,[n("li",null,[n("a",w,[s("https://www.npmjs.com/package/express-generator"),p(a)])]),n("li",null,[n("a",v,[s("https://www.expressjs.com.cn/starter/generator.html"),p(a)])])])])}const E=o(k,[["render",b],["__file","template-app.html.vue"]]);export{E as default};
