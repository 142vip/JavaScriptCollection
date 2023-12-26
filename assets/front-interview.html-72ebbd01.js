import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as l,a as n,b as s,d as p,e as t}from"./app-be253e4c.js";const u={},k=n("h1",{id:"前端面试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前端面试","aria-hidden":"true"},"#"),s(" 前端面试")],-1),r=n("h2",{id:"快速排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速排序","aria-hidden":"true"},"#"),s(" 快速排序")],-1),i={href:"https://www.cnblogs.com/du001011/p/10798540.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>快速排序最经常的思路就是利用递归，当然也可以借助数组不用递归来实现快速排序</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 非递归实现快速排序
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">data</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">low</span> 
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">high</span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span>
    <span class="token keyword">const</span> pivot <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pivot <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pivot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> high<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pivot <span class="token operator">&gt;</span> low <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>low<span class="token punctuation">,</span> pivot <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



    <span class="token comment">// 数组不为空</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
        <span class="token keyword">const</span> temp_high <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> temp_low <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>temp_low <span class="token operator">&gt;=</span> temp_high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> temp_pivot <span class="token operator">=</span> <span class="token function">partition</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> temp_low<span class="token punctuation">,</span> temp_high<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>temp_pivot <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp_pivot <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> temp_high<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>temp_pivot <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&gt;</span> low<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp_low<span class="token punctuation">,</span> temp_pivot <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token comment">// 严版获取快排pivot</span>
<span class="token keyword">function</span> <span class="token function">partition</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> low<span class="token punctuation">,</span> high</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">let</span> pivot <span class="token operator">=</span> data<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 高位</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> pivot <span class="token operator">&lt;=</span> data<span class="token punctuation">[</span>high<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">--</span>high<span class="token punctuation">;</span>
        data<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>high<span class="token punctuation">]</span>
        <span class="token comment">// 低位</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>low <span class="token operator">&lt;</span> high <span class="token operator">&amp;&amp;</span> pivot <span class="token operator">&gt;=</span> data<span class="token punctuation">[</span>low<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">++</span>low<span class="token punctuation">;</span>
        data<span class="token punctuation">[</span>high<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>low<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    data<span class="token punctuation">[</span>low<span class="token punctuation">]</span> <span class="token operator">=</span> pivot

    <span class="token keyword">return</span> low
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2>`,3),m={href:"https://labuladong.gitee.io/algo/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E8%AF%A6%E8%A7%A3.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>文章解释的非常清楚，二分查找分为三种情况：</p><ul><li>判断是否存在某元素【目标查询】</li><li>查询某元素首次出现的索引位置【左侧查询】</li><li>查询某元素最后一次出现的位置【右侧查询】</li></ul><p>综合代码整理如下，直接记忆：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">rightBinarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">let</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 别返回，锁定右侧边界</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 左侧</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 右侧；</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// left = right+1; 判断出界</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> data<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> right
<span class="token punctuation">}</span>


<span class="token comment">// [left，right]</span>
<span class="token keyword">function</span> <span class="token function">leftBinarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">let</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 左侧收缩</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 左侧</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 右侧；</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// left = right+1; 左侧判断出界</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> data<span class="token punctuation">.</span>length <span class="token operator">||</span> data<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">return</span> left
<span class="token punctuation">}</span>

</code></pre></div><p>上面的这两种无非就是向左还是向右查询的问题，<strong>特别注意在跳出循环后需要判断是否出界</strong></p><p>最后，也是最常用的二分查询，直接用来查询某个元素</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span>target</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">let</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">===</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> mid<span class="token punctuation">;</span>    
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 左侧</span>
            right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 右侧；</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 没有则返回-1</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function w(g,f){const a=e("ExternalLinkIcon");return c(),l("div",null,[k,r,n("blockquote",null,[n("p",null,[s("参考："),n("a",i,[s("https://www.cnblogs.com/du001011/p/10798540.html"),p(a)])])]),d,n("blockquote",null,[n("p",null,[s("参考："),n("a",m,[s("https://labuladong.gitee.io/algo/算法思维系列/二分查找详解.html"),p(a)])])]),h])}const _=o(u,[["render",w],["__file","front-interview.html.vue"]]);export{_ as default};
