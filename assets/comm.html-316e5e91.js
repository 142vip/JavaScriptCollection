import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as o,e as a}from"./app-be253e4c.js";const c={},s=a(`<h1 id="comm命令" tabindex="-1"><a class="header-anchor" href="#comm命令" aria-hidden="true">#</a> comm命令</h1><p><code>comm</code>命令用于比较两个已排过序的文件，该命令会一列列地比较两个已排序文件的差异，并将其结果显示出来，如果没有指定任何参数，则会把结果分成<code>3</code>列显示：第<code>1</code>列仅是在第<code>1</code>个文件中出现过的列，第<code>2</code>列是仅在第<code>2</code>个文件中出现过的列，第<code>3</code>列则是在第<code>1</code>与第<code>2</code>个文件里都出现过的列，若给予的文件名称为<code>-</code>，则<code>comm</code>命令会从标准输入设备读取数据。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">comm</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE1 FILE2
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-1</code>: 禁止列<code>1</code>(<code>FILE1</code>唯一的行)。</li><li><code>-2</code>: 禁止列<code>2</code> (<code>FILE2</code>唯一的行)。</li><li><code>-3</code>: 禁止列3(出现在两个文件中的行)。</li><li><code>--check-order</code>: 检查输入是否正确排序，即使所有输入行都是可配对的。</li><li><code>--nocheck-order</code>: 不检查输入是否正确排序。</li><li><code>--output-delimiter=STR</code>: 用字符串<code>STR</code>分隔列。</li><li><code>-z, --zero-terminated</code>: 指定行分隔符是<code>NUL</code>，不是换行符。</li><li><code>--help</code>: 显示帮助消息。</li><li><code>--version</code>: 输出版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p><code>recipe.txt</code>文件与<code>shopping-list.txt</code>文件内容，这两个文件不同，但许多行是相同的，并非所有的配方成分都在购物清单上，也不是购物清单上的所有成分都是食谱的一部分。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># recipe.txt</span>
All-Purpose Flour
Baking Soda
Bread
Brown Sugar
Chocolate Chips
Eggs
Milk
Salt
Vanilla Extract
White Sugar

<span class="token comment"># shopping-list.txt</span>
All-Purpose Flour
Bread
Brown Sugar
Chicken Salad
Chocolate Chips
Eggs
Milk
Onions
Pickles
Potato Chips
Soda Pop
Tomatoes
White Sugar
</code></pre></div><p>使用<code>comm</code>命令，其将读取这两个文件并给我们三列输出，在这里，每行输出的开头都有<code>0</code>、<code>1</code>或<code>2</code>个制表符，将输出分成三列：</p><ul><li>第一列<code>zero tabs</code>是只出现在第一个文件中的行。</li><li>第二列<code>one tabs</code>是只出现在第二个文件中的行。</li><li>第三列<code>two tabs</code>是出现在两个文件中的行。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">comm</span> recipe.txt shopping-list.txt
<span class="token comment">#                All-Purpose Flour</span>
<span class="token comment">#Baking Soda</span>
<span class="token comment">#                Bread</span>
<span class="token comment">#                Brown Sugar</span>
<span class="token comment">#        Chicken Salad</span>
<span class="token comment">#                Chocolate Chips</span>
<span class="token comment">#                Eggs</span>
<span class="token comment">#                Milk</span>
<span class="token comment">#        Onions</span>
<span class="token comment">#        Pickles</span>
<span class="token comment">#        Potato Chips</span>
<span class="token comment">#Salt</span>
<span class="token comment">#        Soda Pop</span>
<span class="token comment">#        Tomatoes</span>
<span class="token comment">#Vanilla Extract</span>
<span class="token comment">#                White Sugar</span>
</code></pre></div><p>比较<code>recipe.txt</code>文件与<code>shopping-list.txt</code>文件，并禁用第<code>1</code>与第<code>2</code>列的输出。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">comm</span> <span class="token parameter variable">-12</span> recipe.txt shopping-list.txt
<span class="token comment"># All-Purpose Flour</span>
<span class="token comment"># Bread</span>
<span class="token comment"># Brown Sugar</span>
<span class="token comment"># Chocolate Chips</span>
<span class="token comment"># Eggs</span>
<span class="token comment"># Milk</span>
<span class="token comment"># White Sugar</span>
</code></pre></div>`,14),t=[s];function d(l,p){return n(),o("div",null,t)}const r=e(c,[["render",d],["__file","comm.html.vue"]]);export{r as default};
