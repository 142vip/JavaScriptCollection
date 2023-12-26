import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as a}from"./app-be253e4c.js";const o={},i=a(`<h1 id="sed命令" tabindex="-1"><a class="header-anchor" href="#sed命令" aria-hidden="true">#</a> sed命令</h1><p><code>sed</code>命令是利用脚本来处理文本文件，可依照脚本的指令来处理、编辑文本文件，主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">{</span>script-only-if-no-other-script<span class="token punctuation">}</span> <span class="token punctuation">[</span>input-file<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-n, --quiet, --silent</code>: 禁止自动打印图案空间。</li><li><code>-e script, --expression=script</code>: 将脚本添加到要执行的命令中。</li><li><code>-f script-file, --file=script-file</code>: 将脚本文件的内容添加到要执行的命令中。</li><li><code>--follow-symlinks</code>: 就地处理时遵循符号链接。</li><li><code>-i[SUFFIX], --in-place[=SUFFIX]</code>:就地编辑文件，如果提供了后缀，则使用文件扩展名后缀进行备份。</li><li><code>-l N, --line-length=N</code>: 为<code>l</code>命令指定所需的换行长度<code>N</code>。</li><li><code>--POSIX</code>: 禁用所有<code>GNU</code>扩展。</li><li><code>-r, --regexp-extended</code>: 在脚本中使用扩展的正则表达式。</li><li><code>-s, --separate</code>: 将文件视为单独的文件，而不是单个连续的长文件流。</li><li><code>-u, --unbuffered</code>: 从输入文件中加载少量数据，并更频繁地刷新输出缓冲区。</li><li><code>--help</code>: 输出帮助信息。</li><li><code>--version</code>: 输出版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><code>file.txt</code>文件内容如下。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>unix is great os. unix is opensource. unix is free os.
learn operating system.
unix linux which one you choose.
unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.
</code></pre></div><p>将文件中的每行的第一个单词<code>unix</code>替换为<code>linux</code>，要保存的话需要使用输出重定向。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/&quot;</span> file.txt

<span class="token comment"># linux is great os. unix is opensource. unix is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># linux linux which one you choose.</span>
<span class="token comment"># linux is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.</span>
</code></pre></div><p>替换行中模式的第<code>2</code>个匹配项，将行中出现的第二个单词<code>unix</code>替换为<code>linux</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/2&quot;</span> file.txt

<span class="token comment"># unix is great os. linux is opensource. unix is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># unix linux which one you choose.</span>
<span class="token comment"># unix is easy to learn.linux is a multiuser os.Learn unix .unix is a powerful.</span>
</code></pre></div><p>使用替换标志<code>/g</code>全局替换指定<code>sed</code>命令来替换行中所有出现的字符串。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/g&quot;</span> file.txt

<span class="token comment"># linux is great os. linux is opensource. linux is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># linux linux which one you choose.</span>
<span class="token comment"># linux is easy to learn.linux is a multiuser os.Learn linux .linux is a powerful.</span>
</code></pre></div><p>指定第<code>2</code>个之后的全部匹配模式的字符进行替换。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&quot;s/unix/linux/2g&quot;</span> file.txt

<span class="token comment"># unix is great os. linux is opensource. linux is free os.</span>
<span class="token comment"># learn operating system.</span>
<span class="token comment"># unix linux which one you choose.</span>
<span class="token comment"># unix is easy to learn.linux is a multiuser os.Learn linux .linux is a powerful</span>
</code></pre></div><p>用括号括住每个单词的第一个字符，在括号中打印每个单词的第一个字符。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>echo &quot;Welcome To The World&quot; | sed &quot;s/\\(\\b[A-Z]\\)/\\(\\1\\)/g&quot;

# (W)elcome (T)o (T)he (W)orld
</code></pre></div><p>可以限制<code>sed</code>命令替换特定行号上的字符串。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>sed &quot;3 s/unix/linux/g&quot; file.txt

# unix is great os. unix is opensource. unix is free os.
# learn operating system.
# linux linux which one you choose.
# unix is easy to learn.unix is a multiuser os.Learn unix .unix is a powerful.
</code></pre></div>`,21),t=[i];function c(l,u){return n(),s("div",null,t)}const r=e(o,[["render",c],["__file","sed.html.vue"]]);export{r as default};
