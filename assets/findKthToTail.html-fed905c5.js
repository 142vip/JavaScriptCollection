import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o,c as p,a as n,b as a,d as c,e as r}from"./app-be253e4c.js";const l="/JavaScriptCollection/assets/findKthToTail-cb15fbf9.png",i={},k=n("h1",{id:"bm8-链表中倒数最后k个结点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bm8-链表中倒数最后k个结点","aria-hidden":"true"},"#"),a(" BM8 链表中倒数最后k个结点")],-1),u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),d={href:"https://www.nowcoder.com/share/jump/8484115461694594062276",target:"_blank",rel:"noopener noreferrer"},h=r('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><figure><img src="'+l+`" alt="反转链表.png" tabindex="0" loading="lazy"><figcaption>反转链表.png</figcaption></figure><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 链表结点
 * <span class="token keyword">@param</span> <span class="token parameter">x</span>
 * <span class="token keyword">@constructor</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * 【简单】 链表中倒数最后k个结点
 * <span class="token keyword">@param</span> <span class="token parameter">pHead</span> ListNode类
 * <span class="token keyword">@param</span> <span class="token parameter">k</span> int整型
 * <span class="token keyword">@return</span> ListNode类
 */</span>
<span class="token keyword">function</span> <span class="token function">FindKthToTail</span><span class="token punctuation">(</span><span class="token parameter">pHead<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 结点不存在返回空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 结点遍历,将结点存放在数组中</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>pHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span>
    pHead <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> k<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,6);function m(f,_){const s=e("ExternalLinkIcon");return o(),p("div",null,[k,u,n("ul",null,[n("li",null,[n("a",d,[a("牛客网"),c(s)])])]),h])}const y=t(i,[["render",m],["__file","findKthToTail.html.vue"]]);export{y as default};
