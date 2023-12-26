import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as p}from"./app-be253e4c.js";const t={},e=p(`<h1 id="删除链表中重复的结点" tabindex="-1"><a class="header-anchor" href="#删除链表中重复的结点" aria-hidden="true">#</a> 删除链表中重复的结点</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【较难】删除链表中重复的结点
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-02 09:02:18
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-02 09:15:24
 */</span>

<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注意是排序的结点</span>
<span class="token comment">// 这种先遍历，再借用临时变量 也可以考虑用递归</span>
<span class="token keyword">function</span> <span class="token function">deleteDuplication</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义map</span>
  <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>pHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>pHead<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 存在</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>pHead<span class="token punctuation">.</span>val<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>pHead<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 不存在</span>
      map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>pHead<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 下一个元素</span>
    pHead <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// 遍历map 找出值为1的</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> pre <span class="token operator">=</span> result
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> m <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> count<span class="token punctuation">]</span> <span class="token operator">=</span> m
    <span class="token comment">// 尾插法</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//             console.log(key)</span>
      result<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>

      <span class="token comment">// 指针后移</span>
      result <span class="token operator">=</span> result<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// pre为结果链表的头结点 ，去除-1；</span>
  <span class="token keyword">return</span> pre<span class="token punctuation">.</span>next
<span class="token punctuation">}</span>

<span class="token comment">// 基于递归</span>
<span class="token keyword">function</span> <span class="token function">deleteDuplication01</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span>

  <span class="token comment">// 前后结点都不为空，比较val值</span>
  <span class="token keyword">let</span> nextNode <span class="token operator">=</span> head<span class="token punctuation">.</span>next
  <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">===</span> nextNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>nextNode <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> head<span class="token punctuation">.</span>val <span class="token operator">===</span> nextNode<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 值相同的情况 移动到下一个结点</span>
      nextNode <span class="token operator">=</span> nextNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
    <span class="token comment">// 过滤掉值相同的，递归</span>
    <span class="token keyword">return</span> <span class="token function">deleteDuplication01</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 值不同,将头结点的下一个位置指向</span>
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">deleteDuplication01</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span>
    <span class="token comment">// 返回头结点</span>
    <span class="token keyword">return</span> head
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[e];function c(l,u){return a(),s("div",null,o)}const r=n(t,[["render",c],["__file","delete-duplicate-node.html.vue"]]);export{r as default};
