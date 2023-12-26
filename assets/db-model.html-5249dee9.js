import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const e={},t=p(`<h1 id="表模型" tabindex="-1"><a class="header-anchor" href="#表模型" aria-hidden="true">#</a> 表模型</h1><p>在使用ORM框架去操作数据库的时候，<strong>模型是 <code>Sequelize</code> 的本质。模型是代表数据库中表的抽象。 在 <code>Sequelize</code>框架中，模型是一个 <code>Model</code> 的扩展类。</strong></p><p>模型往往和表字段是一一对应的，这样非常利于封装，类似于 <code>Java</code> 语言中的<code>MyBatis</code>。</p><h2 id="模型定义" tabindex="-1"><a class="header-anchor" href="#模型定义" aria-hidden="true">#</a> 模型定义</h2><p>在 <code>Sequelize</code>框架中可以用两种等效的方式定义模型：</p><ul><li>调用 <code>sequelize.define(modelName, attributes, options)</code></li><li>扩展 <code>Model</code> 并调用 <code>init(attributes, options)</code></li></ul><p><strong>在内部，<code>sequelize.define</code> 调用 <code>Model.init</code>，因此两种方法本质上是等效的。</strong></p><p>模型的定义最重要是与表中的列要做到<code>关系映射</code>，例如：</p><p>定义一个基础的用户表的模型</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> DataTypes <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> UserModel <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 名称
   */</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 年龄
   */</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * 性别
   */</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">BOOLEAN</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认值</span>
    <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * 出生日期
   */</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">DATE</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="使用define-函数" tabindex="-1"><a class="header-anchor" href="#使用define-函数" aria-hidden="true">#</a> 使用define()函数</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize<span class="token punctuation">,</span> DataTypes <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> UserModel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;sqlite::memory:&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> UserModel<span class="token punctuation">)</span>

<span class="token comment">// \`sequelize.define\` 会返回模型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User <span class="token operator">===</span> sequelize<span class="token punctuation">.</span>models<span class="token punctuation">.</span>User<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>模型定义后，可以在使用挂载在<code>sequelize</code>对象上的模型实例<code>sequelize.models.User</code>。</p><h2 id="使用init-函数" tabindex="-1"><a class="header-anchor" href="#使用init-函数" aria-hidden="true">#</a> 使用init()函数</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize<span class="token punctuation">,</span> DataTypes<span class="token punctuation">,</span> Model <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> UserModel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./user&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;sqlite::memory&#39;</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
 * 继承Model类型，使用使用init方法注册模型
 */</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 初始化模型
 */</span>
User<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>UserModel<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 连接实例</span>
  sequelize<span class="token punctuation">,</span>
  <span class="token comment">// 指定模型绑在sequelize对象上的名称</span>
  <span class="token literal-property property">modelName</span><span class="token operator">:</span> <span class="token string">&#39;User&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 定义的模型就是User类本身</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>User <span class="token operator">===</span> sequelize<span class="token punctuation">.</span>models<span class="token punctuation">.</span>User<span class="token punctuation">)</span> <span class="token comment">// true</span>

</code></pre></div><p>定义后，我们可以使用 <code>sequelize.models.User</code> 访问模型。</p><h2 id="表名规则" tabindex="-1"><a class="header-anchor" href="#表名规则" aria-hidden="true">#</a> 表名规则</h2><p>上面两种方法的模型定义中，都未明确定义表名(<code>users</code>)。 但是，给出了模型名称(<code>User</code>)。</p><p><strong>默认情况下，当未提供表名时，<code>Sequelize</code>框架会自动将<code>模型名复数</code>用作表名。</strong></p><h3 id="强制表名等于模型名" tabindex="-1"><a class="header-anchor" href="#强制表名等于模型名" aria-hidden="true">#</a> 强制表名等于模型名</h3><p>可以使用 <code>freezeTableName: true</code> 配置， <code>Sequelize</code>框架将自动执行模型名的复数形式， 推断出<code>表名称</code>等于<code>模型名称</code>，不需要进行任何修改。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... (属性)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 强制表名等于模型名</span>
  <span class="token literal-property property">freezeTableName</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面代码将创建一个名为 <code>User</code> 的模型，该模型指向一个也名为 <code>users</code> 的表。Sequelize框架也支持全局配置这个参数，只需要在创建sequelize连接实例时指定，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 强制所有表名称等于模型名称</span>
    <span class="token literal-property property">freezeTableName</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="直接提供表名" tabindex="-1"><a class="header-anchor" href="#直接提供表名" aria-hidden="true">#</a> 直接提供表名</h3><p>对于模型与表之间的映射关系，本质是需要告诉Sequelize框架对应的数据库名称。 除了强制对模型名称进行转换， 还可以在模型定义式直接指定表名，使用<code>tableName</code>参数进行配置。例如：</p><blockquote><p>建议数据库表名以tbl开头，例如： tbl_user</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... (属性)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 指定对应的表名</span>
  <span class="token literal-property property">tableName</span><span class="token operator">:</span> <span class="token string">&#39;tbl_user&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>此时，在<code>freezeTableName</code>参数默认为<code>false</code>，不会将模型名与表名进行转换，只会根据<code>tableName</code>字段来制定表名</p><h2 id="同步模型" tabindex="-1"><a class="header-anchor" href="#同步模型" aria-hidden="true">#</a> 同步模型</h2><p>定义模型时，要告诉 <code>Sequelize</code> 有关数据库中表的一些信息。 但是：</p><ul><li>如果该表实际上不存在于数据库中怎么办？</li><li>如果存在，但具有不同的列、缺少列或存在任何其他差异，该如何处理？</li></ul><p>这两种情况，都是预期情况与实际情况产生差异时，会经常存在的，这也是同步模型这功能极需要的问题。</p><p>可以通过调用一个异步函数<code>model.sync(options)</code>，返回的是一个<code>Promise</code>对象 。 <strong><code>Sequelize</code>框架将自动对数据库执行 <code>SQL</code> 查询。</strong></p><p>特别注意：<strong>这仅更改数据库中的表，而不更改 JavaScript 端的模型.</strong>+</p><ul><li><code>User.sync()</code> - 如果表不存在，则创建该表。如果已经存在，则不执行任何操作。</li><li><code>User.sync({ force: true })</code> - 将创建表，如果表已经存在，则将其先删除再按照模型创建</li><li><code>User.sync({ alter: true })</code> - 这将检查数据库中表的当前状态(它具有哪些列，它们的数据类型等)，然后在表中进行必要的更改以使其与模型匹配.</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 模型强制同步到表，会先删除表</span>
<span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 不会删除表，只会同步与模型中存在，但表中不存在的字段</span>
<span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">alter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="同步所有模型" tabindex="-1"><a class="header-anchor" href="#同步所有模型" aria-hidden="true">#</a> 同步所有模型</h3><p>可以在创建<code>Sequelize</code>连接实例后使用 <code>sequelize.sync()</code> 自动同步所有模型。 示例：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 删除所有表，将连接实例上挂载的模型全部同步到表中</span>
<span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">force</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong><code>sync({ force: true })</code> 和 <code>sync({ alter: true })</code> 可能是破坏性操作， 一旦输出数据库，只能通过数据库日志进行恢复。不建议将它们用于生产级环境中。</strong></p><h3 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h3><p><code>Sequelize</code>框架提供了删除模型对应的数据库表的<code>API</code>，可以使用<code>drop()</code>方法实现。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 删除单个表，例如：User</span>
<span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除所有表</span>
<span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>注意：</p><ul><li>删除单个表时，是对应表的模型对象调用<code>drop()</code>方法实现的。</li><li>删除所有表时，是当前连接的<code>sequelize</code>实例调用<code>drop()</code>方法实现的。</li></ul><h2 id="时间戳的使用" tabindex="-1"><a class="header-anchor" href="#时间戳的使用" aria-hidden="true">#</a> 时间戳的使用</h2><p><strong>默认情况下，<code>Sequelize</code> 框架使用数据类型 <code>DataTypes.DATE</code> 自动向每个模型添加 <code>createdAt</code> 和 <code>updatedAt</code> 字段。</strong></p><p>使用<code>Sequelize</code> 创建或更新内容时，字段都会被自动设置</p><ul><li><code>createdAt</code> 字段将包含代表创建时刻的时间戳</li><li><code>updatedAt</code> 字段将包含最新更新的时间戳.</li></ul><p><strong>特别需要注意的是：上面的字段自动管理是在 <code>Sequelize</code> 级别使用<code>SQL</code>触发器（钩子函数）完成的</strong>。</p><p><strong>直接通过原始的<code>SQL</code> 查询，不会触发SQL钩子函数，也就导致无法实现该字段的自动更新</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 配置单个表的字段自动管理</span>
sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... (属性)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 是否禁用字段自动管理</span>
  <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>也可以只启用 <code>createdAt</code>/<code>updatedAt</code> 之一，支持自定义列名称，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

User<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ... (属性)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  sequelize<span class="token punctuation">,</span>
  <span class="token comment">// 这里时间戳必须启用true</span>
  <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 不使用createdAt字段</span>
  <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 使用 updatedAt字段 但是希望名称叫做 create_time</span>
  <span class="token literal-property property">updatedAt</span><span class="token operator">:</span> <span class="token string">&#39;create_time&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>同样的，也支持全局配置，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 不使用createdAt字段</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 使用 updatedAt字段 但是希望名称叫做 create_time</span>
    <span class="token literal-property property">updatedAt</span><span class="token operator">:</span> <span class="token string">&#39;create_time&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="列声明简写" tabindex="-1"><a class="header-anchor" href="#列声明简写" aria-hidden="true">#</a> 列声明简写</h2><p>在模型定义中，如果只指定列的数据类型，可以缩短语法，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 指定字段name的数据类型</span>
sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 简写</span>
sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="列参数" tabindex="-1"><a class="header-anchor" href="#列参数" aria-hidden="true">#</a> 列参数</h2><p>在定义列时,除了指定列的 <code>type</code>、<code>allowNull</code> 和 <code>defaultValue</code> 参数外，还有很多可用的参数，下面分类介绍</p><h3 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h3><p>默认情况下，<code>Sequelize</code> 假定列的默认值为 <code>NULL</code>。 可以通过将特定的 <code>defaultValue</code>字段来设置模型列的默认值，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>一些特殊的值，例如 <code>DataTypes.NOW</code>，也可以正常使用：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token string">&quot;142vip.cn&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">createTime</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// datatime类型</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">DATETIME</span><span class="token punctuation">,</span>
    <span class="token comment">// 当前日期/时间</span>
    <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">NOW</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="允许空" tabindex="-1"><a class="header-anchor" href="#允许空" aria-hidden="true">#</a> 允许空</h3><p>使用 <code>allowNull</code> 字段配置，设置模型列是否为空。 将 <code>allowNull</code> 设置为 <code>false</code> 将为该列添加 <code>NOT NULL</code>， 这意味着如果该列为<code>null</code>，则在执行查询时将从数据库引发错误。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>DataTypes<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">allowNull</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="唯一索引" tabindex="-1"><a class="header-anchor" href="#唯一索引" aria-hidden="true">#</a> 唯一索引</h3><p>使用 <code>unique</code> 字段配置，创建唯一索引。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>DataTypes<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token comment">// unique 属性是创建唯一约束的简写</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="主键" tabindex="-1"><a class="header-anchor" href="#主键" aria-hidden="true">#</a> 主键</h3><p>使用 <code>primaryKey</code> 字段配置，创建主键，字段值唯一。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>DataTypes<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建索引</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="自增" tabindex="-1"><a class="header-anchor" href="#自增" aria-hidden="true">#</a> 自增</h3><p>使用 <code>autoIncrement</code> 字段配置，设置列属性自增，默认从<code>1</code>开始。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建自增字段</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="指定列名" tabindex="-1"><a class="header-anchor" href="#指定列名" aria-hidden="true">#</a> 指定列名</h3><p>使用 <code>field</code> 字段配置，设置模型对应的数据库表列名。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">&#39;用户名&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="列注释" tabindex="-1"><a class="header-anchor" href="#列注释" aria-hidden="true">#</a> 列注释</h3><p>使用 <code>comment</code> 字段配置，给数据库表字段增加注释说明。目前只能支持添加到 <code>MySQL</code>、<code>MariaDB</code>、<code>PostgreSQL</code> 和 <code>MSSQL</code> 的列中。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token comment">// 添加注释</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">&#39;这是带有注释的列&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="创建外键" tabindex="-1"><a class="header-anchor" href="#创建外键" aria-hidden="true">#</a> 创建外键</h3><p>使用 <code>references</code> 字段配置，支持模型创建外键关联。<code>references</code>参数支持的配置有：</p><ul><li><code>model</code>： - 指定模型，表明与那个模型建立外键关联</li><li><code>key</code>： 指定列名，表明与那个列建立关联信息</li><li><code>deferrable</code>：使用 <code>PostgreSQL</code>，可以通过 <code>Deferrable</code> 类型声明何时检查外键约束，可以配置： <ul><li><code>Deferrable.INITIALLY_IMMEDIATE</code>： 立即检查外键约束</li><li><code>Deferrable.INITIALLY_DEFERRED</code>： 将所有外键约束检查推迟到事务结束</li><li><code>Deferrable.NOT</code>： 完全不推迟检查(默认) 将不允许动态更改事务中的规则</li></ul></li></ul><p>这里将 <code>User</code> 表中的 <code>id</code> 字段与 <code>Account</code> 表中的 <code>id</code> 字段建立外键关联关系，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>DataTypes<span class="token punctuation">,</span> Deferrable<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 建立外键关联关系
 */</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">references</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 模型名，</span>
      <span class="token literal-property property">model</span><span class="token operator">:</span> Account<span class="token punctuation">,</span>
      <span class="token comment">// 引用模型的列名</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 声明什么时候检查外键约束.</span>
      <span class="token literal-property property">deferrable</span><span class="token operator">:</span> Deferrable<span class="token punctuation">.</span><span class="token constant">INITIALLY_IMMEDIATE</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,90),o=[t];function c(l,r){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","db-model.html.vue"]]);export{k as default};
