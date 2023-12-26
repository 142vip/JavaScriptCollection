import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as e,c as o,a as n,b as a,d as c,e as l}from"./app-be253e4c.js";const r={},u=n("h1",{id:"替换空格",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#替换空格","aria-hidden":"true"},"#"),a(" 替换空格")],-1),i=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/0e26e5551f2b489b9f58bc83aa4b6c68",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>请实现一个函数，将一个字符串s中的每个空格替换成“%20”。 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。</p><p>数据范围: 0≤len(s)≤1000 。保证字符串中的字符为大写英文字母、小写英文字母和空格中的一种。</p><p>示例：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 输入：</span>
<span class="token string">&quot;We Are Happy&quot;</span>
<span class="token comment">// 返回值：</span>
<span class="token string">&quot;We%20Are%20Happy&quot;</span>
</code></pre></div><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><ul><li><p>方案一： 使用字符串、数组的api方法，先split进行\`\`切割，在使用join进行<code>%20</code>连接成字符串</p></li><li><p>方案二： 利用循环进行拼接，对于多拼的<code>%20</code>进行切割</p></li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * 先转化为数组，再进行拼接
 * <span class="token keyword">@param</span> <span class="token parameter">s</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">replaceSpaceOne</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;%20&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 利用循环拼接，然后slice剪切多余部分
 * <span class="token keyword">@param</span> <span class="token parameter">s</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">replaceSpaceTwo</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;%20&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">replaceSpaceOne</span><span class="token punctuation">(</span><span class="token string">&#39;We Are Happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">replaceSpaceTwo</span><span class="token punctuation">(</span><span class="token string">&#39;We Are Happy&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2><ul><li>熟练使用字符串和数组的api方法</li></ul>`,11);function h(f,m){const s=t("ExternalLinkIcon");return e(),o("div",null,[u,i,n("ul",null,[n("li",null,[n("a",k,[a("牛客网"),c(s)])])]),d])}const w=p(r,[["render",h],["__file","replace-space.html.vue"]]);export{w as default};
