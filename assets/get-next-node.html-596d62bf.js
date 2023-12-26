import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const e={},o=t(`<h1 id="二叉树的下一个结点" tabindex="-1"><a class="header-anchor" href="#二叉树的下一个结点" aria-hidden="true">#</a> 二叉树的下一个结点</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【中等】二叉树的下一个结点
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 15:38:02
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 15:40:20
 */</span>

<span class="token comment">/* function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
} */</span>
<span class="token keyword">function</span> <span class="token function">GetNext</span><span class="token punctuation">(</span><span class="token parameter">pNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 中序遍历 ---&gt; 左-根(pNode)-右</span>
  <span class="token comment">// 所以这里pNode的下一个结点，要么是pNode右子树的第一个最左结点（左边的叶子结点）</span>
  <span class="token comment">// 但是如果pNode的右子树为空，则pNode的下个结点，则为第一个左子树指向pNode的祖先结点</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>pNode<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 存在右子树，寻找右子树的最左结点</span>
    <span class="token keyword">let</span> rightNode <span class="token operator">=</span> pNode<span class="token punctuation">.</span>right
    <span class="token keyword">while</span> <span class="token punctuation">(</span>rightNode<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 一直向左找</span>
      rightNode <span class="token operator">=</span> rightNode<span class="token punctuation">.</span>left
    <span class="token punctuation">}</span>
    <span class="token comment">// 跳出循环的时候，right_node.left==null；即:right_node为叶子结点</span>
    <span class="token keyword">return</span> rightNode
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 右子树为空,则向上找</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>pNode<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parentNode <span class="token operator">=</span> pNode<span class="token punctuation">.</span>next
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parentNode<span class="token punctuation">.</span>left <span class="token operator">===</span> pNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> parentNode
      <span class="token punctuation">}</span>
      <span class="token comment">// 父结点的左子树不是指向给定的结点的话，则继续往上寻找父结点</span>
      pNode <span class="token operator">=</span> pNode<span class="token punctuation">.</span>next
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 都找不到，则返回null</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),p=[o];function c(l,r){return a(),s("div",null,p)}const d=n(e,[["render",c],["__file","get-next-node.html.vue"]]);export{d as default};
