import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,a as n,b as s,d as p,e as t}from"./app-be253e4c.js";const l="/JavaScriptCollection/assets/es6-standard-774d0913.png",k={},i=t('<h1 id="es6标准入门" tabindex="-1"><a class="header-anchor" href="#es6标准入门" aria-hidden="true">#</a> ES6标准入门</h1><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>ES6是下一代JavaScript语言标准的统称，每年6月发布一次修订版，迄今为止已经发布了3个版本，分别是ES2015、ES2016、ES2017。 本书根据ES2017标准，详尽介绍了所有新增的语法，对基本概念、设计目的和用法进行了清晰的讲解，给出了大量简单易懂的示例。 本书为中级难度，适合那些已经对JavaScript语言有一定了解的读者，可以作为学习这门语言最新进展的工具书，也可以作为参考手册供大家随时查阅新语法。 第3版增加了超过30%的内容，完全覆盖了ES2017标准，相比第2版介绍了更多的语法点，还调整了原有章节的文字表达，充实了示例，论述更准确，更易懂易学。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h3 id="ecmascript-vs-javascript" tabindex="-1"><a class="header-anchor" href="#ecmascript-vs-javascript" aria-hidden="true">#</a> ECMAScript VS JavaScript</h3><p>前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。</p><h3 id="ecmascript2015-vs-es6" tabindex="-1"><a class="header-anchor" href="#ecmascript2015-vs-es6" aria-hidden="true">#</a> ECMAScript2015 VS ES6</h3><p>ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”</p><h3 id="babel转码器" tabindex="-1"><a class="header-anchor" href="#babel转码器" aria-hidden="true">#</a> Babel转码器</h3><p>Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 转码前的箭头函数</span>
input<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// 转码后</span>
input<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="安装babel" tabindex="-1"><a class="header-anchor" href="#安装babel" aria-hidden="true">#</a> 安装Babel</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 本地安装</span>
<span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/core
</code></pre></div><h4 id="配置文件-babelrc" tabindex="-1"><a class="header-anchor" href="#配置文件-babelrc" aria-hidden="true">#</a> 配置文件.babelrc</h4><p>Babel 的配置文件是.babelrc，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>presets字段设定转码规则</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 最新转码规则</span>
$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/preset-env

<span class="token comment"># react 转码规则</span>
$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/preset-react
</code></pre></div><p>下载完成后，可以将规则键入到<code>.babelrc</code>文件中</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@babel/env&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;@babel/preset-react&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="let和const命令" tabindex="-1"><a class="header-anchor" href="#let和const命令" aria-hidden="true">#</a> let和const命令</h2><h3 id="let命令" tabindex="-1"><a class="header-anchor" href="#let命令" aria-hidden="true">#</a> let命令</h3><p>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，<strong>只在let命令所在的代码块内有效。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 函数内部定义变量</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token comment">//输出报错，let块级作用域</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token comment">// 输出1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> 
</code></pre></div><p>不存在变量提升:</p><blockquote><p>var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined</p></blockquote><p>let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// var</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">// 输出undefined</span>
<span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">// let</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// 输出ReferenceError错误</span>
<span class="token keyword">let</span> err <span class="token operator">=</span> <span class="token number">1</span>
</code></pre></div><p>暂时性死区:</p><blockquote><p>只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。</p></blockquote><p>ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，**从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错 **。</p><blockquote><p>代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在let命令声明变量tmp之前，都属于变量tmp的“死区”。</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// TDZ开始</span>
  tmp <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError</span>

  <span class="token keyword">let</span> tmp<span class="token punctuation">;</span> <span class="token comment">// TDZ结束</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>

  tmp <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。</strong></p><p>总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。</p><p>不允许重复声明:</p><blockquote><p>let不允许在相同作用域内，重复声明同一个变量。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>当然这样写是不报错的，但不建议</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">let</span> arg<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 不报错</span>
</code></pre></div><h3 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h3><p>ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 循环结束后，变量i并没有消失，泄露成了全局变量。</span>
<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><p>let为 JavaScript 新增了块级作用域。ES6 允许块级作用域的任意嵌套。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错情况</span>
<span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 此时并没有变量名instance,输出会报错</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 正常情况</span>
<span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 与上面的instance互不影响</span>
      <span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// IIFE 写法</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tmp <span class="token operator">=</span>
<span class="token operator">...</span>
  <span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 块级作用域写法</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> tmp <span class="token operator">=</span>
<span class="token operator">...</span>
  <span class="token punctuation">;</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre></div><p>块级作用域和函数声明：ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 按照 ES5 的规定以下情况都是非法的。</span>
<span class="token comment">// 情况一</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 情况二</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>ES6 引入了块级作用域，明确允许在块级作用域之中声明函数</p><blockquote><p>ES6 规定，块级作用域之中，<strong>函数声明语句的行为类似于let，在块级作用域之外不可引用。</strong></p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outside&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 重复声明函数f</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inside&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 运行会得到“inside”，因为在if内声明的函数f会被提升到函数头部，实际运行的代码如下。</span>
<span class="token comment">// ES5 环境</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outside&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inside&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>ES6 就完全不一样了，理论上会得到“I am outside!”。因为块级作用域内声明的函数类似于let，对作用域之外没有影响。但是，如果你真的在 ES6 浏览器中运行一下上面的代码，是会报错的，这是为什么呢？</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 浏览器的 ES6 环境</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outside&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 重复声明一次函数f</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inside&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: f is not a function</span>

</code></pre></div><p>上面的代码在 ES6 浏览器中，都会报错。</p><p>原来，如果改变了块级作用域内声明的函数的处理规则，显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题，ES6 在附录 B里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式。</p><p>允许在块级作用域内声明函数。 函数声明类似于var，即会提升到全局作用域或函数作用域的头部。 同时，函数声明还会提升到所在的块级作用域的头部。 注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。</p><p>根据这三条规则，浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量。上面的例子实际运行的代码如下。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 浏览器的 ES6 环境</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;outside&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;inside&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 执行函数</span>
  <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught TypeError: f is not a function</span>
</code></pre></div><p>考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 块级作用域内部的函数声明语句，建议不要使用</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;secret&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 块级作用域内部，优先使用函数表达式</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&#39;secret&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>另外，还有一个需要注意的地方。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 第一种写法，报错</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 第二种写法，不报错</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>上面代码中，第一种写法没有大括号，所以不存在块级作用域，而let只能出现在当前作用域的顶层，所以报错。第二种写法有大括号，所以块级作用域成立。</p><p>函数声明也是如此，严格模式下，函数只能声明在当前作用域的顶层。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不报错</span>
<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

</code></pre></div><h3 id="const命令" tabindex="-1"><a class="header-anchor" href="#const命令" aria-hidden="true">#</a> const命令</h3><p><strong>const声明一个只读的常量。一旦声明，常量的值就不能改变。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token number">2323</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span> <span class="token comment">// 输出：2323</span>

<span class="token comment">// 重新赋值会报错:Assignment to constant variable</span>
test <span class="token operator">=</span> <span class="token number">4567</span>
</code></pre></div><p><strong>const声明的变量不得改变值</strong>，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 只声明、不赋值会报错</span>
<span class="token keyword">const</span> test<span class="token punctuation">;</span>
</code></pre></div><p><strong>const的作用域与let命令相同：只在声明所在的块级作用域内有效。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token comment">// 输出报错：max is not defined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span>
</code></pre></div><p>const命令声明的常量也是不提升的，同样存在暂时性死区，<strong>只能在声明的位置后面使用</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 存在暂时性死区</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 调用报错</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span>
  <span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token number">34</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>const声明的常量，也与let一样不可重复声明。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> student <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span>
<span class="token keyword">let</span> gender <span class="token operator">=</span> <span class="token string">&#39;girl&#39;</span>

<span class="token comment">// 已声明的变量，重复声明会报错</span>
<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">&#39;go go go&#39;</span>

<span class="token keyword">const</span> gender <span class="token operator">=</span> <span class="token string">&#39;boy&#39;</span>
</code></pre></div><p><strong>const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。</strong></p><p>对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义对象</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 添加属性</span>
student<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>

<span class="token comment">// 正常输出 18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

<span class="token comment">// 此时指针地址发生了变化，报错</span>
student <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><blockquote><p>常量student储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把student指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性</p></blockquote><p>对象值确保不变，可以考虑使用<code>Object.freeze()</code>函数将其冻结</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> student <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 常规模式： 赋值不起作用</span>
<span class="token comment">// 严格模式： 报错</span>
student<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
</code></pre></div><p>当然，出了冻结对象本身，对象可能存在的属性也需要冻结</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 冻结对象和属性</span>
<span class="token keyword">function</span> <span class="token function">objectConstant</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 冻结对象</span>
  Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">// 冻结属性</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 属性值为对象</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 递归调用冻结方法</span>
      <span class="token function">constantize</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="变量声明方法" tabindex="-1"><a class="header-anchor" href="#变量声明方法" aria-hidden="true">#</a> 变量声明方法</h3><ul><li>var定义</li><li>function命令</li><li>let</li><li>const</li><li>import</li><li>class</li></ul><h3 id="globalthis-对象" tabindex="-1"><a class="header-anchor" href="#globalthis-对象" aria-hidden="true">#</a> globalThis 对象</h3><p>JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。</p><ul><li><p>浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。</p></li><li><p>浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。</p></li><li><p>在Node 里面，顶层对象是global，但其他环境都不支持。</p></li></ul><p>同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。</p><ul><li>全局环境中，this会返回顶层对象。但是，Node.js 模块中this返回的是当前模块，ES6 模块中this返回的是undefined。</li><li>函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。</li><li>不管是严格模式，还是普通模式，new Function(&#39;return this&#39;)()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。</li></ul><p><strong>很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法一</span>
<span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span>
  <span class="token operator">?</span> window
  <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> process <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> require <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token keyword">typeof</span> global <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">?</span> global
    <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方法二</span>
<span class="token keyword">var</span> <span class="token function-variable function">getGlobal</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> self <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> self<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> window<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> global <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> global<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;unable to locate global object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h4><blockquote><p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 变量赋值</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">// ES6中可以从数组中提取值，按照对应位置，对变量赋值。：</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

</code></pre></div><p>本质上，这种写法属于“<strong>模式匹配</strong>”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 嵌套解构</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>bar<span class="token punctuation">]</span><span class="token punctuation">,</span> baz<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
foo <span class="token comment">// 1</span>
bar <span class="token comment">// 2</span>
baz <span class="token comment">// 3</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> third<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;baz&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>third<span class="token punctuation">)</span> <span class="token comment">// &quot;baz&quot;</span>


<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token comment">// 3</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> <span class="token operator">...</span>tail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tail<span class="token punctuation">)</span> <span class="token comment">// [2, 3, 4]</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token operator">...</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// &quot;a&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span> <span class="token comment">// []</span>

</code></pre></div><p><strong>解构不成功，变量值等于undefined</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不完全解构, 只匹配部分</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token comment">// 1</span>
y <span class="token comment">// 2</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> <span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">,</span> d<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
a <span class="token comment">// 1</span>
b <span class="token comment">// 2</span>
d <span class="token comment">// 4</span>

</code></pre></div><p>如果等号的右边不是数组（正确的说：不属于可以遍历的结构）,就会报错</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 解构时会报错</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">NaN</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>foo<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），</span>
<span class="token comment">// 要么本身就不具备 Iterator 接口（最后一个表达式）。</span>
</code></pre></div><p>Set结构的数据明显存在递归迭代、遍历的接口，也是可以使用数组的解构赋值的</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x <span class="token comment">// &quot;a&quot;</span>
</code></pre></div><p><strong>只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值</strong></p><h4 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h4><p>解构赋值允许指定默认值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>foo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
foo <span class="token comment">// true</span>

<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// x=&#39;a&#39;, y=&#39;b&#39;</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// x=&#39;a&#39;, y=&#39;b&#39;</span>

</code></pre></div><p><strong>ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// undefined情况</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token comment">// 1</span>

<span class="token comment">// null情况</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token comment">// null</span>
</code></pre></div><p><strong>如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 定义函数</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 解构赋值</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre></div><p>此时x明显可以拿到值，所以函数f()是不会执行的。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> x<span class="token punctuation">;</span>

<span class="token comment">// 数组[1]中的第一个元素，不严格等于undefined的时候，才会解构成功</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><p>默认值可以引用解构赋值的其他变量，但该变量必须已经声明</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">// x=1; y=1</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>    <span class="token comment">// x=2; y=2</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y <span class="token operator">=</span> x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// x=1; y=2</span>

<span class="token comment">// 变量y没有声明</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>x <span class="token operator">=</span> y<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>     <span class="token comment">// ReferenceError: y is not defined</span>

</code></pre></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><p>同样，解构赋值可以适用数组，也可以适用于对象</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo <span class="token comment">// &quot;aaa&quot;</span>
bar <span class="token comment">// &quot;bbb&quot;</span>
</code></pre></div><p><strong>数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span>bar<span class="token punctuation">,</span> foo<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
foo <span class="token comment">// &quot;aaa&quot;</span>
bar <span class="token comment">// &quot;bbb&quot;</span>

<span class="token comment">// 变量没有对应的同名属性，导致取不到值，最后等于undefined。</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>baz<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
baz <span class="token comment">// undefined</span>

</code></pre></div><p>如果变量名与属性名不一致</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> baz<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
baz <span class="token comment">// &quot;aaa&quot;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">first</span><span class="token operator">:</span> f<span class="token punctuation">,</span> <span class="token literal-property property">last</span><span class="token operator">:</span> l<span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
f <span class="token comment">// &#39;hello&#39;</span>
l <span class="token comment">// &#39;world&#39;</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 对象的解构赋值是下面形式的简写</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> foo<span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> bar<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;aaa&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;bbb&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者</span>

<span class="token comment">// 前者为：匹配的模式，后者为变量</span>
</code></pre></div><p><strong>与数组一样，解构也可以用于嵌套结构的对象</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token punctuation">{</span>y<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
x <span class="token comment">// &quot;Hello&quot;</span>
y <span class="token comment">// &quot;World&quot;</span>

