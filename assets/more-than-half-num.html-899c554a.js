import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-be253e4c.js";const l={},k=n("h1",{id:"数组中出现次数超过一半的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数组中出现次数超过一半的数字","aria-hidden":"true"},"#"),s(" 数组中出现次数超过一半的数字")],-1),r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),i={href:"https://www.nowcoder.com/practice/e8a1b01a2df14cb2b228b30ee6a92163",target:"_blank",rel:"noopener noreferrer"},m=u(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给一个长度为 n 的数组，数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。 例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。</p><p>数据范围： 0 ≤n≤50000，数组中元素的值 0≤val≤10000 要求：空间复杂度 O(1)，时间复杂度 O(n)</p><p>示例：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 输入：</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// 返回值：</span>
<span class="token number">2</span>
</code></pre></div><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><p>方案一：</p><ul><li>利用<code>Map</code>计数</li><li>去重数组，减少循环次数。遍历<code>Map</code>获取出现次数超过一半的数字</li></ul><p>方案二：</p><ul><li>数组排序，升降序都行</li><li>充分利用indexOf、lastIndexOf方法，获取第一次和最后一次出现的角标索引</li><li>判断出现区间长度是否超过半数，获取结果</li></ul><p>方案三：</p><ul><li>利用选举法，推选出现次数最高的数字</li><li>遍历数组，判断该数出现是否超过半数</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数组中出现次数超过一半的数字
 */</span>


<span class="token doc-comment comment">/**
 * Map计数
 * <span class="token keyword">@param</span> <span class="token parameter">numbers</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">moreThanHalfNumOne</span><span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> resMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 计数</span>
  numbers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      resMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 数组去重</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token comment">// 找出出现一半的数字</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">&gt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result <span class="token operator">=</span> item
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 借助数组排序
 * <span class="token keyword">@param</span> <span class="token parameter">numbers</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">moreThanHalfNumTwo</span><span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 排序 升序或降序都行</span>
  numbers <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> len <span class="token operator">=</span> numbers<span class="token punctuation">.</span>length
  <span class="token comment">// 注意：数组长度为1</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> numbers<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> firstIndex <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> lastIndex <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>firstIndex <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> lastIndex <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> firstIndex <span class="token operator">!==</span> lastIndex <span class="token operator">&amp;&amp;</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span>lastIndex <span class="token operator">-</span> firstIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 选举出重复最多，再判断是否超过半数
 * <span class="token keyword">@param</span> <span class="token parameter">numbers</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">moreThanHalfNumThree</span><span class="token punctuation">(</span><span class="token parameter">numbers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> cond <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token keyword">let</span> cnt <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// 选举</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numbers<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cond <span class="token operator">=</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token operator">++</span>cnt
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cond <span class="token operator">===</span> numbers<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">++</span>cnt
      <span class="token keyword">else</span> <span class="token operator">--</span>cnt
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  cnt <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 计数</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> k <span class="token keyword">of</span> numbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cond <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token operator">++</span>cnt
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt <span class="token operator">&gt;</span> numbers<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> cond
  <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">moreThanHalfNumOne</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">moreThanHalfNumTwo</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">moreThanHalfNumTwo</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">moreThanHalfNumThree</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>理解<code>Map</code>数据结构，熟练使用api</li></ul>`,16);function d(b,f){const a=t("ExternalLinkIcon");return o(),e("div",null,[k,r,n("ul",null,[n("li",null,[n("a",i,[s("牛客网"),c(a)])])]),m])}const y=p(l,[["render",d],["__file","more-than-half-num.html.vue"]]);export{y as default};
