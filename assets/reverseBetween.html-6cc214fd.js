import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a as n,b as s,d as r,e as c}from"./app-be253e4c.js";const l="/JavaScriptCollection/assets/reverseBetween-c23567b9.png",k={},i=n("h1",{id:"bm2-链表内指定区间反转",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bm2-链表内指定区间反转","aria-hidden":"true"},"#"),s(" BM2 链表内指定区间反转")],-1),u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),d={href:"https://www.nowcoder.com/share/jump/8484115461694574050421",target:"_blank",rel:"noopener noreferrer"},h=c('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><figure><img src="'+l+`" alt="区间反转.png" tabindex="0" loading="lazy"><figcaption>区间反转.png</figcaption></figure><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">val</span><span class="token operator">:</span> number
  <span class="token comment">// eslint-disable-next-line no-use-before-define</span>
  <span class="token literal-property property">next</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span> next<span class="token operator">?</span><span class="token operator">:</span> ListNode <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * <span class="token keyword">@param</span> <span class="token parameter">head</span> ListNode类
 * <span class="token keyword">@param</span> <span class="token parameter">m</span> int整型
 * <span class="token keyword">@param</span> <span class="token parameter">n</span> int整型
 * <span class="token keyword">@return</span> ListNode类
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reverseBetween</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">head</span><span class="token operator">:</span> ListNode<span class="token punctuation">,</span> <span class="token literal-property property">m</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">n</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> ListNode <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">start</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> head
  <span class="token keyword">let</span> <span class="token literal-property property">pre</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// 找到起点</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>m <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pre <span class="token operator">=</span> start
    start <span class="token operator">=</span> start<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token comment">// 找到终点</span>
  <span class="token keyword">let</span> <span class="token literal-property property">end</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> head
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">--</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    end <span class="token operator">=</span> end<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>

  <span class="token comment">// 翻转中间部分</span>
  <span class="token keyword">let</span> <span class="token literal-property property">last</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> end<span class="token punctuation">.</span>next
  end<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">next</span><span class="token operator">:</span> ListNode <span class="token operator">=</span> start<span class="token punctuation">.</span>next
    start<span class="token punctuation">.</span>next <span class="token operator">=</span> last
    last <span class="token operator">=</span> start
    start <span class="token operator">=</span> next
  <span class="token punctuation">}</span>
  <span class="token comment">// 将起点前的节点与终点相连</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pre <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> end
  pre<span class="token punctuation">.</span>next <span class="token operator">=</span> end
  <span class="token keyword">return</span> head
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,6);function y(m,w){const a=t("ExternalLinkIcon");return p(),o("div",null,[i,u,n("ul",null,[n("li",null,[n("a",d,[s("牛客网"),r(a)])])]),h])}const _=e(k,[["render",y],["__file","reverseBetween.html.vue"]]);export{_ as default};
