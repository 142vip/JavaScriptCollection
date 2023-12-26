import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as t,c as o,a as n,b as e,d as c,e as l}from"./app-be253e4c.js";const u={},r=l(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><blockquote><p>全称是：ECMAAScript，是由ECMA国际标准组织制定一项脚本语言的标准化规范</p></blockquote><p><strong>ES6实际上是一个泛指，指ES2015及后续的版本</strong></p><h2 id="let关键字" tabindex="-1"><a class="header-anchor" href="#let关键字" aria-hidden="true">#</a> let关键字</h2><blockquote><p>新增的，用于声明变量的关键字</p></blockquote><ul><li>let声明的变量只在所处于的块级有效</li></ul><p>注意：使用let关键字声明的变量才具有块级作用域，使用var声明的变量不具备块级作用域特性；</p><ul><li>不存在变量提升（先定义再使用）</li><li>具有暂时性死区【let声明，会和当前的块级进行绑定】</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 此时输出会出现无定义，只会在块级里面查找num是否定义，不会查找外面</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>块级作用域</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出2 </span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出2</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 每次循环let都会产生块级作用域</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出0</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出1</span>
</code></pre></div><h2 id="const关键字" tabindex="-1"><a class="header-anchor" href="#const关键字" aria-hidden="true">#</a> const关键字</h2><blockquote><p>作用：声明常量，常量就是值（内存地址）不能变化的量</p></blockquote><ul><li>使用const声明的常量，具有块级作用域</li><li>声明常量时，必须赋初始值</li><li>常量赋值后，内存地址值不可以改</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// 出错</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">12</span>
arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">13</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// 输出 [12,13]</span>

<span class="token comment">// 注意：这种修改不行，不要试图去修改内存地址</span>
arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span>
</code></pre></div><h2 id="let-const-var的区别" tabindex="-1"><a class="header-anchor" href="#let-const-var的区别" aria-hidden="true">#</a> let const var的区别</h2><ul><li>var声明的变量，作用域为该语句所在的函数内，存在变量提升</li><li>let声明的变量，作用域为该语句的代码块内，不存在变量提升</li><li>const声明的是常量，在后面出现的代码中，不能在修改常量的内存地址值</li></ul><h2 id="解构赋值" tabindex="-1"><a class="header-anchor" href="#解构赋值" aria-hidden="true">#</a> 解构赋值</h2><blockquote><p>允许从数组中提取值，按照对应位置，对变量赋值。对象也可以实现解构</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 数组解构</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// 1,2,3</span>


<span class="token comment">// 对象解构</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;leo&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> person  <span class="token comment">// 或者 let {name,age}=person</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token comment">// leo  20</span>


<span class="token comment">// 解构并赋变量</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> my_name<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> my_age<span class="token punctuation">}</span> <span class="token operator">=</span> person
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>my_name<span class="token punctuation">,</span> my_age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// leo 20</span>
</code></pre></div><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2><blockquote><p>新增的定义函数的方式</p></blockquote><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b
<span class="token keyword">const</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token parameter">a</span> <span class="token operator">=&gt;</span> a
</code></pre></div><h2 id="箭头函数的this关键字" tabindex="-1"><a class="header-anchor" href="#箭头函数的this关键字" aria-hidden="true">#</a> 箭头函数的this关键字</h2><p><strong>箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this</strong></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;leo&#39;</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn--&gt;:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;箭头--&gt;:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 注意call方法调用，将fn的this关键字指向obj对象</span>
<span class="token keyword">const</span> resFn <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token function">resFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// fn--&gt; {name:&#39;leo&#39;}</span>
<span class="token comment">// 箭头--&gt; {name:&#39;leo&#39;}</span>
</code></pre></div><h2 id="箭头函数面试题" tabindex="-1"><a class="header-anchor" href="#箭头函数面试题" aria-hidden="true">#</a> 箭头函数面试题</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 此时thi指向的是window，没有age定义，所以为undefined</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个age变量</span>
<span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">30</span>
<span class="token comment">// 此时this指向的是window中的age变量，所以为 30</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">result</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="array扩展方法" tabindex="-1"><a class="header-anchor" href="#array扩展方法" aria-hidden="true">#</a> Array扩展方法</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// ## 扩展运算符合并数组 ##</span>
<span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 合并</span>
<span class="token keyword">let</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span>
<span class="token keyword">let</span> arr4 <span class="token operator">=</span> arr1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>arr2<span class="token punctuation">)</span>


<span class="token comment">// ## 构造函数方法：Array.from() 将类数组或可遍历对象转换为真正的数组 ##</span>

<span class="token comment">// 伪数组</span>
<span class="token keyword">let</span> arrayLike <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;0&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;1&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;2&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>

<span class="token comment">// 伪数组转换为数组</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span> <span class="token comment">// [&#39;a&#39;,&#39;&#39;b,&#39;c&#39;]</span>

<span class="token comment">// 函数统一处理每一项</span>
<span class="token keyword">let</span> arr3 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item <span class="token operator">+</span> <span class="token number">100</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 101,102,103 </span>
</code></pre></div><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find()</h2><p>数组中用来查找第一个符合条件的数组成员，如果没有找到就返回undefined</p><h2 id="findindex" tabindex="-1"><a class="header-anchor" href="#findindex" aria-hidden="true">#</a> findIndex()</h2><p>数组中用来找出第一个符合条件的数组成员的索引位置，如果没有就返回-1</p><h2 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> includes()</h2><p>表示某个数组是否包含给定的值，返回布尔值</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h2 id="startswith-和endswith" tabindex="-1"><a class="header-anchor" href="#startswith-和endswith" aria-hidden="true">#</a> startsWith()和endsWith()</h2><ul><li>startsWith: 表示参数字符串是否在原字符串的头部，返回布尔值</li><li>endsWith(): 表示参数字符串是否在原字符串的尾部，返回布尔值</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">;</span>

str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
str<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><h2 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat()</h2><p>repeat()方法表示将原字符串重复n次，返回一个新的字符串；</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,46),k={href:"https://www.w3schools.com/js/js_es6.asp",target:"_blank",rel:"noopener noreferrer"};function i(d,m){const s=p("ExternalLinkIcon");return t(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",k,[e("https://www.w3schools.com/js/js_es6.asp"),c(s)])])])])}const b=a(u,[["render",i],["__file","Readme-back.html.vue"]]);export{b as default};
