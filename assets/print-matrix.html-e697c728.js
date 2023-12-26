import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-be253e4c.js";const l={},k=n("h1",{id:"顺时针打印矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#顺时针打印矩阵","aria-hidden":"true"},"#"),s(" 顺时针打印矩阵")],-1),i=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),r={href:"https://www.nowcoder.com/practice/9b4c81a02cd34f76be2659fa0d54342a",target:"_blank",rel:"noopener noreferrer"},m=u(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1,2</span>,3,4<span class="token punctuation">]</span>,
  <span class="token punctuation">[</span><span class="token number">5,6</span>,7,8<span class="token punctuation">]</span>,
  <span class="token punctuation">[</span><span class="token number">9,10</span>,11,12<span class="token punctuation">]</span>,
  <span class="token punctuation">[</span><span class="token number">13,14</span>,15,16<span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre></div><p>则依次打印出数字</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1,2</span>,3,4,8,12,16,15,14,13,9,5,6,7,11,10<span class="token punctuation">]</span>
</code></pre></div><p>数据范围: <code>0 &lt;= matrix.length &lt;= 100</code> 、 <code>0 &lt;= matrix[i].length &lt;= 100</code></p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 顺时针打印矩阵
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-27 14:22:13
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-28 22:25:16
 */</span>


<span class="token doc-comment comment">/**
 * 没有技巧，按照方向转
 * <span class="token keyword">@param</span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">printMatrixOne</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 行 角标</span>
  <span class="token keyword">let</span> row <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token comment">// 列角标</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回空数组</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> col <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 这里需要在脑海里想象顺时针旋转的时候，r--&gt;left c--&gt;top row--&gt;right  col--&gt;bottom</span>

  <span class="token comment">// 数组结果</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;=</span> row <span class="token operator">&amp;&amp;</span> c <span class="token operator">&lt;=</span> col<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 上</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> c<span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> col<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当前在上测，行为r 不为 row</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 跳出后，到右侧</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> row<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span>col<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 跳出来，就是下测 判断右下角拐角</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">!==</span> row<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 从右到左边</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> col <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> index <span class="token operator">&gt;=</span> c<span class="token punctuation">;</span> index<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当前在底部，所以行为row</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 左侧，注意判断条件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">!==</span> col<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 从下到上</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> index <span class="token operator">&gt;</span> r<span class="token punctuation">;</span> index<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 当前在左侧，所以列表为c 部位col</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 指针移动  转完一圈</span>
    r<span class="token operator">++</span>
    row<span class="token operator">--</span>
    c<span class="token operator">++</span>
    col<span class="token operator">--</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 利用一些特性和api
 * <span class="token keyword">@param</span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">printMatrixTwo</span><span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

  <span class="token keyword">let</span> seq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 元素平铺为一维</span>
    seq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>matrix<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> row <span class="token keyword">of</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      seq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">break</span>
    <span class="token keyword">else</span> seq<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>matrix<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// 左侧</span>
    <span class="token keyword">const</span> leftResult <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> row <span class="token keyword">of</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      leftResult<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>row<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    seq <span class="token operator">=</span> seq<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>leftResult<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 过滤</span>
  <span class="token keyword">return</span> seq<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printMatrixOne</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">printMatrixTwo</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,10);function d(h,b){const a=t("ExternalLinkIcon");return o(),e("div",null,[k,i,n("ul",null,[n("li",null,[n("a",r,[s("牛客网"),c(a)])])]),m])}const x=p(l,[["render",d],["__file","print-matrix.html.vue"]]);export{x as default};
