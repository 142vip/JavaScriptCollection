import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const e={},o=t(`<h1 id="二叉树的镜像" tabindex="-1"><a class="header-anchor" href="#二叉树的镜像" aria-hidden="true">#</a> 二叉树的镜像</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【简单】二叉树的镜像
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 16:42:42
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 16:43:17
 */</span>

<span class="token comment">/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */</span>
<span class="token doc-comment comment">/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * <span class="token keyword">@param</span> <span class="token parameter">pRoot</span> TreeNode类
 * <span class="token keyword">@return</span> TreeNode类
 */</span>
<span class="token keyword">function</span> <span class="token function">Mirror</span><span class="token punctuation">(</span><span class="token parameter">pRoot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 空树</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pRoot
  <span class="token punctuation">}</span>

  <span class="token comment">// 处理根节点，交换左右子树【建议封装函数】</span>
  <span class="token punctuation">[</span>pRoot<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot<span class="token punctuation">.</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>pRoot<span class="token punctuation">.</span>right<span class="token punctuation">,</span> pRoot<span class="token punctuation">.</span>left<span class="token punctuation">]</span>

  <span class="token comment">// 左子树镜像</span>
  <span class="token function">Mirror</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
  <span class="token comment">// 右子树镜像</span>
  <span class="token function">Mirror</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

  <span class="token keyword">return</span> pRoot
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),p=[o];function c(r,i){return a(),s("div",null,p)}const d=n(e,[["render",c],["__file","mirror-tree.html.vue"]]);export{d as default};
