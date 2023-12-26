import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as l,a as n,b as s,d as t,e as p}from"./app-be253e4c.js";const u="/JavaScriptCollection/assets/lodash-f016559b.png",i={},k=n("h1",{id:"lodash",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lodash","aria-hidden":"true"},"#"),s(" Lodash")],-1),r={href:"https://www.lodashjs.com",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库， 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：</p><ul><li>遍历 array、object 和 string</li><li>对值进行操作和检测</li><li>创建符合功能的函数</li></ul><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>使用<code>npm</code>或者<code>pnpm</code>等包管理工具下载依赖都行，注意区分环境</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 全局安装</span>
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">npm</span>
<span class="token comment">## 生产环境安装</span>
<span class="token function">npm</span> i <span class="token parameter variable">--save</span> lodash

</code></pre></div>`,5),d=n("code",null,"TypeScript",-1),f={href:"https://www.npmjs.com/package/@types/lodash",target:"_blank",rel:"noopener noreferrer"},g=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装类型</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> @types/lodash
</code></pre></div><h2 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 支持import导入</span>
<span class="token comment">// import _ from &#39;lodash&#39;</span>
<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;], [&#39;c&#39;, &#39;d&#39;]]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [&#39;d&#39;]]</span>

</code></pre></div><h2 id="高频使用" tabindex="-1"><a class="header-anchor" href="#高频使用" aria-hidden="true">#</a> 高频使用</h2><p>以下列举出常用的函数，<strong>有的很容易忘记</strong></p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="实际使用" tabindex="-1"><a class="header-anchor" href="#实际使用" aria-hidden="true">#</a> 实际使用</h2><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><ul><li>compact: 过滤假值（false, null,0, &quot;&quot;, undefined，NaN）</li><li>concat: 拼接</li><li>difference: 过滤给定数组中的值（来源于数组）</li><li>drop: 创建切片数组</li><li>fill: 指定元素填充</li><li>head: 获取头部元素</li><li>last：获取尾部元素</li><li>indexOf：查找目标元素第一个索引</li><li>lastIndexOf： 查找目标元素最后一个索引</li><li>initial：排除最后一个元素</li><li>intersection： 查找多数组的交集元素</li><li>join： 指定符号连接数组元素</li><li>nth: 返回数组的第n个元素</li><li>pull：移除数组中所有和给定值相等的元素</li><li>remove：移除元素</li><li>reverse：元素反转</li><li>slice： 指定索引裁剪元素</li><li>sortedIndex：排序插入返回索引</li><li>tail：去除第一个元素</li><li>take：提取元素（指定个数）</li><li>union: 创建一个按顺序排列的唯一值的数组</li><li>uniq: 数组去重，第一次出现的元素保留</li><li>without: 提出所有给定值，返回新数组</li><li>xor: 创建给点数组唯一值的数组</li><li>zip: 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Lodash数组相关操作
 */</span>

<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span>


<span class="token comment">// chunk: 分片 ，指定长度切割</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;], [&#39;c&#39;, &#39;d&#39;]]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [&#39;d&#39;]]</span>


<span class="token comment">// compact: 过滤假值（false, null,0, &quot;&quot;, undefined，NaN）</span>
<span class="token comment">// concat: 拼接</span>
<span class="token comment">// difference: 过滤给定数组中的值（来源于数组）</span>
<span class="token comment">// drop:  创建切片数组</span>
<span class="token comment">// fill:  指定元素填充</span>
<span class="token comment">// head: 获取头部元素</span>
<span class="token comment">// last：获取尾部元素</span>
<span class="token comment">// indexOf：查找目标元素第一个索引</span>
<span class="token comment">// lastIndexOf： 查找目标元素最后一个索引</span>
<span class="token comment">// initial：排除最后一个元素</span>
<span class="token comment">// intersection： 查找多数组的交集元素</span>
<span class="token comment">// join： 指定符号连接数组元素</span>
<span class="token comment">// nth:  返回数组的第n个元素</span>
<span class="token comment">// pull：移除数组中所有和给定值相等的元素</span>
<span class="token comment">// remove：移除元素</span>
<span class="token comment">// reverse：元素反转</span>
<span class="token comment">// slice： 指定索引裁剪元素</span>
<span class="token comment">// sortedIndex：排序插入返回索引</span>
<span class="token comment">// tail：去除第一个元素</span>
<span class="token comment">// take：提取元素（指定个数）</span>
<span class="token comment">// union: 创建一个按顺序排列的唯一值的数组</span>
<span class="token comment">// uniq: 数组去重，第一次出现的元素保留</span>
<span class="token comment">// without: 提出所有给定值，返回新数组</span>
<span class="token comment">// xor: 创建给点数组唯一值的数组</span>
<span class="token comment">// zip: 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推</span>
</code></pre></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><ul><li>assign：拷贝</li><li>merge: 深拷贝</li><li>at: 创建数组，值来源于对象路径相应的值</li><li>create: 创建对象，继承<code>prototype</code></li><li>defaults: 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上【不覆盖】</li><li>findKey： 返回存在值对应的key</li><li>forIn: 迭代器遍历对象的自身和继承的可枚举属性</li><li>forOwn:迭代器遍历对象的自身的可枚举属性</li><li>functions: 创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性</li><li>get： 指定路径获取对象值</li><li>result: 累死get ，指定属性值操作</li><li>has: 检查直接属性是否存在</li><li>invert: 键值互换</li><li>invoke: 调用对象中属性值函数（支持传参）</li><li>keys: 对象属性组成的数组</li><li>mapKeys: 自定义属性，生成新对象</li><li>mapValues: 自定义值，生成新对象</li><li>pick：指定属性，返回新对象</li><li>omit: 指定属性反选，返回新对象</li><li>set: 设置对象属性和值</li><li>update: 类似set操作</li><li>unset: 移除对象属性</li><li>toPairs: 创建可枚举属性的对象键值数组（二维），与fromPairs操作相反</li><li>transform: reduce替代方法，值、键转换</li><li>values: 创建对象可枚举属性值的数组</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Lodash对象相关操作
 */</span>


<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span>


<span class="token comment">// assign：拷贝</span>
<span class="token comment">// merge:  深拷贝</span>
<span class="token comment">// at:  创建数组，值来源于对象路径相应的值</span>
<span class="token comment">// create: 创建对象，继承prototype</span>
<span class="token comment">// defaults: 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上【不覆盖】</span>
<span class="token comment">// findKey： 返回存在值对应的key</span>
<span class="token comment">// forIn: 迭代器遍历对象的自身和继承的可枚举属性</span>
<span class="token comment">// forOwn:迭代器遍历对象的自身的可枚举属性</span>
<span class="token comment">// functions: 创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性</span>
<span class="token comment">// get： 指定路径获取对象值</span>
<span class="token comment">// result: 累死get ，指定属性值操作</span>
<span class="token comment">// has:  检查直接属性是否存在</span>
<span class="token comment">// invert: 键值互换</span>
<span class="token comment">// invoke: 调用对象中属性值函数（支持传参）</span>
<span class="token comment">// keys: 对象属性组成的数组</span>
<span class="token comment">// mapKeys: 自定义属性，生成新对象</span>
<span class="token comment">// mapValues: 自定义值，生成新对象</span>
<span class="token comment">// pick：指定属性，返回新对象</span>
<span class="token comment">// omit: 指定属性反选，返回新对象</span>
<span class="token comment">// set:  设置对象属性和值</span>
<span class="token comment">// update: 类似set操作</span>
<span class="token comment">// unset: 移除对象属性</span>
<span class="token comment">// toPairs:  创建可枚举属性的对象键值数组（二维），与fromPairs操作相反</span>
<span class="token comment">// transform: reduce替代方法，值、键转换</span>
<span class="token comment">// values:  创建对象可枚举属性值的数组</span>
</code></pre></div><h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3><ul><li>countBy: 计数</li><li>each: 遍历</li><li>forEach: 遍历</li><li>every:断言，返回true|false</li><li>filter: 过滤</li><li>reject: filter反方法，过滤非真值</li><li>find: 查询</li><li>groupBy : 分组</li><li>includes: 包含</li><li>keyBy：迭代函数遍历，创建一个对象组成</li><li>map: 迭代函数遍历，返回数组</li><li>orderBy: 指定迭代函数进行排序</li><li>partition：创建一个分成两组的元素数组</li><li>reduce: 通过迭代函数遍历</li><li>sample: 集合中获取随机值</li><li>shuffle: 集合元素随机打乱</li><li>size: 返回集合的长度，支持类数组、字符串、对象</li><li>some: 筛选，判断是否存在，返回true|false</li><li>sortBy: 创建元素数组，迭代函数处理结果升序排序</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Lodash集合相关操作
 */</span>

<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// countBy:  计数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">countBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">6.1</span><span class="token punctuation">,</span> <span class="token number">4.2</span><span class="token punctuation">,</span> <span class="token number">6.3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span>floor<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; { &#39;4&#39;: 1, &#39;6&#39;: 2 }</span>
<span class="token comment">// The \`_.property\` iteratee shorthand.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">countBy</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&#39;length&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; { &#39;3&#39;: 2, &#39;5&#39;: 1 }</span>


<span class="token comment">// each: 遍历</span>
<span class="token comment">// forEach: 遍历</span>
<span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; Logs \`1\` then \`2\`.</span>
_<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; Logs &#39;a&#39; then &#39;b&#39; (iteration order is not guaranteed).</span>


<span class="token comment">// every:断言，返回true|false</span>
_<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;yes&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Boolean<span class="token punctuation">)</span>
<span class="token comment">// =&gt; false</span>
<span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token comment">// The \`_.matches\` iteratee shorthand.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; false</span>
<span class="token comment">// The \`_.matchesProperty\` iteratee shorthand.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; true</span>
<span class="token comment">// The \`_.property\` iteratee shorthand.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; false</span>


<span class="token comment">// filter: 过滤</span>
<span class="token keyword">const</span> userList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>userList<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span>o<span class="token punctuation">.</span>active <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; objects for [&#39;fred&#39;]</span>
<span class="token comment">// The \`_.matches\` iteratee shorthand.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>userList<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; objects for [&#39;barney&#39;]</span>
<span class="token comment">// The \`_.matchesProperty\` iteratee shorthand.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>userList<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; objects for [&#39;fred&#39;]</span>
<span class="token comment">// The \`_.property\` iteratee shorthand.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>userList<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; objects for [&#39;barney&#39;]</span>

<span class="token comment">// reject: filter反方法，过滤非真值</span>


<span class="token comment">// find: 查询</span>
<span class="token comment">// groupBy : 分组</span>
<span class="token comment">// includes: 包含</span>
<span class="token comment">// keyBy：迭代函数遍历，创建一个对象组成</span>
<span class="token comment">// map:  迭代函数遍历，返回数组</span>
<span class="token comment">// orderBy: 指定迭代函数进行排序</span>
<span class="token comment">// partition：创建一个分成两组的元素数组</span>
<span class="token comment">// reduce:   通过迭代函数遍历</span>
<span class="token comment">// sample:  集合中获取随机值</span>
<span class="token comment">// shuffle: 集合元素随机打乱</span>
<span class="token comment">// size: 返回集合的长度，支持类数组、字符串、对象</span>
<span class="token comment">// some: 筛选，判断是否存在，返回true|false</span>
<span class="token comment">// sortBy: 创建元素数组，迭代函数处理结果升序排序</span>
</code></pre></div><h3 id="数字" tabindex="-1"><a class="header-anchor" href="#数字" aria-hidden="true">#</a> 数字</h3><ul><li>inRange： 判断是否在范围中</li><li>random: 返回指定范围随机值</li><li>add : 相加</li><li>divide: 相除</li><li>multiply: 相乘</li><li>subtract: 相减</li><li>sum: 求和</li><li>ceil: 向上取整</li><li>floor: 向下取整</li><li>round: 四舍五入</li><li>max: 最大值</li><li>mean: 求平均值</li><li>min: 最小值<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Lodash数字相关操作
 */</span>

<span class="token keyword">const</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// inRange： 判断是否在范围中</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token number">5.2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; true</span>


<span class="token comment">// random: 返回指定范围随机值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; an integer between 0 and 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; also an integer between 0 and 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; a floating-point number between 0 and 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token number">5.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; a floating-point number between 1.2 and 5.2</span>

<span class="token comment">// add : 相加</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 10</span>


<span class="token comment">// divide: 相除</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 1.5</span>


<span class="token comment">// multiply: 相乘</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 24</span>


<span class="token comment">// subtract: 相减</span>
_<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 2</span>

<span class="token comment">// sum:  求和</span>
_<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 20</span>


<span class="token comment">// ceil:  向上取整</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">4.006</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">6.004</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 6.01</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">6040</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 6100</span>

<span class="token comment">// floor: 向下取整</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">4.006</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">0.046</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 0.04</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">4060</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 4000</span>


<span class="token comment">// round: 四舍五入</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">4.006</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">4.006</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 4.01</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">4060</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 4100</span>


<span class="token comment">// max: 最大值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; undefined</span>


<span class="token comment">// mean: 求平均值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">mean</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 5</span>


<span class="token comment">// min: 最小值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; undefined</span>
</code></pre></div></li></ul><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><ul><li>camelCase： 小驼峰</li><li>kebabCase： 转换为-连接，例如：Foo Bar ----&gt; foo-bar</li><li>snakeCase： 转化为蛇形风格</li><li>capitalize： 首字母大写</li><li>lowerFirst: 首字母小写</li><li>upperFirst：首字母转为大写</li><li>endsWith： 判断结尾字符</li><li>startsWith: 判断开头字符</li><li>escape： 字符转义处理, 与unescape相反</li><li>lowerCase: 空格分开单词，并转换为小写</li><li>upperCase： 空格分隔单词，并转换为大写</li><li>pad： 字符填充为指定长度</li><li>repeat： 字符串重复</li><li>replace： 字符替换</li><li>split: 切割拆分</li><li>toLower： 全部转换为小写</li><li>toUpper: 全部转换为大写</li><li>trim: 移除前面和后面的 空格 或 指定的字符</li><li>words: 拆分词为数组</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * lodash字符串相关操作
 */</span>

<span class="token comment">// const _ = require(&#39;lodash&#39;)</span>

<span class="token comment">// camelCase： 小驼峰</span>
<span class="token comment">// kebabCase： 转换为-连接，例如：Foo Bar ----&gt; foo-bar</span>
<span class="token comment">// snakeCase： 转化为蛇形风格</span>
<span class="token comment">// capitalize： 首字母大写</span>
<span class="token comment">// lowerFirst:  首字母小写</span>
<span class="token comment">// upperFirst：首字母转为大写</span>
<span class="token comment">// endsWith： 判断结尾字符</span>
<span class="token comment">// startsWith: 判断开头字符</span>
<span class="token comment">// escape： 字符转义处理, 与unescape相反</span>
<span class="token comment">// lowerCase: 空格分开单词，并转换为小写</span>
<span class="token comment">// upperCase： 空格分隔单词，并转换为大写</span>
<span class="token comment">// pad： 字符填充为指定长度</span>
<span class="token comment">// repeat： 字符串重复</span>
<span class="token comment">// replace： 字符替换</span>
<span class="token comment">// split: 切割拆分</span>
<span class="token comment">// toLower： 全部转换为小写</span>
<span class="token comment">// toUpper:  全部转换为大写</span>
<span class="token comment">// trim: 移除前面和后面的 空格 或 指定的字符</span>
<span class="token comment">// words: 拆分词为数组</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,22),h={href:"https://www.lodashjs.com/docs",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.npmjs.com/search?q=lodash",target:"_blank",rel:"noopener noreferrer"};function y(_,v){const a=e("ExternalLinkIcon");return c(),l("div",null,[k,n("ul",null,[n("li",null,[s("官网："),n("a",r,[s("https://www.lodashjs.com"),t(a)])])]),m,n("p",null,[s("如果是使用"),d,s("语言，则需要安装对应的类型"),n("a",f,[s("https://www.npmjs.com/package/@types/lodash"),t(a)]),s("：")]),g,n("ul",null,[n("li",null,[n("a",h,[s("https://www.lodashjs.com/docs"),t(a)])]),n("li",null,[n("a",b,[s("https://www.npmjs.com/search?q=lodash"),t(a)])])])])}const x=o(i,[["render",y],["__file","lodash.html.vue"]]);export{x as default};
