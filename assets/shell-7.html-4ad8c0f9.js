import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as o,a,b as n,d as c,e as p}from"./app-be253e4c.js";const l={},i=a("h1",{id:"算法相关文档格式模版",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#算法相关文档格式模版","aria-hidden":"true"},"#"),n(" 算法相关文档格式模版")],-1),d=a("h2",{id:"题目链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),n(" 题目链接")],-1),h={href:"https://www.nowcoder.com/share/jump/8484115461699868037131",target:"_blank",rel:"noopener noreferrer"},k=p(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>写一个bash脚本以统计一个文本文件nowcoder.txt中字母数小于8的单词。 示例: 假设 <code>nowcoder.txt</code> 内容如下： how they are implemented and applied in computer</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

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
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,6);function u(m,b){const s=t("ExternalLinkIcon");return r(),o("div",null,[i,d,a("ul",null,[a("li",null,[a("a",h,[n("牛客网"),c(s)])])]),k])}const x=e(l,[["render",u],["__file","shell-7.html.vue"]]);export{x as default};
