import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as s,b as n,d as p,e as t}from"./app-be253e4c.js";const r={},u=s("h1",{id:"索引",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#索引","aria-hidden":"true"},"#"),n(" 索引")],-1),i=s("p",null,[s("code",null,"索引"),n("是为了加速对表中数据行的检索而创建的一种分散的存储结构。 "),s("code",null,"索引"),n("是针对表而建立的，它是由数据页面以外的索引页面组成的，每个索引页面中的行都会含有逻辑指针，以便加速检索物理数据。")],-1),k=s("code",null,"MYSQL",-1),d=s("code",null,"Oracle",-1),y=s("code",null,"ElasticSearch",-1),_={href:"https://zhuanlan.zhihu.com/p/324378430",target:"_blank",rel:"noopener noreferrer"},m=t(`<p><code>Sequelize</code> 框架本身一套ORM映射框架，处理编程对象和数据库表字段关系的映射。当表中的字段设置了索引， 再到<code>Sequelize</code>的模型中配置利用<code>indexes</code>字段配置索引，即可在查询时使用索引。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* attributes */</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">indexes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 创建唯一索引</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>对<code>User</code>表中的<code>name</code>字段创建唯一索引。</p><blockquote><p>唯一索引：在表中限制该字段唯一、不重复，同时支持查询检索</p></blockquote><p>索引的分类和用途有很多，<code>Sequelize</code>框架对索引的支持有限，这里给出简单的配置例子：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Sequelize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 定义用户表对应的模型
 */</span>
<span class="token keyword">const</span> User <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 一些配置</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">indexes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 创建唯一索引，unique用来判断是否为唯一索引</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 使用 jsonb_path_ops 运算符对data字段创建 gin 索引</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">using</span><span class="token operator">:</span> <span class="token string">&#39;gin&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">operator</span><span class="token operator">:</span> <span class="token string">&#39;jsonb_path_ops&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// name字段配置索引名称，默认的索引名是: 表明名_列名</span>
    <span class="token comment">// 创建联合索引，涉及多个字段</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;public_by_author&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;status&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;public&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 对于排序字段创建BTree索引</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;title_index&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">using</span><span class="token operator">:</span> <span class="token string">&#39;BTREE&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fields</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">collate</span><span class="token operator">:</span> <span class="token string">&#39;en_US&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">&#39;DESC&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">5</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,6),g={href:"https://github.com/sequelize/sequelize/blob/main/packages/core/src/dialects/abstract/query-interface.d.ts",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"indexes",-1),q=t("<p>在介绍<code>Sequelize</code>创建连接实例是，介绍到<code>Sequelize</code>对象提供的<code>sync</code>函数，这个API可以在连接时将模型同步到数据库表中。</p><p><strong>当模型中配置<code>indexes</code>字段支持索引时，使用<code>sequelize.sync()</code>函数同样可以将模型中定义的索引同步到表中</strong></p>",2);function f(z,b){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,i,s("p",null,[n("常见"),k,n("、"),d,n("等数据库都有使用到索引，因为这能够大大加速对数据的检索， 甚至像"),y,n("数据库还出现了"),s("a",_,[n("倒排索引"),p(a)]),n(" 这样的概念。")]),m,s("p",null,[n("可以通过"),s("a",g,[n("源码"),p(a)]),n(" 查看"),h,n("字段的类型支持")]),q])}const S=e(r,[["render",f],["__file","indexes.html.vue"]]);export{S as default};
