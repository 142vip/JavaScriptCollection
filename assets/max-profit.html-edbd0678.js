import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="买卖股票的最好时机" tabindex="-1"><a class="header-anchor" href="#买卖股票的最好时机" aria-hidden="true">#</a> 买卖股票的最好时机</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 买卖股票的最好时机
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-29 23:27:18
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-03 15:00:53
 */</span>
<span class="token doc-comment comment">/**
 * 暴力
 * <span class="token keyword">@param</span> <span class="token parameter">prices</span> int整型一维数组
 */</span>
<span class="token keyword">function</span> <span class="token function">maxProfit</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 最低点买入，最高点卖出，收益最大 实际求的是一个子序列，最大和最小的差值 最小在前，最大在后</span>

  <span class="token comment">// 最大收益为0 其他都不算收益</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> start <span class="token operator">=</span> prices<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token keyword">const</span> end <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>prices<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> end <span class="token operator">-</span> start
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 处理买点，卖点
 * <span class="token keyword">@param</span> <span class="token parameter">prices</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">maxProfitCount</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 最大收益为0 其他都不算收益</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// 定义最小的值为买入</span>
  <span class="token keyword">let</span> minPrice <span class="token operator">=</span> <span class="token number">Infinity</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> start <span class="token operator">=</span> prices<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token comment">// 处理买点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> minPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      minPrice <span class="token operator">=</span> start
    <span class="token punctuation">}</span>
    <span class="token comment">// 处理卖点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">-</span> minPrice <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 获取最大收益</span>
      max <span class="token operator">=</span> start <span class="token operator">-</span> minPrice
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> max
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[e];function c(r,l){return a(),s("div",null,o)}const u=n(p,[["render",c],["__file","max-profit.html.vue"]]);export{u as default};
