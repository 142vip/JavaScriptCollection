import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1><p>ES6 首次命名出现是在2015年，是JavaScript版本历史上的第二次重大修订版本，上一次是2009年修订的版本。</p><p>目前对于2015年修订的版本称为: <code>ES6</code> 或者 <code>ECMAScript 6</code>，例如：</p><ul><li><code>ES5</code>：ECMAScript 2009</li><li><code>ES6</code>：ECMAScript 2015</li></ul><h2 id="let关键字" tabindex="-1"><a class="header-anchor" href="#let关键字" aria-hidden="true">#</a> let关键字</h2><p>let关键字允许在块级作用范围内定义变量</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// 这里打印出来，x值为100</span>
<span class="token punctuation">{</span>
  <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
<span class="token comment">// 这里打印出来，x值为30</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里打印出来，x值为100</span>
</code></pre></div><h2 id="const关键字" tabindex="-1"><a class="header-anchor" href="#const关键字" aria-hidden="true">#</a> const关键字</h2><p>const关键字用来声明常量，本质上是值不变的“let变量”。const常量和let变量类似，都是JavaScript的var变量。</p><p>随着ES6的普及，不再建议使用var关键字来进行声明。防止出现作用域污染</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token comment">// 这里打印出来，x值为100</span>
<span class="token punctuation">{</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
  <span class="token comment">// 这里打印出来，x值为40</span>
<span class="token punctuation">}</span>
<span class="token comment">// 这里打印出来，x值为100</span>
</code></pre></div><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数" aria-hidden="true">#</a> 箭头函数</h2><p>箭头函数支持用一种简单、精炼的方式来定义函数，使得不需要使用function、return关键字，就能定义函数。例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// ES5</span>
<span class="token keyword">var</span> <span class="token function-variable function">result</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// ES6</span>
<span class="token keyword">const</span> <span class="token function-variable function">result</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y
</code></pre></div><ul><li><code>箭头函数</code>没有自己的this对象。箭头函数不太适合定义对象方法。</li><li><code>箭头函数</code>不会被提升。它们必须在使用之前定义。</li><li>使用<code>const</code>关键字比使用<code>var</code>关键字更安全，因为函数表达式始终是常量值。</li><li>如果函数是单个语句，则只能省略关键字和大括号。</li></ul><h2 id="拓展运算符" tabindex="-1"><a class="header-anchor" href="#拓展运算符" aria-hidden="true">#</a> 拓展运算符</h2><p><code>...</code>扩展运算符支持对可迭代对象（例如：数组、对象）进行更加灵活的操作，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> bigNum <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">]</span>

<span class="token comment">// 数组内容连接，类似concat操作</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>num<span class="token punctuation">,</span> <span class="token operator">...</span>bigNum<span class="token punctuation">]</span>
</code></pre></div><p>同时，拓展运算符好支持函数传参，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">67</span><span class="token punctuation">,</span> <span class="token number">89</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> maxValue <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>nums<span class="token punctuation">)</span>
</code></pre></div><h2 id="for-of循环" tabindex="-1"><a class="header-anchor" href="#for-of循环" aria-hidden="true">#</a> for...of循环</h2><p><code>JavaScript</code> 的 <code>for/of</code> 语句支持循环遍历可迭代对象的值。这里的可迭代的数据结构支持数组、字符串、映射、节点列表等。</p><p>该<code>for/of</code>循环具有以下语法：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 循环遍历数组</span>
<span class="token keyword">const</span> students <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisa&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> stuResult <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> stu <span class="token keyword">of</span> students<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  stuResult <span class="token operator">+=</span> stu <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 循环遍历字符串</span>
<span class="token keyword">let</span> language <span class="token operator">=</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> str <span class="token keyword">of</span> language<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  result <span class="token operator">+=</span> str <span class="token operator">+</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="map映射" tabindex="-1"><a class="header-anchor" href="#map映射" aria-hidden="true">#</a> Map映射</h2><p><code>Map</code>(映射)是一种常用的数据结构吗，用于存储<code>键值对</code>的集合</p><p>相关API：</p><ul><li><code>new Map()</code>：创建新的<code>Map</code>对象</li><li><code>set()</code>：设置 <code>Map</code> 中键的值</li><li><code>get()</code>：获取 <code>Map</code> 中某个键的值</li><li><code>clear()</code>：从 <code>Map</code> 中删除所有元素</li><li><code>delete()</code>：删除由键指定的 <code>Map</code> 元素</li><li><code>has()</code>：如果 <code>Map</code> 中存在键则返回 true</li><li><code>forEach()</code>：为 <code>Map</code> 中的每个键/值对调用回调</li><li><code>entries()</code>：返回具有 <code>Map</code> 中的 <code>[key, value]</code> 对的迭代器对象</li><li><code>keys()</code>：返回带有 <code>Map</code> 中的键的迭代器对象</li><li><code>values()</code>：返回 <code>Map</code> 中值的迭代器对象</li><li><code>size</code>：返回 <code>Map</code> 元素的数量。<strong>注意是属性，不是方法</strong></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 创建学生-年龄关系映射
 * - 存储键值对
 */</span>
<span class="token keyword">const</span> studentAgeMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&#39;Lisa&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 往集合中增加映射关系
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;fairy&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 根据映射关键字获取值
 */</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> studentAgeMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;fairy&#39;</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
 * 返回集合中元素个数
 */</span>
<span class="token keyword">const</span> size <span class="token operator">=</span> studentAgeMap<span class="token punctuation">.</span>size


<span class="token doc-comment comment">/**
 * 根据键删除映射关系
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;fairy&#39;</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 判断键是否存在
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;fairy&#39;</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 清空Map
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 判断类型，返回对象object
 */</span>
<span class="token keyword">const</span> mapType <span class="token operator">=</span> <span class="token keyword">typeof</span> studentAgeMap

<span class="token doc-comment comment">/**
 * 判断实例，返回true
 */</span>
<span class="token keyword">const</span> isMap <span class="token operator">=</span> studentAgeMap <span class="token keyword">instanceof</span> <span class="token class-name">Map</span>

<span class="token doc-comment comment">/**
 * 循环处理
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> originMap<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>originMap<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 获取所有的键
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 获取所有的键、值
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token doc-comment comment">/**
 * 获取所有的值
 */</span>
studentAgeMap<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="set集合" tabindex="-1"><a class="header-anchor" href="#set集合" aria-hidden="true">#</a> Set集合</h2><p><code>JavaScript</code>的<code>Set</code>是一个集合，里面的元素具有唯一性，每个元素只允许出现一次。Set数据结构可以保存任何数据类型的数据值。</p><p>相关API：</p><ul><li><code>new Set()</code>： 创建<code>Set</code>集合</li><li><code>add()</code>： 往<code>Set</code>集合中添加元素</li><li><code>delete()</code>： 移除<code>Set</code>集合中的元素</li><li><code>has()</code>： 判断元素是否在<code>Set</code>集合中</li><li><code>clear()</code>： 清除<code>Set</code>集合中的所有元素</li><li><code>forEach()</code>： 遍历<code>Set</code>集合，执行回调方法</li><li><code>values()</code>： 返回<code>Set</code>集合中所有的值</li><li><code>keys()</code>： 返回<code>Set</code>集合中所有的键</li><li><code>entries()</code>： 以<code>[键，值]</code>的方式返回<code>Set</code>集合中的所有数据</li><li><code>size</code> ：返回Set集合中元素的数量，<strong>注意是属性，不是方法</strong></li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 使用数组创建Set集合
 */</span>
<span class="token keyword">const</span> stuSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 利用add()方法创建Set集合
 */</span>
<span class="token keyword">const</span> studentSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
studentSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
studentSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
studentSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 列出集合中所有值
 */</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
studentSet<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  result <span class="token operator">+=</span> value
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * Set集合中没有Key的概念
 * keys()方法和values()方法效果一样
 */</span>
studentSet<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>需要注意的是，Set集合本质上是对象，可以使用typeof关键字判断，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> stuSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// 返回对象</span>
<span class="token keyword">typeof</span> stuSet<span class="token punctuation">;</span>

<span class="token comment">// 返回true</span>
stuSet <span class="token keyword">instanceof</span> <span class="token class-name">Set</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="class类" tabindex="-1"><a class="header-anchor" href="#class类" aria-hidden="true">#</a> Class类</h2><p><code>JavaScript</code>的类是<code>JavaScript</code>对象的模板，可以使用<code>class</code>关键字创建类。类可以构造函数来创建对象，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 创建Student类
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建对象</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>用类创建出来的对象，与类有本质的区别。JavaScript的类只是对象的模板。</strong></p><h2 id="promise对象" tabindex="-1"><a class="header-anchor" href="#promise对象" aria-hidden="true">#</a> Promise对象</h2><h2 id="symbol类型" tabindex="-1"><a class="header-anchor" href="#symbol类型" aria-hidden="true">#</a> Symbol类型</h2><p><code>JavaScript</code> 符号类型是一种原始数据类型，就像数字、字符串或布尔值一样，代表一个唯一的<strong>隐藏标识符</strong>，其他代码无法访问。</p><p>如果不同的编码人员想要将 <code>student.id</code> 属性添加到属于第三方代码的 <code>student</code> 对象，他们可以混合彼此的值， 可以使用<code>Symbol()</code>创建唯一标识符，解决了这个问题。例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义student对象</span>
<span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建唯一标识符</span>
<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
person<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token comment">// 返回100</span>
person<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
<span class="token comment">// 返回undefined</span>
person<span class="token punctuation">.</span>id 
</code></pre></div><h2 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h2><p>ES6允许对函数参数设置默认值，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 两个值求和
 */</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当参数y没有传值时，默认为10</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 返回15</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h2><p>剩余参数 <code>...</code> 允许函数将不定数量的参数视为数组，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 参数值累加，不限制参数个数
 * <span class="token keyword">@param</span> <span class="token parameter">args</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> arg <span class="token keyword">of</span> args<span class="token punctuation">)</span>
    sum <span class="token operator">+=</span> arg<span class="token punctuation">;</span>
  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 计算参数累加和</span>
