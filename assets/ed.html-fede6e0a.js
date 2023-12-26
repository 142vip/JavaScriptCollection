import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as d,e as n}from"./app-be253e4c.js";const c={},o=n(`<h1 id="ed命令" tabindex="-1"><a class="header-anchor" href="#ed命令" aria-hidden="true">#</a> ed命令</h1><p><code>ed</code>命令是文本编辑器，用于文本编辑，<code>ed</code>是<code>Linux</code>中功能最简单的文本编辑程序，一次仅能编辑一行而非全屏幕方式的操作。<code>ed</code>命令并不是一个常用的命令，一般使用比较多的是<code>vi</code>指令，但<code>ed</code>文本编辑器对于编辑大文件或对于在<code>shell</code>脚本程序中进行文本编辑很有用。如果使用文件名参数调用<code>ed</code>，则文件的副本将被读入编辑器的缓冲区，对该副本进行更改，而不是直接对文件本身进行更改。退出<code>ed</code>后，任何未使用<code>w</code>命令显式保存的更改都将丢失。编辑有两种不同的模式：命令和输入。第一次调用时，<code>ed</code>处于命令模式，在这种模式下，命令从标准输入中读取并执行以操作编辑器缓冲区的内容。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ed <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-G, --traditional</code>: 在兼容模式下运行。</li><li><code>-l, --loose-exit-status</code>: 即使命令失败，也以零状态退出(正常终止)。例如如果将<code>ed</code>设置为<code>crontab</code>的编辑器，则此选项很有用。</li><li><code>-p, --prompt=STRING</code>: <code>ed</code>通常在空白行等待用户输入，此选项将使用字符串作为提示。</li><li><code>-r, --restricted</code>: 在受限模式下运行。</li><li><code>-s, --quiet, --silent</code>: 禁止诊断。</li><li><code>-v, --verbose</code>: 详细操作。</li><li><code>-h, --help</code>: 显示帮助信息。</li><li><code>-V, --version</code>: 显示版本信息。</li></ul><h2 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码" aria-hidden="true">#</a> 状态码</h2><ul><li><code>0</code>表示正常退出。</li><li><code>1</code>表示环境问题，例如文件未找到、无效标志、<code>I/O</code>错误等等。</li><li><code>2</code>表示损坏或无效的输入文件。</li><li><code>3</code>表示内部一致性错误(如软件<code>bug</code>)，导致<code>ed</code>死机。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>比较完整的编辑示例。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>ed
a
My name is Titan.
And I love Perl very much.
<span class="token builtin class-name">.</span>
i
I am <span class="token number">24</span>.
<span class="token builtin class-name">.</span>
c
I am <span class="token number">24</span> years old. 
<span class="token builtin class-name">.</span>
w readme.txt
q
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>ed                          # 激活 ed 命令 
a                           # 告诉 ed 我要编辑新文件 
My name is Titan.           # 输入第一行内容 
And I love Perl very much.  # 输入第二行内容 
.                           # 返回 ed 的命令行状态 
i                           # 告诉 ed 我要在最后一行之前插入内容 
I am 24.                    # 将 I am 24. 插入 My name is Titan. 和 And I love Perl very much. 之间 
.                           # 返回 ed 的命令行状态 
c                           # 告诉 ed 我要替换最后一行输入内容 
I am 24 years old.          # 将 I am 24. 替换成 I am 24 years old. ，这里替换的是最后输的内容
.                           # 返回 ed 的命令行状态 
w readme.txt                # 将文件命名为 readme.txt 并保存，如果是编辑已经存在的文件，只需要敲入 w 即可
q                           # 完全退出 ed 编辑器 
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>cat readme.txt
# My name is Titan.
# I am 24 years old. 
# And I love Perl very much.
</code></pre></div>`,13),s=[o];function t(l,i){return a(),d("div",null,s)}const p=e(c,[["render",t],["__file","ed.html.vue"]]);export{p as default};
