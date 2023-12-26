import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as l,a as n,b as a,d as e,w as u,e as o}from"./app-be253e4c.js";const k={},i=n("h1",{id:"跳台阶",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#跳台阶","aria-hidden":"true"},"#"),a(" 跳台阶")],-1),d=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),m={href:"https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4",target:"_blank",rel:"noopener noreferrer"},h=o('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。</p><p>数据范围：1≤n≤40 要求：时间复杂度：O(n) ，空间复杂度：O(1)</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><p>总共有n个台阶，假如</p><ul><li>第一次跳1阶，即：a1=1,则还剩下n-1可以再第二次选择，那么共n-1个台阶，会有多少种跳法？？？</li><li>第一次跳2阶，即：a1=2,则还剩下n-2可以再第二次选择，那么共n-2个台阶，会有多少种跳法？？？</li></ul><p>问题很容易就演变成G(n)=G(n-1)+ G(n-2)</p>',7),b=o(`<h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * 【简单】跳台阶  递归，要么跳一阶，要么跳两阶
 * 思路： 对于第number台阶，只能从第number-1或者number-2上跳上来
 * 记作： G(number)=G(number-1)+G(number-2)
 * 即： 从第number-1跳上来的次数+从第number-2上跳上来的次数
 *
 */</span>

<span class="token doc-comment comment">/**
 * 递归实现
  * <span class="token keyword">@param</span> <span class="token parameter">number</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">jumpFloorOne</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 递归，要么跳一阶，要么跳两阶</span>
  <span class="token keyword">return</span> number <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">?</span> number <span class="token operator">:</span> <span class="token function">jumpFloorOne</span><span class="token punctuation">(</span>number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">jumpFloorOne</span><span class="token punctuation">(</span>number <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 非递归调用
 * <span class="token keyword">@param</span> <span class="token parameter">number</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">jumpFloorTwo</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> number<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> a <span class="token operator">+</span> b
    a <span class="token operator">=</span> b
    b <span class="token operator">=</span> result
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">jumpFloorOne</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">jumpFloorTwo</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>数学分析、逻辑思维很重要</li><li>熟练斐波那契数列</li></ul>`,4);function f(_,w){const t=s("ExternalLinkIcon"),p=s("RouterLink");return r(),l("div",null,[i,d,n("ul",null,[n("li",null,[n("a",m,[a("牛客网"),e(t)])])]),h,n("p",null,[a("这不就是斐波那契数列么？？？？ 可以参考："),e(p,{to:"/manuscripts/solo-algorithm/interview-101/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/fibonacci.html"},{default:u(()=>[a("【入门】斐波那契数列")]),_:1})]),b])}const j=c(k,[["render",f],["__file","jumpFloor.html.vue"]]);export{j as default};
