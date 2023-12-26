import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as o,a as n,b as a,d as c,e as r}from"./app-be253e4c.js";const l={},u=n("h1",{id:"旋转数组的最小数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#旋转数组的最小数字","aria-hidden":"true"},"#"),a(" 旋转数组的最小数字")],-1),i=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba",target:"_blank",rel:"noopener noreferrer"},d=r(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>有一个长度为 n 的非降序数组，比如[1,2,3,4,5]，将它进行旋转，即把一个数组最开始的若干个元素搬到数组的末尾，变成一个旋转数组，比如变成了[3,4,5,1,2]，或者[4,5,1,2,3]这样的。请问，给定这样一个旋转数组，求数组中的最小值。</p><p>数据范围：1≤n≤10000，数组中任意元素的值:0≤val≤10000</p><p>要求：空间复杂度：O(1) ，时间复杂度：O(logn)</p><p>示例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#输入：</span>
<span class="token punctuation">[</span><span class="token number">3,4</span>,5,1,2<span class="token punctuation">]</span>
<span class="token comment">#返回值：</span>
<span class="token number">1</span>
</code></pre></div><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 旋转数组的最小数字
 * 找出前者大于后者的数，立即返回
 * 难度：简单
 * <span class="token keyword">@param</span> <span class="token parameter">rotateArray</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">minNumberInRotateArray</span><span class="token punctuation">(</span><span class="token parameter">rotateArray</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rotateArray<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> rotateArray<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rotateArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> rotateArray<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> rotateArray<span class="token punctuation">[</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> rotateArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,10);function h(m,b){const s=e("ExternalLinkIcon");return p(),o("div",null,[u,i,n("ul",null,[n("li",null,[n("a",k,[a("牛客网"),c(s)])])]),d])}const x=t(l,[["render",h],["__file","min-rotate-number.html.vue"]]);export{x as default};
