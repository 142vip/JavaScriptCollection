import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as e,c,a as n,b as s,d as t,e as u}from"./app-be253e4c.js";const l={},k=n("h1",{id:"从1到n整数中1出现的次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#从1到n整数中1出现的次数","aria-hidden":"true"},"#"),s(" 从1到n整数中1出现的次数")],-1),r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),i={href:"https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6",target:"_blank",rel:"noopener noreferrer"},d=u(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>输入一个整数 n ，求 1～n 这 n 个整数的十进制表示中 1 出现的次数 例如， 1~13 中包含 1 的数字有 1 、 10 、 11 、 12 、 13 因此共出现 6 次</p><p>注意：11 这种情况算两次</p><p>数据范围：1≤n≤30000 进阶：空间复杂度O(1) ，时间复杂度O(lognn)</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><p>方案一：</p><ul><li>转化为字符串，再遍历计数，属于投机方法</li></ul><p>方案二：</p><ul><li>数学方法，对进位、余数进行处理</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description:第一个只出现一次的字符
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-28 22:23:51
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-28 22:24:20
 */</span>

<span class="token doc-comment comment">/**
 * 利用indexOf和lastIndexOf角标不一致
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">firstNotRepeatingCharOne</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> arr<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> index
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 数组按字母查找
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">firstNotRepeatingCharTwo</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> s <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> remainStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>remainStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> index
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 使用Map结构计数
 * <span class="token keyword">@param</span> <span class="token parameter">str</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">firstNotRepeatingCharThree</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> resMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> resArr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 计数操作</span>
  resArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      resMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> resMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">firstNotRepeatingCharOne</span><span class="token punctuation">(</span><span class="token string">&#39;google&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">firstNotRepeatingCharTwo</span><span class="token punctuation">(</span><span class="token string">&#39;google&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">firstNotRepeatingCharThree</span><span class="token punctuation">(</span><span class="token string">&#39;google&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>需要特别注意Math的一些操作方法</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 取整，丢弃小数部分,保留整数部分</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>　　<span class="token comment">// 2</span>
 

<span class="token comment">// 向上取整,有小数就整数部分加1</span>
Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>　　<span class="token comment">// 3</span>

<span class="token comment">// 向下取整,丢弃小数部分</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>　　<span class="token comment">// 2</span>
 
<span class="token comment">// 四舍五入</span>
Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>　　<span class="token comment">// 3</span>
 
<span class="token comment">// 取余</span>
<span class="token number">6</span><span class="token operator">%</span><span class="token number">4</span>　　<span class="token comment">// 2</span>
</code></pre></div>`,14),m={href:"https://es6.ruanyifeng.com/#docs/number",target:"_blank",rel:"noopener noreferrer"};function f(h,w){const a=o("ExternalLinkIcon");return e(),c("div",null,[k,r,n("ul",null,[n("li",null,[n("a",i,[s("牛客网"),t(a)])])]),d,n("ul",null,[n("li",null,[s("参考： "),n("a",m,[s("https://es6.ruanyifeng.com/#docs/number"),t(a)])])])])}const y=p(l,[["render",f],["__file","number-count-in-n.html.vue"]]);export{y as default};
