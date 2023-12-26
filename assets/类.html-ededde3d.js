import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2><ul><li><code>public</code>： 公共的属性，在任意位置可以使用</li><li><code>private</code>： 私有的属性， 只能在当前类中使用</li><li><code>protected</code>： 受保护的属性，只能在当前类和其子类中使用</li><li><code>static</code>： 属性、方法不需要创建类对象，可以直接调用</li><li><code>readonly</code>：将属性设置为只读的,只读属性必须在声明时或构造函数里被初始化</li></ul><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DogA</span> <span class="token keyword">extends</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dogA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DogA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dogA<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;dogA&#39;</span>
dogA<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">4</span>
</code></pre></div><h2 id="存取器" tabindex="-1"><a class="header-anchor" href="#存取器" aria-hidden="true">#</a> 存取器</h2><p>不需要单独提供get、set方法，采用getter、setter存取器来获取访问类的私有变量</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">DogB</span> <span class="token keyword">extends</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> _gender<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token comment">// setter、getter存取器</span>
  <span class="token keyword">get</span> <span class="token function">gender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_gender
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">gender</span><span class="token punctuation">(</span>gender<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_gender <span class="token operator">=</span> gender
  <span class="token punctuation">}</span>


  <span class="token comment">// 等价于</span>
  <span class="token keyword">public</span> <span class="token function">getGender</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_gender
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">setGender</span><span class="token punctuation">(</span>gender<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_gender <span class="token operator">=</span> gender
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dogB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DogB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 通过gender方法来获取_gender私有属性值</span>
dogB<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token number">18</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dogB<span class="token punctuation">.</span>gender<span class="token punctuation">)</span>
</code></pre></div><h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h2><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">TestStatic</span> <span class="token punctuation">{</span>
  <span class="token comment">// 静态属性</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> age <span class="token operator">=</span> <span class="token number">18</span>

  <span class="token comment">// 静态方法</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;this is using static function&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>TestStatic<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>TestStatic<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h2><p>抽象类做为其它派生类的基类使用。 一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token comment">// 抽象方法，需要继承后自己实现</span>
  <span class="token keyword">abstract</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// 普通方法直接继承，然后重写</span>
  <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;roaming the earch...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="接口继承类" tabindex="-1"><a class="header-anchor" href="#接口继承类" aria-hidden="true">#</a> 接口继承类</h2><p>通过接口继承类，可以实现把类当做接口来使用</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">PointXY</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">PointXYZ</span> <span class="token keyword">extends</span> <span class="token class-name">PointXY</span> <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),o=[e];function c(l,k){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","类.html.vue"]]);export{r as default};
