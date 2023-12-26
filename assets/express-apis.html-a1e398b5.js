import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as u,a as n,b as s,d as a,w as c,e as t}from"./app-be253e4c.js";const i="/JavaScriptCollection/assets/express-init-7d655101.png",k="/JavaScriptCollection/assets/express-middleware-fb4ae5a5.png",d="/JavaScriptCollection/assets/body-parse-interface-07b03d30.png",m="/JavaScriptCollection/assets/express-router-options-175dbfdf.png",f={},g=t(`<h1 id="框架api方法" tabindex="-1"><a class="header-anchor" href="#框架api方法" aria-hidden="true">#</a> 框架API方法</h1><p><code>express</code>模块提供了很多API方法，要了解、使用这些API去解决一些实际问题，首先需要安装：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装express</span>
<span class="token function">npm</span> <span class="token function">install</span> express <span class="token parameter variable">--save</span>
</code></pre></div><p>Express框架主要提供了<code>express对象</code>、<code>application对象</code>、<code>request对象</code>、<code>response对象</code>、<code>router对象</code>的API方法，往往在使用Express框架时， 项目入口文件的第一行就是对框架的引用，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入express模块</span>
<span class="token keyword">const</span> express<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>因为，这些API方法都来源<code>express</code>模块，针对不用的应用场景做的一些封装</p><h2 id="express-方法" tabindex="-1"><a class="header-anchor" href="#express-方法" aria-hidden="true">#</a> express()方法</h2><p>express模块的入口其实是到处一个函数，通常是像上面引入一样，用变量<code>express</code>来接受，查看源码：</p><figure><img src="`+i+`" alt="express入口函数" tabindex="0" loading="lazy"><figcaption>express入口函数</figcaption></figure><p>可以看出引入的<code>express</code>模块，实质是导出一个<code>createApplication</code>方法，用来创建<code>express</code>的应用实例，这也说明为什么往往在引入<code>express</code>后， 第二行代码就是创建<code>application</code>对象实例</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 导入模块</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 创建express应用对象</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>设置可以从源码中看到，这个<code>application</code>对象上还绑定了<code>request</code>、<code>response</code>两个对象，使用<code>Object.create</code>创建的、分别处理请求和响应。</p><p>除了提供创建app实例的方法，在源码导出时，还在express模块上挂载一些中间件，查看源码：</p><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>这里也许会有疑惑，导出的一个函数，使用express变量去接收时，创建出app实例对象，为什么在函数上又能去挂载一些中间件呢？ 其实在js发展早期，很多概念都是利用函数、对象、原型链去实现的，导出的函数可以理解为构造函数，挂载的中间件实质上也是一些方法、对象， 可以理解为使用static关键字标记的静态方法。</p></blockquote><p>总之，如果将这里导出的express理解为一个<code>类</code>，将createApplication方法理解为构造函数，将中间件理解为静态方法，应该就要好理解很多。</p><blockquote><p>js也是到ES6推出后才有了类的概念，并且也是利用函数+对象来实现的。</p></blockquote><p>这里的理解，我在阅读源码的时候发现，结合Java的面向对象思想获取更好理解，接下来就说说express类上面挂载的静态方法、中间件</p><h3 id="数据处理" tabindex="-1"><a class="header-anchor" href="#数据处理" aria-hidden="true">#</a> 数据处理</h3><p>Express框架内置中间件</p><ul><li><code>express.json()</code></li><li><code>express.raw()</code></li><li><code>express.text()</code></li><li><code>express.urlencoded()</code></li></ul><p>都是基于<code>body-parser</code>模块，实质上就是利用<code>body-parser</code>中的<code>json()</code>、<code>raw()</code>、<code>text()</code>、<code>urlencoded()</code>方法，查看源码：</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',23),x={href:"https://www.npmjs.com/package/body-parser",target:"_blank",rel:"noopener noreferrer"},h=t(`<p><strong>可以对客户端请求传递的数据做处理，前置中间件处理好数据，交给下游的中间件、处理函数来实现逻辑</strong></p><p>数据处理中间件的一些参数含义：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

express<span class="token punctuation">.</span><span class="token function">raw</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 可选参数，布尔类型</span>
  <span class="token comment">// 是否禁用压缩的请求体数据，默认为true，false时拒绝请求数据</span>
  <span class="token literal-property property">inflate</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token comment">// 可选参数，数字或字符</span>
  <span class="token comment">// 限制请求体的大小，默认100kb</span>
  <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token comment">// 可选参数，字符或字符数组</span>
  <span class="token comment">// 约定什么类型的数据会被该中间件处理，默认值：&quot;application/octet-stream&quot;</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 可选参数，函数包含req、res、buffer、encoding四个参数</span>
  <span class="token comment">// 提供原始的请求正文Buffer数据、编码等信息，可以通过抛错来终止解析</span>
  <span class="token function">verify</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> encoding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ... 除raw函数包含的参数外，还额外包含</span>

  <span class="token comment">// 可选参数，布尔类型</span>
  <span class="token comment">// 设置是否使用严格模式，默认为true，只接收对象和数组</span>
  <span class="token comment">// 设置false时，接收一切可以JSON.parse()处理的数据</span>
  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 可选参数，函数类型</span>
  <span class="token comment">// 设置的这个函数，将直接放在JSON.parse()的第二个参数中使用</span>
  <span class="token comment">// 参考JSON.parse()的API：</span>
  <span class="token comment">// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter</span>
  <span class="token function">reviver</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

express<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ... 除raw函数包含的参数外，还额外包含</span>

  <span class="token comment">// 可选参数，字符串</span>
  <span class="token comment">// 如果请求的header中没有指定Content-Type类型，指定文本内容的编码类型， 默认utf-8</span>
  <span class="token literal-property property">defaultCharset</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ... 除raw函数包含的参数外，还额外包含</span>

  <span class="token comment">// 可选参数，布尔类型</span>
  <span class="token comment">// 运行定制模块类解析URL地址中的参数</span>
  <span class="token comment">// false时，使用querystring模块解析</span>
  <span class="token comment">// true时，使用qs模块解析</span>
  <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token comment">// 可选参数，数字类型</span>
  <span class="token comment">// 允许URL地址中传递的参数最大字段个数，默认为1000</span>
  <span class="token comment">// 当参数个数超出时，返回客户端 413 状态码，表示请求体过大</span>
  <span class="token literal-property property">parameterLimit</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre></div><p>这里要重点提一下JSON.parse()的用法，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;{}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;&quot;foo&quot;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;foo&quot;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;[1, 5, &quot;false&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 5, &quot;false&quot;]</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&quot;null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>

<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>
  <span class="token string">&#39;{&quot;p&quot;: 5}&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&quot;number&quot;</span>
      <span class="token operator">?</span> value <span class="token operator">*</span> <span class="token number">2</span> <span class="token comment">// return value * 2 for numbers</span>
      <span class="token operator">:</span> value<span class="token punctuation">,</span> <span class="token comment">// return everything else unchanged</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { p: 10 }</span>
</code></pre></div>`,5),_={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"静态资源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#静态资源","aria-hidden":"true"},"#"),s(" 静态资源")],-1),y=n("p",null,[s("Express中内置的中间件功能。提供静态文件托管管理，基于"),n("code",null,"serve-static"),s("。")],-1),b={href:"https://www.npmjs.com/package/serve-static",target:"_blank",rel:"noopener noreferrer"},q=t(`<p><code>express.static()</code>的基础用法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 服务启动端口</span>
<span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token comment">// 指定接口的根路径映射到资源的根目录</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 设置不同的路径映射</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/static&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 使用绝对路径</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/static-back&#39;</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
 * 服务启动，监听端口
 */</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">quick-start app listening on port </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,2),w=t(`<h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h3><p>提供<code>express.Router()</code>创建一个新的路由器对象，约定接口的请求路径，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 当前路由配置中间件</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;打印req对象&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;打印res对象&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token comment">// 只有执行next()函数，请求才会继续向下走处理逻辑</span>
  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 设置该路由管理的路径</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/get-request&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;完成接口的一些业务逻辑&#39;</span><span class="token punctuation">)</span>

  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;响应成功&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>express.Router()创建路由器对象时也支持一些额外的参数，查看源码：</p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中：</p><ul><li><code>caseSensitive</code>：配置是否对路由地址大小写敏感，布尔类型。默认false，即：大小写不敏感，<code>/test</code>与<code>/Test</code>效果一样。</li><li><code>mergeParams</code>：保留req.params父路由器的值，布尔类型。如果父级和子级的参数名称有冲突，则子级的值优先。默认false</li><li><code>strict</code>：是否开始严格模式路由，布尔类型。默认false，即：<code>/test</code>与<code>/test/</code>效果一样</li></ul>',7),j=t('<h2 id="application对象" tabindex="-1"><a class="header-anchor" href="#application对象" aria-hidden="true">#</a> application对象</h2><h2 id="request对象" tabindex="-1"><a class="header-anchor" href="#request对象" aria-hidden="true">#</a> request对象</h2><h2 id="response对象" tabindex="-1"><a class="header-anchor" href="#response对象" aria-hidden="true">#</a> response对象</h2><h2 id="router对象" tabindex="-1"><a class="header-anchor" href="#router对象" aria-hidden="true">#</a> router对象</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',5),S={href:"https://www.npmjs.com/package/express",target:"_blank",rel:"noopener noreferrer"},E={href:"https://expressjs.com/en/4x/api.html",target:"_blank",rel:"noopener noreferrer"};function J(N,O){const p=o("ExternalLinkIcon"),e=o("RouterLink");return r(),u("div",null,[g,n("p",null,[s("具体用法可以参考模块："),n("a",x,[s("body-parser"),a(p)])]),h,n("p",null,[s("参考："),n("a",_,[s("JSON.parse() API用法"),a(p)])]),v,y,n("p",null,[s("模块用法参考："),n("a",b,[s("serve-static"),a(p)])]),q,n("p",null,[s("基于Express框架，关于静态文件托管，单独开了一篇做介绍，传送门："),a(e,{to:"/manuscripts/server-end/framework/express/tutorial/%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6.html"},{default:c(()=>[s("静态资源托管")]),_:1})]),w,n("p",null,[s("路由器的用途还有很多，不仅支持多种请求类型的接口定义，还能分层管理，后面将单独开一篇详细讲讲，传送门："),a(e,{to:"/manuscripts/server-end/framework/express/tutorial/%E8%B7%AF%E7%94%B1%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:c(()=>[s("路由的使用")]),_:1})]),j,n("ul",null,[n("li",null,[n("a",S,[s("https://www.npmjs.com/package/express"),a(p)])]),n("li",null,[n("a",E,[s("https://expressjs.com/en/4x/api.html"),a(p)])])])])}const I=l(f,[["render",J],["__file","express-apis.html.vue"]]);export{I as default};
