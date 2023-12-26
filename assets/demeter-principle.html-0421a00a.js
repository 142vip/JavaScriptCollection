import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-be253e4c.js";const o={},p=e(`<h1 id="迪米特法则" tabindex="-1"><a class="header-anchor" href="#迪米特法则" aria-hidden="true">#</a> 迪米特法则</h1><p>又叫<code>最少知道原则</code>，一个实体应当尽量少的与其它实体发生相互作用,使得功能模块相互独立，要求一个对象应该对其他对象有尽可能少的了解，它应该只与紧密相关的对象进行交互。</p><p>换句话说，一个对象不应该直接与陌生对象通信，而是通过中间对象进行间接交互。这样可以**降低对象之间的耦合性，提高代码的可维护性和可测试性 **。</p><p><code>迪米特法则</code>强调模块之间应该尽量减少彼此的依赖，一个对象应该对其他对象有尽可能少了解。<code>迪米特法则</code> 有助于降低系统的耦合性，提高模块的独立性和可维护性。</p><p>解释：</p><ul><li>从依赖者的角度来说，只依赖应该依赖的对象。</li><li>从被依赖者的角度说，只暴露应该暴露的方法。</li><li>在类的划分上，应该创建弱耦合的类。类与类之间的耦合越弱，就越有利于实现可复用的目标。</li><li>在类的结构设计上，尽量降低类成员的访问权限。</li><li>在类的设计上，优先考虑将一个类设置成不变类。</li><li>在对其他类的引用上，将引用其他对象的次数降到最低。</li><li>不暴露类的属性成员，而应该提供相应的访问器（set 和 get 方法）。</li></ul><h2 id="举例说明" tabindex="-1"><a class="header-anchor" href="#举例说明" aria-hidden="true">#</a> 举例说明</h2><p>这里通过一个例子对<code>迪米特法则</code>进行说明。例如：</p><p>有两个类：<code>Person</code> 和 <code>Team</code>。</p><ul><li><code>Person</code> 类表示一个人，具有一个私有的姓名属性和一个公有的 <code>getName</code> 方法用于获取人的姓名。</li><li><code>Team</code> 类表示一个团队，具有一个私有的成员数组属性（类型为 <code>Person[]</code>），以及公有的 <code>addMember</code> 方法用于添加成员，和 <code>printTeamMembers</code> 方法用于打印团队成员的姓名。</li></ul><p>创建两个 <code>Person</code> 对象：<code>john</code> 和 <code>jane</code>，创建一个 <code>Team</code> 对象 <code>team</code>，将 <code>john</code> 和 <code>jane</code> 添加为团队成员，并调用 <code>printTeamMembers</code> 方法打印团队成员的姓名。</p><p>在 <code>Team</code> 类中的 <code>printTeamMembers</code> 方法中，只通过调用 <code>Person</code> 对象的 <code>getName</code> 方法来获取人的姓名， 而不直接访问 <code>Person</code> 对象的私有属性。这样，<code>Team</code> 类只依赖于 <code>Person</code> 类提供的公共接口，降低了类之间的耦合性，符合迪米特法则。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 迪米特法则Demo
 * 又叫最小知道原则
 */</span>
<span class="token keyword">namespace</span> LodDemo <span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>

    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Team</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> members<span class="token operator">:</span> Person<span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>members <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token function">addMember</span><span class="token punctuation">(</span>member<span class="token operator">:</span> Person<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>members<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">printTeamMembers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> member <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>members<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>member<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> john <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> jane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Jane&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> team <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Team</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  team<span class="token punctuation">.</span><span class="token function">addMember</span><span class="token punctuation">(</span>john<span class="token punctuation">)</span>
  team<span class="token punctuation">.</span><span class="token function">addMember</span><span class="token punctuation">(</span>jane<span class="token punctuation">)</span>

  team<span class="token punctuation">.</span><span class="token function">printTeamMembers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>迪米特法则</code>的核心思想是要求模块之间尽量减少彼此的直接依赖，通过封装和合理设计接口，使得模块之间只依赖于最少的其他模块。 这样可以提高系统的可维护性、可扩展性和灵活性，减少模块之间的耦合性。</p><p><code>迪米特法则</code>的目标是降低对象之间的耦合性，通过尽量减少依赖关系，使得系统的各个模块更加独立、可维护和可扩展。</p><p><code>迪米特法则</code>鼓励开发人员设计出低耦合、高内聚的模块，让每个模块只关注自己的核心功能，尽量减少对其他模块的了解和依赖。这样的设计能够增强系统的灵活性、可维护性和可扩展性。</p>`,16),t=[p];function c(l,u){return s(),a("div",null,t)}const r=n(o,[["render",c],["__file","demeter-principle.html.vue"]]);export{r as default};
