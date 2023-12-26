import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-be253e4c.js";const o={},t=e(`<h1 id="awk命令" tabindex="-1"><a class="header-anchor" href="#awk命令" aria-hidden="true">#</a> awk命令</h1><p><code>Awk</code>是一种用于高级文本处理的通用脚本语言，其主要用作报告和分析工具，与大多数其他程序性编程语言不同，<code>Awk</code>是数据驱动的，也就是说需要定义一组针对输入文本要执行的操作，然后其获取输入数据，对其进行转换，然后将结果发送到标准输出。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token punctuation">[</span> <span class="token parameter variable">-F</span> fs <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">var</span><span class="token operator">=</span>value <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token string">&#39;prog&#39;</span> <span class="token operator">|</span> <span class="token parameter variable">-f</span> progfile <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token function">file</span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span>
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-F fs</code>: 将输入字段分隔符设置为正则表达式<code>fs</code>。</li><li><code>-v var=value</code>: 在执行<code>awk</code>程序之前，将值赋值给变量<code>var</code>。</li><li><code>&#39;prog&#39;</code>: <code>awk</code>程序。</li><li><code>-f progfile</code>: 指定文件<code>progfile</code>，其中包含要执行的<code>awk</code>程序。</li><li><code>file ...</code>: 由指定的<code>awk</code>程序处理的文件。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>示例文件<code>example.txt</code>文件内容如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Bucks Milwaukee    60 22 0.732 
Raptors Toronto    55 24 0.707 
76ers Philadelphia 51 31 0.622
Celtics Boston     33 33 0.598
Pacers Indiana     30 34 0.585
</code></pre></div><p>输出<code>example.txt</code>的第<code>3</code>个字段。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;{ print $3 }&#39;</span> example.txt
<span class="token comment"># 60</span>
<span class="token comment"># 55</span>
<span class="token comment"># 51</span>
<span class="token comment"># 33</span>
<span class="token comment"># 30</span>
</code></pre></div><p>使用正则表达式匹配出以<code>R</code>开头的组。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;/^R/ { print $1,$2,$3,$4 }&#39;</span> example.txt
<span class="token comment"># Raptors Toronto 55 24</span>
</code></pre></div><p>使用<code>BEGIN</code>以及<code>END</code>输出在处理记录之前与之后执行的操作，处理过程为输出第二个字段包含<code>Tor</code>的组。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;BEGIN { print &quot;Start Processing&quot; }; $2 ~ /Tor/ {print $1,$2,$3,$4 }; END { print &quot;End Processing&quot; }&#39;</span> example.txt
<span class="token comment"># Start Processing</span>
<span class="token comment"># Raptors Toronto 55 24</span>
<span class="token comment"># End Processing</span>
</code></pre></div>`,15),c=[t];function p(l,d){return n(),s("div",null,c)}const k=a(o,[["render",p],["__file","awk.html.vue"]]);export{k as default};
