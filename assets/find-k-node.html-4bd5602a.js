import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="链表中倒数第k个结点" tabindex="-1"><a class="header-anchor" href="#链表中倒数第k个结点" aria-hidden="true">#</a> 链表中倒数第K个结点</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> x
  <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * <span class="token keyword">@param</span> <span class="token parameter">pHead</span> ListNode类
 * <span class="token keyword">@param</span> <span class="token parameter">k</span> int整型
 * <span class="token keyword">@return</span> ListNode类
 */</span>
<span class="token keyword">function</span> <span class="token function">FindKthToTail</span><span class="token punctuation">(</span><span class="token parameter">pHead<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 结点不存在返回空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pHead <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 遍历链表，</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> pre <span class="token operator">=</span> pHead
  <span class="token keyword">while</span> <span class="token punctuation">(</span>pHead<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将数组进行头插</span>
    count<span class="token operator">++</span>
    pHead <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// 链表长度小于k,返回空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 再对链表进行遍历</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">--</span>
    pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// 返回倒数k个结点</span>
  <span class="token keyword">return</span> pre
<span class="token punctuation">}</span>

<span class="token comment">// 上面是有两次while一次计数，一次移动指针找到目标结点</span>
<span class="token comment">// 可以利用数组，不能是头插入，还是尾插都行，存储的元素为链表的结点，也就是链表的子链表的头指针</span>
<span class="token keyword">function</span> <span class="token function">FindKthToTail01</span><span class="token punctuation">(</span><span class="token parameter">pHead<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>pHead <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 头插</span>
    result<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>pHead<span class="token punctuation">)</span>

    <span class="token comment">// 指针后移</span>
    pHead <span class="token operator">=</span> pHead<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token comment">// k不合法</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 用尾插的话，返回 result[result.length-k]</span>
  <span class="token keyword">return</span> result<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),o=[e];function c(l,k){return a(),s("div",null,o)}const i=n(p,[["render",c],["__file","find-k-node.html.vue"]]);export{i as default};
