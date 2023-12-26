import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},o=t(`<h1 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h1><p>const是对let的一个增强，它能阻止对一个变量再次赋值</p><h2 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 块级作用域</span>
<span class="token keyword">function</span> <span class="token function">testResult</span><span class="token punctuation">(</span>input<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里能获取到变量a的值</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 编译器会提醒变量不存在</span>
  <span class="token keyword">return</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="数组解构" tabindex="-1"><a class="header-anchor" href="#数组解构" aria-hidden="true">#</a> 数组解构</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>resultA<span class="token punctuation">,</span> resultB<span class="token punctuation">]</span> <span class="token operator">=</span> result
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultA<span class="token punctuation">,</span> resultB<span class="token punctuation">)</span>

<span class="token comment">// 数据交换</span>
<span class="token comment">// [resultA, resultB] = [resultB, resultA]</span>

<span class="token comment">// 对剩余变量的获取</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>resA<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> res
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resA<span class="token punctuation">,</span> rest<span class="token punctuation">)</span>
</code></pre></div><h2 id="对象解构" tabindex="-1"><a class="header-anchor" href="#对象解构" aria-hidden="true">#</a> 对象解构</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> boy <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;chufan&#39;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token string">&#39;man&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">14</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> boy
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>gender<span class="token punctuation">,</span> <span class="token operator">...</span>restBoy<span class="token punctuation">}</span> <span class="token operator">=</span> boy
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gender<span class="token punctuation">,</span> restBoy<span class="token punctuation">)</span>

<span class="token comment">// 解构变量重命名</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> newName<span class="token punctuation">}</span> <span class="token operator">=</span> boy
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nerName<span class="token punctuation">)</span>

<span class="token comment">// 默认值</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>defaultA<span class="token punctuation">,</span> defaultB <span class="token operator">=</span> <span class="token number">1001</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>defaultA<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","变量声明.html.vue"]]);export{i as default};
