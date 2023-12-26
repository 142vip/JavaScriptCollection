import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as n,e}from"./app-be253e4c.js";const t={},o=e(`<h1 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h1><p>要启用实验性的装饰器特性，你必须在命令行或tsconfig.json里启用experimentalDecorators编译器选项：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">--target</span> ES5 <span class="token parameter variable">--experimentalDecorators</span>
</code></pre></div><p>tsconfig.json配置：</p><div class="language-json5" data-ext="json5"><pre class="language-json5"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>装饰器是一种特殊的类型声明，能够被附加在类声明、方法、访问符、属性和参数上。 装饰器使用<code>@expression</code>这种形式，<code>expression</code>求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。</p>`,6),p=[o];function c(r,l){return s(),n("div",null,p)}const d=a(t,[["render",c],["__file","装饰器.html.vue"]]);export{d as default};
