import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const e={},p=t(`<h1 id="字符流中的第一个不重复的字符" tabindex="-1"><a class="header-anchor" href="#字符流中的第一个不重复的字符" aria-hidden="true">#</a> 字符流中的第一个不重复的字符</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【中等】字符流中的第一个不重复的字符
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-29 21:40:02
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-29 21:47:24
 */</span>

<span class="token comment">// Init module if you need</span>
<span class="token keyword">let</span> result
<span class="token keyword">function</span> <span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Insert one char from stringstream</span>
<span class="token keyword">function</span> <span class="token function">Insert</span><span class="token punctuation">(</span><span class="token parameter">ch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">+=</span> ch
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
<span class="token comment">// return the first appearence once char in current stringstream</span>
<span class="token keyword">function</span> <span class="token function">FirstAppearingOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> result<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
    <span class="token keyword">const</span> str <span class="token operator">=</span> result<span class="token punctuation">[</span>index<span class="token punctuation">]</span>

    <span class="token comment">// 注意这里遍历，str字符要么只有一个，不存在找不到为-1的情况，因为str从字符中截取的</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">===</span> result<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> str
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 没有返回</span>
  <span class="token keyword">return</span> <span class="token string">&#39;#&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[p];function c(r,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","first-appear-str.html.vue"]]);export{k as default};
