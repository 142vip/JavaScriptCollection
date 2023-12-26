import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,a as n,b as a,d as c,e as r}from"./app-be253e4c.js";const l={},u=n("h1",{id:"剪绳子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#剪绳子","aria-hidden":"true"},"#"),a(" 剪绳子")],-1),i=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8",target:"_blank",rel:"noopener noreferrer"},d=r(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给你一根长度为 n 的绳子，请把绳子剪成整数长的 m 段（ m 、 n 都是整数， n &gt; 1 并且 m &gt; 1 ， m &lt;= n ），每段绳子的长度记为 k[1],...,k[m] 。请问 k[1]<em>k[2]</em>...*k[m] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18 。</p><p>数据范围：2≤n≤60 进阶：空间复杂度O(1) ，时间复杂度O(n)</p><p>示例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#输入：</span>
<span class="token number">8</span>
<span class="token comment">#返回值：</span>
<span class="token number">18</span>
<span class="token comment">#说明：</span>
<span class="token number">8</span> <span class="token operator">=</span> <span class="token number">2</span> +3 +3 , <span class="token number">2</span>*3*3<span class="token operator">=</span><span class="token number">18</span> 
</code></pre></div><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><ul><li>贪心思想</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * G(n,m)=k * G(n-k)(m-1)
 */</span>
<span class="token keyword">function</span> <span class="token function">cutRope</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> number<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> index <span class="token operator">*</span> <span class="token function">cutRope</span><span class="token punctuation">(</span>number <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> index <span class="token operator">*</span> <span class="token function">cutRope</span><span class="token punctuation">(</span>number <span class="token operator">-</span> index<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> max
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">cutRope</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,10);function m(h,b){const s=t("ExternalLinkIcon");return o(),p("div",null,[u,i,n("ul",null,[n("li",null,[n("a",k,[a("牛客网"),c(s)])])]),d])}const _=e(l,[["render",m],["__file","cut-rope.html.vue"]]);export{_ as default};
