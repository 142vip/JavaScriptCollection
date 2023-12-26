import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as o}from"./app-be253e4c.js";const p={},t=o(`<h1 id="合成复用原则" tabindex="-1"><a class="header-anchor" href="#合成复用原则" aria-hidden="true">#</a> 合成复用原则</h1><p>尽量使用合成或者聚合的方式，而不是使用继承</p><p>合成复用原则鼓励开发者通过组合（合成）多个较小的对象来实现代码的复用，而不是通过继承来达到复用的目的。</p><p><strong>通过合成而非继承，可以更灵活地组合对象以满足不同的需求，同时减少类之间的耦合性。</strong></p><h2 id="举例说明" tabindex="-1"><a class="header-anchor" href="#举例说明" aria-hidden="true">#</a> 举例说明</h2><p>这里通过一个例子对<code>合成复用原则</code>进行说明。例如：</p><p>定义一个 <code>Logger</code> 接口，表示日志记录器，具有 <code>log</code> 方法来记录日志。</p><p>然后，创建了两个实现 <code>Logger</code> 接口的类：<code>ConsoleLogger</code> 和 <code>FileLogger</code>。</p><ul><li><code>ConsoleLogger</code> 类负责将日志输出到控制台</li><li><code>FileLogger</code> 类负责将日志写入文件</li></ul><p>接下来，创建 <code>User</code> 类，它接收一个 <code>Logger</code> 对象作为构造函数参数。<code>User</code> 类表示用户对象，其中的 <code>save</code> 方法执行保存用户的逻辑，并通过调用 <code>Logger</code> 对象的 <code>log</code> 方法来记录日志。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 合成复用原则Demo
 */</span>
<span class="token keyword">namespace</span> CrpDemo <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">ConsoleLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[ConsoleLogger] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">FileLogger</span> <span class="token keyword">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[FileLogger] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token comment">// 将日志写入文件的具体实现</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> logger<span class="token operator">:</span> Logger

    <span class="token function">constructor</span><span class="token punctuation">(</span>logger<span class="token operator">:</span> Logger<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>logger <span class="token operator">=</span> logger
    <span class="token punctuation">}</span>

    <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token comment">// 执行保存用户的逻辑</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>logger<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;User saved.&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> consoleLogger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> userWithConsoleLogger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>consoleLogger<span class="token punctuation">)</span>
  userWithConsoleLogger<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> fileLogger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> userWithFileLogger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>fileLogger<span class="token punctuation">)</span>
  userWithFileLogger<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>通过这种设计，使用对象组合的方式，将日志记录的功能委托给了实现了 <code>Logger</code> 接口的类，而不是通过继承关系。 这样，在使用 <code>User</code> 类时，可以根据需要选择不同的日志记录器，实现了代码的复用和灵活性。 如果需要添加新的日志记录方式，只需实现 <code>Logger</code> 接口并创建对应的类，而不必修改 <code>User</code> 类的代码，符合合成复用原则。</p><p><strong>合成复用原则的核心思想是通过组合已有的对象来实现复用，而不是通过继承来达到复用的目的。</strong></p><p>这种方式更加灵活，减少了类之间的耦合性，使得系统更加可扩展和易维护。 同时，合成复用原则也鼓励开发人员思考对象之间的关联关系，通过合理的组合关系来构建更加健壮和可复用的代码。</p>`,14),e=[t];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","composite-reuse-principle.html.vue"]]);export{r as default};
