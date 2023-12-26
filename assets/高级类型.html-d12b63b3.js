import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},o=t(`<h1 id="高级类型" tabindex="-1"><a class="header-anchor" href="#高级类型" aria-hidden="true">#</a> 高级类型</h1><h2 id="交叉类型-且" tabindex="-1"><a class="header-anchor" href="#交叉类型-且" aria-hidden="true">#</a> 交叉类型（&amp;且）</h2><p>将多个类型叠加合并为一个类型，涵盖所有类型的特性</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">PointX</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PointY</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PointZ</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// 同时具备多个类型的特性</span>
<span class="token keyword">type</span> <span class="token class-name">PointXYZ</span> <span class="token operator">=</span> PointX <span class="token operator">&amp;</span> PointY <span class="token operator">&amp;</span> PointZ
<span class="token keyword">const</span> pointXYZ<span class="token operator">:</span> PointXYZ <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  z<span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pointXYZ<span class="token punctuation">)</span>
</code></pre></div><h2 id="联合类型-或" tabindex="-1"><a class="header-anchor" href="#联合类型-或" aria-hidden="true">#</a> 联合类型（|或）</h2><p>指定将多个类型联合起来，新的类型可以为多个类型的一种</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">typeString</span> <span class="token operator">=</span> <span class="token builtin">string</span>
<span class="token keyword">type</span> <span class="token class-name">typeNumber</span> <span class="token operator">=</span> <span class="token builtin">number</span>

<span class="token keyword">type</span> <span class="token class-name">newType</span> <span class="token operator">=</span> typeString <span class="token operator">|</span> typeNumber

<span class="token comment">// arg既可以是string也可以是number类型</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> newType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arg
<span class="token punctuation">}</span>
</code></pre></div><p>如果一个值是联合类型，只能访问此联合类型的所有类型里共有的成员</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Fish</span> <span class="token punctuation">{</span>
  <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getSmallPet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Fish <span class="token operator">|</span> Bird <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> pet <span class="token operator">=</span> <span class="token function">getSmallPet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pet<span class="token punctuation">.</span><span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// okay</span>
pet<span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// errors</span>
</code></pre></div><h2 id="类型区分" tabindex="-1"><a class="header-anchor" href="#类型区分" aria-hidden="true">#</a> 类型区分</h2><p>利用类型断言，来进行类型区分，有点像指定泛型</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Bird</span> <span class="token punctuation">{</span>
  <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Fish</span> <span class="token punctuation">{</span>
  <span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getAnimal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Fish <span class="token operator">|</span> Bird <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> animal <span class="token operator">=</span> <span class="token function">getAnimal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
animal<span class="token punctuation">.</span><span class="token function">layEggs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// okay</span>
animal<span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// errors</span>
animal<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment">// errors</span>

<span class="token comment">// 断言为Bird类型</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Bird<span class="token operator">&gt;</span>animal<span class="token punctuation">)</span><span class="token punctuation">.</span>fly <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token operator">&lt;</span>Bird<span class="token operator">&gt;</span>animal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Fish<span class="token operator">&gt;</span>animal<span class="token punctuation">)</span><span class="token punctuation">.</span>swim <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token operator">&lt;</span>Fish<span class="token operator">&gt;</span>animal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">swim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="类型保护" tabindex="-1"><a class="header-anchor" href="#类型保护" aria-hidden="true">#</a> 类型保护</h2><ul><li>typeof 判断类型， 支持的类型只有四种： <ul><li>number</li><li>string</li><li>boolean</li><li>symbol</li></ul></li><li>instanceof 判断是否为某类的实例化对象</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SpaceRepeatingPadder</span> <span class="token keyword">implements</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> numSpaces<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>numSpaces <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">StringPadder</span> <span class="token keyword">implements</span> <span class="token class-name">Padder</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token function">getPaddingString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getRandomPadder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.5</span> <span class="token operator">?</span>
    <span class="token keyword">new</span> <span class="token class-name">SpaceRepeatingPadder</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">:</span>
    <span class="token keyword">new</span> <span class="token class-name">StringPadder</span><span class="token punctuation">(</span><span class="token string">&quot;  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类型为SpaceRepeatingPadder | StringPadder</span>
<span class="token keyword">let</span> padder<span class="token operator">:</span> Padder <span class="token operator">=</span> <span class="token function">getRandomPadder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>padder <span class="token keyword">instanceof</span> <span class="token class-name">SpaceRepeatingPadder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  padder<span class="token punctuation">;</span> <span class="token comment">// 类型细化为&#39;SpaceRepeatingPadder&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>padder <span class="token keyword">instanceof</span> <span class="token class-name">StringPadder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  padder<span class="token punctuation">;</span> <span class="token comment">// 类型细化为&#39;StringPadder&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h2><p>利用索引类型查询、索引访问处理</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">pluck</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> names<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>n <span class="token operator">=&gt;</span> o<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// keyof T 索引类型查询</span>
<span class="token comment">// K[T] 索引访问 </span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">pluck</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> names<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> names<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>n <span class="token operator">=&gt;</span> o<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// 字符串索引类型签名</span>
<span class="token keyword">interface</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> keys<span class="token operator">:</span> <span class="token keyword">keyof</span> Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> <span class="token comment">// string</span>
<span class="token keyword">let</span> value<span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token string">&#39;xxxx&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// number</span>

</code></pre></div><h2 id="映射类型" tabindex="-1"><a class="header-anchor" href="#映射类型" aria-hidden="true">#</a> 映射类型</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 只读类型</span>
<span class="token keyword">type</span> <span class="token class-name">Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可选类型</span>
<span class="token keyword">type</span> <span class="token class-name">Partial<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>语法与索引签名的语法类型，内部使用了 for .. in。 具有三个部分：</p><ol><li>类型变量 K，它会依次绑定到每个属性。</li><li>字符串字面量联合的 Keys，它包含了要迭代的属性名的集合。</li><li>属性的结果类型。</li></ol><h2 id="有条件类型" tabindex="-1"><a class="header-anchor" href="#有条件类型" aria-hidden="true">#</a> 有条件类型</h2><ul><li><code>Exclude&lt;T, U&gt;</code>：从T中剔除可以赋值给U的类型。</li><li><code>Extract&lt;T, U&gt;</code>：提取T中可以赋值给U的类型。</li><li><code>NonNullable&lt;T&gt;</code>：从T中剔除null和undefined。</li><li><code>ReturnType&lt;T&gt;</code>：获取函数返回值类型。</li><li><code>InstanceType&lt;T&gt;</code>：获取构造函数类型的实例类型</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T00</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;c&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;c&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;f&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;b&quot; | &quot;d&quot;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T01</span></span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;b&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;c&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;c&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;f&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;a&quot; | &quot;c&quot;</span>

<span class="token comment">// string | number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T02</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// () =&gt; void</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T03</span></span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// string | number</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T04</span></span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">// (() =&gt; string) | string[]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T05</span></span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> s<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T10</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// string</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T11</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// void</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T12</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// {}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T13</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">U</span></span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token builtin">number</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// number[]</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T14</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> f1<span class="token operator">&gt;</span><span class="token punctuation">;</span>  <span class="token comment">// { a: number, b: string }</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T15</span></span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// anytype T16 = ReturnType&lt;never&gt;;  </span>
<span class="token comment">// anytype T17 = ReturnType&lt;string&gt;;  </span>
<span class="token comment">// Errortype T18 = ReturnType&lt;Function&gt;;  </span>
<span class="token comment">// Errortype T20 = InstanceType&lt;typeof C&gt;;  </span>
<span class="token comment">// Ctype T21 = InstanceType&lt;any&gt;;  </span>
<span class="token comment">// anytype T22 = InstanceType&lt;never&gt;;  </span>
<span class="token comment">// anytype T23 = InstanceType&lt;string&gt;;  </span>
<span class="token comment">// Errortype T24 = InstanceType&lt;Function&gt;;  // Error</span>


<span class="token comment">// 没有Omit&lt;T,K&gt;,可以采用等价写法</span>
Pick<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> Exclude<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span><span class="token operator">&gt;&gt;</span>
</code></pre></div>`,25),e=[o];function c(l,k){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","高级类型.html.vue"]]);export{i as default};
