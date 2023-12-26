import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-be253e4c.js";const t={},e=p(`<h1 id="单一职责原则" tabindex="-1"><a class="header-anchor" href="#单一职责原则" aria-hidden="true">#</a> 单一职责原则</h1><p>一个类只负责一个功能领域中的相应职责，或者就一个类而言，应该只有一个引起它变化的原因。</p><blockquote><p>一个类不能太“累”！！！</p></blockquote><p>在软件系统中，一个类（大到模块，小到方法）承担的职责越多，它被复用的可能性就越小， 而且一个类承担的职责过多，就相当于将这些职责耦合在一起，当其中一个职责变化时，可能会影响其他职责的运作，因此要将这些职责进行分离，将不同的职责封装在不同的类中，</p><p><strong>将不同的变化原因封装在不同的类中，如果多个职责总是同时发生改变则可将它们封装在同一类中。</strong></p><p>单一职责原则要求一个类或模块应该有且仅有一个引起它变化的原因。<strong>一个类应该只负责一项特定的职责</strong> 。这样做可以提高代码的可理解性、可维护性和可测试性。</p><h2 id="举例说明" tabindex="-1"><a class="header-anchor" href="#举例说明" aria-hidden="true">#</a> 举例说明</h2><p>这里通过一个例子对<code>单一职责原则</code>进行说明。例如：</p><p>定义三个接口：<code>UserService</code>、<code>EmailService</code> 和 <code>User</code></p><ul><li><code>UserService</code> 提供了获取用户信息的方法</li><li><code>EmailService</code> 提供了发送电子邮件的方法</li><li><code>User</code> 表示用户对象</li></ul><p>然后创建两个实现接口的类：<code>DatabaseUserService</code> 和 <code>EmailSender</code>。</p><ul><li><code>DatabaseUserService</code> 负责从数据库中获取用户信息</li><li><code>EmailSender</code> 负责发送电子邮件。</li></ul><p>最后创建 <code>UserProcessor</code> 类，接受一个 <code>UserService</code> 对象和一个 <code>EmailService</code> 对象作为构造函数参数。 <code>UserProcessor</code> 类负责处理用户，它首先通过 <code>UserService</code> 获取用户信息，然后执行用户处理逻辑，并使用 <code>EmailService</code> 发送欢迎邮件给用户</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 单一职责原则Demo
 */</span>
<span class="token keyword">namespace</span> SrpDemo<span class="token punctuation">{</span>

  <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> email<span class="token operator">:</span> <span class="token builtin">string</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
      <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email
    <span class="token punctuation">}</span>

    <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id
    <span class="token punctuation">}</span>

    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>

    <span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>email
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token function">getUserById</span><span class="token punctuation">(</span>userId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> User<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">interface</span> <span class="token class-name">EmailService</span> <span class="token punctuation">{</span>
    <span class="token function">sendEmail</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">DatabaseUserService</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token function">getUserById</span><span class="token punctuation">(</span>userId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 从数据库中获取用户信息</span>
      <span class="token comment">// ...</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> <span class="token string">&#39;John Doe&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;john.doe@example.com&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">EmailSender</span> <span class="token keyword">implements</span> <span class="token class-name">EmailService</span> <span class="token punctuation">{</span>
    <span class="token function">sendEmail</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token comment">// 发送电子邮件给用户</span>
      <span class="token comment">// ...</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sending email to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">UserProcessor</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> userService<span class="token operator">:</span> UserService
    <span class="token keyword">private</span> emailService<span class="token operator">:</span> EmailService

    <span class="token function">constructor</span><span class="token punctuation">(</span>userService<span class="token operator">:</span> UserService<span class="token punctuation">,</span> emailService<span class="token operator">:</span> EmailService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService
      <span class="token keyword">this</span><span class="token punctuation">.</span>emailService <span class="token operator">=</span> emailService
    <span class="token punctuation">}</span>

    <span class="token function">processUser</span><span class="token punctuation">(</span>userId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
      <span class="token comment">// 执行用户处理逻辑</span>
      <span class="token comment">// ...</span>

      <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>emailService<span class="token punctuation">.</span><span class="token function">sendEmail</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatabaseUserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> emailService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> userProcessor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserProcessor</span><span class="token punctuation">(</span>userService<span class="token punctuation">,</span> emailService<span class="token punctuation">)</span>
  userProcessor<span class="token punctuation">.</span><span class="token function">processUser</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>通过这种设计，将获取用户信息的职责委托给了 <code>UserService</code>，将发送电子邮件的职责委托给了 <code>EmailService</code>， 同时 <code>UserProcessor</code> 类专注于用户处理逻辑，遵循了单一职责原则。</p><p><strong>每个类都有明确的职责，并且可以独立进行修改和扩展，提高了代码的可维护性和可测试性</strong></p>`,16),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","single-responsibility-principle.html.vue"]]);export{k as default};
