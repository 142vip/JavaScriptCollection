import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-be253e4c.js";const t={},o=e(`<h1 id="依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#依赖倒置原则" aria-hidden="true">#</a> 依赖倒置原则</h1><p><code>依赖倒置原则</code>：高层模块不应该依赖低层模块，两者都应该依赖其抽象；抽象不应该依赖细节，细节应该依赖抽象。</p><p><code>高层模块不应该直接依赖于底层模块的具体实现，而应该依赖于底层的抽象。</code> 模块间的依赖是通过抽象发生，实现类之间不发生直接的依赖关系，其依赖关系是通过接口或抽象类产生的。</p><p><code>接口和抽象类不应该依赖于实现类，而实现类依赖接口或抽象类。</code>这一点其实不用多说，很好理解，<code>面向接口编程</code>思想正是这点的最好体现。</p><p>依赖倒置原则强调高层模块不应该依赖于低层模块，二者都应该依赖于抽象。</p><p><code>抽象不应该依赖于具体实现细节，而具体实现细节应该依赖于抽象。</code> 这样可以降低模块之间的耦合性，提高代码的可测试性和可维护性。</p><h2 id="举例说明" tabindex="-1"><a class="header-anchor" href="#举例说明" aria-hidden="true">#</a> 举例说明</h2><p>这里通过一个例子对<code>依赖倒置原则</code>进行说明。例如：</p><p>定义一个 <code>IMessageSender</code> 接口，它声明了一个 <code>sendMessage</code> 方法，表示发送消息的操作。 <code>EmailSender</code> 类和 <code>SMSMessageSender</code> 类分别实现了 <code>IMessageSender</code> 接口，提供了不同的消息发送实现。 <code>NotificationService</code> 类表示通知服务，它依赖于 <code>IMessageSender</code> 接口而不是具体的消息发送类。</p><p>在构造函数中，通过依赖注入的方式将具体的消息发送类传递给 <code>NotificationService</code> 对象。 <code>NotificationService</code> 类的 <code>sendNotification</code> 方法通过调用 <code>messageSender</code> 对象的 <code>sendMessage</code> 方法来发送通知。</p><p>创建了一个 <code>EmailSender</code> 对象和一个 <code>SMSMessageSender</code> 对象，作为具体的消息发送类。然后，分别创建了两个 <code>NotificationService</code> 对象：</p><ul><li><code>emailNotification</code></li><li><code>smsNotification</code></li></ul><p>通过将不同的消息发送类传递给这两个对象的构造函数，实现了<code>依赖倒置</code>，高层模块 <code>NotificationService</code> 不直接依赖于具体的消息发送类，而是依赖于抽象的 <code>IMessageSender</code> 接口。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * 依赖倒置原则Demo
 */</span>
<span class="token keyword">namespace</span> DipDemo <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">IMessageSender</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">EmailSender</span> <span class="token keyword">implements</span> <span class="token class-name">IMessageSender</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sending email: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">SMSMessageSender</span> <span class="token keyword">implements</span> <span class="token class-name">IMessageSender</span> <span class="token punctuation">{</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sending SMS: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">NotificationService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> messageSender<span class="token operator">:</span> IMessageSender

    <span class="token function">constructor</span><span class="token punctuation">(</span>messageSender<span class="token operator">:</span> IMessageSender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>messageSender <span class="token operator">=</span> messageSender
    <span class="token punctuation">}</span>

    <span class="token function">sendNotification</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>messageSender<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 使用示例</span>
  <span class="token keyword">const</span> emailSender <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> smsSender <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SMSMessageSender</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> emailNotification <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NotificationService</span><span class="token punctuation">(</span>emailSender<span class="token punctuation">)</span>
  <span class="token keyword">const</span> smsNotification <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NotificationService</span><span class="token punctuation">(</span>smsSender<span class="token punctuation">)</span>

  emailNotification<span class="token punctuation">.</span><span class="token function">sendNotification</span><span class="token punctuation">(</span><span class="token string">&#39;Hello,  email notification.&#39;</span><span class="token punctuation">)</span>
  smsNotification<span class="token punctuation">.</span><span class="token function">sendNotification</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, SMS notification.&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>依赖倒置原则</code>的核心思想是通过抽象来解耦模块之间的依赖关系。高层模块不应该直接依赖于低层模块的实现细节，而是依赖于抽象。 这样可以提高系统的灵活性和可维护性，使得模块之间更加松耦合。</p><p><code>依赖倒置原则</code>鼓励使用接口或抽象类来定义模块之间的通信协议，而不是依赖于具体实现类。这样可以轻松替换底层的具体实现，而不影响高层模块的代码。</p>`,16),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","dependency-inversion-principle.html.vue"]]);export{d as default};
