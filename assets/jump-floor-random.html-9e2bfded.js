import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as n,b as a,d as c,e as l}from"./app-be253e4c.js";const r={},u=n("h1",{id:"跳台阶扩展问题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#跳台阶扩展问题","aria-hidden":"true"},"#"),a(" 跳台阶扩展问题")],-1),i=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶(n为正整数)总共有多少种跳法。</p><p>数据范围：1≤n≤20 进阶：空间复杂度O(1) ， 时间复杂度O(1)</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><ul><li><p>我tm跳1 还剩下n-1阶 记作 G(n-1) 可选</p></li><li><p>我tm跳2 还剩下n-2阶 记作 G(n-2) 可选</p></li><li><p>....</p></li><li><p>我tm跳n-1 还剩下1阶 记作 G(1) 可选</p></li><li><p>归纳出：</p><ul><li>G(n-1)=G(1)+G(2)+.....+G(n-2);</li><li>G(n)=G(1)+G(2)+.....+G(n-2)+G(n-1)</li></ul></li><li><p>两个相减 G(n)=2<em>G(n-1) 去递归有： G(1)=1 , G(2)=2 G(3)=2</em>G(2)=4</p></li></ul><p>总结：按照推论，结果为<code>2的n-1幂</code></p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 利用Math函数计算幂
 * <span class="token keyword">@param</span> <span class="token parameter">number</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">jumpFloorIIOne</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> number <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 利用左移运算
 * <span class="token keyword">@param</span> <span class="token parameter">number</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">jumpFloorIITwo</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//     return 1&lt;&lt;(number-1)</span>
  <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">--</span>number
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">jumpFloorIIOne</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">jumpFloorIITwo</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><p>数学分析推论很重要，本身就是一种方法；对于幂的运算，熟练使用Math对象的api方法，也非常建议使用左移运算，例如：</p><ul><li>二进制：1---&gt;左移一位---&gt;10---&gt;左移一位---&gt;100...</li><li>十进制：1---&gt;左移一位---&gt;4---&gt;左移一位---&gt;8...</li></ul>`,11);function m(h,f){const s=e("ExternalLinkIcon");return p(),o("div",null,[u,i,n("ul",null,[n("li",null,[n("a",k,[a("牛客网"),c(s)])])]),d])}const G=t(r,[["render",m],["__file","jump-floor-random.html.vue"]]);export{G as default};
