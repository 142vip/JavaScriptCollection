import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const o={},p=t(`<h1 id="树的子结构" tabindex="-1"><a class="header-anchor" href="#树的子结构" aria-hidden="true">#</a> 树的子结构</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【较难】树的子结构
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 16:07:54
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 16:08:40
 */</span>

<span class="token comment">/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */</span>
<span class="token keyword">function</span> <span class="token function">HasSubTree</span><span class="token punctuation">(</span><span class="token parameter">pRoot1<span class="token punctuation">,</span> pRoot2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 空树的情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> pRoot2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 1.假设子结构从根结点开始；</span>
  <span class="token keyword">const</span> isRoot <span class="token operator">=</span> <span class="token function">isSubTreeWithRoot</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span>
  <span class="token comment">// 2 子结构从左、右子树开始；</span>
  <span class="token keyword">const</span> inLeft <span class="token operator">=</span> <span class="token function">HasSubTree</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span>
  <span class="token keyword">const</span> inRight <span class="token operator">=</span> <span class="token function">HasSubTree</span><span class="token punctuation">(</span>pRoot1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> pRoot2<span class="token punctuation">)</span>

  <span class="token comment">// 三种满足一种，就是子结构了</span>
  <span class="token keyword">return</span> isRoot <span class="token operator">||</span> inLeft <span class="token operator">||</span> inRight
<span class="token punctuation">}</span>

<span class="token comment">// 判断root2是否为root1的子集【递归实现】</span>
<span class="token keyword">function</span> <span class="token function">isSubTreeWithRoot</span><span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// root2 自己为叶子结点,此时递归来看,就是子集</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root2 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 递归来看，root1为空了，就是非子集</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root1 <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 判断两者元素是否匹配</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>root1<span class="token punctuation">.</span>val <span class="token operator">!==</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 其中某个元素不配,递归断了</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 当前结点相同，继续递归校验后续左右子树结点，两树同时向左或者向右</span>
  <span class="token keyword">return</span> <span class="token function">isSubTreeWithRoot</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSubTreeWithRoot</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),e=[p];function c(l,u){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","hash-subtree.html.vue"]]);export{k as default};
