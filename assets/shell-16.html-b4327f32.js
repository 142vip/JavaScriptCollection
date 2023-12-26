import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e}from"./app-be253e4c.js";const t={},r=e(`<h1 id="算法相关文档格式模版" tabindex="-1"><a class="header-anchor" href="#算法相关文档格式模版" aria-hidden="true">#</a> 算法相关文档格式模版</h1><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2><ul><li><a href="">牛客网</a></li></ul><h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

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
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8),p=[r];function l(o,c){return s(),n("div",null,p)}const d=a(t,[["render",l],["__file","shell-16.html.vue"]]);export{d as default};
