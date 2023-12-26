import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},o=t(`<h1 id="重建二叉树" tabindex="-1"><a class="header-anchor" href="#重建二叉树" aria-hidden="true">#</a> 重建二叉树</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【中等】重建二叉树
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 12:57:40
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 12:58:33
 */</span>

<span class="token doc-comment comment">/**
 * 二叉树结点定义
 * <span class="token keyword">@param</span> <span class="token parameter">x</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 重建二叉树
 * <span class="token keyword">@param</span> <span class="token parameter">pre</span>
 * <span class="token keyword">@param</span> <span class="token parameter">vin</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> vin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pre<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 获取根节点 ,新建二叉树结点</span>
  <span class="token keyword">const</span> rootNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> rootIndex <span class="token operator">=</span> vin<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rootIndex<span class="token punctuation">,</span> pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">,</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rootIndex<span class="token punctuation">,</span> pre<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">,</span> pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 注意，找中序结点的时候，需要去除根结点，先序的时候，</span>
  rootNode<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> rootIndex<span class="token punctuation">)</span><span class="token punctuation">)</span>
  rootNode<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">reConstructBinaryTree</span><span class="token punctuation">(</span>pre<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> vin<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>rootIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> rootNode
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),e=[o];function c(u,l){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","reconstruct-binary-tree.html.vue"]]);export{i as default};
