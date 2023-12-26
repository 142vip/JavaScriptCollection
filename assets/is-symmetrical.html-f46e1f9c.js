import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const e={},p=t(`<h1 id="对称的二叉树" tabindex="-1"><a class="header-anchor" href="#对称的二叉树" aria-hidden="true">#</a> 对称的二叉树</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【困难】对称的二叉树
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 17:52:52
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 17:53:26
 */</span>

<span class="token comment">/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */</span>
<span class="token keyword">function</span> <span class="token function">isSymmetrical</span><span class="token punctuation">(</span><span class="token parameter">pRoot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 子树为空，判断子树为对称</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 不为空则判断左右子树是否对称，依据：左右子树位置互换，依旧对称 【调用一次】</span>
  <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断左右子树是是否对称</span>
<span class="token keyword">function</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span><span class="token parameter">leftTree<span class="token punctuation">,</span> rightTree</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>leftTree <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> rightTree <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>leftTree <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> rightTree <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 左右子树不为空，则分别比对左右子树</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftTree<span class="token punctuation">.</span>val <span class="token operator">===</span> rightTree<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 根结点相同，比对左右子树</span>
      <span class="token keyword">return</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>leftTree<span class="token punctuation">.</span>left<span class="token punctuation">,</span> rightTree<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSameTree</span><span class="token punctuation">(</span>rightTree<span class="token punctuation">.</span>left<span class="token punctuation">,</span> leftTree<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[p];function c(l,r){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","is-symmetrical.html.vue"]]);export{k as default};