</code></pre></div><p>这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 此时p作为了变量进行赋值</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>p<span class="token punctuation">,</span> <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> <span class="token punctuation">{</span>y<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
x <span class="token comment">// &quot;Hello&quot;</span>
y <span class="token comment">// &quot;World&quot;</span>
p <span class="token comment">// [&quot;Hello&quot;, {y: &quot;World&quot;}]</span>

</code></pre></div><h4 id="默认值-1" tabindex="-1"><a class="header-anchor" href="#默认值-1" aria-hidden="true">#</a> 默认值</h4><p>同样，对象的解构也是可以指定默认值的</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token punctuation">{</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token comment">// 3</span>

<span class="token keyword">var</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token comment">// 1</span>
y <span class="token comment">// 5</span>

<span class="token keyword">var</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
y <span class="token comment">// 3</span>

<span class="token keyword">var</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> y <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
y <span class="token comment">// 5</span>

<span class="token keyword">var</span> <span class="token punctuation">{</span><span class="token literal-property property">message</span><span class="token operator">:</span> msg <span class="token operator">=</span> <span class="token string">&#39;Something went wrong&#39;</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
msg <span class="token comment">// &quot;Something went wrong&quot;</span>

</code></pre></div><p><strong>和数组的解构赋值一样，默认值生效的条件是，对象的属性值严格等于undefined</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> <span class="token punctuation">{</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span>
x <span class="token comment">//3</span>

<span class="token comment">// 属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
x <span class="token comment">// null</span>

</code></pre></div><p>需要注意：</p><ul><li>如果要将一个已经声明的变量用于解构赋值，必须非常小心。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 错误的写法</span>
<span class="token keyword">let</span> x<span class="token punctuation">;</span>
<span class="token punctuation">{</span>
  x
<span class="token punctuation">}</span>
<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: syntax error</span>

<span class="token comment">// JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。</span>

<span class="token comment">// 正确的写法</span>
<span class="token keyword">let</span> x<span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
x <span class="token comment">//1</span>
</code></pre></div><ul><li>解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 表达式虽然毫无意义，但是语法是合法的，可以执行</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>由于<strong>数组本质是特殊的对象</strong>，因此可以对数组进行对象属性的解构</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 注意将数组理解为特殊的对象</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">:</span> first<span class="token punctuation">,</span> <span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">:</span> last<span class="token punctuation">}</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
first <span class="token comment">// 1</span>
last <span class="token comment">// 3</span>
</code></pre></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><p><strong>字符串也可以解构赋值</strong>。这是因为此时，字符串被转换成了一个类似数组的对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
a <span class="token comment">// &quot;h&quot;</span>
b <span class="token comment">// &quot;e&quot;</span>
c <span class="token comment">// &quot;l&quot;</span>
d <span class="token comment">// &quot;l&quot;</span>
e <span class="token comment">// &quot;o&quot;</span>

</code></pre></div><p>类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// length长度属性</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span> len<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
len <span class="token comment">// 5</span>
</code></pre></div><h3 id="数值和布尔值" tabindex="-1"><a class="header-anchor" href="#数值和布尔值" aria-hidden="true">#</a> 数值和布尔值</h3><p><strong>解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 数值和布尔值的包装对象都有toString属性</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">toString</span><span class="token operator">:</span> s<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
s <span class="token operator">===</span> <span class="token class-name">Number</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString <span class="token comment">// true</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">toString</span><span class="token operator">:</span> s<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
s <span class="token operator">===</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString <span class="token comment">// true</span>

</code></pre></div><p>解构赋值的规则是，<strong>只要等号右边的值不是对象或数组，就先将其转为对象</strong>。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// undefined和null无法转为对象</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">prop</span><span class="token operator">:</span> x<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// TypeError</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">prop</span><span class="token operator">:</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// TypeError</span>

</code></pre></div><h3 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数" aria-hidden="true">#</a> 函数参数</h3><p>函数也是可以使用解构赋值的</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>

</code></pre></div><p>函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ 3, 7 ]</span>

<span class="token comment">// undefined就会触发函数参数的默认值。</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token string">&#39;yes&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ 1, &#39;yes&#39;, 3 ]</span>

</code></pre></div><h4 id="圆括号问题" tabindex="-1"><a class="header-anchor" href="#圆括号问题" aria-hidden="true">#</a> 圆括号问题</h4><p><strong>解构赋值虽然很方便，但是解析起来并不容易</strong>对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。</p><p>由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，<strong>只要有可能导致解构的歧义，就不得使用圆括号</strong>。</p><p>但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。</p><h5 id="不能使用圆括号的情况" tabindex="-1"><a class="header-anchor" href="#不能使用圆括号的情况" aria-hidden="true">#</a> 不能使用圆括号的情况</h5><ul><li>变量声明语句</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全部报错 都是变量声明语句，模式不能使用圆括号。</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span>
<span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> c<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>
<span class="token punctuation">(</span>x<span class="token operator">:</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>
<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
<span class="token operator">:</span>
c
<span class="token punctuation">}</span>
<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> p<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">o</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><ul><li>函数参数</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数参数也属于变量声明，因此不能带有圆括号。</span>
<span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> z<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>z<span class="token punctuation">,</span> <span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre></div><ul><li>赋值语句的模式</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全部报错  整个模式都放在圆括号之中</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> a<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 报错 一部分模式放在圆括号之中</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> a<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> c<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre></div><h5 id="可以使用圆括号的情况" tabindex="-1"><a class="header-anchor" href="#可以使用圆括号的情况" aria-hidden="true">#</a> 可以使用圆括号的情况</h5><p><strong>赋值语句的非模式部分，可以使用圆括号</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 都是赋值语句，而不是声明语句</span>
<span class="token comment">// 圆括号都不属于模式的一部分</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>
<span class="token punctuation">[</span><span class="token punctuation">(</span>parseInt<span class="token punctuation">.</span>prop<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span>

</code></pre></div><h3 id="实际用途" tabindex="-1"><a class="header-anchor" href="#实际用途" aria-hidden="true">#</a> 实际用途</h3><ul><li>交换变量的值</li></ul><blockquote><p>这里简单易读，语义非常清晰</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">// 两值交换</span>
<span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span>

</code></pre></div><ul><li>从函数返回多个值</li></ul><blockquote><p>函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 返回一个数组</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 解构</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回一个对象</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 解构</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><ul><li>函数参数的定义</li></ul><blockquote><p>解构赋值可以方便地将一组参数与变量名对应起来。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 参数是一组有次序的值</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 参数是一组无次序的值</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><ul><li>提取 JSON 数据</li></ul><blockquote><p>解构赋值对提取 JSON 对象中的数据，尤其有用。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义数据</span>
<span class="token keyword">let</span> jsonData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">867</span><span class="token punctuation">,</span> <span class="token number">5309</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 解构</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>id<span class="token punctuation">,</span> status<span class="token punctuation">,</span> <span class="token literal-property property">data</span><span class="token operator">:</span> number<span class="token punctuation">}</span> <span class="token operator">=</span> jsonData<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> status<span class="token punctuation">,</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 42, &quot;OK&quot;, [867, 5309]</span>

</code></pre></div><ul><li>函数参数的默认值</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>jQuery<span class="token punctuation">.</span><span class="token function-variable function">ajax</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  async <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">beforeSend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  cache <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">complete</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  crossDomain <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  global <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// ... more config</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... do stuff</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>避免了在函数体内部再写<code>var foo = config.foo || &#39;default foo&#39;</code>;这样的语句。</p><ul><li>遍历 <code>Map</code> 结构</li></ul><blockquote><p>任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。<code>Map</code> 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;first&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;second&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot; is &quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// first is hello</span>
<span class="token comment">// second is world</span>

<span class="token comment">// 获取键名</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取键值 注意此处的逗号</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><ul><li>输入模块的指定方法</li></ul><blockquote><p>加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// CommonJs写法</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>SourceMapConsumer<span class="token punctuation">,</span> SourceNode<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;source-map&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="字符串-1" tabindex="-1"><a class="header-anchor" href="#字符串-1" aria-hidden="true">#</a> 字符串</h2><h3 id="遍历器接口" tabindex="-1"><a class="header-anchor" href="#遍历器接口" aria-hidden="true">#</a> 遍历器接口</h3><p>ES6 为字符串添加了遍历器接口,使得字符串可以被for...of循环遍历。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// of遍历 依次输出</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> codePoint <span class="token keyword">of</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>codePoint<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h3><p>传统的 JavaScript 语言，输出模板通常采用<code>+</code>拼接</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// jquery 输出模板</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#result&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>
  <span class="token string">&#39;There are &lt;b&gt;&#39;</span> <span class="token operator">+</span> basket<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token string">&#39;&lt;/b&gt; &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;items in your basket, &#39;</span> <span class="token operator">+</span>
  <span class="token string">&#39;&lt;em&gt;&#39;</span> <span class="token operator">+</span> basket<span class="token punctuation">.</span>onSale <span class="token operator">+</span>
  <span class="token string">&#39;&lt;/em&gt; are on sale!&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>非常明显，写法相当繁琐且不方便，我最开始写的时候，真的&#39;和&quot;傻傻分不清楚，总觉得多了一个或者少了一个;</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES6模板字符串</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#result&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  There are &lt;b&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basket<span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/b&gt; items
   in your basket, &lt;em&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>basket<span class="token punctuation">.</span>onSale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/em&gt;
  are on sale!
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>**模板字符串（template string）是增强版的字符串，用反引号（\`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。 **</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 普通字符串</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript &#39;\\n&#39; is a line-feed.</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 多行字符串</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">In JavaScript this is
 not legal.</span><span class="token template-punctuation string">\`</span></span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">string text line 1
string text line 2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 字符串中嵌入变量</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> time <span class="token operator">=</span> <span class="token string">&quot;today&quot;</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, how are you </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">\`</span></span>

</code></pre></div><p>都是用反引号表示。<strong>如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> greeting <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\\`Yo\\\` World!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre></div><p>如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。模板字符串的空格和换行，都是被保留的，如果不想要这个换行，可以使用trim方法消除它。</p><ul><li><p>trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。</p></li><li><p>trim() 方法不会改变原始字符串。</p></li><li><p>trim() 方法不适用于 null, undefined, Number 类型。</p></li></ul><p><strong>模板字符串中嵌入变量，需要将变量名写在\${}之中。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方式比较</span>
<span class="token keyword">function</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">.</span><span class="token function">hasPrivilege</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
      <span class="token comment">// 传统写法:</span>
      <span class="token comment">// &#39;User &#39;</span>
      <span class="token comment">// + user.name</span>
      <span class="token comment">// + &#39; is not authorized to do &#39;</span>
      <span class="token comment">// + action</span>
      <span class="token comment">// + &#39;.&#39;</span>

      <span class="token comment">// ES6模板语法</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">User </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not authorized to do </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>action<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x <span class="token operator">+</span> y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// &quot;1 + 2 = 3&quot;</span>

  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>y <span class="token operator">*</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>x <span class="token operator">+</span> y <span class="token operator">*</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// &quot;1 + 4 = 5&quot;</span>

<span class="token comment">// 定义对象</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 运算</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span>x <span class="token operator">+</span> obj<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// &quot;3&quot;</span>

</code></pre></div><p>在模板字符串中也是可以调用函数的：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用函数</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">foo </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> bar</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// foo Hello World bar</span>

</code></pre></div><p><strong>如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 变量place没有声明,报错</span>
<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>place<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

</code></pre></div><p>由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 输出：&quot;Hello World&quot;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&#39;World&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><p>如果需要引用模板字符串本身，在需要时执行，可以写成函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数定义，箭头函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token comment">// 执行</span>
<span class="token function">func</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;Hello Jack!&quot;</span>
</code></pre></div><p>模板字符串写成了一个函数的返回值。执行这个函数，就相当于执行这个模板字符串了。</p><h3 id="新增方法" tabindex="-1"><a class="header-anchor" href="#新增方法" aria-hidden="true">#</a> 新增方法</h3><ul><li>String.fromCodePoint()</li><li><strong>String.raw()</strong></li><li>codePointAt()</li><li>normalize()</li><li><strong>includes()、startsWith()、endsWith()</strong></li><li><strong>repeat()</strong></li><li><strong>padStart()、padEnd()</strong></li><li><strong>trimStart()、trimEnd()</strong></li><li><strong>matchAll()</strong></li><li><strong>replaceAll()</strong></li></ul><h3 id="string-fromcodepoint" tabindex="-1"><a class="header-anchor" href="#string-fromcodepoint" aria-hidden="true">#</a> String.fromCodePoint()</h3><p>ES5 提供<code>String.fromCharCode()</code>方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于<code>0xFFFF</code>的字符</p><p><strong>ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode() 方法的不足。在作用上，正好与下面的codePointAt()方法相反。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
String<span class="token punctuation">.</span><span class="token function">fromCodePoint</span><span class="token punctuation">(</span><span class="token number">0x20BB7</span><span class="token punctuation">)</span>
<span class="token comment">// 输出： &quot;𠮷&quot;</span>
String<span class="token punctuation">.</span><span class="token function">fromCodePoint</span><span class="token punctuation">(</span><span class="token number">0x78</span><span class="token punctuation">,</span> <span class="token number">0x1f680</span><span class="token punctuation">,</span> <span class="token number">0x79</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;x\\uD83D\\uDE80y&#39;</span>
<span class="token comment">// 输出： true</span>

</code></pre></div><p><strong>如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。</strong></p><p>注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。</p><h3 id="string-raw" tabindex="-1"><a class="header-anchor" href="#string-raw" aria-hidden="true">#</a> String.raw()</h3><p>raw方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>String<span class="token punctuation">.</span>raw<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// 实际返回 &quot;Hi\\\\n5!&quot;，显示的是转义后的结果 &quot;Hi\\n5!&quot;</span>

String<span class="token punctuation">.</span>raw<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi\\u000A!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// 实际返回 &quot;Hi\\\\u000A!&quot;，显示的是转义后的结果 &quot;Hi\\u000A!&quot;</span>
</code></pre></div><p><strong>如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>String<span class="token punctuation">.</span>raw<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi\\\\n</span><span class="token template-punctuation string">\`</span></span>
<span class="token comment">// 返回 &quot;Hi\\\\\\\\n&quot;</span>

String<span class="token punctuation">.</span>raw<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi\\\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">===</span> <span class="token string">&quot;Hi\\\\\\\\n&quot;</span> <span class="token comment">// true</span>

</code></pre></div><ul><li><p>String.raw()方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。</p></li><li><p>String.raw()本质上是一个正常的函数，只是专用于模板字符串的标签函数。如果写成正常函数的形式，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组，对应模板字符串解析后的值。</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// \`foo\${1 + 2}bar\`</span>
<span class="token comment">// 等同于</span>
String<span class="token punctuation">.</span><span class="token function">raw</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">raw</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;foo3bar&quot;</span>

</code></pre></div><p><strong>String.raw()方法的第一个参数是一个对象，它的raw属性等同于原始的模板字符串解析后得到的数组。</strong></p><p>作为函数，String.raw()的代码实现:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义函数，绑定到raw属性上</span>
String<span class="token punctuation">.</span><span class="token function-variable function">raw</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strings<span class="token punctuation">,</span> <span class="token operator">...</span>values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> index<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> values<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    output <span class="token operator">+=</span> strings<span class="token punctuation">.</span>raw<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">+</span> values<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 递归</span>
  output <span class="token operator">+=</span> strings<span class="token punctuation">.</span>raw<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
  <span class="token keyword">return</span> output<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="codepointat" tabindex="-1"><a class="header-anchor" href="#codepointat" aria-hidden="true">#</a> codePointAt()</h3><p>JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&quot;𠮷&quot;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span>length <span class="token comment">// 2</span>
s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// &#39;&#39;</span>
s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// &#39;&#39;</span>
s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 55362</span>
s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 57271</span>

</code></pre></div><p>ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;𠮷a&#39;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">codePointAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 134071</span>
s<span class="token punctuation">.</span><span class="token function">codePointAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 57271</span>

s<span class="token punctuation">.</span><span class="token function">codePointAt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 97</span>

</code></pre></div><p><strong>codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">is32Bit</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> c<span class="token punctuation">.</span><span class="token function">codePointAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0xFFFF</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">is32Bit</span><span class="token punctuation">(</span><span class="token string">&quot;𠮷&quot;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">is32Bit</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="normalize" tabindex="-1"><a class="header-anchor" href="#normalize" aria-hidden="true">#</a> normalize()</h3><p>ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;\\u01D1&#39;</span><span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;\\u004F\\u030C&#39;</span><span class="token punctuation">.</span><span class="token function">normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>

</code></pre></div><p>normalize方法可以接受一个参数来指定normalize的方式，参数的四个可选值如下。</p><ul><li>NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。</li><li>NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。</li><li>NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）</li><li>NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。</li></ul><h3 id="includes-startswith-endswith" tabindex="-1"><a class="header-anchor" href="#includes-startswith-endswith" aria-hidden="true">#</a> includes(), startsWith(), endsWith()</h3><p>传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中;</p><p>ES6 又提供了三种新方法:</p><ul><li><p>includes() 返回布尔值，表示是否找到了参数字符串。</p></li><li><p>startsWith() 返回布尔值，表示参数字符串是否在原字符串的头部。</p></li><li><p>endsWith() 返回布尔值，表示参数字符串是否在原字符串的尾部。</p></li></ul><p>例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

</code></pre></div><p><strong>这三个方法都支持第二个参数，表示开始搜索的位置。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
s<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

</code></pre></div><p><strong>使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。</strong></p><h3 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat()</h3><p>repeat方法返回一个新字符串，表示将原字符串重复n次。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// &quot;xxx&quot;</span>
<span class="token string">&#39;hello&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hellohello&quot;</span>
<span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span>

</code></pre></div><ul><li>参数如果是小数，会被取整(向下取整)</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;test&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2.9</span><span class="token punctuation">)</span> <span class="token comment">// &quot;testtest&quot;</span>
</code></pre></div><ul><li>如果repeat的参数是负数或者Infinity，会报错。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Infinity 无穷</span>
<span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span>
<span class="token comment">// RangeError</span>
<span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// RangeError</span>
</code></pre></div><ul><li><strong>如果参数是 0 到-1 之间的小数，则等同于 0</strong>，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.9</span><span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span>

<span class="token comment">// 参数NaN等同于 0。</span>
<span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span>

</code></pre></div><ul><li>如果repeat的参数是字符串，则会先转换成数字。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token string">&#39;na&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;&quot;</span>
<span class="token string">&#39;na&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;nanana&quot;</span>

</code></pre></div><h3 id="padstart-、padend" tabindex="-1"><a class="header-anchor" href="#padstart-、padend" aria-hidden="true">#</a> padStart()、padEnd()</h3><p>ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。</p><ul><li>padStart()用于头部补全</li><li>padEnd()用于尾部补全</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 头部补齐</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;ababx&#39;</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;abax&#39;</span>

<span class="token comment">// 尾部补齐</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xabab&#39;</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xaba&#39;</span>

</code></pre></div><p>padStart()和padEnd()一共接受两个参数：</p><ul><li><p>第一个参数是字符串补全生效的最大长度</p></li><li><p>第二个参数是用来补全的字符串。</p></li></ul><p>在实际使用过程中，会存在如下情况：</p><ul><li><strong>如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xxx&#39;</span>
<span class="token string">&#39;xxx&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;xxx</span>

</code></pre></div><ul><li><strong>如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;0123456789&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;0123456abc&#39;</span>
</code></pre></div><ul><li><strong>如果省略第二个参数，默认使用空格补全长度。</strong></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// &#39;   x&#39;</span>
<span class="token string">&#39;x&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// &#39;x   &#39;</span>
</code></pre></div><p><strong>padStart()的常见用途是为数值补全指定位数</strong> ，下面代码生成 10 位的数值字符串。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;1&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;0000000001&quot;</span>
<span class="token string">&#39;12&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;0000000012&quot;</span>
<span class="token string">&#39;123456&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;0000123456&quot;</span>
</code></pre></div><p>另一个用途是提示字符串格式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;12&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;YYYY-MM-12&quot;</span>
<span class="token string">&#39;09-12&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;YYYY-09-12</span>

</code></pre></div><h3 id="trimstart-、trimend" tabindex="-1"><a class="header-anchor" href="#trimstart-、trimend" aria-hidden="true">#</a> trimStart()、trimEnd()</h3><p>ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致。</p><ul><li>trimStart()消除字符串头部的空格</li><li>trimEnd()消除尾部的空格</li></ul><p>它们返回的都是新字符串，不会修改原始字符串。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义</span>
<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token string">&#39;  abc  &#39;</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc&quot;</span>
s<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;abc  &quot;</span>
s<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;  abc</span>

<span class="token comment">// 原始字符串不变</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment">// &quot;  abc  &quot; </span>

</code></pre></div><p><strong>除了空格键，这两个方法对字符串头部（或尾部）的 tab 键、换行符等不可见的空白符号也有效。</strong></p><p>浏览器还部署了额外的两个方法：</p><ul><li>trimLeft()是trimStart()的别名</li><li>trimRight()是trimEnd()的别名</li></ul><h3 id="matchall" tabindex="-1"><a class="header-anchor" href="#matchall" aria-hidden="true">#</a> matchAll()</h3><p>matchAll()方法返回一个正则表达式在当前字符串的<strong>所有匹配</strong></p><h3 id="replaceall" tabindex="-1"><a class="header-anchor" href="#replaceall" aria-hidden="true">#</a> replaceAll()</h3><p><strong>字符串的实例方法replace()只能替换第一个匹配。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aa_bcc</span>

</code></pre></div><p>如果要替换所有的匹配，不得不使用正则表达式的g修饰符。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全部匹配</span>
<span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">b</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aa__cc&#39;</span>
</code></pre></div><p>正则表达式毕竟不是那么方便和直观，<strong>ES2021 引入了replaceAll()方法</strong>，可以一次性替换所有匹配。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局匹配</span>
<span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aa__cc&#39;</span>
</code></pre></div><p>用法与replace()相同，返回一个新字符串，不会改变原字符串。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">,</span> replacement<span class="token punctuation">)</span>

</code></pre></div><p><strong><code>searchValue</code>是搜索模式，可以是一个字符串，也可以是一个全局的正则表达式（带有<code>g</code>修饰符）。 如果<code>searchValue</code>是一个不带有<code>g</code>修饰符的正则表达式，<code>replaceAll()</code>会报错。与<code>replace()</code>不同。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不报错</span>
<span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// /b/不带有g修饰符，会导致replaceAll()报错。</span>
<span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>replaceAll()的第二个参数replacement是一个字符串，表示替换的文本，其中可以使用一些特殊字符串。</strong></p><ul><li>$&amp;：匹配的子字符串。</li><li>$\`：匹配结果前面的文本。</li><li>$&#39;：匹配结果后面的文本。</li><li>$n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。</li><li>$$：指代美元符号$。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// $&amp; 表示匹配的字符串，即\`b\`本身</span>
<span class="token comment">// 所以返回结果与原字符串一致</span>
<span class="token string">&#39;abbc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$&amp;&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;abbc&#39;</span>

<span class="token comment">// $\` 表示匹配结果之前的字符串</span>
<span class="token comment">// 对于第一个\`b\`，$\` 指代\`a\`</span>
<span class="token comment">// 对于第二个\`b\`，$\` 指代\`ab\`</span>
<span class="token string">&#39;abbc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$\`&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aaabc&#39;</span>

<span class="token comment">// $&#39; 表示匹配结果之后的字符串</span>
<span class="token comment">// 对于第一个\`b\`，$&#39; 指代\`bc\`</span>
<span class="token comment">// 对于第二个\`b\`，$&#39; 指代\`c\`</span>
<span class="token string">&#39;abbc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">$&#39;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token comment">// &#39;abccc&#39;</span>

<span class="token comment">// $1 表示正则表达式的第一个组匹配，指代\`ab\`</span>
<span class="token comment">// $2 表示正则表达式的第二个组匹配，指代\`bc\`</span>
<span class="token string">&#39;abbc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(ab)(bc)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$2$1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;bcab&#39;</span>

<span class="token comment">// $$ 指代 $</span>
<span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$$&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;a$c&#39;</span>

</code></pre></div><p><strong>replaceAll()的第二个参数replacement也可以是一个函数，该函数的返回值将替换掉第一个参数searchValue匹配的文本。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 第二个参数是一个函数，该函数的返回值会替换掉所有b的匹配。</span>
<span class="token string">&#39;aabbcc&#39;</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;aa__cc&#39;</span>
</code></pre></div><p><strong>这个替换函数可以接受多个参数</strong></p><ul><li>第一个参数是捕捉到的匹配内容</li><li>第二个参数捕捉到是组匹配（有多少个组匹配，就有多少个对应的参数）</li><li>最后还可以添加两个参数，倒数第二个参数是捕捉到的内容在整个字符串中的位置，最后一个参数是原字符串。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;123abc456&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d+)([a-z]+)(\\d+)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">replacer</span><span class="token punctuation">(</span><span class="token parameter">match<span class="token punctuation">,</span> p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; - &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

str<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span>regex<span class="token punctuation">,</span> replacer<span class="token punctuation">)</span>
<span class="token comment">// 123 - abc - 456</span>


</code></pre></div><p>上面例子中，正则表达式有三个组匹配，所以replacer()函数的第一个参数match是捕捉到的匹配内容（即字符串123abc456），后面三个参数p1、p2、p3则依次为三个组匹配。</p><h2 id="数值" tabindex="-1"><a class="header-anchor" href="#数值" aria-hidden="true">#</a> 数值</h2><h3 id="number-isfinite-vs-number-isnan" tabindex="-1"><a class="header-anchor" href="#number-isfinite-vs-number-isnan" aria-hidden="true">#</a> Number.isFinite() VS Number.isNaN()</h3><p>ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法</p><p><code>Number.isFinite()</code>用来检查一个数值是否为有限的（<code>finite</code>），即不是Infinity。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;15&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><p><strong>如果参数类型不是数值，Number.isFinite一律返回false</strong></p><p><code>Number.isNaN()</code>用来检查一个值是否为<code>NaN</code>(Not A Number)。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;15&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">9</span> <span class="token operator">/</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;true&#39;</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;true&#39;</span> <span class="token operator">/</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>如果参数类型不是<code>NaN</code>，<code>Number.isNaN</code>一律返回<code>false</code>。</p><h4 id="重要区别" tabindex="-1"><a class="header-anchor" href="#重要区别" aria-hidden="true">#</a> 重要区别</h4><blockquote><p>与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number() 将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN() 只有对于NaN才返回true，非NaN一律返回false。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&quot;NaN&quot;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&quot;NaN&quot;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

</code></pre></div><h3 id="number-parseint-vs-number-parsefloat" tabindex="-1"><a class="header-anchor" href="#number-parseint-vs-number-parsefloat" aria-hidden="true">#</a> Number.parseInt() VS Number.parseFloat()</h3><p>ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5的写法</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;12.34&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
<span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;123.45#&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 123.45</span>

<span class="token comment">// ES6的写法</span>
Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;12.34&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>
Number<span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;123.45#&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 123.45</span>
</code></pre></div><p><strong>逐步减少全局性方法，使得语言逐步模块化。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Number<span class="token punctuation">.</span>parseInt <span class="token operator">===</span> parseInt <span class="token comment">// true</span>
Number<span class="token punctuation">.</span>parseFloat <span class="token operator">===</span> parseFloat <span class="token comment">// true</span>
</code></pre></div><h3 id="number-isinteger" tabindex="-1"><a class="header-anchor" href="#number-isinteger" aria-hidden="true">#</a> Number.isInteger()</h3><p><code>Number.isInteger()</code>用来判断一个数值是否为整数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25.1</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

<span class="token comment">// 整数和浮点数采用的是同样的储存方法</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">25.0</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p><strong>JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。</strong></p><p>如果参数不是数值，<code>Number.isInteger</code>返回<code>false</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token string">&#39;15&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><h3 id="math-对象的扩展" tabindex="-1"><a class="header-anchor" href="#math-对象的扩展" aria-hidden="true">#</a> Math 对象的扩展</h3><h4 id="math-trunc" tabindex="-1"><a class="header-anchor" href="#math-trunc" aria-hidden="true">#</a> Math.trunc()</h4><p><code>Math.trunc()</code>方法用于去除一个数的小数部分，返回整数部分</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">4.1</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">4.9</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4.1</span><span class="token punctuation">)</span> <span class="token comment">// -4</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4.9</span><span class="token punctuation">)</span> <span class="token comment">// -4</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.1234</span><span class="token punctuation">)</span> <span class="token comment">// -0</span>
</code></pre></div><p>对于非数值，<code>Math.trunc</code>内部使用<code>Number</code>方法将其先转为数值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token string">&#39;123.456&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 123</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">//1</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
</code></pre></div><p>对于空值和无法截取整数的值，返回<code>NaN</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
</code></pre></div><p><code>Math.trunc()</code>的类似实现：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span>trunc <span class="token operator">=</span> Math<span class="token punctuation">.</span>trunc <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><h4 id="math-sign" tabindex="-1"><a class="header-anchor" href="#math-sign" aria-hidden="true">#</a> Math.sign()</h4><p>Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。</p><ul><li>参数为正数，返回+1；</li><li>参数为负数，返回-1；</li><li>参数为 0，返回0；</li><li>参数为-0，返回-0;</li><li>其他值，返回NaN。</li></ul><p>如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 0</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>  <span class="token comment">// +1</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>  <span class="token comment">// 0</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>  <span class="token comment">// 0</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// +1</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>  <span class="token comment">// NaN</span>
</code></pre></div><p>Math.sign()的类似实现：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 判断正数、负数、还是零</span>
Math<span class="token punctuation">.</span>sign <span class="token operator">=</span> Math<span class="token punctuation">.</span>sign <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token operator">+</span>x<span class="token punctuation">;</span> <span class="token comment">// convert to a number</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="math-cbrt" tabindex="-1"><a class="header-anchor" href="#math-cbrt" aria-hidden="true">#</a> Math.cbrt()</h4><p>Math.cbrt()方法用于计算一个数的立方根。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 0</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// 1</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment">// 1.2599210498948732</span>
</code></pre></div><p>对于非数值，Math.cbrt()方法内部也是先使用Number()方法将其转为数值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token string">&#39;8&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
</code></pre></div><p><code>Math.cbrt()</code>类似实现：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 计算一个数的立方根</span>
Math<span class="token punctuation">.</span>cbrt <span class="token operator">=</span> Math<span class="token punctuation">.</span>cbrt <span class="token operator">||</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token operator">-</span>y <span class="token operator">:</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="math-hypot" tabindex="-1"><a class="header-anchor" href="#math-hypot" aria-hidden="true">#</a> Math.hypot()</h4><p>Math.hypot方法返回所有参数的平方和的平方根。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 3 的平方加上 4 的平方，等于 5 的平方。</span>
Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 5</span>
Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 7.0710678118654755</span>
Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>            <span class="token comment">// 0</span>
Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>         <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// 7.0710678118654755</span>
Math<span class="token punctuation">.</span><span class="token function">hypot</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 3</span>
</code></pre></div><p>如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。</p><h4 id="指数运算符" tabindex="-1"><a class="header-anchor" href="#指数运算符" aria-hidden="true">#</a> 指数运算符</h4><p>ES2016 新增了一个指数运算符（**）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token comment">// 4</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token comment">// 8</span>
</code></pre></div><p><strong>这个运算符是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 首先计算的是第二个指数运算符，而不是第一个</span>
<span class="token comment">// 相当于 2 ** (3 ** 2)</span>
<span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span>
<span class="token comment">// 512</span>
</code></pre></div><p>指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">;</span>
a <span class="token operator">**=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于 a = a * a;</span>

<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
b <span class="token operator">**=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于 b = b * b * b;</span>
</code></pre></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><h3 id="参数的默认值" tabindex="-1"><a class="header-anchor" href="#参数的默认值" aria-hidden="true">#</a> 参数的默认值</h3><p>ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  y <span class="token operator">=</span> y <span class="token operator">||</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello World</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;China&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello China</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello World</span>

<span class="token comment">// ES6中可以</span>
<span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello World</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;China&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello China</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// Hello</span>

</code></pre></div><p>通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  y <span class="token operator">=</span> <span class="token string">&#39;World&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>参数变量是默认声明的，不能用let或const再次声明，否则会报错。</strong></p><p>使用参数默认值时，函数不能有同名参数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不报错</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 函数同名报错</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>另外，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。<strong>也就是说，参数默认值是惰性求值的。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">p <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 100</span>

<span class="token comment">// 修改变量值</span>
x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 101</span>
</code></pre></div><p>注意：默认p不是等于100</p><h4 id="与解构赋值默认值结合使用" tabindex="-1"><a class="header-anchor" href="#与解构赋值默认值结合使用" aria-hidden="true">#</a> 与解构赋值默认值结合使用</h4><p>参数默认值可以与解构赋值的默认值，结合起来使用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// undefined 5</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 1 5</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 1 2</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// TypeError: Cannot read property &#39;x&#39; of undefined</span>
</code></pre></div><p>如果函数<code>add</code>调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 提供默认值进行解构</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined 5</span>

</code></pre></div><h4 id="参数默认值的位置" tabindex="-1"><a class="header-anchor" href="#参数默认值的位置" aria-hidden="true">#</a> 参数默认值的位置</h4><p>通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。* <em>如果非尾部的参数设置默认值，实际上这个参数是没法省略的。</em>*</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 存在默认值不是尾参数</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [1, undefined]</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// [2, undefined]</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [1, 1]</span>

</code></pre></div><p>显式输入<code>undefined</code>,配合解构的原理，可以省略有默认值的参数</p><p><strong>如果传入<code>undefined</code>，将触发该参数等于默认值，<code>null</code>则没有触发默认值。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">6</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// 5 null</span>
</code></pre></div><h3 id="length-属性" tabindex="-1"><a class="header-anchor" href="#length-属性" aria-hidden="true">#</a> length 属性</h3><p>指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">5</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 2</span>

</code></pre></div><p><code>length</code>属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。比如，上面最后一个函数，定义了 <code>3</code> 个参数，其中有一个参数c指定了默认值，因此<code>length</code>属性等于<code>3</code>减去<code>1</code>，最后得到<code>2</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
</code></pre></div><p><code>length</code>属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。</p><p><strong>如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 0</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
</code></pre></div><h4 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h4><p>一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。* <em>这种语法行为，在不设置参数默认值时，是不会出现的。</em>*</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y <span class="token operator">=</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认值变量x指向第一个参数x，而不是全局变量x</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre></div><p>上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">y <span class="token operator">=</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre></div><p>上面代码中，函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 此时全局变量x不存在，就会报错。</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">y <span class="token operator">=</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ReferenceError: x is not defined</span>
</code></pre></div><p>上面代码中，参数<code>x = x</code>形成一个单独作用域。实际执行的是<code>let x = x</code>，由于暂时性死区的原因，这行代码会报错<code>x未定义</code>。</p><p><strong>如果参数的默认值是一个函数，该函数的作用域也遵守这个规则</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">&#39;outer&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// outer</span>
</code></pre></div><p>上面代码中，函数<code>bar</code>的参数<code>func</code>的默认值是一个匿名函数，返回值为变量<code>foo</code> 。函数参数形成的单独作用域里面，并没有定义变量<code>foo</code>，所以<code>foo</code>指向外层的全局变量<code>foo</code>，因此输出<code>outer</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ReferenceError: foo is not defined</span>

</code></pre></div><p>上面代码中，匿名函数里面的<code>foo</code>指向函数外层，但是函数外层并没有声明变量<code>foo</code>，所以就报错了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token function">y</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
x <span class="token comment">// 1</span>

</code></pre></div><p>上面代码中，函数<code>foo</code>的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量<code>y</code>，<code>y</code> 的默认值是一个匿名函数。这个匿名函数内部的变量<code>x</code>，指向同一个作用域的第一个参数x。函数<code>foo</code>内部又声明了一个内部变量<code>x</code> ，该变量与第一个参数<code>x</code>由于不是同一个作用域，所以不是同一个变量，因此执行<code>y</code>后，内部变量<code>x</code>和外部全局变量x的值都没变。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token function-variable function">y</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token function">y</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
x <span class="token comment">// 1</span>
</code></pre></div><p>如果将<code>var x = 3</code>的<code>var</code>去除，函数<code>foo</code>的内部变量<code>x</code>就指向第一个参数<code>x</code>，与匿名函数内部的<code>x</code>是一致的，所以最后输出的就是<code>2</code> ，而外层的全局变量<code>x</code>依然不受影响</p><h3 id="rest-参数" tabindex="-1"><a class="header-anchor" href="#rest-参数" aria-hidden="true">#</a> rest 参数</h3><p><code>ES6</code> 引入 <code>rest</code> 参数（形式为<code>...</code>变量名），用于获取函数的多余参数，这样就不需要使用<code>arguments</code>对象了。<code>rest</code> 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 利用 rest 参数，可以向该函数传入任意数目的参数。</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> val <span class="token keyword">of</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre></div><p>rest 参数代替arguments变量</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// arguments变量的写法</span>
<span class="token keyword">function</span> <span class="token function">sortNumbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// rest参数的写法</span>
<span class="token keyword">const</span> <span class="token function-variable function">sortNumbers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>numbers</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> numbers<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>rest 参数的写法更自然也更简洁。</strong></p><p><code>arguments</code>对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用<code>Array.prototype.slice.call</code>先将其转为数组。rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> <span class="token operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  items<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">push</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

</code></pre></div><p><strong>注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length  <span class="token comment">// 1</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length  <span class="token comment">// 0</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> <span class="token operator">...</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length  <span class="token comment">// 1</span>
</code></pre></div><p><strong>函数的length属性，不包括 rest 参数。</strong></p><h3 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h3><p>从 ES5 开始，函数内部可以设定为严格模式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// code  ES5中是被允许的</span>
<span class="token punctuation">}</span>
</code></pre></div><p>ES2016 做了一点修改，**ES2016中规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。 **</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 报错</span>
<span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b <span class="token operator">=</span> a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// code</span>
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">const</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>a<span class="token punctuation">,</span> b<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// code</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 报错</span>
<span class="token keyword">const</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>a</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// code</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 报错</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>a<span class="token punctuation">,</span> b<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">// code</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>函数内部的严格模式，同时适用于函数体和函数参数。但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。</p><h3 id="name-属性" tabindex="-1"><a class="header-anchor" href="#name-属性" aria-hidden="true">#</a> name 属性</h3><p>函数的name属性，返回该函数的函数名。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  函数</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...code</span>
<span class="token punctuation">}</span>

test<span class="token punctuation">.</span>name <span class="token comment">// “test”</span>

</code></pre></div><p>ES6 对这个属性的行为做出了一些修改，如果将一个匿名函数赋值给一个变量：</p><ul><li><p>ES5 的name属性，会返回空字符串</p></li><li><p>ES6 的name属性会返回实际的函数名。</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 匿名函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ES5</span>
f<span class="token punctuation">.</span>name <span class="token comment">// &quot;&quot;</span>

<span class="token comment">// ES6</span>
f<span class="token punctuation">.</span>name <span class="token comment">// &quot;f&quot;</span>
</code></pre></div><p>如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">bar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ES5</span>
bar<span class="token punctuation">.</span>name <span class="token comment">// &quot;test&quot;</span>

<span class="token comment">// ES6</span>
bar<span class="token punctuation">.</span>name <span class="token comment">// &quot;test&quot;</span>
</code></pre></div><p><strong>Function构造函数返回的函数实例，name属性的值为anonymous。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;anonymous&quot;</span>
</code></pre></div><p>bind返回的函数，name属性值会加上bound前缀。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义函数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;bound foo&quot;</span>

  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;bound &quot;</span>
</code></pre></div><h3 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h3><p>ES6 允许使用“箭头”（=&gt;）定义函数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token parameter">v</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> v<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> <span class="token function-variable function">f</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">5</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>由于<strong>大括号被解释为代码块</strong>，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">let</span> <span class="token function-variable function">getItem</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> id<span class="token punctuation">,</span> <span class="token literal-property property">name</span>
<span class="token operator">:</span>
  <span class="token string">&quot;tom&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 不报错</span>
<span class="token keyword">let</span> <span class="token function-variable function">getItem</span> <span class="token operator">=</span> <span class="token parameter">id</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> id<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;tom&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><p>下面是一种特殊情况，虽然可以运行，但会得到错误的结果。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre></div><p>原始意图是返回一个对象<code>{ a: 1 }</code>，但是由于引擎认为大括号是代码块，所以执行了一行语句<code>a: 1</code>。这时，<code>a</code> 可以被解释为语句的标签，因此实际执行的语句是<code>1</code>;，然后函数就结束了，没有返回值。</p><p>如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// void运算符</span>
<span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token function">doesNotReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong><code>void</code> 是一元运算符，它可以出现在任意类型的操作数之前执行操作数，却忽略操作数的返回值，返回一个 <code>undefined</code></strong></p><p>箭头函数可以与变量解构结合使用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">full</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>first<span class="token punctuation">,</span> last<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> first <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> last<span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">function</span> <span class="token function">full</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> person<span class="token punctuation">.</span>first <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>last<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模式字符串</span>
<span class="token keyword">const</span> <span class="token function-variable function">full</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>first<span class="token punctuation">,</span> last<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>first<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>last<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><p><strong>箭头函数的一个用处是简化回调函数。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 正常函数写法</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 箭头函数写法</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 正常函数写法</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 箭头函数写法</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> values<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// rest 参数与箭头函数结合</span>
<span class="token keyword">const</span> <span class="token function-variable function">numbers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>nums</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nums<span class="token punctuation">;</span>

<span class="token function">numbers</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// [1,2,3,4,5]</span>

<span class="token keyword">const</span> <span class="token function-variable function">headAndTail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> <span class="token operator">...</span>tail</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>head<span class="token punctuation">,</span> tail<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">headAndTail</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// [1,[2,3,4,5]]</span>

</code></pre></div><p>箭头函数使用需要注意:</p><ul><li><p>函数体内的<code>this</code>对象，就是定义时所在的对象，而不是使用时所在的对象。</p></li><li><p>不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。</p></li><li><p>不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。</p></li><li><p>不可以使用<code>yield</code>命令，因此箭头函数不能用作 Generator 函数。</p></li></ul><p><strong><code>this</code>对象的指向是可变的，但是在箭头函数中，this对象的指向是固定的。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;id:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">21</span><span class="token punctuation">;</span>

<span class="token comment">// call()函数修改this指向</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// id: 42</span>
</code></pre></div><p><code>setTimeout()</code>的参数是一个箭头函数，这个箭头函数的定义生效是在<code>foo</code>函数生成时，而它的真正执行要等到 <code>100</code> 毫秒后。如果是普通函数，执行时<code>this</code>应该指向全局对象<code>window</code>，这时应该输出<code>21</code>。但是，**箭头函数导致this总是指向函数定义生效时所在的对象 **（本例是<code>{id: 42}</code>），所以打印出来的是<code>42</code>。</p><p><strong>箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>s1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>s2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 箭头函数</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>s1<span class="token operator">++</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 普通函数</span>
  <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>s2<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;s1: &#39;</span><span class="token punctuation">,</span> timer<span class="token punctuation">.</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;s2: &#39;</span><span class="token punctuation">,</span> timer<span class="token punctuation">.</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// s1: 3</span>
<span class="token comment">// s2: 0</span>

</code></pre></div><p><code>Timer</code>函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的<code>this</code>绑定定义时所在的作用域（即<code>Timer</code> 函数），后者的<code>this</code>指向运行时所在的作用域（即全局对象）。所以，<code>3100</code> 毫秒之后，<code>timer.s1</code>被更新了 <code>3</code> 次，而<code>timer.s2</code>一次都没更新。</p><p><strong>箭头函数可以让this指向固定化，这种特性很有利于封装回调函数</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>

  <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
      <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">doSomething</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Handling &#39;</span> <span class="token operator">+</span> type <span class="token operator">+</span> <span class="token string">&#39; for &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><code>init</code>方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。否则，回调函数运行时，this.doSomething这一行会报错，因为此时this指向document对象。</p><p><strong><code>this</code>指向的固定化，并不是因为箭头函数内部有绑定<code>this</code>的机制，实际原因是箭头函数根本没有自己的<code>this</code>，导致内部的<code>this</code> 就是外层代码块的<code>this</code>。正是因为它没有<code>this</code>，所以也就不能用作构造函数。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;id:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> t1 <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// id: 1</span>
<span class="token keyword">var</span> t2 <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// id: 1</span>
<span class="token keyword">var</span> t3 <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// id: 1</span>

</code></pre></div><p>只有一个<code>this</code>，就是函数<code>foo</code>的<code>this</code>，所以<code>t1</code>、<code>t2</code>、<code>t3</code> 都输出同样的结果。因为所有的内层函数都是箭头函数，都没有自己的<code>this</code>，它们的this其实都是最外层<code>foo</code>函数的<code>this</code>。</p><p>除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：</p><ul><li>arguments</li><li>super</li><li>new.target</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;args:&#39;</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token comment">// args: [2, 4, 6, 8]</span>
</code></pre></div><p>上面代码中，箭头函数内部的变量<code>arguments</code>，其实是函数<code>foo</code>的<code>arguments</code>变量。</p><p>由于箭头函数没有自己的<code>this</code>，所以当然也就不能用<code>call()</code>、<code>apply()</code>、<code>bind()</code>这些方法去改变<code>this</code>的指向。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 箭头函数没有自己的this</span>
<span class="token comment">// bind方法无效，内部的this指向外部的this。</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;outer&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;outer&#39;]</span>
</code></pre></div><h3 id="function-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#function-prototype-tostring" aria-hidden="true">#</a> Function.prototype.toString()</h3><p><code>ES2019</code> 对函数实例的<code>toString()</code>方法做出了修改</p><p><code>toString()</code>方法返回函数代码本身，以前会省略注释和空格。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义函数【注意注释】</span>
<span class="token keyword">function</span> <span class="token comment">/* foo comment */</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

foo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// function foo() {}</span>

</code></pre></div><p>函数<code>foo</code>的原始代码包含注释，函数名<code>foo</code>和圆括号之间有空格，但是<code>toString()</code>方法都把它们省略了。</p><p><strong>修改后的<code>toString()</code>方法，明确要求返回一模一样的原始代码。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token comment">/* foo comment */</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

foo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;function /* foo comment */ foo () {}&quot;</span>
</code></pre></div><h3 id="catch-命令的参数省略" tabindex="-1"><a class="header-anchor" href="#catch-命令的参数省略" aria-hidden="true">#</a> catch 命令的参数省略</h3><p>JavaScript 语言的<code>try...catch</code>结构，以前明确要求<code>catch</code>命令后面必须跟参数，接受try代码块抛出的错误对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理错误</span>
<span class="token punctuation">}</span>
</code></pre></div><p>catch命令后面带有参数err。</p><p>但是，很多时候，catch代码块可能用不到这个参数。但是，为了保证语法正确，还是必须写。**ES2019 做出了改变，允许catch语句省略参数。 **</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="数组-1" tabindex="-1"><a class="header-anchor" href="#数组-1" aria-hidden="true">#</a> 数组</h2><h3 id="扩展运算符的使用" tabindex="-1"><a class="header-anchor" href="#扩展运算符的使用" aria-hidden="true">#</a> 扩展运算符的使用</h3><p>扩展运算符（<code>spread</code>）是三个点（<code>...</code>）。它好比 <code>rest</code> 参数的逆运算，<strong>将一个数组转为用逗号分隔的参数序列</strong>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// 1 2 3 4 5</span>
</code></pre></div><p>主要用于函数调用。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将数组转化为逗号分隔的参数序列</span>
<span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> <span class="token operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span>numbers<span class="token punctuation">)</span> <span class="token comment">// 42</span>

</code></pre></div><p>扩展运算符与正常的函数参数可以结合使用，非常灵活。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span> w<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 调用</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>扩展运算符后面还可以放置表达式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 结合三目运算</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>如果扩展运算符后面是一个空数组，则不产生任何效果。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">// [1]</span>
</code></pre></div><p><strong>只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>
// 扩展运算符所在的括号不是函数调用。

(...[1, 2])
// Uncaught SyntaxError: Unexpected number

console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number


// 正常函数调用情况
console.log(...[1, 2])
// 1 2

</code></pre></div><h4 id="替代函数的-apply-方法" tabindex="-1"><a class="header-anchor" href="#替代函数的-apply-方法" aria-hidden="true">#</a> 替代函数的 apply 方法</h4><p>由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5 的写法</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实际调用</span>
<span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">test</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// ES6的写法</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实际调用</span>
<span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 应用Math.max方法的简化应用</span>

<span class="token comment">// ES5 的写法</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// ES6 的写法</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 等同于</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>由于 JavaScript 不提供求数组最大元素的函数，所以只能<strong>套用<code>Math.max</code>函数，将数组转为一个参数序列，然后求最大值。</strong> 有了扩展运算符以后，就可以直接用<code>Math.max</code>了。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5的 写法</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ES6 的写法</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// ES5</span>
<span class="token keyword">new</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Date<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2015</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// ES6</span>
<span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2015</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="扩展运算符的应用" tabindex="-1"><a class="header-anchor" href="#扩展运算符的应用" aria-hidden="true">#</a> 扩展运算符的应用</h4><ul><li>复制数组</li><li>合并数组</li><li>与解构赋值结合</li><li>字符串</li><li>实现了 Iterator 接口的对象</li><li><code>Map</code> 和 Set 结构，Generator 函数</li></ul><h5 id="复制数组" tabindex="-1"><a class="header-anchor" href="#复制数组" aria-hidden="true">#</a> 复制数组</h5><p><strong>数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> a1<span class="token punctuation">;</span>


a2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
a1 <span class="token comment">// [2, 2]</span>
</code></pre></div><p>a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5 只能用变通方法来复制数组。</span>
<span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

a2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
a1 <span class="token comment">// [1, 2]</span>

</code></pre></div><p>a1会返回原数组的克隆，再修改a2就不会对a1产生影响。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 扩展运算符提供了复制数组的简便写法【都是克隆】。</span>
<span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 写法一</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a1<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 写法二</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token operator">...</span>a2<span class="token punctuation">]</span> <span class="token operator">=</span> a1<span class="token punctuation">;</span>
</code></pre></div><h5 id="合并数组" tabindex="-1"><a class="header-anchor" href="#合并数组" aria-hidden="true">#</a> 合并数组</h5><p>扩展运算符提供了数组合并的新写法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;d&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// ES5 的合并数组</span>
arr1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> arr3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39; ]</span>

<span class="token comment">// ES6 的合并数组</span>
<span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">,</span> <span class="token operator">...</span>arr3<span class="token punctuation">]</span>
<span class="token comment">// [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39; ]</span>
</code></pre></div><p>不过，这两种方法都是浅拷贝，使用的时候需要注意。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a3 <span class="token operator">=</span> a1<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>a1<span class="token punctuation">,</span> <span class="token operator">...</span>a2<span class="token punctuation">]</span><span class="token punctuation">;</span>

a3<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> a1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// true</span>
a4<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> a1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// true</span>
</code></pre></div><p>a3和a4是用两种不同方法合并而成的新数组，但是它们的成员都是对原数组成员的引用，这就是浅拷贝。**如果修改了引用指向的值，会同步反映到新数组。 **</p><h4 id="与解构赋值结合" tabindex="-1"><a class="header-anchor" href="#与解构赋值结合" aria-hidden="true">#</a> 与解构赋值结合</h4><p>扩展运算符可以与解构赋值结合起来，用于生成数组。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>// ES5
a = list[0], rest = list.slice(1)
// ES6
[a, ...rest] = list

const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = [&quot;foo&quot;];
first  // &quot;foo&quot;
rest   // []
</code></pre></div><p>如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
</code></pre></div><h4 id="字符串-2" tabindex="-1"><a class="header-anchor" href="#字符串-2" aria-hidden="true">#</a> 字符串</h4><p>扩展运算符还可以将字符串转为真正的数组。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span>
<span class="token comment">// [ &quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot; ]</span>
</code></pre></div><h4 id="实现了-iterator-接口的对象" tabindex="-1"><a class="header-anchor" href="#实现了-iterator-接口的对象" aria-hidden="true">#</a> 实现了 Iterator 接口的对象</h4><p>任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> nodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nodeList<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p><code>querySelectorAll</code>方法返回的是一个<code>NodeList</code>对象。<strong>它不是数组，而是一个类似数组的对象</strong> 。这时，扩展运算符可以将其转为真正的数组，原因就在于<code>NodeList</code>对象实现了<code>Iterator</code> 。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// arrayLike是一个类似数组的对象，但是没有部署 Iterator 接口</span>
<span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;0&#39;</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// TypeError: Cannot spread non-iterable object.</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arrayLike<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre></div><p>对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。</p><h4 id="map-和-set-结构-generator-函数" tabindex="-1"><a class="header-anchor" href="#map-和-set-结构-generator-函数" aria-hidden="true">#</a> <code>Map</code> 和 Set 结构，Generator 函数</h4><p><strong>扩展运算符内部调用的是数据结构的 Iterator 接口</strong>，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 <code>Map</code> 结构。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
</code></pre></div><p><strong>Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">go</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token comment">// [1, 2, 3]</span>
</code></pre></div><p>如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Cannot spread non-iterable object</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>obj<span class="token punctuation">]</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h3><p><code>Array.from</code>方法用于将两类对象转为真正的数组:</p><ul><li>类似数组的对象（array-like object）</li><li>可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 <code>Map</code>）</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;0&#39;</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ES5的写法</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>

<span class="token comment">// ES6的写法</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span>
</code></pre></div><p>实际应用中，常见的类似数组的对象是 <code>DOM</code> 操作返回的 <code>NodeList</code> 集合，以及函数内部的<code>arguments</code>对象。<code>Array.from</code> 都可以将它们转为真正的数组</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// NodeList对象</span>
<span class="token keyword">let</span> ps <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>ps<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> p<span class="token punctuation">.</span>textContent<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// arguments对象</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 转化成数组</span>
  <span class="token keyword">var</span> args <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong>只要是部署了 <code>Iterator</code> 接口的数据结构，<code>Array.from</code>都能将其转为数组。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串和 Set 结构都具有 Iterator 接口</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;h&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;]</span>

<span class="token keyword">let</span> namesSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>namesSet<span class="token punctuation">)</span> <span class="token comment">// [&#39;a&#39;, &#39;b&#39;]</span>
</code></pre></div><p><strong>如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3]</span>
</code></pre></div><p><strong>扩展运算符（...）也可以将某些数据结构转为数组。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// arguments对象</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 扩展运算符，效果和Array.from一样</span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p><strong><code>Array.from</code>方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有<code>length</code>属性。因此，任何有<code>length</code> 属性的对象，都可以通过<code>Array.from</code>方法转为数组，而此时扩展运算符就无法转换。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ undefined, undefined, undefined ]</span>
</code></pre></div><p><code>Array.from</code>返回了一个具有三个成员的数组，每个位置的值都是<code>undefined</code>。扩展运算符转换不了这个对象</p><p>对于还没有部署该方法的浏览器，可以用<code>Array.prototype.slice</code>方法替代。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 兼容存在Array.from情况</span>
<span class="token keyword">const</span> toArray <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    Array<span class="token punctuation">.</span>from <span class="token operator">?</span> Array<span class="token punctuation">.</span><span class="token function-variable function">from</span> <span class="token operator">:</span> <span class="token parameter">obj</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong><code>Array.from</code>还可以接受第二个参数，作用类似于数组的<code>map</code>方法，用来对每个元素进行处理，将处理后的值放入返回的数组。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">,</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>

Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> x<span class="token punctuation">)</span>
<span class="token comment">// [1, 4, 9]</span>
</code></pre></div><p><code>Array.from()</code>可以将各种值转为真正的数组，并且还提供<code>map</code> 功能。这实际上意味着，只要有一个原始的数据结构，你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;jack&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;jack&#39;, &#39;jack&#39;]</span>
</code></pre></div><p>上面代码中，Array.from的第一个参数指定了第二个参数运行的次数。这种特性可以让该方法的用法变得非常灵活。</p><p><code>Array.from()</code>的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 <code>Unicode</code> 字符，可以避免 JavaScript 将大于<code>\\uFFFF</code>的 <code>Unicode</code> 字符，算作两个字符的 <code>bug</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">countSymbols</span><span class="token punctuation">(</span><span class="token parameter">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="array-of" tabindex="-1"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of()</h3><p><strong><code>Array.of()</code>方法用于将一组值，转换为数组。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// [3,11,8]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// [3]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token comment">// 1</span>
</code></pre></div><p>弥补数组构造函数<code>Array()</code>的不足。因为参数个数的不同，会导致<code>Array()</code>的行为有差异。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// []</span>
<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// [, , ,]</span>
<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">// [3, 11, 8]</span>
</code></pre></div><p><code>Array()</code>方法没有参数、一个参数、三个参数时，返回的结果都不一样。</p><ul><li>只有当参数个数不少于 2 个时，<code>Array()</code>才会返回由参数组成的新数组。</li><li>参数只有一个正整数时，实际上是指定数组的长度。</li></ul><p><code>Array.of()</code>基本上可以用来替代<code>Array()</code>或<code>new Array()</code>，并且不存在由于参数不同而导致的重载,行为非常统一。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// []</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// [undefined]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// [1]</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// [1, 2]</span>
</code></pre></div><p><strong><code>Array.of()</code>总是返回参数值组成的数组。如果没有参数，就返回一个空数组。</strong></p><p><code>Array.of()</code>方法可以用下面的代码模拟实现。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ArrayOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// arguments 参数数组</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="copywithin" tabindex="-1"><a class="header-anchor" href="#copywithin" aria-hidden="true">#</a> copyWithin()</h3><p>数组实例的<code>copyWithin()</code>方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">copyWithin</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> end <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
</code></pre></div><p>接受三个参数:</p><ul><li>target（必需）：从该位置开始替换数据。如果为负值，表示倒数。</li><li>start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。</li><li>end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
</code></pre></div><h3 id="find-vs-findindex" tabindex="-1"><a class="header-anchor" href="#find-vs-findindex" aria-hidden="true">#</a> find() VS findIndex()</h3><p>数组实例的<code>find</code> 方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为<code>true</code> 的成员，然后返回该成员。如果没有符合条件的成员，则返回<code>undefined</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// -5</span>

  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre></div><p><strong>find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。</strong></p><p>数组实例的findIndex方法的用法与find方法非常类似，<strong>返回第一个符合条件的数组成员的位置</strong> ，如果所有成员都不符合条件，则返回<code>-1</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 返回第一个符合条件的数组成员的位置</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre></div><p>两个方法都可以接受第二个参数，用来绑定回调函数的this对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 回调函数中的this对象指向person对象。</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> v <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 26</span>
</code></pre></div><p>另外，两个方法都可以发现NaN，弥补了数组的indexOf方法的不足</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>
<span class="token comment">// -1</span>

  <span class="token punctuation">[</span><span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">y</span> <span class="token operator">=&gt;</span> Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 0</span>
</code></pre></div><p><strong>indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。</strong></p><h3 id="fill" tabindex="-1"><a class="header-anchor" href="#fill" aria-hidden="true">#</a> fill()</h3><p><code>fill</code>方法使用给定值，填充一个数组。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token comment">// [7, 7, 7]</span>

<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token comment">// [7, 7, 7]</span>

</code></pre></div><p>数组中已有的元素，会被全部抹去。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// fill方法还可以接受第二个和第三个参数</span>
<span class="token comment">// startIndex指定填充的起始位置</span>
<span class="token comment">// endIndex指定填充的结束位置</span>
<span class="token function">fill</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> startIndex<span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span>

  <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;a&#39;, 7, &#39;c&#39;]</span>
</code></pre></div><p><strong>如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mike&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Ben&quot;</span><span class="token punctuation">;</span>
arr
<span class="token comment">// [{name: &quot;Ben&quot;}, {name: &quot;Ben&quot;}, {name: &quot;Ben&quot;}]</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arr
<span class="token comment">// [[5], [5], [5]]</span>
</code></pre></div><h3 id="entries-、keys-、-values" tabindex="-1"><a class="header-anchor" href="#entries-、keys-、-values" aria-hidden="true">#</a> entries()、keys() 、 values()</h3><p>ES6 提供三个新的方法,用于遍历数组</p><ul><li><code>entries()</code> 对键值对的遍历。</li><li><code>keys()</code> 对键名的遍历</li><li><code>values()</code> 对键值的遍历</li></ul><p>都返回一个遍历器对象【Iterator】，可以用<code>for...of</code>循环进行遍历</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0</span>
<span class="token comment">// 1</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> elem <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// &#39;a&#39;</span>
<span class="token comment">// &#39;b&#39;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> elem<span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> elem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 0 &quot;a&quot;</span>
<span class="token comment">// 1 &quot;b&quot;</span>
</code></pre></div><p>如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> letter <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> entries <span class="token operator">=</span> letter<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [0, &#39;a&#39;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, &#39;b&#39;]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2, &#39;c&#39;]</span>
</code></pre></div><h3 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> includes()</h3><p><code>Array.prototype.includes</code>方法返回一个布尔值，表示某个数组是否包含给定的值.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>     <span class="token comment">// true</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>     <span class="token comment">// false</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>与字符串的includes方法类似。ES2016 引入了该方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

</code></pre></div><p><strong>第二个参数表示搜索的起始位置，默认为0</strong>。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。</p><p>通常使用数组的<code>indexOf</code>法，也能检查是否包含某个值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>indexOf</code>方法有两个缺点:</p><ul><li>不够语义化，它的含义是找到参数值的第一个出现位置，要去比较是否不等于-1，表达起来不够直观</li><li>内部使用严格相等运算符（<code>===</code>）进行判断，这会导致对NaN的误判。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// indexof存在NaN误判</span>
<span class="token punctuation">[</span><span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>
<span class="token comment">// -1</span>

<span class="token comment">// includes正常</span>
  <span class="token punctuation">[</span><span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
</code></pre></div><p>类似功能替代方案：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> contains <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>includes
      <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arr<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span> el <span class="token operator">===</span> value<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">contains</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; false</span>
</code></pre></div><p><code>Map</code> 和 <code>Set</code> 数据结构有一个<code>has</code>方法，需要注意与<code>includes</code>区分。</p><ul><li><strong><code>Map</code> 结构的has方法，是用来查找键名的</strong>，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。</li><li><strong>Set 结构的has方法，是用来查找值的</strong>，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。</li></ul><h3 id="flat-、flatmap" tabindex="-1"><a class="header-anchor" href="#flat-、flatmap" aria-hidden="true">#</a> flat()、flatMap()</h3><p>数组的成员有时还是数组，<code>Array.prototype.flat()</code>用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// flat()方法将子数组的成员取出来，添加在原来的位置。</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3, 4]</span>
</code></pre></div><p><strong>flat()默认只会“拉平”一层</strong>，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 默认拉平一层</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3, [4, 5]]</span>

<span class="token comment">// 拉平嵌套两层得嵌套数组</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3, 4, 5]</span>

</code></pre></div><p>如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不管有多少层嵌套，都要转成一维数组</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3]</span>

</code></pre></div><p>如果原数组有空位，flat()方法会跳过空位。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 4, 5]</span>
</code></pre></div><p><strong>flatMap()方法对原数组的每个成员执行一个函数</strong>（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat() 方法。该方法返回一个新数组，不改变原数组。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 相当于 [[2, 4], [3, 6], [4, 8]].flat()</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [2, 4, 3, 6, 4, 8]</span>
</code></pre></div><p><code>flatMap()</code>只能展开一层数组</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [[2], [4], [6], [8]]</span>
</code></pre></div><p>上面代码中，遍历函数返回的是一个双层的数组，但是默认只能展开一层，因此flatMap()返回的还是一个嵌套数组。</p><p><strong><code>flatMap()</code>方法的参数是一个遍历函数，可以接受三个参数</strong></p><ul><li>当前数组成员</li><li>当前数组成员的位置（从零开始）</li><li>原数组</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>
arr.flatMap(function callback(currentValue[, index[, array]]) {
  // ...
}[, thisArg])
</code></pre></div><p><strong><code>flatMap()</code>方法还可以有第二个参数，用来绑定遍历函数里面的<code>this</code>。</strong></p><h3 id="数组的空位" tabindex="-1"><a class="header-anchor" href="#数组的空位" aria-hidden="true">#</a> 数组的空位</h3><p><strong>数组的空位指，数组的某一个位置没有任何值</strong>。比如，Array构造函数返回的数组都是空位。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 返回具有 3 个空位的数组。</span>
<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// [, , ,]</span>
</code></pre></div><p>空位不是<code>undefined</code>，一个位置的值等于<code>undefined</code>，依然是有值的。<strong>空位是没有任何值</strong>，in运算符可以说明这一点。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 数组的 0 号位置是有值的</span>
<span class="token number">0</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span> <span class="token comment">// true</span>

<span class="token comment">// 数组的 0 号位置没有值</span>
<span class="token number">0</span> <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span><span class="token punctuation">]</span> <span class="token comment">// false</span>
</code></pre></div>`,664),r={href:"https://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E7%9A%84%E7%A9%BA%E4%BD%8D",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="扩展运算符" tabindex="-1"><a class="header-anchor" href="#扩展运算符" aria-hidden="true">#</a> 扩展运算符</h3><p>扩展运算符（spread）是三个点（...）,可以将数组转为用逗号分隔的参数序列</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 输出 1 2 3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token comment">// 输出 1 2 3 4 5</span>

</code></pre></div><p>可以用在函数调用这样的场景下</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> <span class="token operator">...</span>items</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数组中添加元素</span>
  arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>items<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定于参数</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">]</span>

<span class="token comment">// 调用</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">...</span>num<span class="token punctuation">)</span>

<span class="token comment">// 输出26</span>

</code></pre></div><p>从上面的代码例子中可以看出，arr.push(...items)和add(...num)都是函数的调用，也都可以使用扩展运算符，<strong>将数组变为参数序列</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 表达式</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token string">&#39;b&#39;</span>
<span class="token punctuation">]</span>

<span class="token comment">// 如上，扩展运算符是空数组，则不产生任何效果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [1]</span>

</code></pre></div><h3 id="替代数组的apply-方法" tabindex="-1"><a class="header-anchor" href="#替代数组的apply-方法" aria-hidden="true">#</a> 替代数组的apply()方法</h3><blockquote><p>apply()方法可以将数组转为函数的参数</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// ES5</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token comment">// 利用apply方法</span>

<span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>

<span class="token comment">// 而ES6中可以</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span>

</code></pre></div><p>类似的也可以</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5</span>

Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// ES6 </span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 上面个两个等价于</span>

Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

</code></pre></div><p>类似也可以实现元素添加数组到尾部</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

<span class="token comment">// ES5 (apply()劫持属性)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span>

<span class="token comment">// 特别注意：Array的原型链上的push方法不能直接使用数组，需要用apply方法劫持变通</span>

<span class="token comment">// ES6</span>
arr1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arr2<span class="token punctuation">)</span>
</code></pre></div><h3 id="简单应用" tabindex="-1"><a class="header-anchor" href="#简单应用" aria-hidden="true">#</a> 简单应用</h3><h4 id="合并数组-1" tabindex="-1"><a class="header-anchor" href="#合并数组-1" aria-hidden="true">#</a> 合并数组</h4><div class="language-text" data-ext="text"><pre class="language-text"><code>let arr1=[&#39;a&#39;,&#39;b&#39;]
let arr2=[&#39;c&#39;]
let arr3=[&#39;d&#39;,&#39;e&#39;]
// ES5
[1,2].concat(more)
// eg
arr1.concat(arr2,arr3)
// 输出 [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;]

// ES6
[1,2,...more]
// eg:
[...arr1,...arr2,...arr3]
// 输出 [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;,&#39;d&#39;,&#39;e&#39;]

</code></pre></div><h4 id="解构赋值-1" tabindex="-1"><a class="header-anchor" href="#解构赋值-1" aria-hidden="true">#</a> 解构赋值</h4><blockquote><p>与解构赋值的结合，可以帮助生成数组</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> rest <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// ES6</span>
  <span class="token punctuation">[</span>a<span class="token punctuation">,</span>
<span class="token operator">...</span>
rest
<span class="token punctuation">]</span>
<span class="token operator">=</span> list

<span class="token keyword">const</span> <span class="token punctuation">[</span>first<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

first <span class="token comment">// 1</span>
rest <span class="token comment">// [2,3,4,5]</span>
</code></pre></div><h4 id="函数的返回值" tabindex="-1"><a class="header-anchor" href="#函数的返回值" aria-hidden="true">#</a> 函数的返回值</h4><blockquote><p>在Javascript中，函数只能返回一个值，如果需要返回多个值，就通过返回对象或者数组来实现，拓展运算符提供了相对应的变通方法</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fields <span class="token operator">=</span> <span class="token function">readDateFields</span><span class="token punctuation">(</span>database<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 间数据构造传入构造函数Date(),获取新值</span>
<span class="token keyword">const</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token operator">...</span>fields<span class="token punctuation">)</span>

</code></pre></div><h4 id="字符串-3" tabindex="-1"><a class="header-anchor" href="#字符串-3" aria-hidden="true">#</a> 字符串</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">]</span>
<span class="token comment">// [&#39;h&#39;,&#39;e&#39;,&#39;l&#39;,&#39;l&#39;,&#39;o&#39;]</span>
</code></pre></div><h2 id="对象-1" tabindex="-1"><a class="header-anchor" href="#对象-1" aria-hidden="true">#</a> 对象</h2><blockquote><p>对象（object）是 JavaScript 最重要的数据结构</p></blockquote><h3 id="属性的简洁表示法" tabindex="-1"><a class="header-anchor" href="#属性的简洁表示法" aria-hidden="true">#</a> 属性的简洁表示法</h3><p>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 属性名就是变量名, 属性值就是变量值</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span>foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
baz <span class="token comment">// {foo: &quot;bar&quot;}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> foo<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>除了属性简写，方法也可以简写。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> x<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> y<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// Object {x: 1, y: 2}</span>


<span class="token keyword">const</span> fc <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">const</span> fc <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">method</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>CommonJS 模块输出一组变量，就非常合适使用简洁写法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> ms <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> key <span class="token keyword">in</span> ms <span class="token operator">?</span> ms<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ms<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ms <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>getItem<span class="token punctuation">,</span> setItem<span class="token punctuation">,</span> clear<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">getItem</span><span class="token operator">:</span> getItem<span class="token punctuation">,</span>
  <span class="token literal-property property">setItem</span><span class="token operator">:</span> setItem<span class="token punctuation">,</span>
  <span class="token literal-property property">clear</span><span class="token operator">:</span> clear
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> cart <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 属性</span>
  <span class="token literal-property property">_wheels</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>

  <span class="token comment">// 取值器</span>
  <span class="token keyword">get</span> <span class="token function">wheels</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_wheels<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 赋值器</span>
  <span class="token keyword">set</span> <span class="token function">wheels</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_wheels<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;数值太小了！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_wheels <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>注意，简写的对象方法不能用作构造函数，会报错</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre></div><p>上面代码中，<code>test</code>是一个简写的对象方法，所以<code>obj.test</code>不能当作构造函数使用。</p><h3 id="属性名表达式" tabindex="-1"><a class="header-anchor" href="#属性名表达式" aria-hidden="true">#</a> 属性名表达式</h3><p>JavaScript 定义对象属性的两种方法</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法一:直接用标识符作为属性名</span>
obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// 方法二:用表达式作为属性名</span>
obj<span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;bc&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>

</code></pre></div><p>如果使用字面量方式定义对象（使用大括号），在 ES5 中只能使用方法一（标识符）定义属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">abc</span><span class="token operator">:</span> <span class="token number">123</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> propKey <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>propKey<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;bc&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">123</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>表达式还可以用于定义方法名。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token string">&#39;ello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hi</span>

</code></pre></div><p>注意，属性名表达式与简洁表示法，不能同时使用，会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 正确</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> baz <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>foo<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串<code>[object Object]</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> keyA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> keyB <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>keyA<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;valueA&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>keyB<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;valueB&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

myObject <span class="token comment">// Object {[object Object]: &quot;valueB&quot;}</span>
</code></pre></div><h3 id="方法的-name-属性" tabindex="-1"><a class="header-anchor" href="#方法的-name-属性" aria-hidden="true">#</a> 方法的 name 属性</h3><p>函数的<code>name</code>属性，返回函数名。对象方法也是函数，因此也有<code>name</code>属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 方法的name属性返回函数名（即方法名）</span>
person<span class="token punctuation">.</span>sayName<span class="token punctuation">.</span>name   <span class="token comment">// &quot;sayName&quot;</span>
</code></pre></div><p>如果对象的方法使用了取值函数（<code>getter</code>）和存值函数（<code>setter</code>），则name属性不是在该方法上面，而是该方法的属性的描述对象的<code>get</code> 和<code>set</code>属性上面，返回值是方法名前加上<code>get</code>和<code>set</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>foo<span class="token punctuation">.</span>name
<span class="token comment">// TypeError: Cannot read property &#39;name&#39; of undefined</span>


<span class="token keyword">const</span> descriptor <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

descriptor<span class="token punctuation">.</span>get<span class="token punctuation">.</span>name <span class="token comment">// &quot;get foo&quot;</span>
descriptor<span class="token punctuation">.</span>set<span class="token punctuation">.</span>name <span class="token comment">// &quot;set foo&quot;</span>
</code></pre></div><p><strong><code>Object.getOwnPropertyDescriptor</code>方法，返回某个对象属性的描述对象（ <code>descriptor</code> ）。</strong></p><p>有两种特殊情况:</p><ul><li><p><code>bind</code>方法创造的函数，<code>name</code>属性返回<code>bound</code>加上原函数的名字</p></li><li><p><code>Function</code>构造函数创造的函数，<code>name</code>属性返回<code>anonymous</code>。</p></li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;anonymous&quot;</span>

<span class="token keyword">var</span> <span class="token function-variable function">doSomething</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">doSomething</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;bound doSomething&quot;</span>
</code></pre></div><p>如果对象的方法是一个 <code>Symbol</code> 值，那么<code>name</code>属性返回的是这个 <code>Symbol</code> 值的描述。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> key1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;description&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> key2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key1<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>key2<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">[</span>key1<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;[description]&quot;</span>

<span class="token comment">// 没有Symbol描述，为空字符串</span>
obj<span class="token punctuation">[</span>key2<span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token comment">// &quot;&quot;</span>

</code></pre></div><h3 id="属性的可枚举性和遍历" tabindex="-1"><a class="header-anchor" href="#属性的可枚举性和遍历" aria-hidden="true">#</a> 属性的可枚举性和遍历</h3><h4 id="可枚举性" tabindex="-1"><a class="header-anchor" href="#可枚举性" aria-hidden="true">#</a> 可枚举性</h4><p>对象的每个属性都有一个描述对象（<code>Descriptor</code>），用来控制该属性的行为。<code>Object.getOwnPropertyDescriptor</code>方法可以获取该属性的描述对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//  {</span>
<span class="token comment">//    value: 123,</span>
<span class="token comment">//    writable: true,</span>
<span class="token comment">//    enumerable: true,</span>
<span class="token comment">//    configurable: true</span>
<span class="token comment">//  }</span>

</code></pre></div><p>描述对象的<code>enumerable</code>属性，称为“可枚举性”，<strong>如果该属性为<code>false</code>，就表示某些操作会忽略当前属性。</strong></p><p>目前，有四个操作会忽略<code>enumerable</code>为<code>false</code>的属性</p><ul><li><code>for...in循环</code>：只遍历对象自身的和继承的可枚举的属性。</li><li><code>Object.keys()</code>：返回对象自身的所有可枚举的属性的键名。</li><li><code>JSON.stringify()</code>：只串行化对象自身的可枚举的属性。</li><li><code>Object.assign()</code>： 忽略<code>enumerable</code>为<code>false</code>的属性，只拷贝对象自身的可枚举的属性。【ES6新增】</li></ul><p><strong>只有<code>for...in</code>会返回继承的属性，其他三个方法都会忽略继承的属性，只处理对象自身的属性。</strong></p><blockquote><p>实际上，引入“可枚举”（<code>enumerable</code>）这个概念的最初目的，就是让某些属性可以规避掉for...in操作，不然所有内部属性和方法都会被遍历到。</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;toString&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enumerable
<span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;length&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enumerable
<span class="token comment">// false</span>
</code></pre></div><p>对象原型的toString方法，以及数组的length属性，就通过“可枚举性”，从而避免被for...in遍历到。</p><p><strong>ES6 规定，所有 Class 的原型的方法都是不可枚举的。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span><span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>enumerable
<span class="token comment">// false</span>
</code></pre></div><p>总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，只关心对象自身的属性。所以，<strong>尽量不要用<code>for...in</code> 循环，而用<code>Object.keys()</code>代替。</strong></p><h4 id="属性的遍历" tabindex="-1"><a class="header-anchor" href="#属性的遍历" aria-hidden="true">#</a> 属性的遍历</h4><p>ES6 一共有 5 种方法可以遍历对象的属性</p><ul><li><code>for...in</code></li><li><code>Object.keys(obj)</code></li><li><code>Object.getOwnPropertyNames(Obj)</code></li><li><code>Object.getOwnPropertySymbols(obj)</code></li><li><code>Reflect.ownKeys(obj)</code></li></ul><h5 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for...in</h5><p><code>for...in</code>循环遍历对象自身的和继承的可枚举属性（不含 <code>Symbol</code>属性）。</p><h5 id="object-keys-obj" tabindex="-1"><a class="header-anchor" href="#object-keys-obj" aria-hidden="true">#</a> Object.keys(obj)</h5><p><code>Object.keys</code>返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。</p><h5 id="object-getownpropertynames-obj" tabindex="-1"><a class="header-anchor" href="#object-getownpropertynames-obj" aria-hidden="true">#</a> Object.getOwnPropertyNames(obj)</h5><p><code>Object.getOwnPropertyNames</code>返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。</p><h5 id="object-getownpropertysymbols-obj" tabindex="-1"><a class="header-anchor" href="#object-getownpropertysymbols-obj" aria-hidden="true">#</a> Object.getOwnPropertySymbols(obj)</h5><p><code>Object.getOwnPropertySymbols</code>返回一个数组，包含对象自身的所有 <code>Symbol</code> 属性的键名。</p><h5 id="reflect-ownkeys-obj" tabindex="-1"><a class="header-anchor" href="#reflect-ownkeys-obj" aria-hidden="true">#</a> Reflect.ownKeys(obj)</h5><p><code>Reflect.ownKeys</code>返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 <code>Symbol</code> 或字符串，也不管是否可枚举。</p><p><strong>以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。</strong></p><ul><li>首先遍历所有数值键，按照数值升序排列。</li><li>其次遍历所有字符串键，按照加入时间升序排列。</li><li>最后遍历所有 <code>Symbol</code> 键，按照加入时间升序排列。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 排序规则：首先是数值属性2和10，其次是字符串属性b和a，最后是 Symbol 属性。</span>
Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// [&#39;2&#39;, &#39;10&#39;, &#39;b&#39;, &#39;a&#39;, Symbol()]</span>
</code></pre></div><h3 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h3><p><code>this</code>关键字总是指向函数所在的当前对象，<code>ES6</code> 新增了另一个类似的关键字<code>super</code>，<strong>指向当前对象的原型对象</strong>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
  <span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对象obj.find()方法之中，通过super.foo引用了原型对象proto的foo属性。</span>
obj<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;hello&quot;</span>

</code></pre></div><p>注意：Object.setPrototypeOf()，为现有对象设置原型，返回一个新对象，接收两个参数：</p><ul><li>第一个是现有对象</li><li>第二是原型对象。</li></ul><p><strong>注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo
<span class="token punctuation">}</span>

<span class="token comment">// 报错</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span>foo
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面三种<code>super</code>的用法都会报错，因为对于 <code>JavaScript</code> 引擎来说，这里的super都没有用在对象的方法之中。第一种写法是<code>super</code> 用在属性里面，第二种和第三种写法是super用在一个函数里面，然后赋值给<code>foo</code>属性。目前，只有对象方法的简写法可以让 <code>JavaScript</code> 引擎确认，定义的是对象的方法。</p><p><code>JavaScript</code> 引擎内部，<code>super.foo</code>等同于<code>Object.getPrototypeOf(this).foo（属性）</code> 或<code>Object.getPrototypeOf(this).foo.call(this)</code>（方法）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &quot;world&quot;</span>
</code></pre></div><p>上面代码中，<code>super.foo</code>指向原型对象<code>proto</code>的<code>foo</code>方法，但是绑定的<code>this</code>却还是当前对象<code>obj</code>，因此输出的就是<code>world</code>。</p><h3 id="链判断运算符" tabindex="-1"><a class="header-anchor" href="#链判断运算符" aria-hidden="true">#</a> 链判断运算符</h3><p>如果读取对象内部的某个属性，往往需要判断一下该对象是否存在</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 错误的写法</span>
<span class="token keyword">const</span> firstName <span class="token operator">=</span> message<span class="token punctuation">.</span>body<span class="token punctuation">.</span>user<span class="token punctuation">.</span>firstName<span class="token punctuation">;</span>

<span class="token comment">// 正确的写法</span>
<span class="token keyword">const</span> firstName <span class="token operator">=</span> <span class="token punctuation">(</span>message
  <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>body
  <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>body<span class="token punctuation">.</span>user
  <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>body<span class="token punctuation">.</span>user<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>上面例子中，<code>firstName</code>属性在对象的第四层，所以需要判断四次，每一层是否有值。</p><p><strong>三元运算符?:也常用于判断对象是否存在。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fooInput <span class="token operator">=</span> myForm<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input[name=foo]&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> fooValue <span class="token operator">=</span> fooInput <span class="token operator">?</span> fooInput<span class="token punctuation">.</span>value <span class="token operator">:</span> <span class="token keyword">undefined</span>
</code></pre></div><p>这样的层层判断非常麻烦,ES2020 引入了“链判断运算符”（optional chaining operator）<code>?.</code>，简化上面的写法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> firstName <span class="token operator">=</span> message<span class="token operator">?.</span>body<span class="token operator">?.</span>user<span class="token operator">?.</span>firstName <span class="token operator">||</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fooValue <span class="token operator">=</span> myForm<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;input[name=foo]&#39;</span><span class="token punctuation">)</span><span class="token operator">?.</span>value
</code></pre></div><p>上面代码使用了<code>?.</code>运算符，直接在链式调用的时候判断，左侧的对象是否为<code>null</code>或<code>undefined</code> 。如果是的，就不再往下运算，而是返回<code>undefined</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 判断对象方法是否存在，如果存在就立即执行</span>
iterator<span class="token punctuation">.</span>return<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p><code>iterator.return</code>如果有定义，就会调用该方法，否则<code>iterator.return</code>直接返回<code>undefined</code>，不再执行<code>?.</code>后面的部分。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>myForm<span class="token punctuation">.</span>checkValidity<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 表单校验失败</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>链判断运算符有三种用法:</p><ul><li><code>obj?.prop</code> : 对象属性</li><li><code>obj?.[expr]</code> : 同上</li><li><code>func?.(...args)</code> : 函数或对象方法的调用</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>a<span class="token operator">?.</span>b
<span class="token comment">// 等同于</span>
a <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> a<span class="token punctuation">.</span>b

a<span class="token operator">?.</span><span class="token punctuation">[</span>x<span class="token punctuation">]</span>
<span class="token comment">// 等同于</span>
a <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> a<span class="token punctuation">[</span>x<span class="token punctuation">]</span>

a<span class="token operator">?.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 等同于</span>
a <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> a<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

a<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 等同于</span>
a <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>特别注意后两种形式，如果<code>a?.b()</code>里面的<code>a.b</code>不是函数，不可调用，那么<code>a?.b()</code>是会报错的。<code>a?.()</code>也是如此，如果<code>a</code>不是<code>null</code> 或<code>undefined</code>，但也不是函数，那么<code>a?.()</code>会报错。</p><p>使用链判断运算符，有几个注意点：</p><ul><li>短路机制</li><li>delete运算符</li><li>括号的影响</li><li>报错场合</li><li>右侧不得为十进制数值</li></ul><h4 id="短路机制" tabindex="-1"><a class="header-anchor" href="#短路机制" aria-hidden="true">#</a> 短路机制</h4><p><code>?.</code>运算符相当于一种短路机制，只要不满足条件，就不再往下执行。<strong>链判断运算符一旦为真，右侧的表达式就不再求值。</strong></p><h4 id="delete-运算符" tabindex="-1"><a class="header-anchor" href="#delete-运算符" aria-hidden="true">#</a> delete 运算符</h4><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">delete</span> a<span class="token operator">?.</span>b
<span class="token comment">// 等同于</span>
a <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> <span class="token keyword">delete</span> a<span class="token punctuation">.</span>b
</code></pre></div><p>如果a是<code>undefined</code>或<code>null</code>，会直接返回<code>undefined</code>，而不会进行<code>delete运算</code>。</p><h4 id="括号的影响" tabindex="-1"><a class="header-anchor" href="#括号的影响" aria-hidden="true">#</a> 括号的影响</h4><p>如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span>a<span class="token operator">?.</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span>c
  <span class="token comment">// 等价于</span>
  <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">undefined</span> <span class="token operator">:</span> a<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span>c
</code></pre></div><p><strong>一般来说，使用<code>?.</code>运算符的场合，不应该使用圆括号。</strong></p><h4 id="报错场合" tabindex="-1"><a class="header-anchor" href="#报错场合" aria-hidden="true">#</a> 报错场合</h4><p>以下写法是禁止的，会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 构造函数</span>
<span class="token keyword">new</span> <span class="token class-name">a</span><span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">new</span> <span class="token class-name">a</span><span class="token operator">?.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 链判断运算符的右侧有模板字符串</span>
a<span class="token operator">?.</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{b}</span><span class="token template-punctuation string">\`</span></span>
a<span class="token operator">?.</span>b<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">{c}</span><span class="token template-punctuation string">\`</span></span>

<span class="token comment">// 链判断运算符的左侧是 super</span>
<span class="token keyword">super</span><span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">super</span><span class="token operator">?.</span>foo

<span class="token comment">// 链运算符用于赋值运算符左侧</span>
a<span class="token operator">?.</span>b <span class="token operator">=</span> c
</code></pre></div><h4 id="右侧不得为十进制数值" tabindex="-1"><a class="header-anchor" href="#右侧不得为十进制数值" aria-hidden="true">#</a> 右侧不得为十进制数值</h4><p>为了保证兼容以前的代码，允许<code>foo?.3:0</code>被解析成<code>foo ? .3 : 0</code>，因此规定如果<code>?.</code>后面紧跟一个十进制数字，那么<code>?.</code> 不再被看成是一个完整的运算符，而会按照<code>三元运算符</code>进行处理，<strong>也就是说，那个小数点会归属于后面的十进制数字，形成一个小数。</strong></p><h3 id="null-判断运算符" tabindex="-1"><a class="header-anchor" href="#null-判断运算符" aria-hidden="true">#</a> Null 判断运算符</h3><p>读取对象属性的时候，如果某个属性的值是<code>null</code>或<code>undefined</code>，有时候需要为它们指定默认值。常见做法是通过<code>||</code>运算符指定默认值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> headerText <span class="token operator">=</span> response<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>headerText <span class="token operator">||</span> <span class="token string">&#39;Hello, world!&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> animationDuration <span class="token operator">=</span> response<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>animationDuration <span class="token operator">||</span> <span class="token number">300</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> showSplashScreen <span class="token operator">=</span> response<span class="token punctuation">.</span>settings<span class="token punctuation">.</span>showSplashScreen <span class="token operator">||</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre></div><p>开发者的原意是，只要属性的值为null或undefined，默认值就会生效，<strong>但是属性的值如果为空字符串或false或0，默认值也会生效。</strong></p><p>为了避免这种情况，ES2020 引入了一个新的 <code>Null</code> 判断运算符<code>??</code>。</p><p>行为类似<code>||</code>，但是<strong>只有运算符左侧的值为<code>null</code>或<code>undefined</code>时，才会返回右侧的值。</strong></p><p>这个运算符的一个目的，就是跟链判断运算符?.配合使用，为null或undefined的值设置默认值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> animationDuration <span class="token operator">=</span> response<span class="token punctuation">.</span>settings<span class="token operator">?.</span>animationDuration <span class="token operator">??</span> <span class="token number">300</span><span class="token punctuation">;</span>
</code></pre></div><p>这个运算符很适合判断函数参数是否赋值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> enable <span class="token operator">=</span> props<span class="token punctuation">.</span>enabled <span class="token operator">??</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// …</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="对象新增方法" tabindex="-1"><a class="header-anchor" href="#对象新增方法" aria-hidden="true">#</a> 对象新增方法</h2><ul><li><code>Object.is()</code></li><li><code>Object.assign()</code></li><li><code>Object.getOwnPropertyDescriptors()</code></li><li><code>__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()</code></li><li><code>Object.keys()，Object.values()，Object.entries()</code></li><li><code>Object.fromEntries()</code></li></ul><h3 id="object-is" tabindex="-1"><a class="header-anchor" href="#object-is" aria-hidden="true">#</a> <code>Object.is()</code></h3><p>ES5 比较两个值是否相等，只有两个运算符：相等运算符（<code>==</code>）和严格相等运算符（<code>===</code>）</p><ul><li>相等运算符（<code>==</code>）会自动转换数据类型</li><li>严格相等运算符（<code>===</code>）的NaN不等于自身</li></ul><blockquote><p>ES6 提出“Same-value equality”（同值相等）算法,<strong>在所有环境中，只要两个值是一样的，它们就应该相等。</strong></p></blockquote><p><strong><code>Object.is()</code>用来比较两个值是否严格相等，与严格比较运算符（<code>===</code>）的行为基本一致。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// false</span>
</code></pre></div><p>不同之处只有两个：</p><ul><li><code>Object.is()</code>的<code>+0</code>不等于<code>-0</code></li><li><code>Object.is()</code>的<code>NaN</code>等于自身</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">+</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">0</span> <span class="token comment">//true</span>
<span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span> <span class="token comment">// false</span>

Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><p>类似功能实现：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 实现 Object.is()功能</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>Object<span class="token punctuation">,</span> <span class="token string">&#39;is&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">value</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 针对+0 不等于 -0的情况</span>
      <span class="token keyword">return</span> x <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token number">1</span> <span class="token operator">/</span> x <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">/</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 针对NaN的情况</span>
    <span class="token keyword">return</span> x <span class="token operator">!==</span> x <span class="token operator">&amp;&amp;</span> y <span class="token operator">!==</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> <code>Object.assign()</code></h3><p><code>Object.assign()</code>方法用于对象的合并，将源对象（<code>source</code>）的所有可枚举属性，复制到目标对象（<code>target</code>）。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span>
target <span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre></div><p><strong><code>Object.assign()</code>方法的第一个参数是目标对象，后面的参数都是源对象。</strong></p><p>注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> source1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> source2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source1<span class="token punctuation">,</span> source2<span class="token punctuation">)</span><span class="token punctuation">;</span>
target <span class="token comment">// {a:1, b:2, c:3}</span>
</code></pre></div><p>如果只有一个参数，Object.assign()会直接返回该参数。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">===</span> obj <span class="token comment">// true</span>
</code></pre></div><p>如果该参数不是对象，则会先转成对象，然后返回。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">typeof</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;object&quot;</span>
</code></pre></div><p><strong>由于<code>undefined</code>和<code>null</code>无法转成对象，所以如果它们作为参数，就会报错。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>
</code></pre></div><p>如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果<code>undefined</code> 和<code>null</code>不在首参数，就不会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token operator">===</span> obj <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">===</span> obj <span class="token comment">// true</span>
</code></pre></div><p><strong>其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。</strong></p><p>除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> v3 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { &quot;0&quot;: &quot;a&quot;, &quot;1&quot;: &quot;b&quot;, &quot;2&quot;: &quot;c&quot; }</span>
</code></pre></div><p>只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。<strong>因为只有字符串的包装对象，会产生可枚举属性。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token function">Object</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// {[[PrimitiveValue]]: true}</span>
<span class="token function">Object</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment">//  {[[PrimitiveValue]]: 10}</span>
<span class="token function">Object</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token comment">// {0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot;, length: 3, [[PrimitiveValue]]: &quot;abc&quot;}</span>

</code></pre></div><p><code>布尔值</code>、<code>数值</code>、<code>字符串</code>分别转成对应的包装对象，可以看到它们的原始值都在包装对象的内部属性<code>[[PrimitiveValue]]</code> 上面，这个属性是不会被<code>Object.assign()</code>拷贝的。只有字符串的包装对象，会产生<code>可枚举的实义属性</code>，那些属性则会被拷贝。</p><p>Object.assign()拷贝的属性是有限制的</p><ul><li>只拷贝源对象的自身属性</li><li>不拷贝继承属性</li><li>不拷贝不可枚举的属性（enumerable: false）。</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;invisible&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// Object.assign()要拷贝的对象只有一个不可枚举属性invisible，这个属性没有被拷贝进去。</span>
<span class="token comment">// { b: &#39;c&#39; }</span>
</code></pre></div><p>属性名为 Symbol 值的属性，也会被Object.assign()拷贝。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// { a: &#39;b&#39;, Symbol(c): &#39;d&#39; }</span>
</code></pre></div><h4 id="需要注意" tabindex="-1"><a class="header-anchor" href="#需要注意" aria-hidden="true">#</a> 需要注意</h4><ul><li>浅拷贝</li></ul><p><code>Object.assign()</code>方法实行的是浅拷贝，而不是深拷贝。 <strong>如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个<code>对象的引用</code>。</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// obj1.a.b的任何变化，都会反映到obj2.a.b上面。</span>
obj1<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
obj2<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token comment">// 2</span>
</code></pre></div><ul><li>同名属性的替换</li></ul><p>对于这种嵌套的对象，一旦遇到同名属性，<code>Object.assign()</code>的处理方法是替换，而不是添加。</p><p>一些函数库提供<code>Object.assign()</code>的定制版本（比如 <code>Lodash</code> 的<code>_.defaultsDeep()</code>方法），可以得到深拷贝的合并。</p><ul><li>数组的处理</li></ul><p><code>Object.assign()</code>可以用来处理数组，但是会把数组视为对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// [4, 5, 3]</span>

</code></pre></div><p>上面代码中，<code>Object.assign()</code>把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。</p><ul><li>取值函数的处理</li></ul><p><code>Object.assign()</code>只能进行值的复制，如果要复制的值是一个取值函数，那么<strong>将求值后再复制</strong>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">get</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> source<span class="token punctuation">)</span>
<span class="token comment">// { foo: 1 }</span>
</code></pre></div><p>上面代码中，<code>source</code>对象的<code>foo</code>属性是一个取值函数，<code>Object.assign()</code>不会复制这个取值函数，只会拿到值以后，将这个值复制过去。</p><h4 id="常见用途" tabindex="-1"><a class="header-anchor" href="#常见用途" aria-hidden="true">#</a> 常见用途</h4><ul><li>为对象添加属性</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将x属性和y属性添加到Point类的对象实例。</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>为对象添加方法</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">SomeClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ···
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">anotherMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ···
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于下面的写法</span>
<span class="token class-name">SomeClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">someMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
···
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">SomeClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">anotherMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
···
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>克隆对象</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值</strong>。</p><p>如果想要保持继承链，可以采用下面的代码。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> originProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>originProto<span class="token punctuation">)</span><span class="token punctuation">,</span> origin<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,209),m={href:"https://www.cnblogs.com/leijee/p/7490822.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<ul><li>合并多个对象</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 将多个对象合并到某个对象</span>
<span class="token keyword">const</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span>
  <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> <span class="token operator">...</span>sources</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token operator">...</span>sources<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对一个空对象合并，合并后返回一个新对象</span>
<span class="token keyword">const</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span>
  <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>sources</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">...</span>sources<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>为属性指定默认值</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">DEFAULTS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">logLevel</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">outputFormat</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">processContent</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token constant">DEFAULTS</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>上面代码中</p><ul><li><code>DEFAULTS</code>对象是默认值</li><li><code>options</code>对象是用户提供的参数。</li></ul><p><code>Object.assign()</code>方法将<code>DEFAULTS</code>和<code>options</code>合并成一个新对象，如果两者有同名属性，则<code>options</code>的属性值会覆盖<code>DEFAULTS</code>的属性值。</p><p><strong>注意，由于存在浅拷贝的问题，<code>DEFAULTS</code>对象和<code>options</code> 对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，<code>DEFAULTS</code>对象的该属性很可能不起作用。</strong></p><h3 id="object-getownpropertydescriptors" tabindex="-1"><a class="header-anchor" href="#object-getownpropertydescriptors" aria-hidden="true">#</a> Object.getOwnPropertyDescriptors()</h3><p><code>ES5</code>的<code>Object.getOwnPropertyDescriptor()</code>方法会返回某个对象属性的描述对象（<code>descriptor</code>）</p><p><code>ES2017</code> 引入了<code>Object.getOwnPropertyDescriptors()</code>方法，返回指定对象所有自身属性（非继承属性）的描述对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 相关实现</span>
<span class="token keyword">function</span> <span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Reflect<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>getOwnPropertyDescriptors</code>该方法的引入目的，主要是为了解决<code>Object.assign()</code>无法正确拷贝<code>get</code>属性和<code>set</code>属性的问题。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">set</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> target1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>target1<span class="token punctuation">,</span> source<span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>target1<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// { value: undefined,</span>
<span class="token comment">//   writable: true,</span>
<span class="token comment">//   enumerable: true,</span>
<span class="token comment">//   configurable: true }</span>
</code></pre></div><p>上面代码中，<code>source</code>对象的<code>foo</code>属性的值是一个赋值函数，<code>Object.assign</code>方法将这个属性拷贝给<code>target1</code> 对象，结果该属性的值变成了<code>undefined</code>。 <strong>这是因为<code>Object.assign</code>方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。</strong></p><p>这时，<code>Object.getOwnPropertyDescriptors()</code>方法配合<code>Object.defineProperties()</code>方法，就可以实现正确拷贝。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">set</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> target2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>target2<span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>target2<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// { get: undefined,</span>
<span class="token comment">//   set: [Function: set foo],</span>
<span class="token comment">//   enumerable: true,</span>
<span class="token comment">//   configurable: true }</span>


<span class="token comment">// 抽象成函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">shallowMerge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> source</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>
  target<span class="token punctuation">,</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="proto-属性-object-setprototypeof-object-getprototypeof" tabindex="-1"><a class="header-anchor" href="#proto-属性-object-setprototypeof-object-getprototypeof" aria-hidden="true">#</a> __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()</h3><blockquote><p>JavaScript 语言的对象继承是通过原型链实现的。ES6 提供了更多原型对象的操作方法</p></blockquote><h4 id="proto-属性" tabindex="-1"><a class="header-anchor" href="#proto-属性" aria-hidden="true">#</a> __proto__属性</h4><p><code>__proto__</code>属性（前后各两个下划线），用来读取或设置当前对象的原型对象（<code>prototype</code>）。目前，所有浏览器（包括 <code>IE11</code>）都部署了这个属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// es5 的写法</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">method</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> someOtherObj<span class="token punctuation">;</span>

<span class="token comment">// es6 的写法</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>someOtherObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">method</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>可以使用</p><ul><li><code>Object.setPrototypeOf()</code>（写操作）</li><li><code>Object.getPrototypeOf()</code>（读操作）</li><li><code>Object.create()</code>（生成操作）</li></ul><p>代替实现。</p><p>实现上，<code>__proto__</code>调用的是<code>Object.prototype.__proto__</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">&#39;__proto__&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> _thisObj <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>_thisObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> <span class="token keyword">this</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> status <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">Object</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">===</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>如果一个对象本身部署了<code>__proto__</code>属性，该属性的值就是对象的原型。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">__proto__</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// null</span>
</code></pre></div><h4 id="object-setprototypeof" tabindex="-1"><a class="header-anchor" href="#object-setprototypeof" aria-hidden="true">#</a> Object.setPrototypeOf()</h4><p><code>Object.setPrototypeOf</code>方法的作用与<code>__proto__</code>相同，用来设置一个对象的原型对象（<code>prototype</code>），返回参数对象本身,是 ES6 正式推荐的设置原型对象的方法。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 格式</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> prototype<span class="token punctuation">)</span>

<span class="token comment">// 用法</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">function</span> <span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> proto</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> proto<span class="token punctuation">;</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>很经典的例子：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> proto<span class="token punctuation">)</span><span class="token punctuation">;</span>

proto<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
proto<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span>x <span class="token comment">// 10</span>
obj<span class="token punctuation">.</span>y <span class="token comment">// 20</span>
obj<span class="token punctuation">.</span>z <span class="token comment">// 40</span>
</code></pre></div><p>将<code>proto</code>对象设为<code>obj</code>对象的原型，所以从<code>obj</code>对象可以读取<code>proto</code>对象的属性。</p><p><strong>如果第一个参数不是对象，会自动转为对象</strong>。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;foo&#39;</span> <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span> <span class="token comment">// true</span>
</code></pre></div><p>由于<code>undefined</code>和<code>null</code>无法转为对象，所以如果第一个参数是<code>undefined</code>或<code>null</code>，就会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Object.setPrototypeOf called on null or undefined</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Object.setPrototypeOf called on null or undefined</span>
</code></pre></div><h4 id="object-getprototypeof" tabindex="-1"><a class="header-anchor" href="#object-getprototypeof" aria-hidden="true">#</a> Object.getPrototypeOf()</h4><p>与<code>Object.setPrototypeOf</code>方法配套，用于读取一个对象的原型对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 基本使用</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 原型设置和获取</span>
<span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">User</span><span class="token punctuation">.</span>prototype
<span class="token comment">// true</span>

Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">User</span><span class="token punctuation">.</span>prototype
<span class="token comment">// false</span>
</code></pre></div><p>如果参数不是对象，会被自动转为对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 等同于 Object.getPrototypeOf(Number(1))</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// Number {[[PrimitiveValue]]: 0}</span>

<span class="token comment">// 等同于 Object.getPrototypeOf(String(&#39;foo&#39;))</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// String {length: 0, [[PrimitiveValue]]: &quot;&quot;}</span>

<span class="token comment">// 等同于 Object.getPrototypeOf(Boolean(true))</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// Boolean {[[PrimitiveValue]]: false}</span>

Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Number</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">String</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
</code></pre></div><p>如果参数是<code>undefined</code>或<code>null</code>，它们无法转为对象，所以会报错。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Cannot convert undefined or null to object</span>

Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>
<span class="token comment">// TypeError: Cannot convert undefined or null to object</span>
</code></pre></div><h3 id="object-keys-object-values-object-entries" tabindex="-1"><a class="header-anchor" href="#object-keys-object-values-object-entries" aria-hidden="true">#</a> Object.keys()，Object.values()，Object.entries()</h3><h4 id="object-keys" tabindex="-1"><a class="header-anchor" href="#object-keys" aria-hidden="true">#</a> Object.keys()</h4><p>ES5 引入了<code>Object.keys</code>方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// [&quot;name&quot;, &quot;age&quot;]</span>
</code></pre></div><h4 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values" aria-hidden="true">#</a> Object.values()</h4><p><code>Object.values</code>方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（<code>enumerable</code>）属性的键值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token comment">// [&quot;bob&quot;, 24]</span>
</code></pre></div><ul><li><p><code>Object.values</code>只返回对象自身的可遍历属性。</p></li><li><p><code>Object.values</code>会过滤属性名为 Symbol 值的属性。</p></li><li><p>如果参数不是对象，<code>Object.values</code>会先将其转为对象。* <em>由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。<code>Object.values</code>会返回空数组。</em>*</p></li></ul><h4 id="object-entries" tabindex="-1"><a class="header-anchor" href="#object-entries" aria-hidden="true">#</a> Object.entries()</h4><p><code>Object.entries()</code>方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（<code>enumerable</code>）属性的键值对数组。</p><p><code>Object.entries</code>的基本用途是遍历对象的属性。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">one</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">two</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>k<span class="token punctuation">,</span> v<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// &quot;one&quot;: 1</span>
<span class="token comment">// &quot;two&quot;: 2</span>
</code></pre></div><p><code>Object.entries</code>方法的另一个用处是，将对象转为真正的<code>Map</code>结构。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map <span class="token comment">// Map { name: &quot;bob&quot;, age: 24 }</span>
</code></pre></div><p>自己实现<code>Object.entries</code>方法，循环遍历</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Generator函数的版本</span>
<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">entries</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 非Generator函数的版本</span>
<span class="token keyword">function</span> <span class="token function">entries</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="object-fromentries" tabindex="-1"><a class="header-anchor" href="#object-fromentries" aria-hidden="true">#</a> Object.fromEntries()</h3><p><code>Object.fromEntries()</code>方法是<code>Object.entries()</code>的逆操作，用于将一个键值对数组转为对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// { name: &quot;bob&quot;, age: 24 }</span>
</code></pre></div><p>该方法的主要目的，是将键值对的数据结构还原为对象，<strong>特别适合将 <code>Map</code> 结构转为对象</strong>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 例一</span>
<span class="token keyword">const</span> entries <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bob&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>entries<span class="token punctuation">)</span>
<span class="token comment">// { name: &quot;bob&quot;, age: 24 }</span>

<span class="token comment">// 例二</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
<span class="token comment">// { foo: true, bar: false }</span>
</code></pre></div><p>该方法的一个用处是配合<code>URLSearchParams</code>对象，将查询字符串转为对象。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// url模块中获取URLSearchParams</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>URLSearchParams<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token string">&#39;name=bob&amp;age=24&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// { name: &quot;bob&quot;, age: 24 }</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,70),f={href:"https://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"};function b(y,v){const a=e("ExternalLinkIcon");return c(),u("div",null,[i,n("p",null,[s("ES5和ES6中空位的区别比较可以参考： "),n("a",r,[s("https://es6.ruanyifeng.com/#docs/array#数组的空位"),p(a)])]),d,n("p",null,[n("a",m,[s("Object.create()和new object()和{}的区别"),p(a)])]),g,n("ul",null,[n("li",null,[n("a",f,[s("https://es6.ruanyifeng.com/"),p(a)])])])])}const w=o(k,[["render",b],["__file","standard-es6.html.vue"]]);export{w as default};
