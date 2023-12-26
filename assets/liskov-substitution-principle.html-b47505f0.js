import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="里氏替换原则" tabindex="-1"><a class="header-anchor" href="#里氏替换原则" aria-hidden="true">#</a> 里氏替换原则</h1><p><code>里氏替换原则</code>要求子类必须能够替换其基类，而不影响程序的正确性。换句话说，任何基类可以被其派生类无缝替换，而不会引发意外行为。 遵循该原则可以提高代码的可靠性和可扩展性。</p><p><strong>强调子类对象必须能够替换父类对象，而程序的行为不应该发生变化</strong>。简而言之，子类对象在任何使用父类对象的地方都应该能够正常工作，而不会引发错误或不一致的行为。</p><h2 id="举例说明" tabindex="-1"><a class="header-anchor" href="#举例说明" aria-hidden="true">#</a> 举例说明</h2><p>这里通过一个例子对<code>迪米特法则</code>进行说明。例如：</p><p>有两个类：<code>Rectangle</code> 和 <code>Square</code>。</p><ul><li><code>Rectangle</code> 类表示矩形，具有 <code>width</code> 和 <code>height</code> 两个受保护的属性，以及设置宽度和高度的方法 <code>setWidth</code> 和 <code>setHeight</code> 。还有一个计算面积的方法 <code>getArea</code>。</li><li><code>Square</code> 类继承自 <code>Rectangle</code> 类，表示正方形。它重写了 <code>setWidth</code> 和 <code>setHeight</code> 方法，使得设置宽度和高度时保持相等。</li></ul><p>定义一个 <code>printArea</code> 函数，用于打印矩形的面积。这个函数接受一个 <code>Rectangle</code> 对象作为参数，并设置宽度为 4，高度为 5，然后打印面积。</p><p>创建一个 <code>Rectangle</code> 对象和一个 <code>Square</code> 对象，并分别将它们传递给 <code>printArea</code> 函数进行测试。</p><p>这里体现了<code>里氏替换原则</code>的思想。根据<code>里氏替换原则</code>，子类对象（如 <code>Square</code>）可以替换父类对象（如 <code>Rectangle</code> ）在任何使用父类对象的地方，而不会引发错误或不一致的行为。</p><p><code>printArea</code> 函数接受一个 <code>Rectangle</code> 对象作为参数，可以正常地将 <code>Square</code> 对象传递给该函数，而不会引发错误。 尽管 <code>Square</code> 对象的行为略有不同（设置宽度和高度时保持相等），但仍然能够正确计算面积，并且满足父类对象的行为约定。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 里氏替换原则Demo
 */</span>

<span class="token keyword">namespace</span> LspDemoFather<span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> width<span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token keyword">protected</span> height<span class="token operator">:</span> <span class="token builtin">number</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
      <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
    <span class="token punctuation">}</span>

    <span class="token function">setWidth</span><span class="token punctuation">(</span>width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
    <span class="token punctuation">}</span>

    <span class="token function">setHeight</span><span class="token punctuation">(</span>height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
    <span class="token punctuation">}</span>

    <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">printArea</span><span class="token punctuation">(</span>rectangle<span class="token operator">:</span>Rectangle<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    rectangle<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
    rectangle<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Area: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>rectangle<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">namespace</span> LspDemo <span class="token punctuation">{</span>
  <span class="token keyword">import</span> Rectangle <span class="token operator">=</span> LspDemoFather<span class="token punctuation">.</span>Rectangle<span class="token punctuation">;</span>
  <span class="token keyword">import</span> printArea <span class="token operator">=</span> LspDemoFather<span class="token punctuation">.</span>printArea<span class="token punctuation">;</span>

  <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token function">setWidth</span><span class="token punctuation">(</span>width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
    <span class="token punctuation">}</span>

    <span class="token function">setHeight</span><span class="token punctuation">(</span>height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

  <span class="token function">printArea</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span>
  <span class="token function">printArea</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre></div><p><code>里氏替换原则</code>的核心思想是通过子类对象的可替换性来保证程序的正确性和稳定性。</p><p><strong>子类应该能够完全替换父类，并且在任何使用父类的地方都能够正常工作</strong>。这样可以提高代码的可复用性和扩展性，增强系统的灵活性和可维护性。</p>`,14),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","liskov-substitution-principle.html.vue"]]);export{r as default};
