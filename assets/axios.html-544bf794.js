import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c,a as n,b as a,d as t,e as l}from"./app-be253e4c.js";const u={},r=l(`<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h1><p><code>Axios</code> 是一个基于 <code>promise</code> 网络请求库，作用于<code>node.js</code> 和浏览器中。 它是 <code>isomorphic</code> 的(同一套代码可以运行在浏览器和<code>node.js</code>中)。</p><ul><li>在服务端它使用原生 node.js <code>http</code> 模块</li><li>在客户端 (浏览端) 则使用 <code>XMLHttpRequests</code></li></ul><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 从浏览器创建 XMLHttpRequests</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 从 node.js 创建 http 请求</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 支持 Promise API</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 拦截请求和响应</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 转换请求和响应数据</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 取消请求</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 自动转换JSON数据</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 客户端支持防御XSRF</label></li><li>...</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> axios
<span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre></div><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><h3 id="typescript类型推断" tabindex="-1"><a class="header-anchor" href="#typescript类型推断" aria-hidden="true">#</a> TypeScript类型推断</h3><p>为了在CommonJS中使用 require（） 导入时获得TypeScript类型推断（智能感知/自动完成），可以使用以下方法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// axios对象</span>
<span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;axios&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token comment">// ... 使用axios对象的api 支持类型推断</span>
</code></pre></div><h3 id="发送请求" tabindex="-1"><a class="header-anchor" href="#发送请求" aria-hidden="true">#</a> 发送请求</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 发送基础post请求</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;Flintstone&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 在 node.js 用GET请求获取远程图片</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://bit.ly/2mTM3nY&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;stream&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;ada_lovelace.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="并发请求" tabindex="-1"><a class="header-anchor" href="#并发请求" aria-hidden="true">#</a> 并发请求</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345/permissions&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 并发请求</span>
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getUserPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">results</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> acct <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> perm <span class="token operator">=</span> results<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="取消请求" tabindex="-1"><a class="header-anchor" href="#取消请求" aria-hidden="true">#</a> 取消请求</h2><p>axios从<code>v0.22.0</code> 开始支持以fetch api的方式：AbortController取消请求</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 取消请求</span>
controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h2><p>支持多种HTTP网络请求类型，例如：Get、Post、Put、Delete等</p><ul><li>axios#request(config)</li><li>axios#get(url[, config])</li><li>axios#delete(url[, config])</li><li>axios#head(url[, config])</li><li>axios#options(url[, config])</li><li>axios#post(url[, data[, config]])</li><li>axios#put(url[, data[, config]])</li><li>axios#patch(url[, data[, config]])</li><li>axios#getUri([config])</li></ul><p><strong>在使用别名方法时， url、method、data 这些属性都不必在配置中指定。</strong></p><h3 id="创建实例" tabindex="-1"><a class="header-anchor" href="#创建实例" aria-hidden="true">#</a> 创建实例</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://142vip.cn/api/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Custom-Header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><p><strong>全局默认配置，将作用于每个请求</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;https://api.example.com&#39;</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>实例对象创建后，支持对默认值进行修改、覆盖</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例后修改默认值</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="请求配置" tabindex="-1"><a class="header-anchor" href="#请求配置" aria-hidden="true">#</a> 请求配置</h2><p><strong>只有 url 是必需的。如果没有指定 method，请求将默认使用 GET 方法。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \`url\` 是用于请求的服务器 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`method\` 是创建请求时使用的方法</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。</span>
  <span class="token comment">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformRequest\` 允许在向服务器发送前，修改请求数据</span>
  <span class="token comment">// 它只能用于 &#39;PUT&#39;, &#39;POST&#39; 和 &#39;PATCH&#39; 这几个请求方法</span>
  <span class="token comment">// 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream</span>
  <span class="token comment">// 你可以修改请求头。</span>
  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对发送的 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformResponse\` 在传递给 then/catch 前，允许修改响应数据</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对接收的 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 自定义请求头</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`params\` 是与请求一起发送的 URL 参数</span>
  <span class="token comment">// 必须是一个简单对象或 URLSearchParams 对象</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`paramsSerializer\`是可选方法，主要用于序列化\`params\`</span>
  <span class="token comment">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">&#39;brackets&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`data\` 是作为请求体被发送的数据</span>
  <span class="token comment">// 仅适用 &#39;PUT&#39;, &#39;POST&#39;, &#39;DELETE 和 &#39;PATCH&#39; 请求方法</span>
  <span class="token comment">// 在没有设置 \`transformRequest\` 时，则必须是以下类型之一:</span>
  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>
  <span class="token comment">// - 浏览器专属: FormData, File, Blob</span>
  <span class="token comment">// - Node 专属: Stream, Buffer</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 发送请求体数据的可选语法</span>
  <span class="token comment">// 请求方式 post</span>
  <span class="token comment">// 只有 value 会被发送，key 则不会</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;Country=Brasil&amp;City=Belo Horizonte&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`timeout\` 指定请求超时的毫秒数。</span>
  <span class="token comment">// 如果请求时间超过 \`timeout\` 的值，则请求会被中断</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 默认值是 \`0\` (永不超时)</span>

  <span class="token comment">// \`withCredentials\` 表示跨域请求时是否需要使用凭证</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`adapter\` 允许自定义处理请求，这使测试更加容易。</span>
  <span class="token comment">// 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。</span>
  <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`auth\` HTTP Basic Auth</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;janedoe&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;s00pers3cret&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`responseType\` 表示浏览器将要响应的数据类型</span>
  <span class="token comment">// 选项包括: &#39;arraybuffer&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span>
  <span class="token comment">// 浏览器专属：&#39;blob&#39;</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`responseEncoding\` 表示用于解码响应的编码 (Node.js 专属)</span>
  <span class="token comment">// 注意：忽略 \`responseType\` 的值为 &#39;stream&#39;，或者是客户端请求</span>
  <span class="token comment">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests</span>
  <span class="token literal-property property">responseEncoding</span><span class="token operator">:</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`xsrfCookieName\` 是 xsrf token 的值，被用作 cookie 的名称</span>
  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`xsrfHeaderName\` 是带有 xsrf token 值的http 请求头名称</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`onUploadProgress\` 允许为上传处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`onDownloadProgress\` 允许为下载处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxContentLength\` 定义了node.js中允许的HTTP响应内容的最大字节数</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxBodyLength\`（仅Node）定义允许的http请求内容的最大字节数</span>
  <span class="token literal-property property">maxBodyLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`validateStatus\` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。</span>
  <span class="token comment">// 如果 \`validateStatus\` 返回 \`true\` (或者设置为 \`null\` 或 \`undefined\`)，</span>
  <span class="token comment">// 则promise 将会 resolved，否则是 rejected。</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// 默认值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxRedirects\` 定义了在node.js中要遵循的最大重定向数。</span>
  <span class="token comment">// 如果设置为0，则不会进行重定向</span>
  <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`socketPath\` 定义了在node.js中使用的UNIX套接字。</span>
  <span class="token comment">// e.g. &#39;/var/run/docker.sock&#39; 发送请求到 docker 守护进程。</span>
  <span class="token comment">// 只能指定 \`socketPath\` 或 \`proxy\` 。</span>
  <span class="token comment">// 若都指定，这使用 \`socketPath\` 。</span>
  <span class="token literal-property property">socketPath</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`httpAgent\` and \`httpsAgent\` define a custom agent to be used when performing http</span>
  <span class="token comment">// and https requests, respectively, in node.js. This allows options to be added like</span>
  <span class="token comment">// \`keepAlive\` that are not enabled by default.</span>
  <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// \`proxy\` 定义了代理服务器的主机名，端口和协议。</span>
  <span class="token comment">// 您可以使用常规的\`http_proxy\` 和 \`https_proxy\` 环境变量。</span>
  <span class="token comment">// 使用 \`false\` 可以禁用代理功能，同时环境变量也会被忽略。</span>
  <span class="token comment">// \`auth\`表示应使用HTTP Basic auth连接到代理，并且提供凭据。</span>
  <span class="token comment">// 这将设置一个 \`Proxy-Authorization\` 请求头，它会覆盖 \`headers\` 中已存在的自定义 \`Proxy-Authorization\` 请求头。</span>
  <span class="token comment">// 如果代理服务器使用 HTTPS，则必须设置 protocol 为\`https\`</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&#39;https&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;mikeymike&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;rapunz3l&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// see https://axios-http.com/zh/docs/cancellation</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// \`decompress\` indicates whether or not the response body should be decompressed </span>
  <span class="token comment">// automatically. If set to \`true\` will also remove the &#39;content-encoding&#39; header </span>
  <span class="token comment">// from the responses objects of all decompressed responses</span>
  <span class="token comment">// - Node only (XHR cannot turn off decompression)</span>
  <span class="token literal-property property">decompress</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 默认值</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="响应结构" tabindex="-1"><a class="header-anchor" href="#响应结构" aria-hidden="true">#</a> 响应结构</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \`data\` 由服务器提供的响应</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`status\` 来自服务器响应的 HTTP 状态码</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// \`statusText\` 来自服务器响应的 HTTP 状态信息</span>
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`headers\` 是服务器响应头</span>
  <span class="token comment">// 所有的 header 名称都是小写，而且可以使用方括号语法访问</span>
  <span class="token comment">// 例如: \`response.headers[&#39;content-type&#39;]\`</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`config\` 是 \`axios\` 请求的配置信息</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`request\` 是生成此响应的请求</span>
  <span class="token comment">// 在node.js中它是最后一个ClientRequest实例 (in redirects)，</span>
  <span class="token comment">// 在浏览器中则是 XMLHttpRequest 实例</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2><h3 id="请求拦截器" tabindex="-1"><a class="header-anchor" href="#请求拦截器" aria-hidden="true">#</a> 请求拦截器</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在发送请求之前做些什么</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对请求错误做些什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="响应拦截器" tabindex="-1"><a class="header-anchor" href="#响应拦截器" aria-hidden="true">#</a> 响应拦截器</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 添加响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应数据做点什么</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应错误做点什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="移除" tabindex="-1"><a class="header-anchor" href="#移除" aria-hidden="true">#</a> 移除</h3><p>使用<code>eject</code>方法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myInterceptor <span class="token operator">=</span> axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">/*...*/</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">eject</span><span class="token punctuation">(</span>myInterceptor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user/12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 请求已经成功发起，但没有收到响应</span>
      <span class="token comment">// \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，</span>
      <span class="token comment">// 而在node.js中是 http.ClientRequest 的实例</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 发送请求时出了点问题</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Error&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 使用 toJSON 可以获取更多关于HTTP错误的信息</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>默认情况下，axios将 JavaScript 对象序列化为 JSON，针对不同的传参风格，需要对数据进行处理</p><p>以application/x-www-form-urlencoded格式发送数据时，可以做如下处理：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 在浏览器中</span>
<span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;param1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;param2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 在Node.js</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">url<span class="token punctuation">.</span>URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;http://something.com/&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 推荐直接使用qs模块处理</span>
<span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;bar&#39;</span><span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">axios</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>以Form data格式发送数据时，可以做如下处理：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> FormData <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;form-data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;my_field&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;my value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;my_buffer&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Buffer</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
form<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;my_file&#39;</span><span class="token punctuation">,</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.com&#39;</span><span class="token punctuation">,</span> form<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">headers</span><span class="token operator">:</span> form<span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 或者在拦截器中进行数据拷贝</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>data <span class="token keyword">instanceof</span> <span class="token class-name">FormData</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">,</span> config<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>另外在实际使用axios时，会结合项目开发对axios进行全局封装处理，区分环境切换不同的配置。一般采用<code>p<wbr>rocess.env</code>来区分环境</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,54),i={href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/rudy_zhou/article/details/113252392",target:"_blank",rel:"noopener noreferrer"};function d(m,h){const s=o("ExternalLinkIcon");return e(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",i,[a("https://github.com/axios/axios"),t(s)])]),n("li",null,[n("a",k,[a("https://blog.csdn.net/rudy_zhou/article/details/113252392"),t(s)])])])])}const g=p(u,[["render",d],["__file","axios.html.vue"]]);export{g as default};
