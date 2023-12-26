import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as p}from"./app-be253e4c.js";const t={},o=p(`<h1 id="连续子数组的最大和" tabindex="-1"><a class="header-anchor" href="#连续子数组的最大和" aria-hidden="true">#</a> 连续子数组的最大和</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 连续子数组的最大和 时间复杂度O(n)
 * 难度：简单
 * <span class="token keyword">@param</span> <span class="token parameter">array</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 * <span class="token keyword">@constructor</span>
 */</span>

<span class="token keyword">function</span> <span class="token function">FindGreatestSumOfSubArray01</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 标记指针</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// 子串的累计结果</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// 子串的累加和最大值，当标记位从</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

  <span class="token comment">// 循环</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    max <span class="token operator">=</span> sum <span class="token operator">&gt;</span> max <span class="token operator">?</span> sum <span class="token operator">:</span> max

    <span class="token comment">// 注意，重新计数</span>
    sum <span class="token operator">=</span> sum <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> sum <span class="token operator">:</span> <span class="token number">0</span>
    index<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">FindGreatestSumOfSubArray</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 首位指针</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// 从第一个元素开始，假设最大</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 替换</span>

    <span class="token comment">// 和下一个元素求和</span>
    sum <span class="token operator">+=</span> array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// 获取最大值</span>
    max <span class="token operator">=</span> sum <span class="token operator">&gt;</span> max <span class="token operator">?</span> sum <span class="token operator">:</span> max

    <span class="token comment">// 小于sum值，则说明累加和变小了，下一个模块重新计数</span>
    sum <span class="token operator">=</span> sum <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> sum

    <span class="token comment">// 标记指针后移</span>
    i<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">FindGreatestSumOfSubArray01</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">FindGreatestSumOfSubArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),e=[o];function c(r,l){return a(),s("div",null,e)}const i=n(t,[["render",c],["__file","find-greatest-sum.html.vue"]]);export{i as default};
