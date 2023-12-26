import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,e as o}from"./app-be253e4c.js";const d={},c=o(`<h1 id="look命令" tabindex="-1"><a class="header-anchor" href="#look命令" aria-hidden="true">#</a> look命令</h1><p><code>look</code>命令用于查询单词，仅需指定欲查询的字首字符串，它会显示所有开头字符串符合该条件的单词。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>look [-bdf] [-t char] string [file ...]
</code></pre></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ul><li><code>-a, --alternative</code>: 使用备用字典文件。</li><li><code>-d, --alphanum</code>: 使用普通字典字符集和顺序，即只比较空格和字母数字字符。如果未指定文件，则默认情况下此选项处于启用状态。</li><li><code>-f, --ignore-case</code>: 忽略字母字符的大小写，如果未指定文件，则默认情况下此选项处于启用状态。</li><li><code>-t, --terminate character</code>: 指定一个字符串终止字符，即仅比较字符串中直到第一个出现的字符，包括第一个出现的字符。</li><li><code>-V, --version</code>: 输出版本信息。</li><li><code>-h, --help</code>: 输出帮助信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>使用<code>look</code>查找以<code>ab</code>开头的单词。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>look ab
# Abbas
# Abbas&#39;s
# Abbasid
# Abbasid&#39;s
# Abbott
# Abbott&#39;s
# Abby
# ...
</code></pre></div><p>在文件中查找以<code>L</code>开头的单词并列出全句。</p><div class="language-text" data-ext="text"><pre class="language-text"><code># file.txt
HELLO LINUX!  
Linux is a free unix-type opterating system.  
This is a linux testfile!  
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>look L file.txt
Linux is a free unix-type opterating system.
</code></pre></div><p>在上述示例中使用<code>-t</code>指定字符串终止字符，即仅比较字符串中第一次出现之前(包括第一次出现)的字符。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>look -t E HEO file.txt
# HELLO LINUX!
</code></pre></div>`,14),i=[c];function l(n,s){return a(),t("div",null,i)}const x=e(d,[["render",l],["__file","look.html.vue"]]);export{x as default};
