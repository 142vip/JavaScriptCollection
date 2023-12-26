import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,a as s,b as n,d as t,e as p}from"./app-be253e4c.js";const l={},i=s("h1",{id:"模型实例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#模型实例","aria-hidden":"true"},"#"),n(" 模型实例")],-1),r=s("code",null,"ES6",-1),k=s("code",null,"Entity",-1),d={href:"https://en.wikipedia.org/wiki/Data_access_object",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>这里定义一个简单的表模型，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize<span class="token punctuation">,</span> Model<span class="token punctuation">,</span> DataTypes <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 定义用户表模型
 */</span>
<span class="token keyword">const</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">TEXT</span><span class="token punctuation">,</span>
  <span class="token literal-property property">favoriteColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">TEXT</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认值</span>
    <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">&#39;green&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cash</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 将模型结构同步到数据库表中
 */</span>
<span class="token punctuation">(</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 强制同步</span>
  <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="创建实例" tabindex="-1"><a class="header-anchor" href="#创建实例" aria-hidden="true">#</a> 创建实例</h2><p>尽管模型是一个类，不应该直接使用 <code>new</code> 运算符来创建实例。相反，应该使用 <code>build</code>方法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> User<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 判断实例是否为User类创建出来</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre></div><p>上面的代码没有与数据库进行通信、操作，因为 <code>build</code>方法仅创建一个对象，<strong>表示可以映射到数据库的数据</strong>。</p><p>如果需要将<code>user</code>实例保存到数据库表中，可以使用<code>save()</code>函数来实现持久化，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将用户信息持久化到数据库表中</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>从<code>await</code> 用法来看，<code>save</code> 是一种异步方法。实际上，几乎每个 <code>Sequelize</code> 方法都是异步的。 <code>build</code> 是极少数例外之一。</strong></p><p><code>Sequelize</code>提供了 <code>create</code>方法，该方法将上述的 <code>build</code> 方法和 <code>save</code> 方法合并为一个方法：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建持久化对象</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 信息已经写入到数据库中</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user <span class="token keyword">instanceof</span> <span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre></div><h2 id="实例记录" tabindex="-1"><a class="header-anchor" href="#实例记录" aria-hidden="true">#</a> 实例记录</h2><p>将模型实例直接记录到控制台<code>console.log</code> 会产生很多问题。因为 <code>Sequelize</code> 实例具有很多附加条件。 相反，可以使用 <code>.toJSON()</code>方法(顺便说一句，它会自动保证实例被 <code>JSON.stringify</code>编辑好).</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 不建议这样输出</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 推荐转化为JSON字符串输出</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 当然也推荐序列化后输出</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div>`,14),g=s("strong",null,[n("注意："),s("code",null,"JSON.stringify(user, null, 4)"),n("中，三个参数的使用情况。")],-1),y={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>当字段未赋值时，内置实例将自动获得默认值：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> User<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// favoriteColor字段的默认值为：green</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>favoriteColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;green&quot;</span>
</code></pre></div><h2 id="更新实例" tabindex="-1"><a class="header-anchor" href="#更新实例" aria-hidden="true">#</a> 更新实例</h2><p>如果需要更改实例的某个字段的值，则再次调用 <code>save</code> 将相应地对其进行更新：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当前实例name字段的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

<span class="token comment">// 实例对象重新赋值</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;微信公众号：储凡&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 执行save()更新，数据库中的信息才会更新</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="删除实例" tabindex="-1"><a class="header-anchor" href="#删除实例" aria-hidden="true">#</a> 删除实例</h2><p>可以通过调用 <code>destroy</code> 来删除实例</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取实例对象属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

<span class="token comment">// 删除实例，从数据库中删除数据</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="实例重载" tabindex="-1"><a class="header-anchor" href="#实例重载" aria-hidden="true">#</a> 实例重载</h2><p>可以通过调用 <code>reload</code>方法从数据库中重新加载实例：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取实例对象属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 实例对象重新赋值</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;微信公众号：储凡&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 实例对象重载，不会执行save()方法更新数据库</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p><strong>注意：reload() 调用生成一个 <code>SELECT</code> 查询，以从数据库中获取最新数据。</strong></p><h2 id="保存部分字段" tabindex="-1"><a class="header-anchor" href="#保存部分字段" aria-hidden="true">#</a> 保存部分字段</h2><p>通过传递一个列名数组，可以定义在调用 <code>save()</code> 时应该保存哪些属性。基于先前定义的对象设置属性时， 例如：当你通过 <code>Web</code> 应用程序的形式获取对象的值，这非常有用。</p><p>此外，这在 <code>update</code> 实现中内部使用。 它是这样的：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例对象</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取实例属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 属性未初始化赋值，则采用默认值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>favoriteColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;green&quot;</span>

<span class="token comment">// 实例对象对象重新赋值</span>
user<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;142vip.cn&quot;</span><span class="token punctuation">;</span>
user<span class="token punctuation">.</span>favoriteColor <span class="token operator">=</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 保存数据,只更新name属性</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// name属性已更新为Tom</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示为 &quot;blue&quot;,因为本地对象将其设置为 &quot;blue&quot;</span>
<span class="token comment">// 在数据库中仍然是 &quot;green&quot;，该字段未作更新</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>favoriteColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;blue&quot;</span>

<span class="token comment">// 实例对象重载后，获取最新的数据库数据</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 检查到name属性已改为Tom 其他属性未作更改</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>favoriteColor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;green&quot;</span>
</code></pre></div><h2 id="save-方法说明" tabindex="-1"><a class="header-anchor" href="#save-方法说明" aria-hidden="true">#</a> save()方法说明</h2><p><code>save()</code>方法在内部进行了优化，只更新真正更改的字段。</p><ul><li>如果不更改任何内容并调用<code>save()</code>方法，<code>Sequelize</code>将知道<code>save()</code>方法是多余的，并且不执行任何操作， 不会生成任何查询。</li><li>如果在调用<code>save()</code>方法时只有几个属性发生了更改，那么在UPDATE操作时，将只发送这些更改字段，以提高性能</li></ul><h2 id="数据递增或递减" tabindex="-1"><a class="header-anchor" href="#数据递增或递减" aria-hidden="true">#</a> 数据递增或递减</h2><p>为了<code>递增/递减</code>实例的值而不会遇到并发问题,<code>Sequelize</code>提供了 <code>increment</code>和 <code>decrement</code> 实例方法.</p><ul><li><code>increment</code> 递增</li><li><code>decrement</code> 递减</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例对象</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// age属性+1</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">by</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>注意: 如只增加 1, 你可以省略 <code>by</code> 参数, 只需执行 <code>user.increment(&#39;age&#39;)</code>方法。</strong></p><ul><li>在 <code>PostgreSQL</code> 中, 除非设置了 <code>{returning：false}</code> 参数(不然它将是 <code>undefined</code>), 否则 <code>incrementResult</code> 将是更新后的 <code>user</code> 。</li><li>在其它数据库方言中, <code>incrementResult</code> 将会是 <code>undefined</code>。 如果你需要更新的实例, 你需要调用 <code>user.reload()</code>方法</li></ul><p>也可以一次递增多个字段：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例对象</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定字段</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果值增加相同的数量,则也可以使用以下其他语法：</span>
<span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">by</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>递增、递减的工作原理完全相同。</strong></p>`,28);function f(h,w){const a=e("ExternalLinkIcon");return c(),u("div",null,[i,s("p",null,[n("表模型是一个"),r,n("的类，基于该类去创建的一个实例对象就是表模型实例对象，这个对象是映射到数据库表的一行，类似于"),k,n("这种概念。 "),s("strong",null,[n("本质上模型实例是"),s("a",d,[n("数据传输对象"),t(a)]),n("。")])]),m,s("p",null,[g,n(" 参考"),s("a",y,[n("JSON.stringify()的API"),t(a)])]),v])}const b=o(l,[["render",f],["__file","model-instance.html.vue"]]);export{b as default};
