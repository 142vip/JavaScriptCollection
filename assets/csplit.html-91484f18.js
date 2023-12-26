import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-be253e4c.js";const c={},t=e(`<h1 id="csplit命令" tabindex="-1"><a class="header-anchor" href="#csplit命令" aria-hidden="true">#</a> csplit命令</h1><p><code>csplit</code>命令将用<code>PATTERN</code>分隔的<code>FILE</code>文件输出到文件<code>xx00</code>、<code>xx01</code>、<code>...</code>，并将每个文件的字节数输出到标准输出。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">csplit</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE PATTERN<span class="token punctuation">..</span>.
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-b, --suffix-format=FORMAT</code>: 使用<code>sprintf FORMAT</code>格式而不是<code>%02d</code>。</li><li><code>-f, --prefix=PREFIX</code>: 使用<code>PREFIX</code>代替<code>xx</code>。</li><li><code>-k, --keep-files</code>: 出错时不要删除输出文件。</li><li><code>-m, --suppress-matched</code>: 取消匹配<code>PATTERN</code>的行。</li><li><code>-n, --digits=DIGITS</code>: 使用指定的数字位数，而不是<code>2</code>。</li><li><code>-s, --quiet, --silent</code>: 不要打印输出文件大小的计数。</li><li><code>-z, --elide-empty-files</code>: 删除空输出文件。</li><li><code>--help</code>: 输出帮助信息。</li><li><code>--version</code>: 输出版本信息。</li></ul><h2 id="模式" tabindex="-1"><a class="header-anchor" href="#模式" aria-hidden="true">#</a> 模式</h2><p>如果文件被指定为破折号<code>-</code>，<code>csplit</code>将读取标准输入，每种模式可能是：</p><ul><li><code>INTEGER</code>: 复制到指定行号，但不包括指定行号。</li><li><code>/REGEXP/[OFFSET]</code>: 复制到但不包括匹配行。</li><li><code>%REGEXP%[OFFSET]</code>: 跳至但不包括匹配行。</li><li><code>{INTEGER}</code>: 重复上一个模式指定的次数。</li><li><code>{*}</code>: 尽可能多次重复前面的模式。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><code>list.txt</code>文件内容如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>1. Apples
2. Bananas
3. Oranges
4. Pineapples
5. Guava
</code></pre></div><p>使用<code>csplit</code>命令将此文件分为两部分，第二部分从第三行开始。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">cat</span> xx00
<span class="token comment"># 1. Apples</span>
<span class="token comment"># 2. Bananas</span>

<span class="token function">cat</span> xx01
<span class="token comment"># 3. Oranges</span>
<span class="token comment"># 4. Pineapples</span>
<span class="token comment"># 5. Guava</span>
</code></pre></div><p>使用<code>csplit</code>命令将此文件分为三部分。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token number">2</span> <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">cat</span> xx00
<span class="token comment"># 1. Apples</span>

<span class="token function">cat</span> xx01
<span class="token comment"># 2. Bananas</span>

<span class="token function">cat</span> xx02
<span class="token comment"># 3. Oranges</span>
<span class="token comment"># 4. Pineapples</span>
<span class="token comment"># 5. Guava</span>
</code></pre></div><p>使用自定义的分割前缀<code>aa</code>代替<code>xx</code>分割前缀。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token parameter variable">-f</span> aa <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">ls</span>
<span class="token comment"># aa00  aa01 list.txt</span>
</code></pre></div><p>使用三位数字代替默认的两位数字。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token parameter variable">-n</span> <span class="token number">3</span> <span class="token number">3</span>
<span class="token comment"># 21</span>
<span class="token comment"># 34</span>

<span class="token function">ls</span>
<span class="token comment"># list.txt  xx000  xx001</span>
</code></pre></div><p>使用模式定义分割规则，重复上一个模式指定的次数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">csplit</span> list.txt <span class="token number">2</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
<span class="token comment"># 10</span>
<span class="token comment"># 22</span>
<span class="token comment"># 23</span>

<span class="token function">ls</span> xx*
<span class="token comment"># xx00  xx01  xx02</span>
</code></pre></div>`,22),o=[t];function p(l,d){return s(),a("div",null,o)}const m=n(c,[["render",p],["__file","csplit.html.vue"]]);export{m as default};
