import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as r,a,b as e,d as c,e as p}from"./app-be253e4c.js";const l={},d=a("h1",{id:"算法相关文档格式模版",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#算法相关文档格式模版","aria-hidden":"true"},"#"),e(" 算法相关文档格式模版")],-1),i=a("h2",{id:"题目链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),e(" 题目链接")],-1),h={href:"https://www.nowcoder.com/share/jump/8484115461699868088684",target:"_blank",rel:"noopener noreferrer"},u=p(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>写一个bash脚本以统计一个文本文件nowcoder.txt 中每个单词出现的个数。</p><p>为了简单起见，你可以假设： <code>nowcoder.txt</code>只包括小写字母和空格，每个单词只由小写字母组成，单词间由一个或多个空格字符分隔。</p><p>示例: 假设 <code>nowcoder.txt</code> 内容如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>welcome nowcoder
welcome to nowcoder
nowcoder
</code></pre></div><p>你的脚本应当输出（以词频升序排列）：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>to 1
welcome 2
nowcoder 3
</code></pre></div><p>说明: 不要担心个数相同的单词的排序问题，每个单词出现的个数都是唯一的。</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

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
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,12);function k(m,b){const n=t("ExternalLinkIcon");return o(),r("div",null,[d,i,a("ul",null,[a("li",null,[a("a",h,[e("牛客网"),c(n)])])]),u])}const v=s(l,[["render",k],["__file","shell-9.html.vue"]]);export{v as default};
