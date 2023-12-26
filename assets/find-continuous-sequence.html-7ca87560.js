import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="和为s的连续正数序列" tabindex="-1"><a class="header-anchor" href="#和为s的连续正数序列" aria-hidden="true">#</a> 和为S的连续正数序列</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 注意是连续递增数列，间距为1 那么可以将序列开始、结束元素看做 a 、 b</span>
<span class="token comment">// 按照数列求和公式sum=（首项+尾项）* 项数 /2 即可</span>
<span class="token keyword">function</span> <span class="token function">FindContinuousSequence</span><span class="token punctuation">(</span><span class="token parameter">sum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 按照sum值，先预估大概最多满足条件的序列</span>
  <span class="token comment">// sum=(b+a)(b-a+1)/2</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从left....right的序列求和</span>
    <span class="token keyword">const</span> tempSum <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> sum <span class="token operator">===</span> tempSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 满足条件</span>
      <span class="token keyword">let</span> count <span class="token operator">=</span> left
      <span class="token keyword">const</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
        count<span class="token operator">++</span>
      <span class="token punctuation">}</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempArr<span class="token punctuation">)</span>
      <span class="token comment">// 向前寻找</span>
      left<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> sum <span class="token operator">&gt;</span> tempSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 右边向右</span>
      right<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 左边向右</span>
      left<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[e];function c(l,r){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","find-continuous-sequence.html.vue"]]);export{i as default};
