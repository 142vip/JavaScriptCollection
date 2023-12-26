import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as e,a as n,b as s,d as c,e as u}from"./app-be253e4c.js";const l={},i=n("h1",{id:"两个栈实现队列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#两个栈实现队列","aria-hidden":"true"},"#"),s(" 两个栈实现队列")],-1),r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6",target:"_blank",rel:"noopener noreferrer"},d=u(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>用两个栈来实现一个队列，使用n个元素来完成 n 次在队列尾部插入整数(push)和n次在队列头部删除整数(pop)的功能。 队列中的元素为int类型。保证操作合法，即保证pop操作时队列内已有元素。</p><p>数据范围：n≤1000 要求：存储n个元素的空间复杂度为O(n) ，插入与删除的时间复杂度都是O(1)</p><p>示例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#输入：</span>
<span class="token comment">#[&quot;PSH1&quot;,&quot;PSH2&quot;,&quot;POP&quot;,&quot;POP&quot;]</span>
<span class="token comment">#返回值：</span>
<span class="token comment">#1,2</span>
<span class="token comment">#说明：</span>
<span class="token comment">#&quot;PSH1&quot;:代表将1插入队列尾部</span>
<span class="token comment">#&quot;PSH2&quot;:代表将2插入队列尾部</span>
<span class="token comment">#&quot;POP“:代表删除一个元素，先进先出=&gt;返回1</span>
<span class="token comment">#&quot;POP“:代表删除一个元素，先进先出=&gt;返回2   </span>
</code></pre></div><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><p>这个题目只需要理解栈和队列的基础特性，即：</p><ul><li>栈：先进后出，普通栈进、出栈都在栈顶完成</li><li>队列： 先进先出，普通队列，队尾进入、队首出栈</li></ul><p>可用通过操作全局数组来实现栈、队列的相关操作</p><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 【简单】用两个栈实现队列
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-29 22:06:51
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-29 22:07:22
 */</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token doc-comment comment">/**
 * 模拟进队列操作
 * <span class="token keyword">@param</span> <span class="token parameter">node</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 尾部进栈</span>
  result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 模拟出队列操作
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 队列 先进先出 头部出去</span>
  <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>理解栈、队列的基本特性</li><li>熟练使用数组的api接口，例如：push、pop、unshift、shift等</li></ul>`,13);function h(m,f){const a=p("ExternalLinkIcon");return o(),e("div",null,[i,r,n("ul",null,[n("li",null,[n("a",k,[s("牛客网"),c(a)])])]),d])}const x=t(l,[["render",h],["__file","stack-to-queue.html.vue"]]);export{x as default};
