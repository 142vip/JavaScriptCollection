import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-be253e4c.js";const t={},o=e(`<h1 id="fgrep命令" tabindex="-1"><a class="header-anchor" href="#fgrep命令" aria-hidden="true">#</a> fgrep命令</h1><p>当需要搜索包含很多正则表达式元字符的字符串时，例如<code>$</code>、<code>^</code>等，<code>fgrep</code>很有用，其通过指定搜索字符串包含固定字符，从而无需对每个字符进行转义用反斜杠，如果搜索的字符串包含换行符，则每行将被视为要在搜索中匹配的单个固定字符字符串。也就是说<code>fgrep</code>是用来搜索固定字符的，固定字符表示字符串是按字面意义解释的-元字符不存在，因此不能使用正则表达式，运行<code>fgrep</code>与使用<code>-F</code>选项运行<code>grep</code>效果相同。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> <span class="token punctuation">[</span>-b<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c<span class="token punctuation">]</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>-i<span class="token punctuation">]</span> <span class="token punctuation">[</span>-l<span class="token punctuation">]</span> <span class="token punctuation">[</span>-n<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>-x<span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> pattern_list<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f pattern-file<span class="token punctuation">]</span> <span class="token punctuation">[</span>pattern<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-b</code>: 在每一行前面加上找到该行所在的块号，这在根据上下文(第一个块为<code>0</code>)定位块号时非常有用。</li><li><code>-c</code>: 只打印包含模式的行数。</li><li><code>-h</code>: 搜索多个文件时禁止打印文件。</li><li><code>-i</code>: 在比较时忽略大小写的区别。</li><li><code>-l</code>: 打印一次具有匹配行的文件名称，用换行分隔，当模式出现多次时，不会重复文件名。</li><li><code>-n</code>: 在文件中，在每一行前面加上它的行号(第一行是<code>1</code>)。</li><li><code>-s</code>: 静默工作，也就是说只显示错误消息，这对于检查错误状态非常有用。</li><li><code>-v</code>: 打印除包含模式的行以外的所有行。</li><li><code>-x</code>: 仅打印完全匹配的行。</li><li><code>-e pattern_list</code>: 在<code>pattern list</code>中搜索字符串，当字符串以<code>-</code>开头时很有用。</li><li><code>-f pattern-file</code>: 从模式文件中获取模式列表。</li><li><code>pattern</code>: 指定在搜索输入期间使用的模式。</li><li><code>file</code>: 要搜索模式的文件的路径名，如果没有指定文件参数，将使用标准输入。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><code>hello.c</code>文件内容如下:</p><div class="language-c" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>匹配带有<code>Hello</code>的行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> Hello hello.c
<span class="token comment">#    printf(&quot;Hello World\\n&quot;);</span>
<span class="token comment">#    printf(&quot;Hello World\\n&quot;);</span>
<span class="token comment">#    printf(&quot;Hello World\\n&quot;);</span>
</code></pre></div><p>匹配带有<code>Hello</code>行的数量。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> <span class="token parameter variable">-c</span> Hello hello.c
<span class="token comment"># 3</span>
</code></pre></div><p>反转匹配的意义，选择不匹配<code>Hello</code>的行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> <span class="token parameter variable">-v</span> Hello hello.c
<span class="token comment"># #include &lt;stdio.h&gt;</span>
<span class="token comment"># #include &lt;stdlib.h&gt;</span>
<span class="token comment">#</span>
<span class="token comment"># int main() {</span>
<span class="token comment">#    return 0;</span>
<span class="token comment"># }</span>
</code></pre></div><p>匹配带有<code>i</code>的行并忽略大小写。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> <span class="token parameter variable">-i</span> I hello.c
<span class="token comment"># #include &lt;stdio.h&gt;</span>
<span class="token comment"># #include &lt;stdlib.h&gt;</span>
<span class="token comment"># int main() {</span>
<span class="token comment">#    printf(&quot;Hello World\\n&quot;);</span>
<span class="token comment">#    printf(&quot;Hello World\\n&quot;);</span>
<span class="token comment">#    printf(&quot;Hello World\\n&quot;);</span>
</code></pre></div><p>仅输出与文件整行匹配的行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;   return 0;&quot;</span> hello.c
<span class="token comment">#    return 0;</span>
</code></pre></div><p>匹配带有<code>Hello</code>的行并输出行号。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> <span class="token parameter variable">-n</span> Hello hello.c
<span class="token comment"># 5:   printf(&quot;Hello World\\n&quot;);</span>
<span class="token comment"># 6:   printf(&quot;Hello World\\n&quot;);</span>
<span class="token comment"># 7:   printf(&quot;Hello World\\n&quot;);</span>
</code></pre></div><p>递归匹配当前目录下所有文件中能够匹配<code>h*</code>的文件，请注意由于使用<code>fgrep</code>，命令是不会匹配<code>*</code>的模式，而是将其作为固定字符<code>*</code>去匹配，所以此时是没有匹配的，如果使用<code>grep</code>以及相同的参数，则能够输出行号并忽略大小写，注意实际在终端中匹配成功的位置会使用红色字体标注。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fgrep</span> <span class="token parameter variable">-rni</span> <span class="token string">&quot;h*&quot;</span> ./
<span class="token comment"># [输出为空]</span>
</code></pre></div>`,23),c=[o];function p(l,i){return a(),s("div",null,c)}const r=n(t,[["render",p],["__file","fgrep.html.vue"]]);export{r as default};
