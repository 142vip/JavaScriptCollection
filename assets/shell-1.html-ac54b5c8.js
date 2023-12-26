import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as p,c as o,a,b as n,d as c,e as r}from"./app-be253e4c.js";const l={},i=a("h1",{id:"shell-1-统计文件的行数",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#shell-1-统计文件的行数","aria-hidden":"true"},"#"),n(" SHELL-1 统计文件的行数")],-1),d=a("h2",{id:"题目链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),n(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/205ccba30b264ae697a78f425f276779",target:"_blank",rel:"noopener noreferrer"},u=r(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>描述 编写一个shell脚本以输出一个文本文件<code>nowcoder.txt</code>中的行数</p><p>示例: 假设 <code>nowcoder.txt</code> 内容如下：</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;a + b:&quot;</span> <span class="token operator">&lt;&lt;</span> a <span class="token operator">+</span> b <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>你的脚本应当输出：9</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">##</span>
<span class="token comment">## 统计文件的行数</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-a</span> arr
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span> <span class="token parameter variable">-eq</span> <span class="token number">2</span> <span class="token punctuation">]</span>
    <span class="token keyword">do</span>
        <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>\${arr[<span class="token number">0</span>]} <span class="token operator">+</span> \${arr[<span class="token number">1</span>]}<span class="token variable">))</span></span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
        <span class="token builtin class-name">read</span> <span class="token parameter variable">-a</span> arr
    <span class="token keyword">done</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,9);function h(b,m){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,d,a("ul",null,[a("li",null,[a("a",k,[n("牛客网"),c(s)])])]),u])}const v=e(l,[["render",h],["__file","shell-1.html.vue"]]);export{v as default};
