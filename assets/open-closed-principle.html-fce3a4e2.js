import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const t={},o=p(`<h1 id="开闭原则" tabindex="-1"><a class="header-anchor" href="#开闭原则" aria-hidden="true">#</a> 开闭原则</h1><p>一个软件实体应当<strong>对扩展开放，对修改关闭</strong>。即软件实体应尽量在不修改原有代码的情况下进行扩展。</p><p>开放封闭原则指出软件实体（类、模块、函数等）应该是可扩展的，但不可修改的。</p><p><strong>强调在添加新功能时应该通过扩展现有实体来实现，而不是修改现有实体的代码。</strong> 这样可以避免对已经稳定的代码进行修改，减少引入错误的风险。</p><p>当软件系统需要面对新的需求时，我们应该尽量保证系统的设计框架是稳定的。</p><p>如果一个软件设计符合开闭原则，那么可以非常方便地对系统进行扩展，而且在扩展时无须修改现有代码，使得软件系统在拥有适应性和灵活性的同时具备较好的稳定性和延续性。</p><p>要实现开闭原则，需要在程序设计开始时就对程序进行抽象化设计。</p><p>在抽象化模块设计完成之后，不允许修改接口或者抽象类的属性、方法；方法的参数类型、引用对象也必须是接口或者抽象类，尽量保证抽象层的稳定性； 在进行扩展时必须定义具体实现的方法。</p><h2 id="举例说明" tabindex="-1"><a class="header-anchor" href="#举例说明" aria-hidden="true">#</a> 举例说明</h2><p>这里通过一个例子对<code>开闭原则</code>进行说明。例如：</p><p>定义一个 <code>Shape</code> 接口，它包含一个 <code>calculateArea</code> 方法。然后创建两个实现 <code>Shape</code> 接口的具体类 <code>Rectangle</code> 和 <code>Circle</code>。</p><p>每个类都实现了自己的 <code>calculateArea</code> 方法来计算不同形状的面积。</p><p>接下来，创建一个 <code>AreaCalculator</code> 类，它具有一个 <code>calculateTotalArea</code> 方法，用于计算给定形状数组的总面积。 这个方法接受一个 <code>Shape</code> 类型的数组作为参数，通过遍历数组并调用每个形状的 <code>calculateArea</code> 方法来计算总面积。</p><p>通过这种设计，遵循了开闭原则。当需要添加新的形状时，只需要创建一个新的类并实现 <code>Shape</code> 接口， 然后将新的形状对象传递给 <code>calculateTotalArea</code> 方法即可，而不需要修改现有的 <code>AreaCalculator</code> 类。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 开闭原则Demo
 */</span>
<span class="token keyword">namespace</span> OcpDemo<span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> width<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> height<span class="token operator">:</span> <span class="token builtin">number</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
      <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
    <span class="token punctuation">}</span>

    <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">implements</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> radius<span class="token operator">:</span> <span class="token builtin">number</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>radius<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius
    <span class="token punctuation">}</span>

    <span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">AreaCalculator</span> <span class="token punctuation">{</span>
    <span class="token function">calculateTotalArea</span><span class="token punctuation">(</span>shapes<span class="token operator">:</span> Shape<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> totalArea <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> shape <span class="token keyword">of</span> shapes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        totalArea <span class="token operator">+=</span> shape<span class="token punctuation">.</span><span class="token function">calculateArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> totalArea
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> areaCalculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AreaCalculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> totalArea <span class="token operator">=</span> areaCalculator<span class="token punctuation">.</span><span class="token function">calculateTotalArea</span><span class="token punctuation">(</span><span class="token punctuation">[</span>rectangle<span class="token punctuation">,</span> circle<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Total Area:&#39;</span><span class="token punctuation">,</span> totalArea<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样，通过扩展而不是修改现有代码来满足新需求，遵循了开闭原则。这样的设计使得系统更加灵活、可扩展，并且改动不会对现有功能产生不必要的影响。</p><p><strong>开闭原则的实现由里氏替换原则和依赖倒置原则来完成。</strong></p>`,17),e=[o];function c(l,u){return s(),a("div",null,e)}const i=n(t,[["render",c],["__file","open-closed-principle.html.vue"]]);export{i as default};
