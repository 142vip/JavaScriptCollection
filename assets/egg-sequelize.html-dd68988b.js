import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c,a as s,b as n,d as p,e as l}from"./app-be253e4c.js";const r={},u=l(`<h1 id="egg-sequelize" tabindex="-1"><a class="header-anchor" href="#egg-sequelize" aria-hidden="true">#</a> egg-sequelize</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## egg-sequelize插件安装</span>
<span class="token function">npm</span> <span class="token function">install</span> egg-sequelize <span class="token parameter variable">--save</span>

<span class="token comment">## mysql或者mariadb数据库，安装mysql2</span>
<span class="token function">npm</span> <span class="token function">install</span> mysql2 <span class="token parameter variable">--save</span>

<span class="token comment">## postgreSQL数据库，安装pghe pg-hstore</span>
<span class="token function">npm</span> <span class="token function">install</span> pg pg-hstore <span class="token parameter variable">--save</span>

<span class="token comment">## msSQL数据库，安装</span>
<span class="token function">npm</span> <span class="token function">install</span> tedious <span class="token parameter variable">--save</span>
</code></pre></div><p>需要提示的是：</p><ul><li><code>MSSQL</code>是微软的<code>SQLServer</code>数据库</li><li><code>egg-sequelize</code>在处理<code>MySQL</code>的业务中使用非常频繁</li></ul><p>另外，这里除了下载<code>egg-sequelize</code> 插件外，至于需要下载其他什么数据库支撑模块（例如：mysql2/pg-hstore/tedious）是根据<code>config.js</code> 文件中<code>dialect: &#39;mysql&#39;</code>的配置来进行选择的。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="开启插件" tabindex="-1"><a class="header-anchor" href="#开启插件" aria-hidden="true">#</a> 开启插件</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/plugin.js</span>

exports<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-sequelize&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="数据库配置" tabindex="-1"><a class="header-anchor" href="#数据库配置" aria-hidden="true">#</a> 数据库配置</h3><p>众所周知，mysql数据库的连接需要进行用户名/密码/端口/主机等相关配置，在<code>egg-sequelize</code>插件中也不例外</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.{env}.js</span>

exports<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dialect</span><span class="token operator">:</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 支持 mysql, mariadb, postgres, mssql等数据库</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 数据库名称</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>    <span class="token comment">// 服务主机地址</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>   <span class="token comment">// 端口</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 用户名</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 密码</span>
  <span class="token literal-property property">delegate</span><span class="token operator">:</span> <span class="token string">&#39;myModel&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 【可选】加载所有的模型models到 \`app[delegate]\` and \`ctx[delegate]\`对象中，进行委托, 默认是model</span>
  <span class="token literal-property property">baseDir</span><span class="token operator">:</span> <span class="token string">&#39;my_model&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 【可选】加载 \`app/\${baseDir}\`文件夹下的所有js文件作为models,默认为 \`model\`</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token string">&#39;index.js&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 【可选】加载所有模型models时，忽略 \`app/\${baseDir}/index.js\` 文件，支持文件路径和数组</span>
  <span class="token comment">// 其他默认配置参数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>除了上面列举的常用的<code>sequelize</code>配置参数，<code>egg-sequelize</code>插件还有一些默认的配置，如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">delegate</span><span class="token operator">:</span> <span class="token string">&#39;model&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">baseDir</span><span class="token operator">:</span> <span class="token string">&#39;model&#39;</span><span class="token punctuation">,</span>
  <span class="token function">logging</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// if benchmark enabled, log used</span>
    <span class="token keyword">const</span> used <span class="token operator">=</span> <span class="token keyword">typeof</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms]</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    app<span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;[egg-sequelize]%s %s&#39;</span><span class="token punctuation">,</span> used<span class="token punctuation">,</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">benchmark</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">freezeTableName</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 表名是否和model的js文件名一致</span>
    <span class="token literal-property property">underscored</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="模板文件" tabindex="-1"><a class="header-anchor" href="#模板文件" aria-hidden="true">#</a> 模板文件</h2><p>默认情况下，将与数据库表字段对应的mode文件放在<code>app/model</code>下，<code>egg-sequelize</code>插件会自动加载和处理。</p><h3 id="默认约定" tabindex="-1"><a class="header-anchor" href="#默认约定" aria-hidden="true">#</a> 默认约定</h3><p>model文件 | 加载后类名 |</p><ul><li>| :-: | <code>user.js</code> | <code>app.model.User</code> | <code>person.js</code> | <code>app.model.Person</code>| <code>user_group.js</code>|<code>app.model.UserGroup</code>| <code>user/profile.js</code>|<code>app.model.User.Profile</code>|</li></ul><p>另外：</p><ul><li><p>默认情况下，model生成的表中存在<code>timestamp</code>类型的时间字段：<code>create_at--&gt;datetime</code>、<code>update_at--&gt;datetime</code></p></li><li><p>列名使用下划线风格进行命名，例如：<code>user_id</code>、<code>create_time</code></p></li></ul><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><h4 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h4><p>定义model文件</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/model/user.js</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 字段数据类型</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token constant">DATE</span><span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>Sequelize<span class="token punctuation">;</span>

  <span class="token comment">// model定义</span>
  <span class="token keyword">const</span> User <span class="token operator">=</span> app<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_sign_in_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">updated_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 定义findByLogin()方法，框架里一般放在service层</span>
  User<span class="token punctuation">.</span><span class="token function-variable function">findByLogin</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">login</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意this对象为当前model实例</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">login</span><span class="token operator">:</span> login
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//  不能使用箭头函数</span>
  <span class="token class-name">User</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">logSignIn</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">last_sign_in_at</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> User<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>由于在默认配置<code>options.delegate</code>设置的是<code>model</code>进行委托，所以<code>app.model</code>对象就是一个<code>sequelize</code>实例，可以很轻松的使用其内置函数，例如：</p><ul><li><code>app.model.sync()</code>: 数据库model与字段同步</li><li><code>app.model.query()</code>: 执行自定义sql语句</li></ul><p>现在可以在<code>controller</code>层中，使用封装的方法来操作数据库了</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/user.js</span>
<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> users<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">.</span><span class="token function">findByLogin</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>params<span class="token punctuation">.</span>login<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> user<span class="token punctuation">.</span><span class="token function">logSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> user<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="关联" tabindex="-1"><a class="header-anchor" href="#关联" aria-hidden="true">#</a> 关联</h3><p>可以通过<code>Model.associate()</code>来定义表之间的关联关系，<code>egg-sequelize</code>将会在模块model加载完毕后执行<code>associate()</code>,创建关联</p><h3 id="多数据源" tabindex="-1"><a class="header-anchor" href="#多数据源" aria-hidden="true">#</a> 多数据源</h3><p><code>egg-sequelize</code>支持加载多个独立的数据库配置，连接多个数据库数据源。可以使用<code>config.sequelize.datasources</code>来配置和加载多个数据源</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>
exports<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">datasources</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">delegate</span><span class="token operator">:</span> <span class="token string">&#39;model&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 加载所有的model文件到ctx.model和app.model中进行委托</span>
      <span class="token literal-property property">baseDir</span><span class="token operator">:</span> <span class="token string">&#39;model&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 从 \`app/model/*.js\`中加载model文件</span>
      <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;biz&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
      <span class="token comment">// 关于sequelize的其他配置</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">delegate</span><span class="token operator">:</span> <span class="token string">&#39;admninModel&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 加载所有的model文件到ctx.admninModel和app.admninModel中进行委托</span>
      <span class="token literal-property property">baseDir</span><span class="token operator">:</span> <span class="token string">&#39;admin_model&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 从 \`app/admin_model/*.js\`中加载model文件</span>
      <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>
      <span class="token comment">// 关于sequelize的其他配置</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>按照上面的示例，配置多数据源后，model可以像下面一样定义：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// app/model/user.js 【对应model】</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token constant">DATE</span><span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>Sequelize<span class="token punctuation">;</span>

  <span class="token keyword">const</span> User <span class="token operator">=</span> app<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_sign_in_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">updated_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> User<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// app/admin_model/user.js 【对应adminModel】</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token constant">DATE</span><span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>Sequelize<span class="token punctuation">;</span>

  <span class="token keyword">const</span> User <span class="token operator">=</span> app<span class="token punctuation">.</span>adminModel<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_sign_in_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">updated_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> User<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>如果按照上面的配置，对不同的数据源定义了相同的model，相同的model文件将会在不同的数据库中执行多次，因此可以使用第二个参数去获取<code>sequelize</code> 实例对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// app/model/user.js</span>

<span class="token comment">// 如果model下的js文件将在不同的数据源中被加载多次。可以使用第二个参数(app,model),去获取到sequelize实例 </span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> model</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token constant">DATE</span><span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>Sequelize<span class="token punctuation">;</span>

  <span class="token keyword">const</span> User <span class="token operator">=</span> model<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">last_sign_in_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">updated_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> User<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="自定义sequelize" tabindex="-1"><a class="header-anchor" href="#自定义sequelize" aria-hidden="true">#</a> 自定义sequelize</h3><p>默认情况下，<code>egg-sequelize</code>将会使用<code>sequelize@5</code>,也就是V5版本.可以通过配置<code>config.sequelize.Sequelize</code>来自定义<code>sequelize</code> 的对象版本。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// config/config.default.js</span>
exports<span class="token punctuation">.</span>sequelize <span class="token operator">=</span> <span class="token punctuation">{</span>

  <span class="token comment">// require引入的是项目中自己下载的sequelize版本</span>
  <span class="token literal-property property">Sequelize</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="完整的示例" tabindex="-1"><a class="header-anchor" href="#完整的示例" aria-hidden="true">#</a> 完整的示例</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/model/post.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span><span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token constant">DATE</span><span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>Sequelize<span class="token punctuation">;</span>

  <span class="token keyword">const</span> Post <span class="token operator">=</span> app<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;Post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">user_id</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">created_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">updated_at</span><span class="token operator">:</span> <span class="token constant">DATE</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 建立表之间的关联</span>
  Post<span class="token punctuation">.</span><span class="token function-variable function">associate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span>model<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">belongsTo</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> Post<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>在<code>controller</code>层中使用model，来操作数据库</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// app/controller/post.js</span>
<span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 查询指定字段</span>
      <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;user_id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 关联查询</span>
      <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 条件查询</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;publish&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 排序</span>
      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">&#39;id desc&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> posts<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">findByPk</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> post<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    post<span class="token punctuation">.</span><span class="token function">setDataValue</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> post<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// params路由传参</span>
    <span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>model<span class="token punctuation">.</span>Post<span class="token punctuation">.</span><span class="token function">findByPk</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> post<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="同步model到数据库中" tabindex="-1"><a class="header-anchor" href="#同步model到数据库中" aria-hidden="true">#</a> 同步model到数据库中</h3>`,46),k={href:"https://sequelize.org/master/manual/migrations.html",target:"_blank",rel:"noopener noreferrer"},i=s("p",null,[s("strong",null,"当然在开发环境中，可以使用sync()方法进行数据库同步。")],-1),d=s("h3",{id:"迁移",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#迁移","aria-hidden":"true"},"#"),n(" 迁移")],-1),m={href:"https://sequelize.org/master/manual/migrations.html",target:"_blank",rel:"noopener noreferrer"},y=s("h3",{id:"扩展",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#扩展","aria-hidden":"true"},"#"),n(" 扩展")],-1),g={href:"https://www.npmjs.com/package/egg-sequelize",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/egg-sequelize-plus",target:"_blank",rel:"noopener noreferrer"};function f(w,b){const a=o("ExternalLinkIcon");return e(),c("div",null,[u,s("p",null,[n("强烈建议使用"),s("a",k,[n("sequelize-migrations"),p(a)]),n("来创建或者迁移数据")]),i,d,s("p",null,[n("使用[sequelize-cli] 可以帮助管理数据库，数据结构和原始数据，这个也是基于"),s("a",m,[n("sequelize-migrations"),p(a)]),n(" 来的")]),y,s("p",null,[n("个人在"),s("a",g,[n("egg-sequelize"),p(a)]),n(" 插件的基础上，开发了"),s("a",h,[n("egg-sequelize-plus"),p(a)]),n(" 插件，来解决生产环境中自动创建数据库的问题，同时优化sequelize对象加载；")])])}const q=t(r,[["render",f],["__file","egg-sequelize.html.vue"]]);export{q as default};
