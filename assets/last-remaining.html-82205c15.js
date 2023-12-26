import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const t={},o=p(`<h1 id="圆圈中最后剩下的数-约瑟夫问题" tabindex="-1"><a class="header-anchor" href="#圆圈中最后剩下的数-约瑟夫问题" aria-hidden="true">#</a> 圆圈中最后剩下的数 约瑟夫问题</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>把n个人的编号改为0~n-1，然后对删除的过程进行分析。 第一个删除的数字是(m-1)%n，几位k，则剩余的编号为(0,1,...,k-1,k+1,...,n-1)，下次开始删除时，顺序为(k+1,...,n-1,0,1,...k-1)。 用f(n,m)表示从(0~n-1)开始删除后的最终结果。 用q(n-1,m)表示从(k+1,...,n-1,0,1,...k-1)开始删除后的最终结果。 则f(n,m)=q(n-1,m)。</p><p>下面把(k+1,...,n-1,0,1,...k-1)转换为(0~n-2)的形式，即 k+1对应0 k+2对于1 ... k-1对应n-2 转化函数设为p(x)=(x-k-1)%n, p(x)的逆函数为p^(x)=(x+k+1)%n。 则f(n,m)=q(n-1,m)=p^(f(n-1,m))=(f(n-1,m)+k+1)%n，又因为k=(m-1)%n。 取余 f(n,m)=(f(n-1,m)+m)%n;</p><p>最终的递推关系式为 f(1,m) = 0; (n=1) f(n,m)=(f(n-1,m)+m)%n; （n&gt;1）</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 【中等】圆圈中最后剩下的数 约瑟夫问题
 */</span>

<span class="token comment">// 把n个人的编号改为0~n-1，然后对删除的过程进行分析。</span>
<span class="token comment">// 第一个删除的数字是(m-1)%n，几位k，则剩余的编号为(0,1,...,k-1,k+1,...,n-1)，下次开始删除时，顺序为(k+1,...,n-1,0,1,...k-1)。</span>
<span class="token comment">// 用f(n,m)表示从(0~n-1)开始删除后的最终结果。</span>
<span class="token comment">// 用q(n-1,m)表示从(k+1,...,n-1,0,1,...k-1)开始删除后的最终结果。</span>
<span class="token comment">// 则f(n,m)=q(n-1,m)。</span>

<span class="token comment">// 下面把(k+1,...,n-1,0,1,...k-1)转换为(0~n-2)的形式，即</span>
<span class="token comment">// k+1对应0</span>
<span class="token comment">// k+2对于1</span>
<span class="token comment">// ...</span>
<span class="token comment">// k-1对应n-2</span>
<span class="token comment">// 转化函数设为p(x)=(x-k-1)%n, p(x)的逆函数为p^(x)=(x+k+1)%n。</span>
<span class="token comment">// 则f(n,m)=q(n-1,m)=p^(f(n-1,m))=(f(n-1,m)+k+1)%n，又因为k=(m-1)%n。</span>
<span class="token comment">// 取余</span>
<span class="token comment">// f(n,m)=(f(n-1,m)+m)%n;</span>

<span class="token comment">// 最终的递推关系式为</span>
<span class="token comment">// f(1,m) = 0;                        (n=1)</span>
<span class="token comment">// f(n,m)=(f(n-1,m)+m)%n; （n&gt;1）</span>

<span class="token keyword">function</span> <span class="token function">LastRemainingSolution</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 递推公式： f(0)=-1  f(1)=0 f(i)={f(i-1)+m}%i</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 递归</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">LastRemainingSolution</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> n
<span class="token punctuation">}</span>

<span class="token comment">// 非递归实现</span>
<span class="token keyword">function</span> <span class="token function">LastRemainingSSolution01</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当然，这里也可以添加上负数的校验情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 循环处理</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// f(n,m)=[f(n-1,m)+m]%n</span>
    result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> index
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">/*
 * @Description: 【中等】圆圈中最后剩下的数 约瑟夫问题
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-05 14:48:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-05 15:11:02
 */</span>



<span class="token keyword">function</span> <span class="token function">LastRemainingSolution</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 递推公式： f(0)=-1  f(1)=0 f(i)={f(i-1)+m}%i</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 递归</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token function">LastRemainingSolution</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> n
<span class="token punctuation">}</span>

<span class="token comment">// 非递归实现</span>
<span class="token keyword">function</span> <span class="token function">LastRemainingSSolution01</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当然，这里也可以添加上负数的校验情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 循环处理</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// f(n,m)=[f(n-1,m)+m]%n</span>
    result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">+</span> m<span class="token punctuation">)</span> <span class="token operator">%</span> index
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,12),e=[o];function c(k,l){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","last-remaining.html.vue"]]);export{i as default};
