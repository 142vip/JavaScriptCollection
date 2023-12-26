import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-be253e4c.js";const t={},o=e(`<h1 id="fold命令" tabindex="-1"><a class="header-anchor" href="#fold命令" aria-hidden="true">#</a> fold命令</h1><p><code>fold</code>命令用于限制文件列宽，其会从指定的文件里读取内容，将超过限定列宽的列加入增列字符后，输出到标准输出设备。若不指定任何文件名称，或是所给予的文件名为<code>-</code>，则<code>fold</code>命令会从标准输入设备读取数据。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fold</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-b, --bytes</code>: 计算字节数而不是列数。</li><li><code>-s, --spaces</code>: 在空格处跳过。</li><li><code>-w, --width=WIDTH</code>: 使用<code>n</code>列，而不是默认值<code>80</code>。</li><li><code>--help</code>: 显示帮助信息。</li><li><code>--version</code>: 显示版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>使用<code>fold</code>命令进行分隔，每行最多包含默认值<code>80</code>个字符。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fold</span> file.txt
<span class="token comment"># fold command in Linux wraps each line in an input file to fit a specified width</span>
<span class="token comment"># and prints it to the standard output. By default, it wraps lines at a maximum wi</span>
<span class="token comment"># dth of 80 columns but this is configurable. To fold input using the fold command</span>
<span class="token comment">#  pass a file or standard input to the command.</span>
</code></pre></div><p>使用<code>fold</code>命令进行分隔，指定每行最多包含默认值<code>50</code>个字符。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fold</span> <span class="token parameter variable">-w</span> <span class="token number">50</span> file.txt
<span class="token comment"># fold command in Linux wraps each line in an input</span>
<span class="token comment"># file to fit a specified width and prints it to the</span>
<span class="token comment">#  standard output. By default, it wraps lines at a</span>
<span class="token comment"># maximum width of 80 columns but this is configurab</span>
<span class="token comment"># le. To fold input using the fold command pass a fi</span>
<span class="token comment"># le or standard input to the command.</span>
</code></pre></div><p>使用<code>fold</code>命令进行分隔，并使用<code>-s</code>选项用于分隔空格上的行，以便不打断单词。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fold</span> <span class="token parameter variable">-w</span> <span class="token number">50</span> <span class="token parameter variable">-s</span> file.txt
<span class="token comment"># fold command in Linux wraps each line in an input</span>
<span class="token comment"># file to fit a specified width and prints it to</span>
<span class="token comment"># the standard output. By default, it wraps lines</span>
<span class="token comment"># at a maximum width of 80 columns but this is</span>
<span class="token comment"># configurable. To fold input using the fold</span>
<span class="token comment"># command pass a file or standard input to the</span>
<span class="token comment"># command.</span>
</code></pre></div>`,13),c=[o];function d(i,l){return n(),s("div",null,c)}const r=a(t,[["render",d],["__file","fold.html.vue"]]);export{r as default};
