import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},o=t(`<h1 id="丑数" tabindex="-1"><a class="header-anchor" href="#丑数" aria-hidden="true">#</a> 丑数</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 丑数
 * 难度:比较难
 */</span>
<span class="token keyword">function</span> <span class="token function">GetUglyNumberSolution</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 由于丑数只包含因子 2 3 5 且，下一个丑数是通过上一个丑数，去x2 x3 或 x5  取最小得到的，要保证丑数的顺序递增的</span>

  <span class="token comment">// 定义存放丑数的数组，且第一个丑数为1=2^0 * 3^0 * 5^0</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token comment">// 定义丑数对应的因子个数  即 丑数= 2^f2 * 3^f3 * 5^f5</span>
  <span class="token keyword">let</span> f2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">let</span> f3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">let</span> f5 <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 基于丑数的上下关系，可以去动态规划来做</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 第i个丑数是在第i-1个丑数的基础上 去x2 x3 或 x5  取最小得到的，存放在result中</span>
    result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">,</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> f2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      f2<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> f3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      f3<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> result<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">*</span> f5<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      f5<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","get-ugly-num.html.vue"]]);export{i as default};
