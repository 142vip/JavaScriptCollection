import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const t={},o=p(`<h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h1><p>接口的作用就是为这些类型命名和为代码或第三方代码定义契约</p><p>接口可以限制类的结构</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 定义接口类型</span>
<span class="token keyword">interface</span> <span class="token class-name">LabelledValue</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 定义函数</span>
<span class="token keyword">function</span> <span class="token function">printLabel</span><span class="token punctuation">(</span>labelledObj<span class="token operator">:</span> LabelledValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>labelledObj<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> labelObj <span class="token operator">=</span> <span class="token punctuation">{</span>size<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;Size 10 Object&quot;</span><span class="token punctuation">}</span>
<span class="token function">printLabel</span><span class="token punctuation">(</span>labelObj<span class="token punctuation">)</span>

<span class="token comment">// 可选属性</span>
<span class="token keyword">interface</span> <span class="token class-name">SquareConfig</span> <span class="token punctuation">{</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">// 只读属性</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口中的所有属性都不能有实际的值</span>
<span class="token comment">// 接口只定义对象的结构，不考虑实际的值</span>
<span class="token comment">// 在接口中，所有的方法都是抽象方法</span>
<span class="token keyword">interface</span> <span class="token class-name">myInter</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Inter</span> <span class="token keyword">implements</span> <span class="token class-name">myInter</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>对于只读，const支持变量的只读，readonly支持属性的只读</p><ul><li>抽象类中可以有抽象方法和普通方法，抽象方法就是需要自己实现的方法</li><li>接口中只有抽象方法，对方法进行约束定义。使用implements后，实现抽象方法</li></ul><h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>
<span class="token comment">// 接口的函数类型</span>
<span class="token keyword">interface</span> <span class="token class-name">SearchFunc</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  sex<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> searchTest<span class="token operator">:</span> SearchFunc <span class="token operator">=</span> <span class="token punctuation">{</span>
  sex<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>searchTest<span class="token punctuation">)</span>


<span class="token comment">// 通过接口来约束函数类型</span>
<span class="token keyword">interface</span> <span class="token class-name">myFunc</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> func<span class="token operator">:</span> <span class="token function-variable function">myFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> name
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token string">&#39;储凡&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="可索引类型" tabindex="-1"><a class="header-anchor" href="#可索引类型" aria-hidden="true">#</a> 可索引类型</h2><p>指定索引类型，例如，指定对象key的类型</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StrArray</span> <span class="token punctuation">{</span>
<span class="token comment">// 索引为number类型，值为字符串类型</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myArray<span class="token operator">:</span> StrArray<span class="token punctuation">;</span>
myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;储凡&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;chufan&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> myStr<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> myArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myStr<span class="token punctuation">)</span>
</code></pre></div><h2 id="类类型" tabindex="-1"><a class="header-anchor" href="#类类型" aria-hidden="true">#</a> 类类型</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 类类型</span>
<span class="token keyword">interface</span> <span class="token class-name">Plan</span> <span class="token punctuation">{</span>
  food<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function-variable function">eat</span><span class="token operator">:</span> <span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span>

<span class="token punctuation">}</span>

<span class="token comment">// 通过接口来约束类的属性、方法</span>
<span class="token keyword">class</span> <span class="token class-name">PlanA</span> <span class="token keyword">implements</span> <span class="token class-name">Plan</span> <span class="token punctuation">{</span>
  food<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token function">eat</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="继承接口" tabindex="-1"><a class="header-anchor" href="#继承接口" aria-hidden="true">#</a> 继承接口</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FairyA</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FairyB</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Fairy</span> <span class="token keyword">extends</span> <span class="token class-name">FairyA</span><span class="token punctuation">,</span> FairyB <span class="token punctuation">{</span>
  gender<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> fairy<span class="token operator">:</span> Fairy <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;储凡&quot;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fairy<span class="token punctuation">)</span>
</code></pre></div>`,15),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","接口.html.vue"]]);export{r as default};
