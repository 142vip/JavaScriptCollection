import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as e,a as n,b as a,d as c,e as u}from"./app-be253e4c.js";const l="/JavaScriptCollection/assets/findPathSumThree-3943eeb6.png",r={},i=n("h1",{id:"二叉树中和为某一值的路径-三",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二叉树中和为某一值的路径-三","aria-hidden":"true"},"#"),a(" 二叉树中和为某一值的路径(三)")],-1),k=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),d={href:"https://www.nowcoder.com/share/jump/8484115461699865527566",target:"_blank",rel:"noopener noreferrer"},h=u('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【中等】二叉树中和为某一值的路径(三)
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-12 22:01:00
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-12 22:01:45
 */</span>

<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">FindPathSumThree</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> expectNumber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> target<span class="token punctuation">,</span> tempRes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理空树</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 根结点，进数组</span>
    tempRes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>

    <span class="token comment">// 当前结点为叶子结点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> target <span class="token operator">===</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tempRes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 不是叶子结点，向左向右子树递归</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> target <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>tempRes<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> target <span class="token operator">-</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>tempRes<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> expectNumber<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,6);function f(m,_){const s=p("ExternalLinkIcon");return o(),e("div",null,[i,k,n("ul",null,[n("li",null,[n("a",d,[a("牛客网"),c(s)])])]),h])}const x=t(r,[["render",f],["__file","find-path-sum-three.html.vue"]]);export{x as default};
