import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-be253e4c.js";const l={},k=n("h1",{id:"二维数组中的查找",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#二维数组中的查找","aria-hidden":"true"},"#"),s(" 二维数组中的查找")],-1),r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),i={href:"https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e",target:"_blank",rel:"noopener noreferrer"},m=u(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>在一个二维数组array中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1,2</span>,8,9<span class="token punctuation">]</span>,
  <span class="token punctuation">[</span><span class="token number">2,4</span>,9,12<span class="token punctuation">]</span>,
  <span class="token punctuation">[</span><span class="token number">4,7</span>,10,13<span class="token punctuation">]</span>,
  <span class="token punctuation">[</span><span class="token number">6,8</span>,11,15<span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><p>给定 target = 7，返回 true。</p></li><li><p>给定 target = 3，返回 false。</p></li></ul><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 *
 * 每一行都按照从左到右递增的顺序排序
 * 每一列都按照从上到下递增的顺序排序
 *
 * 直接循环找 选取右上或者左下元素为起点
 *
 */</span>

<span class="token doc-comment comment">/**
 * 右上角元素为起点，确保每个元素都能遍历到，都能按照方向走即可
 * <span class="token keyword">@param</span> <span class="token parameter">target</span>
 * <span class="token keyword">@param</span> <span class="token parameter">array</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">findOne</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 行数</span>
  <span class="token keyword">const</span> row <span class="token operator">=</span> array<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 列数</span>
  <span class="token keyword">const</span> col <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length
  <span class="token comment">// 此时选择右上为起点</span>
  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">let</span> c <span class="token operator">=</span> col <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> row <span class="token operator">&amp;&amp;</span> c <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 命中目标，返回</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 目标元素比右上小，target往左找</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      c<span class="token operator">--</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 目标元素比当前元素大，target往下找</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> array<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      r<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * - 比较蠢的方法，通过遍历二维数组进行比较
 * - 这里可以将第二层循环改成二分查找【用到从左到右递增的特点】；降低时间复杂度
 * <span class="token keyword">@param</span> <span class="token parameter">target</span>
 * <span class="token keyword">@param</span> <span class="token parameter">array</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">findTwo</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> row <span class="token operator">=</span> array<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 列数</span>
  <span class="token keyword">const</span> col <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length

  <span class="token comment">// 从第0行开始</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> low <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">let</span> high <span class="token operator">=</span> col <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token comment">// 注意这个二分查找区间是 []</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;=</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> mid <span class="token operator">=</span> low <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>high <span class="token operator">-</span> low<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 在左侧，从左边找</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        high <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 在右侧</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        low <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 利用一些api
 * - every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true
 * - some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true
 * <span class="token keyword">@param</span> <span class="token parameter">target</span>
 * <span class="token keyword">@param</span> <span class="token parameter">array</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">findThree</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> array<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">arr</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">===</span> target<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findTwo</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">findThree</span><span class="token punctuation">(</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8);function d(b,h){const a=t("ExternalLinkIcon");return o(),e("div",null,[k,r,n("ul",null,[n("li",null,[n("a",i,[s("牛客网"),c(a)])])]),m])}const y=p(l,[["render",d],["__file","find.html.vue"]]);export{y as default};
