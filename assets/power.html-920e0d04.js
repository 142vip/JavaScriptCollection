import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-be253e4c.js";const p={},t=e(`<h1 id="数值的整数次方" tabindex="-1"><a class="header-anchor" href="#数值的整数次方" aria-hidden="true">#</a> 数值的整数次方</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 除法计算
 * <span class="token keyword">@param</span> <span class="token parameter">base</span>
 * <span class="token keyword">@param</span> <span class="token parameter">exponent</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Power</span><span class="token punctuation">(</span><span class="token parameter">base<span class="token punctuation">,</span> exponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 正数</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>exponent <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">*=</span> base
      exponent<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token comment">// 负数 取反 绝对值 abs</span>
  <span class="token comment">// let abs=Math.abs(exponent)</span>
  <span class="token keyword">let</span> abs <span class="token operator">=</span> <span class="token operator">-</span>exponent
  <span class="token keyword">while</span> <span class="token punctuation">(</span>abs <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">*=</span> base
    abs<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 分数处理</span>
  <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> result
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 除法计算
 * <span class="token keyword">@param</span> <span class="token parameter">base</span>
 * <span class="token keyword">@param</span> <span class="token parameter">exponent</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Power</span><span class="token punctuation">(</span><span class="token parameter">base<span class="token punctuation">,</span> exponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 正数</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>exponent <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">*=</span> base
      exponent<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token comment">// 负数 取反 绝对值 abs</span>
  <span class="token comment">// let abs=Math.abs(exponent)</span>
  <span class="token keyword">let</span> abs <span class="token operator">=</span> <span class="token operator">-</span>exponent
  <span class="token keyword">while</span> <span class="token punctuation">(</span>abs <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">*=</span> base
    abs<span class="token operator">--</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 分数处理</span>
  <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> result
<span class="token punctuation">}</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,9),o=[t];function c(r,l){return a(),s("div",null,o)}const i=n(p,[["render",c],["__file","power.html.vue"]]);export{i as default};
