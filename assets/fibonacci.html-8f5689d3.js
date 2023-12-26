import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as n,b as a,d as c,e as l}from"./app-be253e4c.js";const r={},i=n("h1",{id:"斐波那契数列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#斐波那契数列","aria-hidden":"true"},"#"),a(" 斐波那契数列")],-1),u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>大家都知道斐波那契数列，现在要求输入一个正整数 n ，请你输出斐波那契数列的第 n 项。 斐波那契数列是一个满足:</p><ul><li>x = 1,2时 fib(x) = 1</li><li>x &gt; 2 时 fib(x) = fib(x−1) + fib(x−2)</li></ul><p>的数列 数据范围： 1≤n≤40 要求：空间复杂度O(1)，时间复杂度O(n) ，本题也有时间复杂度O(logn) 的解法</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><p>方案一：递归</p><p>方案二：动态规划、循环迭代</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 斐波那契数列，递归调用
 * 难度：入门
 */</span>
<span class="token keyword">function</span> <span class="token function">fibonacciOne</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">?</span> n <span class="token operator">:</span> <span class="token function">fibonacciOne</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacciOne</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 斐波那契数列，迭代
 * 难度：入门
 */</span>
<span class="token keyword">function</span> <span class="token function">fibonacciTwo</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数列初始化</span>
  <span class="token keyword">let</span> firstValue <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> secondValue <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> firstValue <span class="token operator">+</span> secondValue
    <span class="token comment">// 前面两列重新赋值</span>
    firstValue <span class="token operator">=</span> secondValue
    secondValue <span class="token operator">=</span> result
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fibonacciOne</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fibonacciTwo</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>熟记斐波那契数列特性</li></ul>`,11);function f(h,m){const s=t("ExternalLinkIcon");return o(),p("div",null,[i,u,n("ul",null,[n("li",null,[n("a",k,[a("牛客网"),c(s)])])]),d])}const x=e(r,[["render",f],["__file","fibonacci.html.vue"]]);export{x as default};