<span class="token keyword">const</span> reult <span class="token operator">=</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="字符串新增方法" tabindex="-1"><a class="header-anchor" href="#字符串新增方法" aria-hidden="true">#</a> 字符串新增方法</h2><p>对于String类型的变量，ES6新增三个方法：</p><ul><li><code>includes()</code>：来判断字符串中是否包含指定值</li><li><code>startsWith()</code>：判断字符串是否以指定值开头</li><li><code>endsWith()</code>：判断字符串是否以指定值结尾</li></ul><h3 id="includes" tabindex="-1"><a class="header-anchor" href="#includes" aria-hidden="true">#</a> includes()</h3><p><code>includes()</code>方法可以用来判断字符串中是否包含指定值，存在返回：<code>true</code>，否则返回：<code>false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 返回true</span>
text<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>   
</code></pre></div><h3 id="startswith" tabindex="-1"><a class="header-anchor" href="#startswith" aria-hidden="true">#</a> startsWith()</h3><p><code>startsWith()</code>方法可以判断字符串是否以指定值开头，存在返回：<code>true</code>，否则返回：<code>false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 返回true</span>
text<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>   
</code></pre></div><h3 id="endswith" tabindex="-1"><a class="header-anchor" href="#endswith" aria-hidden="true">#</a> endsWith()</h3><p><code>endsWith()</code>方法可以判断字符串是否以指定值结尾，存在返回：<code>true</code>，否则返回：<code>false</code></p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&quot;Hello world!&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 返回false</span>
text<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span>   
</code></pre></div><h2 id="数组新增方法" tabindex="-1"><a class="header-anchor" href="#数组新增方法" aria-hidden="true">#</a> 数组新增方法</h2><h3 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h3><p><code>Array.from()</code>方法支持从任何迭代对象或者带有<code>length</code>属性的对象中返回一个数组对象，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回 [A,B,C,D,E,F,G]</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;ABCDEFG&quot;</span><span class="token punctuation">)</span>  
</code></pre></div><h3 id="keys" tabindex="-1"><a class="header-anchor" href="#keys" aria-hidden="true">#</a> keys()</h3><p>返回带数组键的数组迭代对象，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义数组</span>
<span class="token keyword">const</span> students <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Lisa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tom&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> keys <span class="token operator">=</span> students<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 遍历keys对象</span>
<span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> x <span class="token keyword">of</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  text <span class="token operator">+=</span> x <span class="token operator">+</span> <span class="token string">&#39;---&#39;</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
</code></pre></div><p>上面例子的<code>keys()</code>函数，数组的角标<code>0、1、2...</code> ，所以返回的迭代对象中的为<code>number</code>类型。</p><h3 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find()</h3><p><code>find()</code>方法返回满足回调函数的第一个数组元素的值，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 获取满足回调函数的一个数组元素值</span>
<span class="token keyword">const</span> firstNum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="findindex" tabindex="-1"><a class="header-anchor" href="#findindex" aria-hidden="true">#</a> findIndex()</h3><p><code>findIndex()</code>方法返回满足回调函数的第一个数组元素的索引，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 获取满足回调函数的一个数组元素值的索引（角标）</span>
<span class="token keyword">const</span> firstNum <span class="token operator">=</span> numbers<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>注意：<code>findIndex()</code>方法返回的是索引，<code>find()</code>方法返回的是数组中满足条件的第一个元素值</strong></p><h2 id="math新增方法" tabindex="-1"><a class="header-anchor" href="#math新增方法" aria-hidden="true">#</a> Math新增方法</h2><p>Math对象上新增5个方法：</p><ul><li><code>Math.trunc()</code></li><li><code>Math.sign()</code></li><li><code>Math.cbrt()</code></li><li><code>Math.log2()</code></li><li><code>Math.log10()</code></li></ul><h3 id="math-trunc" tabindex="-1"><a class="header-anchor" href="#math-trunc" aria-hidden="true">#</a> Math.trunc()</h3><p>返回数字的整数部分，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回7</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">7.8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回6</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">6.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回6</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">6.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回4</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">4.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回-8</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8.4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre></div><h3 id="math-sign" tabindex="-1"><a class="header-anchor" href="#math-sign" aria-hidden="true">#</a> Math.sign()</h3><p>返回数字为负数、空、正数，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回-1 代表负数</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回0</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回1 代表正数</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre></div><h3 id="math-cbrt" tabindex="-1"><a class="header-anchor" href="#math-cbrt" aria-hidden="true">#</a> Math.cbrt()</h3><p>计算参数的立方根，类似解方程，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回0</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回3</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回-1</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="math-log2" tabindex="-1"><a class="header-anchor" href="#math-log2" aria-hidden="true">#</a> Math.log2()</h3><p>计算参数以 2 为底的对数，类似于对数方程，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回0</span>
Math<span class="token punctuation">.</span><span class="token function">log2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回2</span>
Math<span class="token punctuation">.</span><span class="token function">log2</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="math-log10" tabindex="-1"><a class="header-anchor" href="#math-log10" aria-hidden="true">#</a> Math.log10()</h3><p>计算参数以 10 为底的对数，类似于对数方程，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回0</span>
Math<span class="token punctuation">.</span><span class="token function">log10</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回1</span>
Math<span class="token punctuation">.</span><span class="token function">log10</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回2</span>
Math<span class="token punctuation">.</span><span class="token function">log10</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="number对象" tabindex="-1"><a class="header-anchor" href="#number对象" aria-hidden="true">#</a> Number对象</h2><p><code>Number</code>对象新增三个属性：</p><ul><li><code>EPSILON</code> ：<strong>是 <code>JavaScript</code> 能够表示的最小精度</strong>。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。可以用来确认浮点运算是否精确</li><li><code>MIN_SAFE_INTEGER</code>： 最小安全整数</li><li><code>MAX_SAFE_INTEGER</code>： 最大安全整数</li></ul><p><code>Number</code>对象新增两个方法：</p><ul><li><code>Number.isInteger()</code></li><li><code>Number.isSafeInteger()</code></li></ul><h3 id="number-isinteger" tabindex="-1"><a class="header-anchor" href="#number-isinteger" aria-hidden="true">#</a> Number.isInteger()</h3><p>用来判断是否为整数，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回true</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回false</span>
Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">70.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="number-issafeinteger" tabindex="-1"><a class="header-anchor" href="#number-issafeinteger" aria-hidden="true">#</a> Number.isSafeInteger()</h3><p>用来判断是否为<code>安全整数</code>，这里的安全指的是在JS的精度范围内，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回true</span>
Number<span class="token punctuation">.</span><span class="token function">isSafeInteger</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回false</span>
Number<span class="token punctuation">.</span><span class="token function">isSafeInteger</span><span class="token punctuation">(</span><span class="token number">99999999999999999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="全局方法" tabindex="-1"><a class="header-anchor" href="#全局方法" aria-hidden="true">#</a> 全局方法</h2><h3 id="isfinite" tabindex="-1"><a class="header-anchor" href="#isfinite" aria-hidden="true">#</a> isFinite()</h3><p>全局方法，判断是否为<code>有限数</code>，如果参数是<code>无限数</code>或<code>不是数字类型</code>，函数返回<code>false</code>，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回false</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">60</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 返回true</span>
<span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      
</code></pre></div><h3 id="isnan" tabindex="-1"><a class="header-anchor" href="#isnan" aria-hidden="true">#</a> isNaN()</h3><p>全局方法，用来确认变量不是<code>Number</code>类型，函数可理解为<code>is not a Number</code>，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回true</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 返回false</span>
<span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="对象上entries-方法" tabindex="-1"><a class="header-anchor" href="#对象上entries-方法" aria-hidden="true">#</a> 对象上entries()方法</h2><p>在<code>Object</code>对象上新增<code>entries()</code>方法，用来获取 带有<code>键/值对</code>的 数组类型的 迭代（Iterator）对象，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> students <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Lisa&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> stu <span class="token operator">=</span> students<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 循环</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> s <span class="token keyword">of</span> stu<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数据形式：[index，value]</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="模块导入" tabindex="-1"><a class="header-anchor" href="#模块导入" aria-hidden="true">#</a> 模块导入</h2><ul><li>解构到导入</li><li>导入默认</li></ul><p>在模块中导出，可以采用默认导出，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><p>对此，导入则需要通过变量接收默认对象，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> defaultExport <span class="token keyword">from</span> <span class="token string">&#39;./export.ts&#39;</span>

<span class="token comment">// 打印name属性</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultExport<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre></div><p>同样的。导出还可以指定变量导出，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token number">1</span>
</code></pre></div><p>对于指定变量导出，则可以通过解构的方式，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 直接解构，或者采用变量接收后解构</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./export.ts&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre></div>`,127),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","es6-2015.html.vue"]]);export{r as default};
