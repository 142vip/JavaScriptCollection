import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as o,a,b as n,d as c,e as l}from"./app-be253e4c.js";const p={},i=a("h1",{id:"算法相关文档格式模版",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#算法相关文档格式模版","aria-hidden":"true"},"#"),n(" 算法相关文档格式模版")],-1),d=a("h2",{id:"题目链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),n(" 题目链接")],-1),h={href:"https://www.nowcoder.com/share/jump/8484115461699868200977",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个nowcoder.txt文件，其中有3列信息，如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>20201001 python 99
20201002 go 80
20201002 c++ 88
20201003 php 77
20201001 go 88
20201005 shell 89
20201006 java 70
20201008 c 100
20201007 java 88
20201006 go 97
</code></pre></div><p>编写一个shell脚本来检查文件第二列是否有重复，且有几个重复，并提取出重复的行的第二列信息（先按次数排序，如果次数相同，按照单词字母顺序排序），输入如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>2 java
3 go
</code></pre></div><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

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
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,9);function k(b,m){const s=t("ExternalLinkIcon");return r(),o("div",null,[i,d,a("ul",null,[a("li",null,[a("a",h,[n("牛客网"),c(s)])])]),u])}const v=e(p,[["render",k],["__file","shell-10.html.vue"]]);export{v as default};
