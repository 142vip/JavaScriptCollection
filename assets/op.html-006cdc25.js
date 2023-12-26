import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,a as n,b as s,d as t,e as a}from"./app-be253e4c.js";const l={},k=a(`<h1 id="op运算符" tabindex="-1"><a class="header-anchor" href="#op运算符" aria-hidden="true">#</a> OP运算符</h1><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="api关键字" tabindex="-1"><a class="header-anchor" href="#api关键字" aria-hidden="true">#</a> API关键字</h2><p><code>Sequelize</code>框架提供了<code>Op</code>操作符来简化一些查询逻辑，例如</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 模型查询</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 且运算(a = 5) AND (b = 6)</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>and<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 或运算 (a = 5) OR (b = 6)           </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>or<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 等于</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>eq<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token comment">// 不等于</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>ne<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token comment">// 为空</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>is<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// 不等于true</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>not<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 可能等于的值范围</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>or<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 指定数据库列名</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>col<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;user.organization_id&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 大于</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>gt<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token comment">// 大于等于</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>gte<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token comment">// 小于</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>lt<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">// 小于等于</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>lte<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">// 在范围内</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>between<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 不在范围内</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notBetween<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>all<span class="token punctuation">]</span><span class="token operator">:</span> sequelize<span class="token punctuation">.</span><span class="token function">literal</span><span class="token punctuation">(</span><span class="token string">&#39;SELECT 1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// &gt; ALL (SELECT 1)</span>

    <span class="token comment">// 在数组范围内</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>in<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 不存在数组范围内</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notIn<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">// 满足模糊查询条件</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>like<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 不满足模糊查询条件</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notLike<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 模糊查询，以什么开始</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>startsWith<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 模糊查询，以什么结束</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>endsWith<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 模糊查询，条件在中间</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>substring<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 只支持PG数据库，模糊查询，以什么结束</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>iLike<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 只支持PG数据库，模糊查询，以什么结束，和上面相反</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notILike<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,6),i={href:"https://github.com/sequelize/sequelize/blob/main/packages/core/src/operators.ts",target:"_blank",rel:"noopener noreferrer"},r=a(`<h2 id="一些例子" tabindex="-1"><a class="header-anchor" href="#一些例子" aria-hidden="true">#</a> 一些例子</h2><h3 id="查询范围类型" tabindex="-1"><a class="header-anchor" href="#查询范围类型" aria-hidden="true">#</a> 查询范围类型</h3><blockquote><p>仅限 Postgres数据库 的范围类型</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 仅限 Postgres数据库 的范围类型</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// @&gt; &#39;2&#39;::integer  </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>contains<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token comment">// @&gt; [1, 2)      </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>contains<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;@ [1, 2)        </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>contained<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &amp;&amp; [1, 2)             </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>overlap<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// -|- [1, 2)               </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>adjacent<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &lt;&lt; [1, 2)             </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>strictLeft<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &gt;&gt; [1, 2)             </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>strictRight<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &amp;&lt; [1, 2)       </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>noExtendRight<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// &amp;&gt; [1, 2)     </span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>noExtendLeft<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,4),d={href:"https://sequelize.org/docs/v6/other-topics/other-data-types/#ranges-postgresql-only",target:"_blank",rel:"noopener noreferrer"},m=a(`<h3 id="或条件" tabindex="-1"><a class="header-anchor" href="#或条件" aria-hidden="true">#</a> 或条件</h3><p>可以利用<code>Op.or</code>运算符实现查询条件的<code>或运算</code>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 查询age小于18或者age等于30的用户</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>or<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>lt<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>eq<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">30</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="且条件" tabindex="-1"><a class="header-anchor" href="#且条件" aria-hidden="true">#</a> 且条件</h3><p>可以利用<code>Op.and</code>运算符实现查询条件的<code>且运算</code>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 查询name为\`142vip.cn\`并且age为18的用户信息</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>and<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;142vip.cn&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="数字比较" tabindex="-1"><a class="header-anchor" href="#数字比较" aria-hidden="true">#</a> 数字比较</h3><p>对于查询条件中可能需要的数字比较查询，<code>Op</code>也提供了丰富的<code>API</code>运算符，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 查询age大于18的用户信息</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 大于</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>gt<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>还可以实现一些更为灵活的<code>比较查询</code>，相关<code>Op</code>运算符如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 模糊查询 支持或运算</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 大于</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>gt<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token comment">// 大于等于</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>gte<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token comment">// 小于</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>lt<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token comment">// 小于等于</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>lte<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h3><p>可以利用<code>Op.like</code>运算符实现模糊查询，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对name字段进行模糊查询</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>like<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip%&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>还可以实现一些更为灵活的模糊查询，相关<code>Op</code>运算符如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 满足模糊查询条件</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>like<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 不满足模糊查询条件</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notLike<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 模糊查询，以什么开始</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>startsWith<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 模糊查询，以什么结束</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>endsWith<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 模糊查询，条件在中间</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>substring<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 只支持PG数据库，模糊查询，以什么结束</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>iLike<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 只支持PG数据库，模糊查询，以什么结束，和上面相反</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notILike<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;%142vip&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询" aria-hidden="true">#</a> 范围查询</h3><p>在查询条件中，如果需要进行对一些字段做范围查询，Op也提供了类似 <code>Op.in</code> 、 <code>Op.between</code> 等运算符，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 查询id等于1或2或3的用户信息</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>上面的代码实现的是基于<code>id</code>的条件查询，需要<code>id</code>字段命中数组中的值，转换为<code>SQL</code>原生语句等价于：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>SELECT * FROM tbl_user WHERE id&quot; IN (1, 2, 3);
</code></pre></div><p>除了在数组范围进行查询，支持 <code>between</code> 关键字进行查询，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Op<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;sequelize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 丰富的API运算符</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 在范围内</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>between<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 不在范围内</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notBetween<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 在数组范围内</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>in<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 不存在数组范围内</span>
      <span class="token punctuation">[</span>Op<span class="token punctuation">.</span>notIn<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,23);function g(h,b){const p=e("ExternalLinkIcon");return c(),u("div",null,[k,n("p",null,[s("更多丰富的API关键字定义可以参考"),n("a",i,[s("源码类型声明"),t(p)])]),r,n("p",null,[s("详细信息，参考"),n("a",d,[s("Postgres的范围类型"),t(p)])]),m])}const y=o(l,[["render",g],["__file","op.html.vue"]]);export{y as default};
