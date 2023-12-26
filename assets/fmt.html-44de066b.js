import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as a}from"./app-be253e4c.js";const t={},o=a(`<h1 id="fmt命令" tabindex="-1"><a class="header-anchor" href="#fmt命令" aria-hidden="true">#</a> fmt命令</h1><p><code>fmt</code>命令用于编排文本文件，其会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备，若指定的文件名为<code>-</code>，则<code>fmt</code>指令会从标准输入设备读取数据。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">fmt</span> <span class="token punctuation">[</span>-WIDTH<span class="token punctuation">]</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-c, --crown-margin</code>: 保留前两行的缩进。</li><li><code>-p, --prefix=STRING</code>: 仅重新格式化以<code>STRING</code>开头的行，并将前缀重新附加到格式化后的行上。</li><li><code>-s, --split-only</code>: 拆分长行，但不再重新填充它们。</li><li><code>-t, --tagged-paragraph</code>: 第一行的缩进不同于第二行。</li><li><code>-u, --uniform-spacing</code>: 单词之间使用一个空格，句子后面使用两个空格。</li><li><code>-w, --width=WIDTH</code>: 最大行宽(默认为<code>75</code>列)。</li><li><code>-g, --goal=WIDTH</code>: 目标宽度(默认为宽度的<code>93％</code>)。</li><li><code>--help</code>: 输出帮助信息。</li><li><code>--version</code>: 输出版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>默认情况下，<code>fmt</code>不使用任何选项，将给定文件中存在的所有单词格式化为一行，当然默认单行最大宽度<code>75</code>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have</span>
<span class="token comment"># a</span>
<span class="token comment"># nice </span>
<span class="token comment"># day.</span>

<span class="token function">fmt</span> file.txt
<span class="token comment"># Hello everyone.  Have a nice day.</span>
</code></pre></div><p>格式化文件，并使用<code>-w</code>选项指定文件行最大宽度，添加单词超出长度则将单词换行。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have</span>
<span class="token comment"># a</span>
<span class="token comment"># nice </span>
<span class="token comment"># day.</span>

<span class="token function">fmt</span> <span class="token parameter variable">-w</span> <span class="token number">10</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have a</span>
<span class="token comment"># nice day.</span>
</code></pre></div><p><code>-s</code>选项分割了很长的行，但是不重新填充它们。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
<span class="token comment"># Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered,  it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails.</span>

<span class="token function">fmt</span> <span class="token parameter variable">-s</span> file.txt
<span class="token comment"># Love is patient, love is kind. It does not envy, it does not boast, it</span>
<span class="token comment"># is not proud. It is not rude, it is not self-seeking, it is not easily</span>
<span class="token comment"># angered,  it keeps no record of wrongs. Love does not delight in evil</span>
<span class="token comment"># but rejoices with the truth. It always protects, always trusts, always</span>
<span class="token comment"># hopes, always perseveres. Love never fails.</span>
</code></pre></div>`,13),c=[o];function p(l,i){return e(),s("div",null,c)}const m=n(t,[["render",p],["__file","fmt.html.vue"]]);export{m as default};
