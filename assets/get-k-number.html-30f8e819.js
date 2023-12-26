import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as e,a as n,b as a,d as c,e as l}from"./app-be253e4c.js";const r="/JavaScriptCollection/assets/getNumberOfK-a937b58f.png",k={},u=n("h1",{id:"数字在升序数组中出现的次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数字在升序数组中出现的次数","aria-hidden":"true"},"#"),a(" 数字在升序数组中出现的次数")],-1),i=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),d={href:"https://www.nowcoder.com/share/jump/8484115461699865663169",target:"_blank",rel:"noopener noreferrer"},m=l('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 数字在排序数组中出现的次数
 * 难度：中等
 * <span class="token keyword">@param</span> <span class="token parameter">data</span>
 * <span class="token keyword">@param</span> <span class="token parameter">k</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">GetNumberOfK</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 分两次二分查找，知道重复元素首次和最后一次出现位置，相减就能拿到重复次数了.</span>

  <span class="token comment">// 左侧二分查找，重复元素第一次出现的索引位置</span>
  <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">leftBinarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> k<span class="token punctuation">)</span>

  <span class="token comment">// 右侧二分查找，重复元素最后一次出现的索引位置</span>
  <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token function">rightBinarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> k<span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">left:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>left<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">----&gt; right:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>right<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> left <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> right <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment">// 右侧二分查找</span>
<span class="token keyword">function</span> <span class="token function">rightBinarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 左侧</span>
      right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 右侧；</span>
      left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// left = right+1; 判断出界</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> data<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> right
<span class="token punctuation">}</span>

<span class="token comment">// 左侧二分查找</span>
<span class="token keyword">function</span> <span class="token function">leftBinarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> right <span class="token operator">=</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 左侧收缩</span>
      right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 左侧</span>
      right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 右侧；</span>
      left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// left = right+1; 判断出界</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> data<span class="token punctuation">.</span>length <span class="token operator">||</span> data<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> left
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,6);function h(f,g){const s=p("ExternalLinkIcon");return o(),e("div",null,[u,i,n("ul",null,[n("li",null,[n("a",d,[a("牛客网"),c(s)])])]),m])}const b=t(k,[["render",h],["__file","get-k-number.html.vue"]]);export{b as default};
