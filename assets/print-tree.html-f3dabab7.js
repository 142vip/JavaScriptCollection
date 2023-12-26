import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as s,d as c,e as u}from"./app-be253e4c.js";const l="/JavaScriptCollection/assets/print-53b7e63b.png",r={},i=n("h1",{id:"把二叉树打印成多行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#把二叉树打印成多行","aria-hidden":"true"},"#"),s(" 把二叉树打印成多行")],-1),k=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),d={href:"https://www.nowcoder.com/share/jump/8484115461699855028639",target:"_blank",rel:"noopener noreferrer"},m=u('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * @Description: 把二叉树打印成多行
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-12 21:37:07
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-12 21:40:15
 */</span>

<span class="token comment">/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */</span>
<span class="token keyword">function</span> <span class="token function">Print</span><span class="token punctuation">(</span><span class="token parameter">pRoot</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 层序遍历的 进阶</span>

  <span class="token comment">// 处理空树的情况</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pRoot <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 临时队列 存放二叉树</span>
  <span class="token keyword">const</span> tempQueue <span class="token operator">=</span> <span class="token punctuation">[</span>pRoot<span class="token punctuation">]</span>
  <span class="token comment">// 存放结果</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>tempQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录当前层有几个子结点 ---&gt; 子树</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> tempQueue<span class="token punctuation">.</span>length

    <span class="token comment">//  记录一层的数据，先不考虑从左到右还是从右到左</span>
    <span class="token keyword">const</span> levelArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> currentTree <span class="token operator">=</span> tempQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token comment">// 根结点存在</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTree <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 直接放入根结点</span>
        levelArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentTree<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
        <span class="token comment">// 处理左子树</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTree<span class="token punctuation">.</span>left <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 当前层的结点，进入队列</span>
          tempQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentTree<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
          <span class="token comment">//                     level_arr.push(currentTree.left.val)</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>currentTree<span class="token punctuation">.</span>right <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          tempQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentTree<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
          <span class="token comment">//                     level_arr.push(currentTree.right.val)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 每次只能处理一个</span>
        count<span class="token operator">--</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>levelArr<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 这里已经按照层序遍历输出了，后面可以对数组进行奇数|偶数处理</span>
  <span class="token comment">// 当然，也可以在数组push的时候进行奇数|偶数计数处理</span>
  result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> item <span class="token operator">:</span> item<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,6);function h(f,_){const a=p("ExternalLinkIcon");return e(),o("div",null,[i,k,n("ul",null,[n("li",null,[n("a",d,[s("牛客网"),c(a)])])]),m])}const y=t(r,[["render",h],["__file","print-tree.html.vue"]]);export{y as default};
