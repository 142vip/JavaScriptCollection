import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const t={},o=p(`<h1 id="接口隔离原则" tabindex="-1"><a class="header-anchor" href="#接口隔离原则" aria-hidden="true">#</a> 接口隔离原则</h1><p>一个类对另一个类的依赖应该建立在最小的接口上。</p><p><strong>要为各个类建立它们需要的专用接口，而不要试图去建立一个很庞大的接口供所有依赖它的类去调用。</strong></p><p>一些要求：</p><ul><li>接口尽量小，但是要有限度。一个接口只服务于一个子模块或业务逻辑。</li><li>为依赖接口的类定制服务。只提供调用者需要的方法，屏蔽不需要的方法。</li><li>了解环境，拒绝盲从。每个项目或产品都有选定的环境因素，环境不同，接口拆分的标准就不同深入了解业务逻辑。</li><li>提高内聚，减少对外交互。使接口用最少的方法去完成最多的事情。</li></ul><h2 id="举例说明" tabindex="-1"><a class="header-anchor" href="#举例说明" aria-hidden="true">#</a> 举例说明</h2><p>这里通过一个例子对<code>接口隔离原则</code>进行说明。例如：</p><p>定义两个接口：<code>Animal</code> 和 <code>Flyable</code>，分别表示动物和可飞行的对象。</p><p>然后，创建两个类：<code>Bird</code> 和 <code>Dog</code>。</p><ul><li><code>Bird</code> 类实现了 <code>Animal</code> 和 <code>Flyable</code> 接口，表示一只鸟，具有吃和飞行的功能；</li><li><code>Dog</code> 类实现了 <code>Animal</code> 接口，表示一只狗，只具有吃的功能。</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 接口隔离原则Demo
 */</span>
<span class="token keyword">namespace</span> IspDemo <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">interface</span> <span class="token class-name">Flyable</span> <span class="token punctuation">{</span>
    <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Bird</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span><span class="token punctuation">,</span> Flyable <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Bird is eating...&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Bird is flying...&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">implements</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Dog is eating...&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> bird <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bird</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  bird<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  bird<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  dog<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>通过这种设计，将吃和飞行的功能分别定义在不同的接口中，并由相应的类来实现，遵循了接口隔离原则。</p><p>这样的设计使得类的职责更加明确，客户端可以根据需要选择性地使用不同的类，提高了代码的灵活性和可复用性。</p><p>**接口隔离原则建议将臃肿的接口分解为更小、更具体的接口，以避免客户端依赖于它们不需要的接口成员。这样可以减少接口的复杂性，提高代码的灵活性和可复用性。 **</p>`,14),c=[o];function e(l,i){return s(),a("div",null,c)}const r=n(t,[["render",e],["__file","interface-segregation-principle.html.vue"]]);export{r as default};
