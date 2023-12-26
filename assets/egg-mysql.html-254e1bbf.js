import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e as p}from"./app-be253e4c.js";const r={},i=p(`<h1 id="egg-mysql" tabindex="-1"><a class="header-anchor" href="#egg-mysql" aria-hidden="true">#</a> egg-mysql</h1><p>时间：2020年10月27日</p><p>从基础的Node.js开发开始，当你使用<code>Egg</code>框架后，框架一般都会值吃ORM来操作数据库，在<code>Egg.js</code>的世界里，操作<code>MySQL</code>可选的方案有：</p><ul><li>egg-mysql(<strong>依赖ali-rds模块</strong>)</li><li>egg-sequelize(依赖sequelize模块，非常推荐)</li></ul><p><strong>除了上面的两种之外，还有<code>Node.js</code>中常用的<code>mysql</code>或者<code>mysql2</code>模块， 这里单纯从<code>egg-mysql</code>插件和<code>ali-rds</code>模块出发，进行使用总结和整理。</strong></p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 下载</span>
<span class="token function">npm</span> <span class="token function">install</span> egg-mysql <span class="token parameter variable">--save</span>
</code></pre></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>模块下载完成后，按照egg.js框架规则，需要先后配置<code>plugin.js</code>和对应的<code>config.js</code>文件。这样做的目的：</p><ul><li>配置<code>plugin.js</code>: 申明需要使用插件；</li><li>修改<code>config.js</code>: 配置数据库连接相关参数；</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/plugin.js</span>
<span class="token comment">// 开启egg-mysql插件</span>
exports<span class="token punctuation">.</span>mysql <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-mysql&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>在开启插件的同时，项目中使用外部数据库就需要进行相关的连接参数配置，值得一提的是：<code>egg-mysql</code> 和 <code>egg-sequelize</code> 一样，支持多数据库连接。</p><h3 id="连接单个数据库" tabindex="-1"><a class="header-anchor" href="#连接单个数据库" aria-hidden="true">#</a> 连接单个数据库</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/xxxx.js</span>
exports<span class="token punctuation">.</span>mysql <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">client</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 主机host</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;mysql.com&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 端口</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 用户名</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 密码</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 数据库</span>
    <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载到app对象中，默认开启</span>
  <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载到agent对象中，默认关闭</span>
  <span class="token literal-property property">agent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>获取mysql对象：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 通过app对象获取mysql单个默认实例【前提：mysql加载到app对象中，即配置中app:true】</span>
<span class="token comment">// 执行自定义sql语句</span>
app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="连接多个数据库" tabindex="-1"><a class="header-anchor" href="#连接多个数据库" aria-hidden="true">#</a> 连接多个数据库</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// config/xxxx.js</span>
exports<span class="token punctuation">.</span>mysql <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">clients</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mysql_slave_01</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 主机host</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;mysql.com&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 端口</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 用户名</span>
      <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 密码</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 数据库</span>
      <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ... mysql_slave_02</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// default对象，是对所有数据库的默认配置</span>
  <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 加载到app对象中，默认开启</span>
  <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载到agent对象中，默认关闭</span>
  <span class="token literal-property property">agent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>获取mysql对象：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取mysql_salve_01 实例</span>
<span class="token keyword">const</span> mysqlSlaveClient01 <span class="token operator">=</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;mysql_slave_01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 执行自定义sql语句</span>
mysqlSlaveClient01<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取mysql_salve_02 实例</span>
<span class="token keyword">const</span> mysqlSlaveClient02 <span class="token operator">=</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;mysql_slave_02&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mysqlSlaveClient02<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> values<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="操作教程" tabindex="-1"><a class="header-anchor" href="#操作教程" aria-hidden="true">#</a> 操作教程</h2>`,21),u=n("code",null,"query(sql,value)",-1),k=n("code",null,"egg-mysql",-1),d={href:"https://blog.csdn.net/wofreeo/article/details/80679290",target:"_blank",rel:"noopener noreferrer"},m=p(`<h3 id="io查询" tabindex="-1"><a class="header-anchor" href="#io查询" aria-hidden="true">#</a> IO查询</h3><ul><li><code>query(sql[, values)</code></li><li><code>queryOne(sql[, values)</code></li><li><code>select(table, options)</code></li><li><code>get(table, where, options)</code></li><li><code>insert(table, row[s], options)</code></li><li><code>update(table, row, options)</code></li><li><code>updateRows(table, options)</code></li><li><code>delete(table, where)</code></li><li><code>count(table, where)</code></li></ul><h3 id="事务操作-transactions" tabindex="-1"><a class="header-anchor" href="#事务操作-transactions" aria-hidden="true">#</a> 事务操作(Transactions)</h3><ul><li><code>beginTransaction()</code></li><li><code>beginTransactionScope(scope)</code></li></ul><p>事务众所周知，要么同时成功，要么同时失败；这里提供<code>beginTransaction()</code>和<code>beginTransactionScope(scope)</code>来实现事务操作</p><h4 id="transaction-函数" tabindex="-1"><a class="header-anchor" href="#transaction-函数" aria-hidden="true">#</a> Transaction()函数</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建事务对象</span>
<span class="token keyword">const</span> tran <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">beginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 同步执行，异步无法捕获</span>
  <span class="token keyword">await</span> tran<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> insert_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> tran<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> update_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 提交事务</span>
  <span class="token keyword">await</span> tran<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 出现错误进行捕获、操作回滚</span>
  <span class="token keyword">await</span> tran<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 抛出异常，供外部捕获</span>
  <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>提供两个方法：</p><ul><li>事务提交 ：<code>commit()</code></li><li>事务回滚 ：<code>rollback()</code></li></ul><h4 id="指定范围内开启事务" tabindex="-1"><a class="header-anchor" href="#指定范围内开启事务" aria-hidden="true">#</a> 指定范围内开启事务</h4><p>这用到的是beginTransactionScope(scope)分布式事务，自动提交、自动回滚操作；</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">beginTransactionScope</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不需要手动进行事务的提交和回滚</span>
  <span class="token keyword">await</span> conn<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> row1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> conn<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> row2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 如果在scope里抛出异常，将会自动进行回滚</span>
</code></pre></div><h4 id="koa中开启事务" tabindex="-1"><a class="header-anchor" href="#koa中开启事务" aria-hidden="true">#</a> Koa中开启事务</h4><p><strong>在koa框架中使用Transaction事务，但需要确保在koa的context上下文对象中，仅仅存在一个活跃的transaction对象；</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">ctx</span> context上下文
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token operator">|</span>String<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span> 参数
 *
 **/</span>
<span class="token keyword">async</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">beginTransactionScope</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> conn<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">ctx</span> context上下文
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token operator">|</span>String<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span> 参数
 *
 **/</span>
<span class="token keyword">async</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">beginTransactionScope</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用相同的transaction scope执行foo设置</span>
    <span class="token keyword">await</span> <span class="token function">foo</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 数据插入</span>
    <span class="token keyword">await</span> conn<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="egg-mysql中的事务" tabindex="-1"><a class="header-anchor" href="#egg-mysql中的事务" aria-hidden="true">#</a> egg-mysql中的事务</h3><p>从上面的简单例子中可以很容易的学会关于事务(Transaction)的相关操作，这里重点来说一下在<code>egg-mysql</code>插件中，<code>Transaction</code> 的<code>api</code>定义：</p><h4 id="手动控制事务" tabindex="-1"><a class="header-anchor" href="#手动控制事务" aria-hidden="true">#</a> 手动控制事务</h4><h5 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h5><ul><li><code>beginTraction</code>,能够在开发者的控制下，完成事务的提交和回滚；</li></ul><h5 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h5><ul><li>需要写更多的逻辑代码，主要包含<code>commit()</code>、<code>rollback()</code>、<code>try...catch()</code>等</li><li>当忘记异常捕获或者清除的时候，将可能导致严重的<code>Bug</code></li></ul><p>手动控制的事务操作，更上面基础的<code>Transaction</code>使用基本一致.</p><h4 id="自动控制事务" tabindex="-1"><a class="header-anchor" href="#自动控制事务" aria-hidden="true">#</a> 自动控制事务</h4><h5 id="api方法-begintransactionscope-scope-ctx" tabindex="-1"><a class="header-anchor" href="#api方法-begintransactionscope-scope-ctx" aria-hidden="true">#</a> API方法 beginTransactionScope(scope,ctx)</h5><ul><li><p><code>scope参数</code>：将会执行这个事务中所有<code>sql</code>语句的生成器函数.</p></li><li><p><code>ctx参数</code>：当前请求的上下文对象，即使出现嵌套<code>Transaction</code>事务的情况，<code>ctx</code>参数也是必须的。在相同时间的请求里仅仅只有一个活跃的事务对象。</p></li></ul><h5 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h5><ul><li>非常容易使用，不容易犯错，就跟代码里面没有transaction操作一样。</li><li>不需要手动的进行事务提交和回滚</li></ul><h5 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h5><ul><li>所有的事务只有成功或者失败两个状态，无法做细粒度控制。</li></ul><h3 id="工具方法-utils" tabindex="-1"><a class="header-anchor" href="#工具方法-utils" aria-hidden="true">#</a> 工具方法(Utils)</h3><ul><li><code>escape(value, stringifyObjects, timeZone)</code></li><li><code>escapeId(value, forbidQualified)</code></li><li><code>format(sql, values, stringifyObjects, timeZone)</code></li></ul>`,32),g=n("code",null,"egg-mysql",-1),y=n("code",null,"Readme.md",-1),h=n("code",null,"egg-mysql",-1),w=n("code",null,"ali-rds",-1),f=n("code",null,"ali-rds",-1),b={href:"https://github.com/ali-sdk/ali-rds#io-queries",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"Readme.md",-1),q={href:"https://github.com/ali-sdk/ali-rds#io-queries",target:"_blank",rel:"noopener noreferrer"},x=p(`<p>现在，我结合<code>ali-rds</code>和<code>egg-mysql</code>文档整理egg-mysql插件的一些常用操作</p><h3 id="添加-insert" tabindex="-1"><a class="header-anchor" href="#添加-insert" aria-hidden="true">#</a> 添加（insert）</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// user表中插入单条数据，</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 判断插入结果</span>
<span class="token keyword">const</span> insertSuccess <span class="token operator">=</span> result<span class="token punctuation">.</span>affectedRows <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><p>从上面可以看到，利用的<code>insert</code>的操作，当然也是能够支持多条数据同时添加的</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dog&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;cat&#39;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> users<span class="token punctuation">)</span>
</code></pre></div><p>值得思考的是：<code>ali-rds</code>中也有关于插入操作的详细示例：</p><p><strong>注意ES6中讲yield换为await操作，避免异步无法拿到返回结果</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 插入单条数据</span>

<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;fengmk2&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">createdAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// \`now()\` on db server</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  打印结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 插入多条示例</span>

<span class="token keyword">let</span> rows <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 使用mysql数据库中的now()内置方法</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lisa&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 使用mysql数据库中的now()内置方法</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> rows<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 插入结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="查询-select" tabindex="-1"><a class="header-anchor" href="#查询-select" aria-hidden="true">#</a> 查询（select）</h3><p>查询分为多种，较为简单的查询操作可以直接借助get()和select(),凡是复杂一点（聚合、分组、排序等...)的操作，就需要借助query() 来自定义sql执行；</p><h4 id="获取一行" tabindex="-1"><a class="header-anchor" href="#获取一行" aria-hidden="true">#</a> 获取一行</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 根据查询对象，类似sequelize的findOne()</span>
<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>转化成SQL是：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>SELECT * FROM \`user\` WHERE \`name\` = &#39;tom&#39;
</code></pre></div><h4 id="获取多行" tabindex="-1"><a class="header-anchor" href="#获取多行" aria-hidden="true">#</a> 获取多行</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  查询user表中所有数据</span>
<span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">)</span>

  <span class="token operator">==</span> <span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">user</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 查询user表中符合查询条件的所有数据</span>
<span class="token keyword">let</span> rows <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;javascript&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">orders</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;desc&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>转化为SQL是：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>SELECT\`author\`, \`title\` FROM\`user\` WHERE\`type\` = &#39;javascript&#39; ORDER BY\`id\` DESC
</code></pre></div><p>上面可以在where对象中通过特定的key来指定匹配条件，<code>columns</code>指定获取的数据列，<code>orders</code>指定排序方式。</p><h3 id="删除-delete" tabindex="-1"><a class="header-anchor" href="#删除-delete" aria-hidden="true">#</a> 删除（delete）</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 根据查询条件删除</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">=&gt;</span>
<span class="token constant">DELETE</span>
<span class="token constant">FROM</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">user</span><span class="token template-punctuation string">\`</span></span>
<span class="token constant">WHERE</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span>
</code></pre></div><h3 id="更新-update" tabindex="-1"><a class="header-anchor" href="#更新-update" aria-hidden="true">#</a> 更新（update）</h3><p>更新操作分为很多种，但是基本都是根据特定条件更新部分数据，或者更新多条数据</p><h4 id="根据主键更新一行数据" tabindex="-1"><a class="header-anchor" href="#根据主键更新一行数据" aria-hidden="true">#</a> 根据主键更新一行数据</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单行数据</span>
<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modifiedAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 对应数据库中的now()函数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 根据主键id更新一行数据row</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="根据特定条件和指定字段列更新一行数据" tabindex="-1"><a class="header-anchor" href="#根据特定条件和指定字段列更新一行数据" aria-hidden="true">#</a> 根据特定条件和指定字段列更新一行数据</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 单行数据</span>
<span class="token keyword">let</span> row <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modifiedAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 对应数据库中的now()函数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 满足where条件，更新columns指定理额</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> row<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> row<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;otherField&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;modifiedAt&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="根据主键更新多行数据" tabindex="-1"><a class="header-anchor" href="#根据主键更新多行数据" aria-hidden="true">#</a> 根据主键更新多行数据</h3><p><strong>这里主要注意：使用的是updateRows()函数</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 多行数据</span>
<span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;tom@161.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modifiedAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 对应数据库中的now()函数</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lisa&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;lisa@161.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value 2&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">modifiedAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 对应数据库中的now()函数</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 更新多行</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">updateRows</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回结果</span>
</code></pre></div><h3 id="根据row和where属性更新多行" tabindex="-1"><a class="header-anchor" href="#根据row和where属性更新多行" aria-hidden="true">#</a> 根据row和where属性更新多行</h3><p><strong>这里主要注意：使用的是updateRows()函数</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
  <span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;tom@161.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modifiedAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 对应数据库中的now()函数</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">row</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;lisa@161.com&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">otherField</span><span class="token operator">:</span> <span class="token string">&#39;other field value2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">modifiedAt</span><span class="token operator">:</span> db<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now<span class="token punctuation">,</span> <span class="token comment">// 对应数据库中的now()函数</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">124</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lisa&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>

<span class="token comment">// 更新多行</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">yield</span> db<span class="token punctuation">.</span><span class="token function">updateRows</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回结果</span>
</code></pre></div><p>这里需要补充一句：<strong>虽然这里列举了四种常见的更新方法，但实际情况基本的update() 方法可以满足需求。特殊的情况可以考虑直接通过query()执行sql语句实现。</strong></p><h3 id="计数-count" tabindex="-1"><a class="header-anchor" href="#计数-count" aria-hidden="true">#</a> 计数（count）</h3><p>像MySQL等数据库中count()函数计数，统计数据量条数使用是非常频繁的，当然这里也是支持按照条件统计计数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 查询数量</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;javascript&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// sql语句</span>
<span class="token operator">=&gt;</span>
<span class="token constant">SELECT</span>
<span class="token constant">COUNT</span><span class="token punctuation">(</span> <span class="token operator">*</span>
<span class="token punctuation">)</span>
<span class="token constant">AS</span>
count
<span class="token constant">FROM</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">user</span><span class="token template-punctuation string">\`</span></span>
<span class="token constant">WHERE</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">type</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">=</span> <span class="token string">&#39;javascript&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="自定义sql拼接" tabindex="-1"><a class="header-anchor" href="#自定义sql拼接" aria-hidden="true">#</a> 自定义SQL拼接</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将数组中的数据与 ? 进行匹配替换</span>
<span class="token keyword">const</span> querySql <span class="token operator">=</span> <span class="token string">&#39;update posts set hits = (hits + ?) where id = ?&#39;</span>
<span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>querySql<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> postId<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="表达式-literal" tabindex="-1"><a class="header-anchor" href="#表达式-literal" aria-hidden="true">#</a> 表达式(Literal)</h3><p>如果需要调用mysql内置的函数（或表达式），可以使用Literal。</p><h4 id="内置表达式" tabindex="-1"><a class="header-anchor" href="#内置表达式" aria-hidden="true">#</a> 内置表达式</h4><p><strong>NOW(): 数据库当前系统时间，通过app.mysql.literals.now获取</strong>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">create_time</span><span class="token operator">:</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>now
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">===</span><span class="token operator">&gt;</span>
<span class="token constant">INSERT</span>
<span class="token constant">INTO</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$table</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">create_time</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token constant">VALUES</span><span class="token punctuation">(</span><span class="token constant">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="自定义表达式" tabindex="-1"><a class="header-anchor" href="#自定义表达式" aria-hidden="true">#</a> 自定义表达式</h4><p>调用mysql内置的CONCAT(s1, ...sn)函数，做字符串拼接。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Literal <span class="token operator">=</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>literals<span class="token punctuation">.</span>Literal<span class="token punctuation">;</span>
<span class="token keyword">const</span> first_name <span class="token operator">=</span> <span class="token string">&#39;lisa&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> last_name <span class="token operator">=</span> <span class="token string">&#39;marry&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 添加数据</span>
<span class="token keyword">await</span> app<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token literal-property property">full_name</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Literal</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">CONCAT(&quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>first_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;, &quot;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>last_name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// INSERT INTO \`$table\`(\`id\`, \`full_name\`) VALUES(123, CONCAT(&quot;lisa&quot;, &quot;marry&quot;))</span>
</code></pre></div><h2 id="最后总结" tabindex="-1"><a class="header-anchor" href="#最后总结" aria-hidden="true">#</a> 最后总结</h2>`,48),_=n("code",null,"mysql",-1),j=n("code",null,"egg-mysql",-1),S=n("code",null,"mysql",-1),T=n("code",null,"sql",-1),E=n("code",null,"sequelize",-1),O=n("code",null,"egg-sequelize",-1),R={href:"https://www.npmjs.com/package/egg-sequelize",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"参考文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),s(" 参考文档")],-1),L=n("code",null,"egg-mysql插件文档",-1),C={href:"https://www.npmjs.com/package/egg-mysql",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"ali-rds模块文档",-1),F={href:"https://github.com/ali-sdk/ali-rds#io-queries",target:"_blank",rel:"noopener noreferrer"};function I(M,z){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[s("前面可以看到，不论是多数据库还是单个数据库，在获取到mysql的连接实例后，都可以通过"),u,s(" 来执行自定义的sql语句，有一定基础的一定能够此次展开，完成对数据库的增删改查操作。但是"),k,s(" 插件是提供了一系列的"),n("a",d,[s("语法糖"),t(a)])]),m,n("p",null,[s("在"),g,s("插件的"),y,s("说明文档中有很多内容没有提及到，但是前面有说过，"),h,s("是依赖于"),w,s("(有点旧) ,因此关于上面的一些，都是可以从"),f,s("的"),n("a",b,[v,t(a)]),s(" 文档中找到的,"),n("a",q,[s("参考资料"),t(a)])]),x,n("p",null,[s("以上基本整理在项目中可能会使用到的 "),_,s("基础操作，但是纵观官方文档和日常使用体验就能看出，"),j,s("插件只是抽象出egg.js框架下"),S,s(" 的简单应用，更多操作还是需要我们去手写"),T,s(" 像关联表操作等还是无法满足，因此基于egg.js框架开发的项目，更多的会推荐使用"),E,s("模块，即："),O,s(" 插件，有兴趣可以很好了解学习一下我的相关笔记文档或者"),n("a",R,[s("官网文档"),t(a)])]),A,n("ul",null,[n("li",null,[n("p",null,[L,s(":"),n("a",C,[s("https://www.npmjs.com/package/egg-mysql"),t(a)])])]),n("li",null,[n("p",null,[N,s(":"),n("a",F,[s("https://github.com/ali-sdk/ali-rds#io-queries"),t(a)]),s(")")])])])])}const W=e(r,[["render",I],["__file","egg-mysql.html.vue"]]);export{W as default};
