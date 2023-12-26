import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-be253e4c.js";const t={},p=e(`<h1 id="矩形覆盖" tabindex="-1"><a class="header-anchor" href="#矩形覆盖" aria-hidden="true">#</a> 矩形覆盖</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 【中等】矩形覆盖
 * <span class="token keyword">@param</span> <span class="token parameter">number</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">rectCover</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 应该也是个递归  斐波拉契变形</span>
  <span class="token comment">// n=1 ---&gt; 1</span>
  <span class="token comment">// n=2 ---&gt; 2</span>
  <span class="token comment">// n=3 ---&gt; 3 &lt;---- 1+2</span>
  <span class="token comment">// n=4 ---&gt; 5 &lt;---- 2+3</span>

  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// n=1的情况</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// n=2的情况</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> number
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> number<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> a <span class="token operator">+</span> b
    a <span class="token operator">=</span> b
    b <span class="token operator">=</span> result
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 【中等】矩形覆盖
 * <span class="token keyword">@param</span> <span class="token parameter">number</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">rectCover</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 应该也是个递归  斐波拉契变形</span>
  <span class="token comment">// n=1 ---&gt; 1</span>
  <span class="token comment">// n=2 ---&gt; 2</span>
  <span class="token comment">// n=3 ---&gt; 3 &lt;---- 1+2</span>
  <span class="token comment">// n=4 ---&gt; 5 &lt;---- 2+3</span>

  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// n=1的情况</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">// n=2的情况</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> number
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> number<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> a <span class="token operator">+</span> b
    a <span class="token operator">=</span> b
    b <span class="token operator">=</span> result
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,9),o=[p];function c(r,l){return s(),a("div",null,o)}const i=n(t,[["render",c],["__file","rect-cover.html.vue"]]);export{i as default};
