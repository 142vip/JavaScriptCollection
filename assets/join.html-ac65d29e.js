import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as a,e as s}from"./app-be253e4c.js";const c={},o=s(`<h1 id="join命令" tabindex="-1"><a class="header-anchor" href="#join命令" aria-hidden="true">#</a> join命令</h1><p><code>join</code>命令用于将两个文件中，指定栏位内容相同的行连接起来。其首先找出两个文件中指定栏位内容相同的行，并加以合并，再输出到标准输出设备。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE1 FILE2
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-a FILENUM</code>: 从<code>FILENUM</code>打印不成对的行，其中<code>FILENUM</code>是<code>1</code>或<code>2</code>，对应于<code>FILE1</code>或<code>FILE2</code>。</li><li><code>-e EMPTY</code>: 将缺少的输入字段替换为空。</li><li><code>-i, --ignore-case</code>: 比较字段时忽略大小写的差异。</li><li><code>-j FIELD</code>: 相当于<code>-1 FIELD -2 FIELD</code>。</li><li><code>-o FORMAT</code>: 构造输出线时遵守<code>FORMAT</code>。</li><li><code>-t CHAR</code>: 使用<code>CHAR</code>作为输入和输出字段分隔符。</li><li><code>-v FILENUM</code>: 类似于<code>-a FILENUM</code>，但不连接输出行。</li><li><code>-1 FIELD</code>: 加入文件<code>1</code>的这个<code>FIELD</code>。</li><li><code>-2 FIELD</code>: 加入文件<code>2</code>的这个<code>FIELD</code>。</li><li><code>--check-order</code>: 检查输入是否正确排序，即使所有输入行都可以配对。</li><li><code>--nocheck-order</code>: 不要检查输入是否正确排序。</li><li><code>--header</code>: 将每个文件的第一行视为字段标题，无需尝试将它们配对即可打印它们。</li><li><code>--help</code>: 显示帮助信息。</li><li><code>--version</code>: 显示版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><code>file1.txt</code>与<code>file2.txt</code>文件内容如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code># file1.txt
1 AAYUSH
2 APAAR
3 HEMANT
4 KARTIK
5 TIM

# file2.txt
1 101
2 102
3 103
4 104
</code></pre></div><p>使用<code>join</code>命令合并文件，为了合并两个文件，文件必须具有一些公共字段，此时两个文件中的公共字段均带有编号<code>1、2...</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH 101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre></div><p>使用<code>-a</code>选项打印<code>FILE1</code>中已成对的行并链接以及不成对的行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt <span class="token parameter variable">-a</span> <span class="token number">1</span>
<span class="token comment"># 1 AAYUSH 101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
<span class="token comment"># 5 TIM</span>

</code></pre></div><p>使用<code>-v</code>选项打印<code>FILE1</code>中不成对的行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt <span class="token parameter variable">-v</span> <span class="token number">1</span>
<span class="token comment"># 5 TIM</span>
</code></pre></div><p><code>join</code>会在第一个公共字段上组合文件行，该字段是默认值。但是这两个文件中的公共值不一定总是第一个列，所以<code>join</code>可以使用<code>-1, -2</code>指定公共值位置。<code>-1</code>和<code>-2</code>表示第一个和第二个文件，这些选项需要一个数字参数，该参数引用相应文件的连接字段。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable"><span class="token variable">\`</span>file1.txt<span class="token variable">\`</span></span>与<span class="token variable"><span class="token variable">\`</span>file2.txt<span class="token variable">\`</span></span>文件内容如下：
<span class="token comment"># file1.txt</span>
AAYUSH <span class="token number">1</span> 
APAAR <span class="token number">2</span>
HEMANT <span class="token number">3</span>
KARTIK <span class="token number">4</span>
TIM <span class="token number">5</span>

<span class="token comment"># file2.txt</span>
<span class="token number">101</span> <span class="token number">1</span>
<span class="token number">102</span> <span class="token number">2</span>
<span class="token number">103</span> <span class="token number">3</span>
<span class="token number">104</span> <span class="token number">4</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token parameter variable">-1</span> <span class="token number">2</span> <span class="token parameter variable">-2</span> <span class="token number">2</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH  101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre></div><p>对于上面的示例，我们直接使用<code>-j</code>参数也可以实现。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token parameter variable">-j</span> <span class="token number">2</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH  101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre></div>`,20),t=[o];function l(p,d){return e(),a("div",null,t)}const m=n(c,[["render",l],["__file","join.html.vue"]]);export{m as default};
