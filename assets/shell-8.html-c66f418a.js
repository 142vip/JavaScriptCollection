import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as r,a,b as s,d as c,e as l}from"./app-be253e4c.js";const p={},i=a("h1",{id:"算法相关文档格式模版",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#算法相关文档格式模版","aria-hidden":"true"},"#"),s(" 算法相关文档格式模版")],-1),d=a("h2",{id:"题目链接",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),h={href:"https://www.nowcoder.com/share/jump/8484115461699868052924",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>假设 <code>nowcoder.txt</code> 内容如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.4  77744  8332 ?        Ss    2021   1:15 /sbin/init noibrs splash
root         2  0.0  0.0      0     0 ?        S     2021   0:00 [kthreadd]
root         4  0.0  0.0      0     0 ?        I&lt;    2021   0:00 [kworker/0:0H]
daemon     486  0.0  0.1  28340  2372 ?        Ss    2021   0:00 /usr/sbin/atd -f
root       586  0.0  0.3  72308  6244 ?        Ss    2021   0:01 /usr/sbin/sshd -D
root     12847  0.0  0.0   4528    68 ?        S&lt;   Jan03   0:13 /usr/sbin/atopacctd
root     16306  1.7  1.2 151964 26132 ?        S&lt;sl Apr15 512:03 /usr/local/aegis/aegis_client/aegis_11_25/AliYunDun
root     24143  0.0  0.4  25608  8652 ?        S&lt;Ls 00:00   0:03 /usr/bin/atop -R -w /var/log/atop/atop_20220505 600
root     24901  0.0  0.3 107792  7008 ?        Ss   15:37   0:00 sshd: root@pts/0
root     24903  0.0  0.3  76532  7580 ?        Ss   15:37   0:00 /lib/systemd/systemd --user
root     24904  0.0  0.1 111520  2392 ?        S    15:37   0:00 (sd-pam)
</code></pre></div><p>以上内容是通过ps aux命令输出到<code>nowcoder.txt</code>文件中的，请你写一个脚本计算一下所有进程占用内存大小的和。</p><h2 id="刷题思路" tabindex="-1"><a class="header-anchor" href="#刷题思路" aria-hidden="true">#</a> 刷题思路</h2><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

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
</code></pre></div><h2 id="一些建议" tabindex="-1"><a class="header-anchor" href="#一些建议" aria-hidden="true">#</a> 一些建议</h2>`,8);function k(b,m){const n=t("ExternalLinkIcon");return o(),r("div",null,[i,d,a("ul",null,[a("li",null,[a("a",h,[s("牛客网"),c(n)])])]),u])}const f=e(p,[["render",k],["__file","shell-8.html.vue"]]);export{f as default};
