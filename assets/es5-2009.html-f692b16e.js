import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="es5" tabindex="-1"><a class="header-anchor" href="#es5" aria-hidden="true">#</a> ES5</h1><p><code>ES5</code> 发行于2009年，按照<code>ECMAScript</code>命名风格，E<code>S5</code>也被称作<code>ECMAScript 2009</code>， 是<code>JavaScript</code>历史上第一个主要的版本。</p><h2 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h2><p>使用<code>use strict</code>定义代码应该在严格模式下执行，协助写出更加清晰的代码，一定程度上约定代码规范，例如： 禁止使用未声明的变量</p><p><code>use strict</code>只是一个字符串表达式。旧的浏览器如果不理解的话不会抛出错误。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 抛错，变量未定义</span>
<span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>

<span class="token comment">// 正常使用</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;142vip&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><h3 id="charat方法" tabindex="-1"><a class="header-anchor" href="#charat方法" aria-hidden="true">#</a> charAt方法</h3><p>使用charAt()方法返回字符串中字符所有的角标位置（Index）值，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;HELLO&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 返回 E</span>
str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="多行显示" tabindex="-1"><a class="header-anchor" href="#多行显示" aria-hidden="true">#</a> 多行显示</h3><p>使用反斜杠<code>\\</code>转义，允许多行字符串，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 转义字符可能支持的不是很好</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&quot;Hello \\
Dolly!&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 更安全的做法</span>
<span class="token keyword">const</span> newMsg <span class="token operator">=</span> <span class="token string">&quot;Hello &quot;</span> <span class="token operator">+</span>
  <span class="token string">&quot;Dolly!&quot;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="trim方法" tabindex="-1"><a class="header-anchor" href="#trim方法" aria-hidden="true">#</a> trim方法</h3><p>使用trim()方法可以删除字符串两侧的空格，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&quot;       142vip.cn        &quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 返回 142vip.cn</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><h3 id="isarray方法" tabindex="-1"><a class="header-anchor" href="#isarray方法" aria-hidden="true">#</a> isArray方法</h3><p>在<code>Array</code>对象中使用<code>isArray()</code>方法，可以检查对象是否为数组，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token comment">// 返回 true</span>
<span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre></div><h3 id="foreach方法" tabindex="-1"><a class="header-anchor" href="#foreach方法" aria-hidden="true">#</a> forEach方法</h3><p><code>forEach()</code>方法为每个数组元素调用一次回调函数，可以用来处理数组，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> result<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>a <span class="token operator">*</span> a<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 返回 [1,4,9]</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre></div><h3 id="map方法" tabindex="-1"><a class="header-anchor" href="#map方法" aria-hidden="true">#</a> map方法</h3><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h3><h3 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h3><h3 id="reduceright" tabindex="-1"><a class="header-anchor" href="#reduceright" aria-hidden="true">#</a> reduceRight()</h3><h3 id="every" tabindex="-1"><a class="header-anchor" href="#every" aria-hidden="true">#</a> every()</h3><p>判断数组中的元素是否全部满足特定函数的情况，返回<code>true</code> | <code>false</code>，全部满足才会返回<code>true</code>，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">]</span>


<span class="token comment">// 判断数组中的值是否全部超过15的</span>
<span class="token keyword">const</span> over15 <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>num <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num <span class="token operator">&gt;</span> <span class="token number">15</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 输出 false</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>over15<span class="token punctuation">)</span>
</code></pre></div><h3 id="some" tabindex="-1"><a class="header-anchor" href="#some" aria-hidden="true">#</a> some()</h3><p>判断数组中的元素是否存在满足特定函数的情况，返回<code>true</code> | <code>false</code>，部分满足即返回<code>true</code>，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">]</span>


