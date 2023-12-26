import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e as s}from"./app-be253e4c.js";const c={},o=s(`<h1 id="sort命令" tabindex="-1"><a class="header-anchor" href="#sort命令" aria-hidden="true">#</a> sort命令</h1><p><code>sort</code>命令用于将文本文件内容加以排序，可针对文本文件的内容，以行为单位来排序。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token function">sort</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. --files0-from<span class="token operator">=</span>F
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-b, --ignore-leading-blanks</code>: 忽略前导空格。</li><li><code>-d, --dictionary-order</code>: 只考虑空格和字母数字字符。</li><li><code>-f, --ignore-case</code>: 将小写字符转为大写字符。</li><li><code>-g, --general-numeric-sort</code>: 按一般数值进行比较。</li><li><code>-i, --ignore-nonprinting</code>: 只考虑可打印字符。</li><li><code>-M, --month-sort</code>: 比较<code>JAN &lt; ... &lt; DEC</code>。</li><li><code>-h, --human-numeric-sort</code>: 比较人类可读的数字，例如<code>2K</code>、<code>1G</code>。</li><li><code>-n, --numeric-sort</code>: 根据字符串数值进行比较。</li><li><code>-R, --random-sort</code>: 按键的随机哈希排序。</li><li><code>--random-source=FILE</code>: 从<code>FILE</code>中获取随机字节。</li><li><code>-r, --reverse</code>: 反转比较结果。</li><li><code>--sort=WORD</code>: 根据<code>WORD</code>排序：一般数字<code>-g</code>，chan数字<code>-h</code>，月份<code>-M</code>，数字<code>-n</code>，随机-<code>R</code>，版本<code>-V</code>。</li><li><code>--batch-size=NMERGE</code>: 一次最多合并<code>NMERGE</code>输入，对于更多输入，请使用临时文件。</li><li><code>-c, --check, --check=diagnose-first</code>: 检查已排序的输入，不排序。</li><li><code>-C, --check=quiet, --check=silent</code>: 类似于<code>-c</code>但不报告第一行错误。</li><li><code>--compress-program=PROG</code>: 用<code>PROG</code>压缩临时文件，用<code>PROG-d</code>解压临时文件。</li><li><code>--debug</code>: 注释行中用于排序的部分，并向<code>stderr</code>警告可疑用法。</li><li><code>--files0-from=F</code>: 从文件<code>F</code>中以<code>NUL</code>结尾的名称指定的文件读取输入，如果<code>F</code>是<code>-</code>，则从标准输入读取名称。</li><li><code>-k, --key=POS1[,POS2]</code>: 在<code>POS1</code>处开始键(原点<code>1</code>)，在<code>POS2</code>处结束键(默认行结束)。</li><li><code>-m, --merge</code>: 合并已排序的文件，不排序。</li><li><code>-o, --output=FILE</code>: 将结果写入<code>FILE</code>而不是标准输出。</li><li><code>-s, --stable</code>: 通过禁用最后的比较来稳定排序。</li><li><code>-t, --field-separator=SEP</code>: 使用<code>SEP</code>代替非空到空的转换。</li><li><code>-T, --temporary-directory=DIR</code>: 将<code>DIR</code>用于临时文件，而不是<code>$TMPDIR</code>或<code>/tmp</code>多个选项指定多个目录。</li><li><code>--parallel=N</code>: 将同时运行的排序数更改为<code>N</code>。</li><li><code>-u, --unique</code>: 对于<code>-c</code>检查严格的顺序，只输出相等运行的第一个。</li><li><code>-z, --zero-terminated</code>: 以<code>0</code>字节结束行，而不是换行。</li><li><code>--help</code>: 输出帮助信息。</li><li><code>--version</code>: 输出版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><code>file.txt</code>、<code>file1.txt</code>、<code>file2.txt</code>文件内容如下。</p><div class="language-text" data-ext="text"><pre class="language-text"><code># file.txt
abhishek
chitransh
satish
rajan
naveen
divyam
harsh

# file1.txt
50
39
15
89
200

# file2.txt
abc
apple
BALL
Abc
bat
bat
</code></pre></div><p>对<code>file.txt</code>文件内容进行排序，要保存的话需要使用输出重定向。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> file.txt
<span class="token comment"># abhishek</span>
<span class="token comment"># chitransh</span>
<span class="token comment"># divyam</span>
<span class="token comment"># harsh</span>
<span class="token comment"># naveen</span>
<span class="token comment"># rajan</span>
<span class="token comment"># satish</span>

<span class="token function">sort</span> file2.txt
<span class="token comment"># abc</span>
<span class="token comment"># Abc</span>
<span class="token comment"># apple</span>
<span class="token comment"># BALL</span>
<span class="token comment"># bat</span>
<span class="token comment"># bat</span>
</code></pre></div><p>可以使用<code>-r</code>标志执行逆序排序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-r</span> file.txt
<span class="token comment"># satish</span>
<span class="token comment"># rajan</span>
<span class="token comment"># naveen</span>
<span class="token comment"># harsh</span>
<span class="token comment"># divyam</span>
<span class="token comment"># chitransh</span>
<span class="token comment"># abhishek</span>
</code></pre></div><p>使用<code>-n</code>对数字进行排序，不使用<code>-n</code>的话则会使用字典序排序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-n</span> file1.txt
<span class="token comment"># 15</span>
<span class="token comment"># 39</span>
<span class="token comment"># 50</span>
<span class="token comment"># 89</span>
<span class="token comment"># 200</span>

<span class="token function">sort</span> file1.txt
<span class="token comment"># 15</span>
<span class="token comment"># 200</span>
<span class="token comment"># 39</span>
<span class="token comment"># 50</span>
<span class="token comment"># 89</span>
</code></pre></div><p>要对带有反向数字数据的文件进行排序，我们可以使用下面<code>-nr</code>两个选项的组合。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-nr</span> file1.txt
<span class="token comment"># 200</span>
<span class="token comment"># 89</span>
<span class="token comment"># 50</span>
<span class="token comment"># 39</span>
<span class="token comment"># 15</span>
</code></pre></div><p>使用<code>-u</code>排序并删除重复项。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-u</span> file2.txt
<span class="token comment"># abc</span>
<span class="token comment"># Abc</span>
<span class="token comment"># apple</span>
<span class="token comment"># BALL</span>
<span class="token comment"># bat</span>
</code></pre></div><p>使用<code>-c</code>检查文件是否已经按照顺序排序。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token parameter variable">-c</span> file2.txt
<span class="token comment"># sort: file2.txt:4: disorder: Abc</span>
</code></pre></div>`,21),t=[o];function d(l,p){return n(),a("div",null,t)}const m=e(c,[["render",d],["__file","sort.html.vue"]]);export{m as default};
