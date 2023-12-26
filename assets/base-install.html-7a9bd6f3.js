import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a,b as n,d as l,e as s}from"./app-be253e4c.js";const i={},r=s(`<h1 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h1><h2 id="cd" tabindex="-1"><a class="header-anchor" href="#cd" aria-hidden="true">#</a> cd</h2><p>Change Directory的缩写，用来变换工作目录的命令</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#使用绝对路径切换到 test 目录</span>
<span class="token builtin class-name">cd</span> /root/test/

<span class="token comment">#使用相对路径切换到 test 目录</span>
<span class="token builtin class-name">cd</span> ./test/

<span class="token comment"># 表示回到自己的家目录，亦即是 /root 这个目录</span>
<span class="token builtin class-name">cd</span> ~

<span class="token comment"># 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
</code></pre></div><h2 id="ls" tabindex="-1"><a class="header-anchor" href="#ls" aria-hidden="true">#</a> ls</h2><p>列出目录及文件名</p><ul><li><code>-a</code> ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)</li><li><code>-d</code> ：仅列出目录本身，而不是列出目录内的文件数据(常用)</li><li><code>-l</code> ：长数据串列出，包含文件的属性与权限等等数据；(常用)</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-a</span>
<span class="token function">ls</span> <span class="token parameter variable">-d</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span>
<span class="token comment"># 将目录下的所有文件列出来(含属性与隐藏档)</span>
<span class="token function">ls</span> <span class="token parameter variable">-al</span>
</code></pre></div><h2 id="pwd" tabindex="-1"><a class="header-anchor" href="#pwd" aria-hidden="true">#</a> pwd</h2><p>Print Working Directory 的缩写，显示目前所在目录的命令</p><ul><li><code>-P</code> ：显示出确实的路径，而非使用链接 (link) 路径。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>
<span class="token builtin class-name">pwd</span> <span class="token parameter variable">-P</span>
</code></pre></div><h2 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h2><p>创建新的目录</p><ul><li><code>-m</code> ：直接配置文件的权限！</li><li><code>-p</code> ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来！</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 创建test目录</span>
<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>

<span class="token comment">## 创建test目录，并手动配置权限，例如： rwx--x--x 711</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-m</span> <span class="token number">711</span> <span class="token builtin class-name">test</span>

<span class="token comment">## 递归创建，避免路径不存在</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token builtin class-name">test</span>

</code></pre></div><h2 id="rmdir" tabindex="-1"><a class="header-anchor" href="#rmdir" aria-hidden="true">#</a> rmdir</h2><p>删除空的目录</p><ul><li><code>-p</code> ：从该目录起，一次删除多级空目录</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 删除test/目录下的空目录</span>
<span class="token function">rmdir</span> test/

<span class="token comment">## 删除多级空目录</span>
<span class="token function">rmdir</span> <span class="token parameter variable">-p</span> test/aaa/bbb
</code></pre></div><h2 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h2><p>拷贝文件和目录</p><ul><li><p><code>-a</code>：相当于 -pdr 的意思</p></li><li><p><code>-d</code>：若来源档为链接档的属性(link file)，则复制链接档属性而非文件本身；</p></li><li><p><code>-f</code>：为强制(force)的意思，若目标文件已经存在且无法开启，则移除后再尝试一次；</p></li><li><p><code>-i</code>：<strong>若目标档(destination)已经存在时，在覆盖时会先询问动作的进行(常用)</strong></p></li><li><p><code>-l</code>：进行硬式链接(hard link)的链接档创建，而非复制文件本身；</p></li><li><p><code>-p</code>：<strong>连同文件的属性一起复制过去，而非使用默认属性(备份常用)；</strong></p></li><li><p><code>-r</code>：<strong>递归持续复制，用于目录的复制行为；(常用)</strong></p></li><li><p><code>-s</code>：复制成为符号链接档 (symbolic link)，亦即『捷径』文件；</p></li><li><p><code>-u</code>：若 destination 比 source 旧才升级 destination ！</p></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> ~/test /tmp/test

<span class="token function">cp</span> <span class="token parameter variable">-i</span> ~/test /tmp/test
</code></pre></div><h2 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h2><p>移动文件与目录，或修改名称</p><ul><li><code>-f</code> ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；</li><li><code>-i</code> ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！</li><li><code>-u</code> ：若目标文件已经存在，且 source 比较新，才会升级 (update)</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 基本格式</span>
<span class="token function">mv</span> <span class="token punctuation">[</span>-fiu<span class="token punctuation">]</span> <span class="token builtin class-name">source</span> destination
<span class="token function">mv</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> source1 source2 source3 <span class="token punctuation">..</span><span class="token punctuation">..</span> directory


<span class="token function">mv</span> sourceDir targetDir
<span class="token function">mv</span> <span class="token parameter variable">-f</span> sourceDir targetDir




</code></pre></div><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> rm</h2><p>移除文件或目录</p><ul><li>-f ： <strong>强制删除，就是 force 的意思，忽略不存在的文件，不会出现警告信息；</strong></li><li>-i ：互动模式，在删除前会询问使用者是否动作</li><li>-r ：<strong>递归删除！最常用在目录的删除了</strong>！</li></ul><h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><p>取出文件前面几行</p><ul><li><code>-n</code> ：后面接数字，代表显示几行的意思</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-10</span> running.log
</code></pre></div><h2 id="tail" tabindex="-1"><a class="header-anchor" href="#tail" aria-hidden="true">#</a> tail</h2><p>取出文件后面几行，一般用来查看日志</p><ul><li><code>-n</code> ：后面接数字，代表显示几行的意思</li><li><code>-f</code> ：表示持续侦测后面所接的文件名，按[ctrl]-c结束</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">tail</span> <span class="token punctuation">[</span>-n number<span class="token punctuation">]</span> 文件 

<span class="token comment">## 查看10行日志</span>
<span class="token function">tail</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-10</span> running.log
</code></pre></div><h2 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> cat</h2><p>由第一行开始显示文件内容，对于大文件谨慎使用</p><ul><li><code>-A</code> ：相当於 -vET 的整合选项，可列出一些特殊字符而不是空白而已；</li><li><code>-b</code> ：列出行号，仅针对非空白行做行号显示，空白行不标行号！</li><li><code>-E</code> ：将结尾的断行字节 $ 显示出来；</li><li><code>-n</code> ：列印出行号，连同空白行也会有行号，与 -b 的选项不同；</li><li><code>-T</code> ：将 [tab] 按键以 ^I 显示出来；</li><li><code>-v</code> ：列出一些看不出来的特殊字符</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查看</span>
<span class="token function">cat</span> config.js

<span class="token comment">## 将多个文件合成一个</span>
<span class="token function">cat</span> file1.txt file2.txt <span class="token operator">&gt;</span>newFile.txt

<span class="token comment">## 创建新的编辑文件</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>file.txt 

<span class="token comment"># 此处必须使用两个小于号，EOF表示结束标记，既读到EOF就结束</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span>test.txt<span class="token operator">&lt;&lt;</span>EOF 
<span class="token operator">&gt;</span> hello world
<span class="token operator">&gt;</span> linux centos
<span class="token operator">&gt;</span> EOF

<span class="token comment">## EOF必须成对出现，也可以使用其他的成对标签替换，结尾的EOF必须定格编写</span>

<span class="token comment">## 覆盖重定向需要以END开始，以END结束</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> <span class="token number">1</span>.txt <span class="token operator">&lt;&lt;</span>END
<span class="token operator">&gt;</span> <span class="token number">1</span>
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span> END

<span class="token comment"># 再执行一次</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> <span class="token number">1</span>.txt <span class="token operator">&lt;&lt;</span>END
<span class="token operator">&gt;</span> <span class="token number">2</span>
<span class="token operator">&gt;</span> END

<span class="token comment"># 查看1.txt讲第一次是写入信息清空了</span>
<span class="token function">cat</span> <span class="token number">1</span>.txt
<span class="token number">2</span>

</code></pre></div><h2 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 直接输出文本</span>
<span class="token builtin class-name">echo</span> hello 
<span class="token comment"># 解压使用引号将内容括起来，单引号，双引号均可</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;hello&#39;</span>
<span class="token comment">#使用-e可以识别特殊字符</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;hello<span class="token entity" title="\\t">\\t</span>world&quot;</span> 
</code></pre></div><p>echo可以配合重定向符将内容输入到文件</p><ul><li><code>&gt;</code> :为重定向符号，表示清除原文件里面的所有内容，然后将内容追加到文件的末尾</li><li><code>&gt;&gt;</code> :为追加重定向符号，即追加内容到文件的尾部（文件的最后一行）。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 文本追加到文件中</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;&gt;</span>hello.txt <span class="token comment">#文件会被自动创建</span>

<span class="token comment">## test.sh内容</span>
<span class="token comment">#!/bin/sh</span>
<span class="token builtin class-name">read</span> name 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$name</span> It is a test&quot;</span>

<span class="token comment">## 执行</span>
<span class="token function">sh</span> test.sh
OK                     <span class="token comment">#标准输入</span>
OK It is a <span class="token builtin class-name">test</span>        <span class="token comment">#输出</span>

<span class="token comment">## 换行</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;OK! <span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token comment"># -e 开启转义</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;It is a test&quot;</span>

<span class="token comment">## 不换行</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;OK! <span class="token entity" title="\\c">\\c</span>&quot;</span> <span class="token comment"># -e 开启转义 \\c 不换行</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;It is a test&quot;</span>

<span class="token comment">## 显示命令执行结果  执行函数date</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>

</code></pre></div><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h2>`,49),d={href:"https://www.cnblogs.com/chentiao/p/16626503.html",target:"_blank",rel:"noopener noreferrer"},u=s(`<ul><li><code>-i</code> ： 搜索时候忽略大小写</li><li>-n 列出所有的匹配行，显示行号</li><li>-v 反向选择</li><li>-c 只输出匹配行的数量</li><li>-l 只列出符合匹配的文件名，不列出具体的匹配行</li><li>-h 查询多文件时不显示文件名</li><li>-r 递归搜索</li><li>-q 禁止输出任何结果，已退出状态表示搜索是否成功</li><li>--color=auto 将找到的关键字加上颜色显示</li><li>-E, --extended-regexp PATTERN 是一个可扩展的正则表达式(缩写为 ERE)</li><li>-B, --before-context=NUM 打印以文本起始的NUM 行</li><li>-A, --after-context=NUM 打印以文本结尾的NUM 行</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 删除掉空行，&quot;^$&quot; 表示空行</span>
<span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;^$&quot;</span> test.txt

<span class="token comment">## 过滤不包含sbin关键词，并输出行号</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token parameter variable">-v</span> <span class="token string">&quot;sbin&quot;</span> test.txt
</code></pre></div><h2 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h2><p>sed是Stream Editor（字符流编辑器）的缩写，简称流编辑器。 ed是操作、过滤和转换文本内容的强大工具。sed的常用功能包含对文件实现快速增删改查（增加、删 除、修改、查询），其中查询的功能中最常用的两大功能是过滤（过滤指定字符串）和取行（取出指定 的行）。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 格式</span>
<span class="token function">sed</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> <span class="token punctuation">[</span>sed内置命令字符<span class="token punctuation">]</span> <span class="token punctuation">[</span>输入文件<span class="token punctuation">]</span>



</code></pre></div><h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h2><p><code>Awk</code>是一种用于高级文本处理的通用脚本语言，其主要用作报告和分析工具，与大多数其他程序性编程语言不同，<code>Awk</code>是数据驱动的，也就是说需要定义一组针对输入文本要执行的操作，然后其获取输入数据，对其进行转换，然后将结果发送到标准输出。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token punctuation">[</span> <span class="token parameter variable">-F</span> fs <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">var</span><span class="token operator">=</span>value <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token string">&#39;prog&#39;</span> <span class="token operator">|</span> <span class="token parameter variable">-f</span> progfile <span class="token punctuation">]</span> <span class="token punctuation">[</span> <span class="token function">file</span> <span class="token punctuation">..</span>. <span class="token punctuation">]</span>
</code></pre></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li><code>-F fs</code>: 将输入字段分隔符设置为正则表达式<code>fs</code>。</li><li><code>-v var=value</code>: 在执行<code>awk</code>程序之前，将值赋值给变量<code>var</code>。</li><li><code>&#39;prog&#39;</code>: <code>awk</code>程序。</li><li><code>-f progfile</code>: 指定文件<code>progfile</code>，其中包含要执行的<code>awk</code>程序。</li><li><code>file ...</code>: 由指定的<code>awk</code>程序处理的文件。</li></ul><p>示例文件<code>example.txt</code>文件内容如下：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Bucks Milwaukee    60 22 0.732 
Raptors Toronto    55 24 0.707 
76ers Philadelphia 51 31 0.622
Celtics Boston     33 33 0.598
Pacers Indiana     30 34 0.585
</code></pre></div><p>输出<code>example.txt</code>的第<code>3</code>个字段。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;{ print $3 }&#39;</span> example.txt
<span class="token comment"># 60</span>
<span class="token comment"># 55</span>
<span class="token comment"># 51</span>
<span class="token comment"># 33</span>
<span class="token comment"># 30</span>
</code></pre></div><p>使用正则表达式匹配出以<code>R</code>开头的组。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;/^R/ { print $1,$2,$3,$4 }&#39;</span> example.txt
<span class="token comment"># Raptors Toronto 55 24</span>
</code></pre></div><p>使用<code>BEGIN</code>以及<code>END</code>输出在处理记录之前与之后执行的操作，处理过程为输出第二个字段包含<code>Tor</code>的组。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;BEGIN { print &quot;Start Processing&quot; }; $2 ~ /Tor/ {print $1,$2,$3,$4 }; END { print &quot;End Processing&quot; }&#39;</span> example.txt
<span class="token comment"># Start Processing</span>
<span class="token comment"># Raptors Toronto 55 24</span>
<span class="token comment"># End Processing</span>
</code></pre></div>`,18);function k(h,m){const e=o("ExternalLinkIcon");return c(),p("div",null,[r,a("p",null,[n("参考： "),a("a",d,[n("https://www.cnblogs.com/chentiao/p/16626503.html"),l(e)])]),u])}const f=t(i,[["render",k],["__file","base-install.html.vue"]]);export{f as default};
