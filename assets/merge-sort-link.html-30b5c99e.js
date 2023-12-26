import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as p}from"./app-be253e4c.js";const t={},e=p(`<h1 id="合并两个排序的链表" tabindex="-1"><a class="header-anchor" href="#合并两个排序的链表" aria-hidden="true">#</a> 合并两个排序的链表</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【简单】合并两个排序的链表
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-02 17:18:36
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-02 17:30:18
 */</span>

<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注意 两个链表都是单调递增</span>
<span class="token keyword">function</span> <span class="token function">Merge</span><span class="token punctuation">(</span><span class="token parameter">pHead1<span class="token punctuation">,</span> pHead2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pre <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> pre
  <span class="token keyword">while</span> <span class="token punctuation">(</span>pHead1 <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> pHead2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead1<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> pHead2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 前者大，用后者</span>
      result<span class="token punctuation">.</span>next <span class="token operator">=</span> pHead2
      pHead2 <span class="token operator">=</span> pHead2<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> pHead2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 后者大，用前者</span>
      result<span class="token punctuation">.</span>next <span class="token operator">=</span> pHead1
      pHead1 <span class="token operator">=</span> pHead1<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 后移指针</span>
    result <span class="token operator">=</span> result<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead1 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 链表1没有走完</span>
    result<span class="token punctuation">.</span>next <span class="token operator">=</span> pHead1
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead2 <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 链表2没有走完</span>
    result<span class="token punctuation">.</span>next <span class="token operator">=</span> pHead2
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回 注意去掉头结点</span>
  <span class="token keyword">return</span> pre<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

<span class="token comment">// 思考递归的做法 没有上面迭代好理解</span>
<span class="token keyword">function</span> <span class="token function">Merge01</span><span class="token punctuation">(</span><span class="token parameter">pHead1<span class="token punctuation">,</span> pHead2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pHead2
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pHead1
  <span class="token punctuation">}</span>

  <span class="token comment">// 前者大于后者，</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead1<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> pHead2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记住，pHead2向后，</span>
    pHead2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">Merge01</span><span class="token punctuation">(</span>pHead1<span class="token punctuation">,</span> pHead2<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    <span class="token keyword">return</span> pHead2
  <span class="token punctuation">}</span>

  <span class="token comment">// 前者小于后者</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> pHead2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pHead1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">Merge01</span><span class="token punctuation">(</span>pHead1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> pHead2<span class="token punctuation">)</span>
    <span class="token keyword">return</span> pHead1
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[e];function c(l,u){return a(),s("div",null,o)}const i=n(t,[["render",c],["__file","merge-sort-link.html.vue"]]);export{i as default};