<span class="token comment">// 判断数组中的值是否存在超过15的</span>
<span class="token keyword">const</span> over15 <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>num <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num <span class="token operator">&gt;</span> <span class="token number">15</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 输出 true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>over15<span class="token punctuation">)</span>
</code></pre></div><h3 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf()</h3><p>定义：</p><ul><li><code>indexOf(searchElement: T, fromIndex?: number): number</code></li></ul><p><code>indexOf()</code>方法支持从数组开头开始查找所有，找到第一个符合条件值的索引（角标），例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Lisa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 输出 0，数组中角标为0对应的就是142vip</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;142vip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 支持指定起始索引</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="lastindexof" tabindex="-1"><a class="header-anchor" href="#lastindexof" aria-hidden="true">#</a> lastIndexOf()</h3><p>定义：</p><ul><li><code>lastIndexOf(searchElement: T, fromIndex?: number): number</code></li></ul><p><code>lastIndexOf()</code>方法支持从数组结尾开始查找所有，找到第一个符合条件值的索引（角标），例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Lisa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// 输出 2，数组中角标为2对应的就是142vip</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;142vip&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 支持指定起始索引</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h2><h3 id="json-parse" tabindex="-1"><a class="header-anchor" href="#json-parse" aria-hidden="true">#</a> JSON.parse()</h3><p>反序列化方法，支持将JSON字符串还原为对象，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;{&quot;name&quot;:&quot;142vip&quot;,&quot;age&quot;:18}&#39;</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span>
</code></pre></div><h3 id="json-stringify" tabindex="-1"><a class="header-anchor" href="#json-stringify" aria-hidden="true">#</a> JSON.stringify()</h3><p>序列化方法，支持将对象转化为JSON字符串，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> student <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;142vip&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token comment">// 序列化为字符串</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="日期" tabindex="-1"><a class="header-anchor" href="#日期" aria-hidden="true">#</a> 日期</h2><h3 id="now" tabindex="-1"><a class="header-anchor" href="#now" aria-hidden="true">#</a> now()</h3><p><code>Date.now()</code>返回自零日期（1970 年 1 月 1 日 00:00:00 UTC）以来的毫秒数，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 输出：1702525268142</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="toisostring" tabindex="-1"><a class="header-anchor" href="#toisostring" aria-hidden="true">#</a> toISOString()</h3><p><code>toISOString()</code>方法使用 <code>ISO</code> 标准格式将 <code>Date</code> 对象转换为字符串，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出：2023-12-14T03:31:56.160Z</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="tojson" tabindex="-1"><a class="header-anchor" href="#tojson" aria-hidden="true">#</a> toJSON()</h3><p><code>toJSON()</code>将 <code>Date</code> 对象转换为字符串，格式为 <code>JSON</code> 日期。<code>JSON</code> 日期的格式与 <code>ISO-8601</code> 标准相同：<code>YYYY-MM-DDTHH:mm:ss.sssZ</code>，例如：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 输出: 2023-12-14T03:27:50.441Z</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="获取器和设置器" tabindex="-1"><a class="header-anchor" href="#获取器和设置器" aria-hidden="true">#</a> 获取器和设置器</h2><h2 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h2><p>新增了一些对象方法，</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> donor<span class="token punctuation">)</span>

<span class="token comment">// Adding or changing an object property</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">,</span> descriptor<span class="token punctuation">)</span>

<span class="token comment">// Adding or changing object properties</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> descriptors<span class="token punctuation">)</span>

<span class="token comment">// Accessing Properties</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">)</span>

<span class="token comment">// Returns all properties as an array</span>
Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>

<span class="token comment">// Accessing the prototype</span>
Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>

<span class="token comment">// Returns enumerable properties as an array</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span>
</code></pre></div><h2 id="函数绑定" tabindex="-1"><a class="header-anchor" href="#函数绑定" aria-hidden="true">#</a> 函数绑定</h2><h2 id="尾随逗号" tabindex="-1"><a class="header-anchor" href="#尾随逗号" aria-hidden="true">#</a> 尾随逗号</h2><p><code>ES5</code>允许在定义对象和数组中使用<code>尾随逗号</code>，对于<code>JSON</code>数据格式是支持<code>尾随逗号</code>，例如：</p><p>对象和数组的数据中，最后的一个元素末尾可以跟随逗号。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span><span class="token punctuation">]</span>
</code></pre></div><p><code>JSON</code>数据格式末尾不支持尾随逗号。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 支持</span>
<span class="token keyword">const</span> badStu <span class="token operator">=</span> <span class="token string">&#39;{&quot;name&quot;:&quot;Tom&quot;, , &quot;age&quot;:18}&#39;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>

<span class="token comment">// 不支持</span>
<span class="token keyword">const</span> goodStu <span class="token operator">=</span> <span class="token string">&#39;{&quot;name&quot;:&quot;Tom&quot;, , &quot;age&quot;:18,}&#39;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
</code></pre></div>`,71),o=[e];function c(u,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","es5-2009.html.vue"]]);export{k as default};
