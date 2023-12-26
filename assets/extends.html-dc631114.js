import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const e={},p=t(`<h1 id="框架拓展" tabindex="-1"><a class="header-anchor" href="#框架拓展" aria-hidden="true">#</a> 框架拓展</h1><p>框架提供了多种扩展点扩展自身的功能：</p><ul><li>Application</li><li>Context</li><li>Request</li><li>Response</li><li>Helper</li></ul><p>在开发中，既可以使用已有的扩展 API 来方便开发，也可以对以上对象进行自定义扩展，进一步加强框架的功能。</p><h2 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h2><p>app 对象指的是 Koa 的全局应用对象，<strong>全局只有一个</strong>，在应用启动时被创建。</p><h3 id="访问方式" tabindex="-1"><a class="header-anchor" href="#访问方式" aria-hidden="true">#</a> 访问方式</h3><ul><li><code>ctx.app</code>、<code>this.app</code></li><li><code>Controller</code>，<code>Middleware</code>，<code>Helper</code>，<code>Service</code> 中都可以通过 <code>this.app</code> 访问到 <code>Application</code> 对象</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  一般会通过解构赋值去访问</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>app<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

<span class="token comment">// 访问配置</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>config<span class="token punctuation">)</span>
</code></pre></div><ul><li>在 <code>app.js</code> 中 <code>app</code> 对象会作为第一个参数注入到入口函数中</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 使用 app 对象</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="扩展方式" tabindex="-1"><a class="header-anchor" href="#扩展方式" aria-hidden="true">#</a> 扩展方式</h3><p>框架会把 <code>app/extend/application.js</code> 中定义的对象与 <code>Koa Application</code> 的 <code>prototype</code> 对象进行合并，在应用启动时会基于扩展后的 <code>prototype</code> 生成 <code>app</code> 对象</p><h4 id="方法扩展" tabindex="-1"><a class="header-anchor" href="#方法扩展" aria-hidden="true">#</a> 方法扩展</h4><p>我们要增加一个 <code>app.foo()</code> 方法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/application.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="属性扩展" tabindex="-1"><a class="header-anchor" href="#属性扩展" aria-hidden="true">#</a> 属性扩展</h4><p><strong>一般来说属性的计算只需要进行一次，那么一定要实现缓存，否则在多次访问属性时会计算多次，这样会降低应用性能。</strong></p><p>推荐的方式是使用 Symbol + Getter 的模式。</p><p>例如，增加一个 app.bar 属性 Getter：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/application.js</span>
<span class="token keyword">const</span> <span class="token constant">BAR</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;Application#bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 类似单例的实现</span>
  <span class="token keyword">get</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">BAR</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 实际情况肯定更复杂</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">BAR</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>xx <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>config<span class="token punctuation">.</span>yy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">BAR</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h2><p><code>Context</code> 指的是 <code>Koa</code> 的请求上下文，这是 请求级别 的对象，每次请求生成一个 <code>Context</code> 实例，通常我们也简写成 ctx。* <em>在所有的文档中，<code>Context</code> 和 <code>ctx</code> 都是指 <code>Koa</code> 的上下文对象。</em>*</p><h3 id="访问方式-1" tabindex="-1"><a class="header-anchor" href="#访问方式-1" aria-hidden="true">#</a> 访问方式</h3><ul><li><strong><code>middleware</code> 中 <code>this</code> 就是 <code>ctx</code></strong>，例如 <code>this.cookies.get(&#39;foo&#39;)</code></li><li><code>controller</code> 有两种写法，类的写法通过 <code>this.ctx</code>，方法的写法直接通过 <code>ctx</code> 入参。</li><li><code>helper</code>，<code>service</code> 中的 <code>this</code> 指向 <code>helper</code>，<code>service</code> 对象本身，使用 <code>this.ctx</code> 访问 <code>context</code> 对象，例如 <code>this.ctx.cookies.get(&#39;foo&#39;)</code>。</li></ul><h3 id="扩展方式-1" tabindex="-1"><a class="header-anchor" href="#扩展方式-1" aria-hidden="true">#</a> 扩展方式</h3><p>框架会把 <code>app/extend/context.js</code> 中定义的对象与 <code>Koa Context</code> 的 <code>prototype</code> 对象进行合并，在处理请求时会基于扩展后的 <code>prototype</code> 生成 <code>ctx</code> 对象。</p><h4 id="方法扩展-1" tabindex="-1"><a class="header-anchor" href="#方法扩展-1" aria-hidden="true">#</a> 方法扩展</h4><p><code>ctx</code>对象上扩展一个foo()方法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/context.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="属性扩展-1" tabindex="-1"><a class="header-anchor" href="#属性扩展-1" aria-hidden="true">#</a> 属性扩展</h4><p><strong>一般来说属性的计算在同一次请求中只需要进行一次，那么一定要实现缓存，否则在同一次请求中多次访问属性时会计算多次， 这样会降低应用性能。</strong> (从这里看，context对象与app对象相似度很高)</p><p>推荐的方式是使用 Symbol + Getter 的模式。</p><p>增加一个 ctx.bar 属性 Getter：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/context.js</span>
<span class="token keyword">const</span> <span class="token constant">BAR</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;Context#bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">BAR</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 例如，从 header 中获取，实际情况肯定更复杂</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">BAR</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;x-bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token constant">BAR</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> Request</h2><p><code>Request</code> 对象和 <code>Koa</code> 的 <code>Request</code> 对象相同，是 请求级别 的对象，提供了大量请求相关的属性和方法供使用。</p><h3 id="访问方式-2" tabindex="-1"><a class="header-anchor" href="#访问方式-2" aria-hidden="true">#</a> 访问方式</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>ctx<span class="token punctuation">.</span>request
<span class="token comment">// 例如：ctx.request.body</span>
</code></pre></div><p><strong><code>ctx</code> 上的很多属性和方法都被代理到 <code>request</code> 对象上</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ctx.header
ctx.headers
ctx.method
ctx.method <span class="token operator">=</span>
ctx.url
ctx.url <span class="token operator">=</span> 
ctx.originalUrl
ctx.origin
ctx.href
ctx.path
ctx.path <span class="token operator">=</span>
ctx.query
ctx.query <span class="token operator">=</span>
ctx.querystring
ctx.querystring <span class="token operator">=</span>
ctx.host
ctx.hostname
ctx.fresh
ctx.stale
ctx.socket
ctx.protocol
ctx.secure
ctx.ip
ctx.ips
ctx.subdomains
ctx.is<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.accepts<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.acceptsEncodings<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.acceptsCharsets<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.acceptsLanguages<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.get<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>对于这些属性和方法使用 <code>ctx</code> 和使用 <code>request</code> 去访问它们是等价的，例如: <code>ctx.url</code> === <code>ctx.request.url</code>。</p><h3 id="扩展方式-2" tabindex="-1"><a class="header-anchor" href="#扩展方式-2" aria-hidden="true">#</a> 扩展方式</h3><p>框架会把 <code>app/extend/request.js</code> 中定义的对象与内置 <code>request</code> 的 <code>prototype</code> 对象进行合并，在处理请求时会基于扩展后的<code>prototype</code> 生成 <code>request</code> 对象。</p><p>例如：增加一个 request.foo 属性 Getter</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/request.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;x-request-foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="response" tabindex="-1"><a class="header-anchor" href="#response" aria-hidden="true">#</a> Response</h2><p><code>Response</code> 对象和 <code>Koa</code> 的 <code>Response</code> 对象相同，是 请求级别 的对象，它提供了大量响应相关的属性和方法供使用</p><h3 id="访问方式-3" tabindex="-1"><a class="header-anchor" href="#访问方式-3" aria-hidden="true">#</a> 访问方式</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 访问response对象</span>
ctx<span class="token punctuation">.</span>response
</code></pre></div><p><code>ctx</code> 上的很多属性和方法都被代理到 <code>response</code> 对象上</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ctx.body
ctx.body <span class="token operator">=</span>
ctx.status
ctx.status <span class="token operator">=</span>
ctx.message
ctx.message <span class="token operator">=</span>
ctx.length <span class="token operator">=</span>
ctx.length
ctx.type <span class="token operator">=</span>
ctx.type
ctx.headerSent
ctx.redirect<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.attachment<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.set<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.append<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.remove<span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx.lastModified <span class="token operator">=</span>
ctx.etag <span class="token operator">=</span>
</code></pre></div><p>对于这些属性和方法使用 <code>ctx</code> 和使用 <code>response</code> 去访问它们是等价的。例如: <code>ctx.status = 404</code> 和 <code>ctx.response.status = 404</code> 是等价的。</p><h3 id="扩展方式-3" tabindex="-1"><a class="header-anchor" href="#扩展方式-3" aria-hidden="true">#</a> 扩展方式</h3><p>框架会把 <code>app/extend/response.js</code> 中定义的对象与内置 <code>response</code> 的 <code>prototype</code> 对象进行合并，在处理请求时会基于扩展后的 <code>prototype</code> 生成 <code>response</code> 对象。</p><p>例如:增加一个 response.foo 属性 setter</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/response.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">set</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;x-response-foo&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>就可以这样使用啦：<code>this.response.foo = &#39;bar&#39;</code>;</p><h2 id="helper" tabindex="-1"><a class="header-anchor" href="#helper" aria-hidden="true">#</a> Helper</h2><p><code>Helper</code> 函数用来提供一些实用的 <code>utility</code> 函数。</p><p>它的作用在于我们可以将一些常用的动作抽离在 <code>helper.js</code> 里面成为一个独立的函数，这样可以用 <code>JavaScript</code> 来写复杂的逻辑，避免逻辑分散各处。</p><p>另外还有一个好处是: <code>Helper</code> 这样一个简单的函数，可以让我们更容易编写测试用例。 框架内置了一些常用的 <code>Helper</code> 函数。我们也可以编写自定义的 <code>Helper</code> 函数。</p><h3 id="访问方式-4" tabindex="-1"><a class="header-anchor" href="#访问方式-4" aria-hidden="true">#</a> 访问方式</h3><p>通过 <code>ctx.helper</code> 访问到 <code>helper</code> 对象，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 假设在 app/router.js 中定义了 home router</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;home.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 helper 计算指定 url path</span>
ctx<span class="token punctuation">.</span>helper<span class="token punctuation">.</span><span class="token function">pathFor</span><span class="token punctuation">(</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">by</span><span class="token operator">:</span> <span class="token string">&#39;recent&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; /?by=recent&amp;limit=20</span>
</code></pre></div><h3 id="扩展方式-4" tabindex="-1"><a class="header-anchor" href="#扩展方式-4" aria-hidden="true">#</a> 扩展方式</h3><p>框架会把 <code>app/extend/helper.js</code> 中定义的对象与内置 <code>helper</code> 的 <code>prototype</code> 对象进行合并，在处理请求时会基于扩展后的 <code>prototype</code> 生成 <code>helper</code> 对象。</p><p>例如:增加一个 <code>helper.foo()</code> 方法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/helper.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this 是 helper 对象，在其中可以调用其他 helper 方法</span>
    <span class="token comment">// this.ctx =&gt; context 对象</span>
    <span class="token comment">// this.app =&gt; application 对象</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="按环境进行扩展" tabindex="-1"><a class="header-anchor" href="#按环境进行扩展" aria-hidden="true">#</a> 按环境进行扩展</h2><p><strong>可以根据环境进行有选择的扩展</strong> 例如: 只在 <code>unittest</code> 环境中提供 <code>mockXX()</code> 方法以便进行 <code>mock</code> 方便测试。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/extend/application.unittest.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">mockXX</span><span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>这个文件只会在 <code>unittest</code> 环境加载。</strong></p><p>对于 <code>Application</code>，<code>Context</code>，<code>Request</code>，<code>Response</code>，<code>Helper</code> 都可以使用这种方式针对某个环境进行扩展</p>`,74),o=[p];function c(l,u){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","extends.html.vue"]]);export{r as default};
