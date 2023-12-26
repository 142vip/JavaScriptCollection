import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const e="/JavaScriptCollection/assets/sequelize-constructor-4cf43d32.png",t={},o=p('<h1 id="数据库连接" tabindex="-1"><a class="header-anchor" href="#数据库连接" aria-hidden="true">#</a> 数据库连接</h1><p><code>Sequelize</code>下载安装完成后，紧接着就是利用该模块对数据库建立连接，只有建立连接之后才能进一步对数据库表做常见的<code>DDL</code>等操作。</p><h2 id="建立连接" tabindex="-1"><a class="header-anchor" href="#建立连接" aria-hidden="true">#</a> 建立连接</h2><p>要连接到数据库，必须创建一个 <code>Sequelize</code> 实例。可以通过官方提供的<code>Sequelize</code>构造函数来实现类初始化，查看源码：</p><figure><img src="'+e+`" alt="Sequelize的四种构造函数" tabindex="0" loading="lazy"><figcaption>Sequelize的四种构造函数</figcaption></figure><p>如上图可以发现，<code>Sequelize</code>官方提供了四个构造函数，用于创建<code>Sequelize</code>实例，可以灵活配置<code>username</code>、<code>password</code>、<code>uri</code> 等信息，更多连接配置都在<code>options</code>参数中</p><p>这里简单通过一些例子来配置构造函数参数，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数据库连接
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 方法 1: 传递一个连接 URI</span>
<span class="token keyword">const</span> sequelize1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;sqlite::memory:&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 方法 2: 分别传递参数 (sqlite)</span>
<span class="token keyword">const</span> sequelize3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;sqlite&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">storage</span><span class="token operator">:</span> <span class="token string">&#39;path/to/database.sqlite&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 方法 2: 分别传递参数 (其它数据库)</span>
<span class="token keyword">const</span> sequelize4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;database&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>上面的<code>dialect</code>参数是用来指明连接的数据库类型，目前支持的有：</p><ul><li><code>mysql</code></li><li><code>postgres</code></li><li><code>sqlite</code></li><li><code>mariadb</code></li><li><code>mssql</code></li><li><code>db2</code></li><li><code>snowflake</code></li><li><code>oracle</code></li></ul><p><strong>注意：在传递数据库参数的时候，<code>sqlite</code>数据库与其他数据库不一致。</strong></p><h2 id="连接池技术" tabindex="-1"><a class="header-anchor" href="#连接池技术" aria-hidden="true">#</a> 连接池技术</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ... 连接配置</span>
  <span class="token comment">// 连接池配置</span>
  <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">acquire</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">idle</span><span class="token operator">:</span> <span class="token number">10000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>从多个进程连接到数据库，则必须为每个进程创建一个实例，但每个实例都应具有最大连接池大小，以便遵守总最大大小。例如，如果您希望最大连接池大小为 90 并且拥有三个进程，则每个进程的 <code>Sequelize</code> 实例的最大连接池大小应为 30。</p><h2 id="读写分离技术" tabindex="-1"><a class="header-anchor" href="#读写分离技术" aria-hidden="true">#</a> 读写分离技术</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 配置读写分离
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 创建连接实例
 */</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;database&#39;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置读写分离</span>
  <span class="token literal-property property">replication</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">read</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;192.168.125.100&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token number">123456</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;192.168.125.101&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token number">123456</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">write</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;192.168.125.101&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token number">123456</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 配置连接池</span>
  <span class="token literal-property property">pool</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">idle</span><span class="token operator">:</span> <span class="token number">30000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="测试连接" tabindex="-1"><a class="header-anchor" href="#测试连接" aria-hidden="true">#</a> 测试连接</h2><p>可以使用 <code>sequelize.authenticate()</code> 函数测试连接是否正常，<strong>无法连接数据库时，会抛出异常。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 连接测试
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;连接成功&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;连接失败:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="关闭连接" tabindex="-1"><a class="header-anchor" href="#关闭连接" aria-hidden="true">#</a> 关闭连接</h2><p>默认情况下，<code>Sequelize</code> 将保持连接打开状态，并对所有查询使用相同的数据库连接。 如果需要关闭连接，可以 <code>sequelize.close()</code> 函数。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 关闭sequelize连接，支持async/await调用</span>
sequelize<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>当使用<code>sequelize.close()</code>关闭数据库连接后，不能基于当前的<code>sequelize</code>对象重新打开连接， 需要基于<code>Sequelize</code>重新创建实例才能再一次访问数据库。</strong></p><h2 id="配置日志" tabindex="-1"><a class="header-anchor" href="#配置日志" aria-hidden="true">#</a> 配置日志</h2><p>当数据库连接建立后，可以使用<code>Sequelize</code>提供的<code>API</code>方法进行数据库操作， 大部分<code>API</code>都是异步的，返回的事<code>Promise</code>对象，因此支持<code>async/await</code>操作。</p><p>也可以直接使用回调的方式使用<code>API</code>方法，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 支持async/await操作</span>
sequelize<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 开箱即用Promise API方法
 */</span>
sequelize<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 业务逻辑</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 异常捕获</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>默认情况下，<code>Sequelize</code> 将记录它执行的每个 <code>SQL</code> 查询并打印在控制台。</p><p><code>Sequelize</code>的构造函数中提供<code>options.logging</code>选项可用于自定义日志输出，默认值是<code>console.log</code>，将日志输出到终端。 也可以自己定义每次<code>Sequelize</code>记录某些内容时执行的函数，<strong>使用时仅显示日志函数调用的第一个日志参数。</strong></p><p>例如：对于查询日志记录</p><ul><li>第一个参数是原始查询信息</li><li>第二个参数（默认情况下隐藏）是 <code>Sequelize</code> 对象</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * logging选项的常用配置
 */</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 默认打印记录到控制台</span>
    <span class="token literal-property property">logging</span><span class="token operator">:</span> console<span class="token punctuation">.</span>log<span class="token punctuation">,</span>
    <span class="token comment">// 打印所有日志信息</span>
    <span class="token function-variable function">logging</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 关闭日志打印</span>
    <span class="token literal-property property">logging</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 自定义日志信息的展示方式</span>
    <span class="token function-variable function">logging</span><span class="token operator">:</span> <span class="token parameter">msg</span> <span class="token operator">=&gt;</span> logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">// 自定义任意方式来处理日志信息</span>
    <span class="token literal-property property">logging</span><span class="token operator">:</span> logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>logger<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,32),c=[o];function l(r,u){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","database-connect.html.vue"]]);export{d as default};
