import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h1><p>在软件工程中，需要创建一致的定义良好的API，同时也需要考虑可重用性。使用泛型可以创建可重用的组件爱你，组件能够支持当前的数据类型，同时也能够支持未来的数据类型，十分灵活</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 不使用泛型的函数</span>
<span class="token keyword">function</span> <span class="token function">test01</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>

<span class="token comment">// 直接使用any</span>
<span class="token keyword">function</span> <span class="token function">test02</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>

<span class="token comment">// 使用泛型定义时</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre></div><p>使用泛型后，调用能够更加灵活,例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 指定number类型</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token comment">// 指定string类型</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;测试&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>注意：泛型这里的T没有特殊要求，作为一个标记，代码中常使用T、K、V、U等字符标识</p><h2 id="函数泛型" tabindex="-1"><a class="header-anchor" href="#函数泛型" aria-hidden="true">#</a> 函数泛型</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre></div><h2 id="接口泛型" tabindex="-1"><a class="header-anchor" href="#接口泛型" aria-hidden="true">#</a> 接口泛型</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">DataTest<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="泛型类" tabindex="-1"><a class="header-anchor" href="#泛型类" aria-hidden="true">#</a> 泛型类</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenerateValue<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  defaultValue<span class="token operator">:</span> <span class="token constant">T</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>


<span class="token comment">// 指定number类型</span>
<span class="token keyword">const</span> numberValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenerateValue<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
numberValue<span class="token punctuation">.</span>defaultValue <span class="token operator">=</span> <span class="token number">0</span>
numberValue<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// 指定string类型</span>
<span class="token keyword">const</span> stringrValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenerateValue<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stringrValue<span class="token punctuation">.</span>defaultValue <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
stringrValue<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre></div><h2 id="泛型约束" tabindex="-1"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h2><p>实现对泛型T的类型约束要求</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 这里调用的时候，给的泛型T一定有length属性</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>

<span class="token comment">// 可以通过泛型约束解决问题</span>
<span class="token keyword">interface</span> <span class="token class-name">LenghtWise</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">test</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> LengthWise<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  <span class="token keyword">return</span> a
<span class="token punctuation">}</span>
</code></pre></div>`,15),o=[e];function c(l,r){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","泛型.html.vue"]]);export{i as default};
