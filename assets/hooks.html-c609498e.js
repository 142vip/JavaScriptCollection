import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c,a as n,b as s,d as u,e as a}from"./app-be253e4c.js";const l="/JavaScriptCollection/assets/hooks-tree-fcfaec48.png",i="/JavaScriptCollection/assets/hooks-class-cda90bac.png",k="/JavaScriptCollection/assets/hooks-api-fc507a6e.png",r="/JavaScriptCollection/assets/sequelize-options-152936aa.png",d="/JavaScriptCollection/assets/sequelize-hooks-9ad3b3bc.png",m={},g=a('<h1 id="钩子函数" tabindex="-1"><a class="header-anchor" href="#钩子函数" aria-hidden="true">#</a> 钩子函数</h1><p><code>钩子函数</code>也叫<code>生命周期事件</code>，在一些大型框架中都有这样的设计。是在执行 <code>sequelize</code> 中的调用之前或之后调用的函数，在项目开发中常常会遇到这样的情况：</p><blockquote><p>希望在对某张表新增一条数据时，对某个字段自动操作</p></blockquote><p>具体一点就是： 在表中新增一行数据，但是不希望通过提交SQL、代码的方式去维护一个字段，例如：创建时间。</p><blockquote><p>这时候就可以使用钩子函数中的<code>beforeUpdate</code>函数，对该字段进行声明。</p></blockquote><p><strong>注意：钩子函数只能与模型一起使用，相当于模型的一个拓展，是对某种操作的一个抽象封装，无法与实例一起使用</strong></p><h2 id="提供的函数" tabindex="-1"><a class="header-anchor" href="#提供的函数" aria-hidden="true">#</a> 提供的函数</h2><p><code>sequelize</code>提供了很多钩子函数，在源码存在一个<code>hooks.js</code>的文件，就是用来声明钩子函数<code>hooks</code>的</p><figure><img src="'+l+`" alt="钩子函数源码结构" tabindex="0" loading="lazy"><figcaption>钩子函数源码结构</figcaption></figure><p>例如：</p><div class="language-json5" data-ext="json5"><pre class="language-json5"><code><span class="token comment">//  插入数据成功前、后执行的函数</span>
beforeCreate(<span class="token property unquoted">attributes</span><span class="token operator">:</span> M<span class="token punctuation">,</span> <span class="token property unquoted">options</span><span class="token operator">:</span> CreateOptions&lt;TAttributes&gt;);
afterCreate(<span class="token property unquoted">attributes</span><span class="token operator">:</span> M<span class="token punctuation">,</span> <span class="token property unquoted">options</span><span class="token operator">:</span> CreateOptions&lt;TAttributes&gt;);

<span class="token comment">// 更新数据成功前、后执行的函数</span>
beforeUpdate(<span class="token property unquoted">instance</span><span class="token operator">:</span> M<span class="token punctuation">,</span> <span class="token property unquoted">options</span><span class="token operator">:</span> InstanceUpdateOptions&lt;TAttributes&gt;);
afterUpdate(<span class="token property unquoted">instance</span><span class="token operator">:</span> M<span class="token punctuation">,</span> <span class="token property unquoted">options</span><span class="token operator">:</span> InstanceUpdateOptions&lt;TAttributes&gt;);

<span class="token comment">// 批量更新成后前、后执行的函数</span>
beforeBulkUpdate(<span class="token property unquoted">options</span><span class="token operator">:</span> UpdateOptions&lt;TAttributes&gt;);
afterBulkUpdate(<span class="token property unquoted">options</span><span class="token operator">:</span> UpdateOptions&lt;TAttributes&gt;);

<span class="token comment">// ...</span>
</code></pre></div>`,11),f={href:"https://github.com/sequelize/sequelize/blob/v6/src/hooks.d.ts",target:"_blank",rel:"noopener noreferrer"},y=a(`<h2 id="声明钩子" tabindex="-1"><a class="header-anchor" href="#声明钩子" aria-hidden="true">#</a> 声明钩子</h2><p>钩子函数的参数是通过引用传递的，因此可以在钩子函数中对模型操作的一些值进行修改，也就是对执行的一些SQL做修改，从而影响结果。</p><p>钩子函数也可以支持异步操作，这种情况下传入的钩子函数返回一个Promise对象即可。 例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// User为表实例，注意这里的async</span>
User<span class="token punctuation">.</span><span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>user<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> hashedPassword <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">hashPassword</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">;</span>
  user<span class="token punctuation">.</span>password <span class="token operator">=</span> hashedPassword<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>钩子函数的声明，目前支持三种形式：</p><ul><li>基于实例类继承<code>sequelize</code>提供的<code>Model</code>类，调用init()方法初始化</li><li>使用<code>addHook()</code>方法，给实例类添加初始化操作</li><li>直接使用绑在实例类上的钩子方法</li></ul><p>具体的用法，可以参考下面的示例：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 钩子函数
 */</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  Model<span class="token punctuation">,</span>
  Sequelize<span class="token punctuation">,</span>
  DataTypes
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建连接实例</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 实例类继承sequelize提供的Model类</span>
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 方法一：调用init()方法初始化
 */</span>
User<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mood</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">ENUM</span><span class="token punctuation">,</span>
    <span class="token literal-property property">values</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;happy&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sad&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">beforeValidate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      user<span class="token punctuation">.</span>mood <span class="token operator">=</span> <span class="token string">&#39;happy&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">afterValidate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      user<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;Toni&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  sequelize
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 方法二：使用addHook()方法</span>
User<span class="token punctuation">.</span><span class="token function">addHook</span><span class="token punctuation">(</span><span class="token string">&#39;beforeValidate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  user<span class="token punctuation">.</span>mood <span class="token operator">=</span> <span class="token string">&#39;happy&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

User<span class="token punctuation">.</span><span class="token function">addHook</span><span class="token punctuation">(</span><span class="token string">&#39;afterValidate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mood&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 方法三：直接使用绑在实例类上的钩子方法
 */</span>
User<span class="token punctuation">.</span><span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  user<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&#39;123456&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
User<span class="token punctuation">.</span><span class="token function">afterValidate</span><span class="token punctuation">(</span><span class="token string">&#39;userName&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  user<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&#39;142vip.cn&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="移除钩子" tabindex="-1"><a class="header-anchor" href="#移除钩子" aria-hidden="true">#</a> 移除钩子</h2><p>在上面的钩子函数声明、使用中，可以发现模型实例类在继承<code>Model</code>父类之后，调用<code>addHook()</code> 函数，这是因为<code>Model</code>父类继承了<code>Hooks</code>类，支持对钩子函数做一些操作，查看源码：</p><figure><img src="`+i+'" alt="继承Hooks类" tabindex="0" loading="lazy"><figcaption>继承Hooks类</figcaption></figure><p>同时，<code>Hooks</code>父类不仅提供<code>addHook()</code>方法，还提供一些其他的API：</p><figure><img src="'+k+`" alt="Hooks类API" tabindex="0" loading="lazy"><figcaption>Hooks类API</figcaption></figure><p>支持对<code>钩子函数</code>的增加、移除等管理操作，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Model<span class="token punctuation">,</span> DataTypes<span class="token punctuation">,</span> <span class="token literal-property property">Sequelize</span><span class="token operator">:</span> sequelize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// BooK实例</span>
<span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// Book实例类初始化</span>
Book<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> DataTypes<span class="token punctuation">.</span><span class="token constant">STRING</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  sequelize
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 为Book实例移除afterCreate类型的userName的钩子函数
 * - 按照名称
 */</span>
Book<span class="token punctuation">.</span><span class="token function">addHook</span><span class="token punctuation">(</span><span class="token string">&#39;afterCreate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">book<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Book<span class="token punctuation">.</span><span class="token function">removeHook</span><span class="token punctuation">(</span><span class="token string">&#39;afterCreate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
 * 为Book实例移除afterCreate类型上所有的钩子函数
 */</span>
Book<span class="token punctuation">.</span><span class="token function">removeHook</span><span class="token punctuation">(</span><span class="token string">&#39;afterCreate&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="全局钩子" tabindex="-1"><a class="header-anchor" href="#全局钩子" aria-hidden="true">#</a> 全局钩子</h2><p>全局钩子是为所有模型运行的钩子，在插件中特别有用，可以定义想要的所有模型的行为。例如，自定义模型上的时间戳字段</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">tableName</span><span class="token operator">:</span> <span class="token string">&#39;tbl_user&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据创建时，对创建时间、更新时间字段赋值</span>
    <span class="token function-variable function">beforeCreate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">record<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      record<span class="token punctuation">.</span>dataValues<span class="token punctuation">.</span>createdAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      record<span class="token punctuation">.</span>dataValues<span class="token punctuation">.</span>updatedAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 数据更新时，只对更新时间字段赋值更新</span>
    <span class="token function-variable function">beforeUpdate</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">record<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      record<span class="token punctuation">.</span>dataValues<span class="token punctuation">.</span>updatedAt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>绑在数据表实例上，每次对表有操作时就会执行。</p><h2 id="默认钩子" tabindex="-1"><a class="header-anchor" href="#默认钩子" aria-hidden="true">#</a> 默认钩子</h2><p>在创建<code>sequelize</code>实例时利用<code>define</code>参数定义钩子函数，即可像所有模型添加对应的钩子函数，这个钩子函数在每个模型上都会执行，称为默认钩子</p><blockquote><p>注意： 如果模型上对这个钩子函数有定义，则会覆盖实例上定义的钩子函数</p></blockquote><p>这里通过对<code>User</code>和<code>Space</code>表实例说明默认钩子函数，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ... 连接参数</span>
  <span class="token comment">// 注意这里的define参数，用例指定默认钩子</span>
  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Space <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;Space&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 运行默认钩子函数</span>
<span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 运行空间表实例自己的钩子函数，默认钩子被覆盖</span>
<span class="token keyword">await</span> Space<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>Space</code>实例的钩子函数覆盖掉默认钩子函数，所以只执行了实例上的钩子函数</p><h2 id="永久钩子" tabindex="-1"><a class="header-anchor" href="#永久钩子" aria-hidden="true">#</a> 永久钩子</h2><p>在实例上定义默认钩子函数，可以在所有模型中执行，但前提是在模型定义上没有声明相同名称的钩子函数，否则就会被覆盖。</p><p><code>sequelize</code>框架支持另外一种钩子函数，可以在所有模型中执行，也不用担心被覆盖的问题。提供<code>sequelize.addHook()</code>函数来 声明这种钩子函数，称为<code>永久钩子</code>，也可以理解为全局作用域下，不被覆盖的钩子函数。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 声明永久钩子，挂载到sequelize实例上
 */</span>
sequelize<span class="token punctuation">.</span><span class="token function">addHook</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实现一些逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>不论表模型上是否声明、指定了自己的<code>beforeCreate</code>类型的钩子函数，这个<code>永久钩子函数</code>都会执行。执行顺序是：</p><ul><li>先执行表模型上的钩子函数</li><li>再执行永久钩子函数</li></ul><p>这里简单给出永久钩子的定义方式，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 声明永久钩子，挂载到sequelize实例上
 */</span>
sequelize<span class="token punctuation">.</span><span class="token function">addHook</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实现一些逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 注意这里的sequelize对象上已经永久钩子函数</span>
<span class="token keyword">const</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Project <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;Project&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ... 业务逻辑</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 运行全局钩子函数</span>
<span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 运行自己的钩子函数，然后再运行全局钩子函数</span>
<span class="token keyword">await</span> Project<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>值的注意的是：<strong>还可以通过<code>new sequelize</code>的参数定义永久钩子函数</strong>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注意：这里没有利用define字段</span>
<span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>使用<code>define</code>字段定义的是默认钩子函数，上面是定义全局钩子函数。查看源码有：</p><figure><img src="`+r+'" alt="sequelize的构造函数" tabindex="0" loading="lazy"><figcaption>sequelize的构造函数</figcaption></figure><p><code>sequelize</code>对象在创建时的<code>options</code>参数包含了对<code>默认钩子函数</code>、<code>永久钩子函数</code>的定义。</p><h2 id="连接钩子" tabindex="-1"><a class="header-anchor" href="#连接钩子" aria-hidden="true">#</a> 连接钩子</h2><p><code>Sequelize ORM</code>框架除了提供对数据库表模型的的钩子函数外， 还提供了针对<code>sequelize</code>实例的钩子函数，查看源码：</p><figure><img src="'+d+`" alt="sequelize的钩子函数" tabindex="0" loading="lazy"><figcaption>sequelize的钩子函数</figcaption></figure><p>支持在连接之前或者连接之后执行。当然和模型的钩子函数一样，支持异步执行，处理<code>Promise</code>对象，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 在sequelize建立连接前执行钩子函数，赋值连接密码
 */</span>
sequelize<span class="token punctuation">.</span><span class="token function">beforeConnect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token number">123456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>使用连接池技术建立连接时，也是支持钩子函数的，配置、使用和上面类似。</p><p><strong>注意： <code>sequelize</code>实例上的钩子函数只能声明为永久全局钩子函数， 因为建立连接后的实例对象是所有模型共享。</strong></p>`,45);function h(q,b){const p=o("ExternalLinkIcon");return e(),c("div",null,[g,n("p",null,[s("更多钩子函数可以查看"),n("a",f,[s("hooks源码"),u(p)])]),y])}const z=t(m,[["render",h],["__file","hooks.html.vue"]]);export{z as default};
