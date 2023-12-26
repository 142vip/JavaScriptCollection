import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-be253e4c.js";const t={},p=e(`<h1 id="两个链表的第一个公共结点" tabindex="-1"><a class="header-anchor" href="#两个链表的第一个公共结点" aria-hidden="true">#</a> 两个链表的第一个公共结点</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【简单】两个链表的第一个公共结点
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-02 21:33:19
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-02 21:44:24
 */</span>

<span class="token comment">/* function ListNode(x){
    this.val = x;
    this.next = null;
} */</span>
<span class="token keyword">function</span> <span class="token function">FindFirstCommonNode</span><span class="token punctuation">(</span><span class="token parameter">pHead1<span class="token punctuation">,</span> pHead2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 双重循环，时间复杂度过大，考虑优化</span>
  <span class="token comment">//     while(pHead1!==null){</span>
  <span class="token comment">//         let pHead2_back=pHead2</span>
  <span class="token comment">//         while(pHead2_back!==null){</span>
  <span class="token comment">//             if(pHead1===pHead2_back){</span>
  <span class="token comment">//                 return pHead1;</span>
  <span class="token comment">//             }else{</span>
  <span class="token comment">//                 pHead2=pHead2_back.next;</span>
  <span class="token comment">//             }</span>
  <span class="token comment">//         }</span>
  <span class="token comment">//         // 对pHead2从头开始</span>
  <span class="token comment">//         pHead2_back=pHead2</span>
  <span class="token comment">//         pHead1=pHead1.next;</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//     return null;</span>

  <span class="token keyword">let</span> p1 <span class="token operator">=</span> pHead1<span class="token punctuation">;</span> <span class="token keyword">let</span> p2 <span class="token operator">=</span> pHead2

  <span class="token comment">// 其实，这里有个死循环的问题</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>p1 <span class="token operator">!==</span> p2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不相等，则向前，如果后继结点为空，则回到头结点，重复</span>
    p1 <span class="token operator">=</span> p1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> pHead1 <span class="token operator">:</span> p1<span class="token punctuation">.</span>next
    p2 <span class="token operator">=</span> p2 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span> pHead2 <span class="token operator">:</span> p2<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token comment">// 返回公共结点</span>
  <span class="token keyword">return</span> p1
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  FindFirstCommonNode
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[p];function c(l,r){return a(),s("div",null,o)}const k=n(t,[["render",c],["__file","find-1st-common-node.html.vue"]]);export{k as default};
