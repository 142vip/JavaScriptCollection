import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const e={},p=t(`<h1 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h1><p>单例模式<code>Singleton Pattern</code> 又名单件模式或单态模式，属于创建型模式，其涉及到一个单一的类，该类负责创建所需的对象，同时确保只有单个对象被创建，这个类提供了一种访问其唯一的对象的方式，保证访问的对象是只实例化一次的对象类。</p><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><p>单例模式确保某一个类只有一个实例，而且自行实例化并向整个系统提供这个实例，这个类称为单例类，它提供全局访问的方法。单例模式主要有以下要点，首先是某个类只能有一个实例，再是其必须自行创建这个实例，以及其必须自行向整个系统提供这个实例。</p><h3 id="模式结构" tabindex="-1"><a class="header-anchor" href="#模式结构" aria-hidden="true">#</a> 模式结构</h3><ul><li><code>Singleton</code>: 单例。</li><li><code>Proxy</code>: 单例创建代理。</li></ul><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ul><li>提供了对唯一实例的受控访问。因为单例类封装了它的唯一实例，所以它可以严格控制客户怎样以及何时访问它，并为设计及开发团队提供了共享的概念。</li><li>由于在系统内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象，单例模式无疑可以提高系统的性能。</li><li>允许可变数目的实例。我们可以基于单例模式进行扩展，使用与单例控制相似的方法来获得指定个数的对象实例。</li></ul><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ul><li>由于单例模式中没有抽象层，因此单例类的扩展有很大的困难。</li><li>单例类的职责过重，在一定程度上违背了单一职责原则。因为单例类既充当了工厂角色，提供了工厂方法，同时又充当了产品角色，包含一些业务方法，将产品的创建和产品的本身的功能融合到一起。</li></ul><p>滥用单例将带来一些负面问题，如为了节省资源将数据库连接池对象设计为单例类，可能会导致共享连接池对象的程序过多而出现连接池溢出；现在很多面向对象语言的运行环境都提供了自动垃圾回收的技术，因此如果实例化的对象长时间不被利用，系统会认为它是垃圾，会自动销毁并回收资源，下次利用时又将重新实例化，这将导致对象状态的丢失。</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="ts版本" tabindex="-1"><a class="header-anchor" href="#ts版本" aria-hidden="true">#</a> Ts版本</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 单例模式
 * - 懒汉式
 * - 饿汉式
 */</span>

<span class="token doc-comment comment">/**
 * 懒汉-单例
 */</span>
<span class="token keyword">namespace</span> LazySingleton <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">LazySingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> instance <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 私有化构造函数，防止通过 new 关键字创建实例</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;防止通过 new 关键字创建实例&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> LazySingleton <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>LazySingleton<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        LazySingleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> LazySingleton<span class="token punctuation">.</span>instance
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> lazyInstance1 <span class="token operator">=</span> LazySingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> lazyInstance2 <span class="token operator">=</span> LazySingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lazyInstance1 <span class="token operator">===</span> lazyInstance2<span class="token punctuation">)</span> <span class="token comment">// 输出: true</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 饿汉-单例
 */</span>
<span class="token keyword">namespace</span> EagerSingleton <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">EagerSingleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EagerSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">private</span> <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 私有化构造函数，防止通过 new 关键字创建实例</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;防止通过 new 关键字创建实例&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取实例，静态方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> EagerSingleton <span class="token punctuation">{</span>
      <span class="token keyword">return</span> EagerSingleton<span class="token punctuation">.</span>instance
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> eagerInstance1 <span class="token operator">=</span> EagerSingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> eagerInstance2 <span class="token operator">=</span> EagerSingleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>eagerInstance1 <span class="token operator">===</span> eagerInstance2<span class="token punctuation">)</span> <span class="token comment">// 输出: true</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="js版本" tabindex="-1"><a class="header-anchor" href="#js版本" aria-hidden="true">#</a> Js版本</h3><h3 id="java版本" tabindex="-1"><a class="header-anchor" href="#java版本" aria-hidden="true">#</a> Java版本</h3>`,16),o=[p];function c(l,i){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","singleton-mode.html.vue"]]);export{r as default};
