import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as e,a as n,b as s,d as c,e as u}from"./app-be253e4c.js";const l={},k=n("h1",{id:"最小的k个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最小的k个数","aria-hidden":"true"},"#"),s(" 最小的k个数")],-1),i=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),r={href:"https://www.nowcoder.com/practice/6a296eb82cf844ca8539b57c23e6e9bf",target:"_blank",rel:"noopener noreferrer"},m=u(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个长度为 n 的可能有重复值的数组，找出其中不去重的最小的 k 个数。</p><p>例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4(任意顺序皆可)。</p><p>数据范围：0≤k,n≤10000，数组中每个数的大小：0≤val≤1000</p><p>要求：空间复杂度O(n) ，时间复杂度O(nlogk)</p><p>示例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#输入：</span>
<span class="token comment">#[4,5,1,6,2,7,3,8],4</span>
<span class="token comment">#返回值：</span>
<span class="token comment">#[1,2,3,4]</span>
<span class="token comment">#说明：</span>
<span class="token comment">#返回最小的4个数即可，返回[1,3,2,4]也可以</span>
</code></pre></div><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><p>方案一：</p><ul><li>数组升序排序</li><li>获取前k个数</li></ul><p>最直接的方案，但是复杂度可能不满足</p><p>方案二：</p><ul><li>基于冒泡排序，从后往前排</li><li>循环k次，找出最小的k个</li></ul><p>方案三：</p><ul><li>基于选择排序，从前往后找</li><li>循环k次，找出最小的k个</li></ul><p>方案四：</p><ul><li>利用堆排序，每次获取最小的一个</li><li>重复k次堆排序，输出</li></ul><p>时间复杂度小，同时需要创建树、维护小根堆，有难度</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 最小的K个数
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-28 23:12:33
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-28 23:35:30
 */</span>

<span class="token doc-comment comment">/**
 * 先排序，后截取（偷懒做法）
 *
 * <span class="token keyword">@param</span> <span class="token parameter">input</span>
 * <span class="token keyword">@param</span> <span class="token parameter">k</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getLeastNumbersOne</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 直接基于快排，最快速的拿到排序结果也行</span>
  <span class="token keyword">return</span> input<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 基于冒泡排序，跑K趟即可
  * <span class="token keyword">@param</span> <span class="token parameter">input</span>
 * <span class="token keyword">@param</span> <span class="token parameter">k</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">|</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getLeastNumbersTwo</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> input<span class="token punctuation">.</span>length
  <span class="token comment">// 添加参数校验</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 先将输入的数组进行排序从小到大  只排前面几个即可</span>
  <span class="token comment">// 这里首先想到的是冒泡或者插入排序里面的特性 --- 每次都有一个元素在最终的位置上</span>

  <span class="token comment">// 循环k次，跑k趟</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从后往前找</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;</span> index<span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">&gt;</span> input<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 找到比它小的，位置交换</span>
        <span class="token punctuation">[</span>input<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span> input<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>input<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> input<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 排序完毕，输入前k个</span>
  <span class="token keyword">return</span> input<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 基于选择排序
 * <span class="token keyword">@param</span> <span class="token parameter">input</span>
 * <span class="token keyword">@param</span> <span class="token parameter">k</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getLeastNumbersThree</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> input<span class="token punctuation">.</span>length
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从前往后找</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>input<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> input<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 位置互换，从小到大</span>
        <span class="token punctuation">[</span>input<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> input<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>input<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> input<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 找出前k个</span>
  <span class="token keyword">return</span> input<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token doc-comment comment">/**
 * 基于堆排序
 * <span class="token keyword">@param</span> <span class="token parameter">input</span>
 * <span class="token keyword">@param</span> <span class="token parameter">k</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">getLeastNumbersFour</span><span class="token punctuation">(</span><span class="token parameter">input<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// todo 构建树 维护小根堆</span>
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLeastNumbersOne</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLeastNumbersTwo</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getLeastNumbersThree</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>熟练掌握常见排序算法，尤其是：快速排序，很实用</li><li>大小根堆概念要熟知</li></ul>`,22);function d(b,h){const a=t("ExternalLinkIcon");return o(),e("div",null,[k,i,n("ul",null,[n("li",null,[n("a",r,[s("牛客网"),c(a)])])]),m])}const y=p(l,[["render",d],["__file","get-least-num.html.vue"]]);export{y as default};
