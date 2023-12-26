import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-be253e4c.js";const t={},p=e(`<h1 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【中等】反转链表
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-02 16:13:46
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-02 16:36:52
 */</span>

<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token comment">// 头插法</span>
<span class="token keyword">function</span> <span class="token function">ReverseList</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义反转后链表</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">//     let result=new ListNode(-1)</span>
  <span class="token comment">// 使用头插法</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>pHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentNode <span class="token operator">=</span> pHead
    pHead <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next
    <span class="token comment">// 当前结点的后继结点为修改前的反转后的链表</span>
    currentNode<span class="token punctuation">.</span>next <span class="token operator">=</span> result
    <span class="token comment">// 翻转的链表的头结点指向头插法插入的结点</span>
    result <span class="token operator">=</span> currentNode
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token comment">// 递归</span>
<span class="token keyword">function</span> <span class="token function">ReverseList01</span><span class="token punctuation">(</span><span class="token parameter">pHead</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> pHead<span class="token punctuation">.</span>next <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pHead
  <span class="token punctuation">}</span>

  <span class="token comment">// head为当前链表的头结点</span>
  <span class="token comment">// 定义当前链表头结点的后继结点 【前提是前面判断其后继结点存在】</span>
  <span class="token keyword">const</span> nextNode <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next

  <span class="token comment">// 此时将链表分为头结点+ 后继结点为头结点的子链表</span>
  <span class="token comment">// 对子链表进行反转，得到新的链表【这里是递归，先考虑一层，考虑其他容易乱】</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">ReverseList01</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">)</span>
  <span class="token comment">// 在反转链表的result中，原来是head后继结点当头结点的nextNode，现在是result链表的尾结点</span>
  <span class="token comment">// 对原来的pHead的后继结点置null 此时的head应该为result的尾结点，避免递归陷入死循环</span>
  pHead<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token comment">// 只需要将result的尾结点与head链接起来，就是反转链表了</span>
  nextNode<span class="token punctuation">.</span>next <span class="token operator">=</span> pHead

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[p];function c(l,r){return s(),a("div",null,o)}const i=n(t,[["render",c],["__file","reverse-list.html.vue"]]);export{i as default};
