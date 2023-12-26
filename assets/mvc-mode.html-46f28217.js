import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as o}from"./app-be253e4c.js";const t={},p=o(`<h1 id="mvc模式" tabindex="-1"><a class="header-anchor" href="#mvc模式" aria-hidden="true">#</a> MVC模式</h1><p><code>MVC模式</code>将应用程序分为：模型<code>Model</code>、视图<code>View</code>、控制器<code>Controller</code>三个模块 ，用一种将业务逻辑、数据、视图分离的方式组织架构代码， 通过分离关注点的方式来支持改进应用组织方式，其促成了业务数据<code>Model</code> 从用户界面<code>View</code>中分离出来，还有第三个组成部分<code>Controller</code>负责管理传统意义上的业务逻辑和用户输入。</p><p><strong>通常将<code>MVC模式</code>看作架构型设计模式。</strong></p><h2 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h2><p>前后端开发常常将视图、数据、业务逻辑等写在一个模块内， 如果业务内容比较多，容易造成层次的混乱，增加开发与维护的成本， <strong>使用<code>MVC模式</code>可以将数据层、视图层、控制器层进行分层组织，用以减少耦合。</strong></p><p><code>MVC模式</code>的每个模块负责不同的作用和职责：</p><p>模型（Model）：</p><ul><li>模型表示应用程序的数据和业务逻辑。</li><li>它负责处理数据的存储、获取、更新和验证，以及执行与数据相关的操作和业务规则。</li><li>模型通常是独立于用户界面和表示层的，可以被多个视图和控制器共享和重用。</li></ul><p>视图（View）：</p><ul><li>视图负责展示模型的数据或某个特定部分的数据给用户。</li><li>它通常是用户界面的一部分，用于显示数据、接收用户输入，以及向用户提供交互和操作界面。</li><li>视图可以是图形界面、命令行界面、网页或任何其他形式的用户界面。</li></ul><p>控制器（Controller）：</p><ul><li>控制器是模型和视图之间的协调者和中介者。</li><li>它接收用户的输入（如点击按钮、键盘输入等）或触发的事件，并将其转发给适当的模型或视图进行处理。</li><li>控制器负责处理用户请求、更新模型数据、调整视图的显示状态，并确保模型和视图之间的同步和协调。</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p><code>MVC模式</code>实质是分层结构，主要分为三部分：</p><ul><li><code>View</code>传送指令到<code>Controller</code>。</li><li><code>Controller</code>完成业务逻辑后，要求<code>Model</code>改变状态。</li><li><code>Model</code>将新的数据发送到<code>View</code>，用户得到反馈。</li></ul><p>定义一个 <code>TodoModel</code> 类作为模型，它负责管理待办事项的数据（Todo 对象）。 <code>TodoView</code> 类作为视图，用于将待办事项列表渲染到控制台。 <code>TodoController</code>类作为控制器，协调模型和视图之间的交互，并处理用户的操作。</p><p>通过例子创建模型、视图和控制器的实例， 演示添加新任务、更新任务状态和更新视图的过程。</p><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * MVC模式
 * - ts版本
 */</span>
<span class="token keyword">namespace</span> MVCPattern <span class="token punctuation">{</span>

  <span class="token comment">// 模型（Model）</span>
  <span class="token keyword">interface</span> <span class="token class-name">Todo</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    completed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">TodoModel</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> todos<span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token function">addTodo</span><span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">getTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos
    <span class="token punctuation">}</span>

    <span class="token function">updateTodoStatus</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> completed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> todo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> completed
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 视图（View）</span>
  <span class="token keyword">class</span> <span class="token class-name">TodoView</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Todo List:&#39;</span><span class="token punctuation">)</span>
      todos<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span>completed <span class="token operator">?</span> <span class="token string">&#39;x&#39;</span> <span class="token operator">:</span> <span class="token string">&#39; &#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todo<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 控制器（Controller）</span>
  <span class="token keyword">class</span> <span class="token class-name">TodoController</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> model<span class="token operator">:</span> TodoModel
    <span class="token keyword">private</span> view<span class="token operator">:</span> TodoView

    <span class="token function">constructor</span><span class="token punctuation">(</span>model<span class="token operator">:</span> TodoModel<span class="token punctuation">,</span> view<span class="token operator">:</span> TodoView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model
      <span class="token keyword">this</span><span class="token punctuation">.</span>view <span class="token operator">=</span> view
    <span class="token punctuation">}</span>

    <span class="token function">addTodoToModel</span><span class="token punctuation">(</span>todo<span class="token operator">:</span> Todo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">addTodo</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">updateTodoStatusInModel</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> completed<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">updateTodoStatus</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> completed<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">getTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>view<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>todos<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TodoController</span><span class="token punctuation">(</span>model<span class="token punctuation">,</span> view<span class="token punctuation">)</span>

  <span class="token comment">// 添加新任务</span>
  <span class="token keyword">const</span> todo1<span class="token operator">:</span> Todo <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;Learn TypeScript&#39;</span><span class="token punctuation">,</span> completed<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
  <span class="token keyword">const</span> todo2<span class="token operator">:</span> Todo <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;Write Code&#39;</span><span class="token punctuation">,</span> completed<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

  controller<span class="token punctuation">.</span><span class="token function">addTodoToModel</span><span class="token punctuation">(</span>todo1<span class="token punctuation">)</span>
  controller<span class="token punctuation">.</span><span class="token function">addTodoToModel</span><span class="token punctuation">(</span>todo2<span class="token punctuation">)</span>

  <span class="token comment">// 更新任务状态</span>
  controller<span class="token punctuation">.</span><span class="token function">updateTodoStatusInModel</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

  <span class="token comment">// 更新视图</span>
  controller<span class="token punctuation">.</span><span class="token function">updateView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19),e=[p];function c(l,u){return s(),a("div",null,e)}const d=n(t,[["render",c],["__file","mvc-mode.html.vue"]]);export{d as default};
