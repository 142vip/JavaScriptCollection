import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as o,a as n,b as s,d as c,e as l}from"./app-be253e4c.js";const r={},u=n("h1",{id:"不用加减乘除做加法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#不用加减乘除做加法","aria-hidden":"true"},"#"),s(" 不用加减乘除做加法")],-1),k=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),m={href:"https://www.nowcoder.com/practice/59ac416b4b944300b617d4f7f111b215",target:"_blank",rel:"noopener noreferrer"},i=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。</p><p>数据范围：两个数都满足−10≤n≤1000</p><p>进阶：空间复杂度O(1)，时间复杂度O(1)</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><p>方案一： 利用自增</p><p>方案二： 利用位运算</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token number">1</span> + <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span>      <span class="token number">1</span> ^ <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">##错误</span>
<span class="token number">1</span> + <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">1</span>     <span class="token number">1</span> ^ <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">##正确</span>
<span class="token number">0</span> + <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>     <span class="token number">0</span> ^ <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">##正确</span>
<span class="token number">0</span> + <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">0</span>      <span class="token number">0</span> ^ <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">##正确</span>


<span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment">##进位   </span>
<span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">##不进位</span>
<span class="token number">0</span> <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">##不进位        </span>
<span class="token number">0</span> <span class="token operator">&amp;</span> <span class="token number">0</span> <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment">##不进位 </span>
</code></pre></div><ul><li>当前位的和值等于 <code>A(i)^B(i)</code></li><li>进位等于 <code>A(i)&amp;B(i)</code>,进位需要加在计算位的前一位，所以左移1位，即<code>A(i)&amp;B(i)&lt;&lt;1</code></li></ul><p>所以找出规律 A+B=A^B+(A&amp;B)&lt;&lt;1</p><p>即：<strong>函数的第一个参数接受不进位的操作结果，第二个参数接受进位操作的结果</strong></p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 【简单】不用加减乘除做加法
 * - 利用自增
 * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">addOne</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 整数递增</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num2 <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>num2 <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      num2<span class="token operator">--</span>
      num1<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 负数递减</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num2 <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>num2 <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      num2<span class="token operator">++</span>
      num1<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> num1
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 【简单】不用加减乘除做加法
 * - 利用位运算【递归】
 * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">addTwo</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num2 <span class="token operator">?</span> <span class="token function">addTwo</span><span class="token punctuation">(</span>num1 <span class="token operator">^</span> num2<span class="token punctuation">,</span> <span class="token punctuation">(</span>num1 <span class="token operator">&amp;</span> num2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> num1
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 【简单】不用加减乘除做加法
 * - 利用位运算【循环】
 * <span class="token keyword">@param</span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token parameter">num2</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">addThree</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token comment">// 不带进位的加法</span>
    result <span class="token operator">=</span> num1 <span class="token operator">^</span> num2
    <span class="token comment">// 进位</span>
    carry <span class="token operator">=</span> <span class="token punctuation">(</span>num1 <span class="token operator">&amp;</span> num2<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span>
    num1 <span class="token operator">=</span> result
    num2 <span class="token operator">=</span> carry
  <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>carry <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 进位不为0则继续执行加法处理进位</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addOne</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addTwo</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addThree</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>注意ES6中位运算，左移<code>&lt;&lt;</code> ,右移<code>&gt;&gt;</code></li><li>循环的写法</li></ul>`,15);function d(b,h){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,k,n("ul",null,[n("li",null,[n("a",m,[s("牛客网"),c(a)])])]),i])}const y=p(r,[["render",d],["__file","add.html.vue"]]);export{y as default};
