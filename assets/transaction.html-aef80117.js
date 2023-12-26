import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-be253e4c.js";const p="/JavaScriptCollection/assets/transaction-apis-cb10caed.png",o="/JavaScriptCollection/assets/transaction-api-auto-184fb008.png",e="/JavaScriptCollection/assets/transaction-options-84048317.png",c={},l=t(`<h1 id="事物" tabindex="-1"><a class="header-anchor" href="#事物" aria-hidden="true">#</a> 事物</h1><p><code>数据库事务</code>是访问并可能操作各种数据项的一个数据库操作序列， <strong>这些操作要么全部执行、要么全部不执行，是一个不可分割的工作单位。 事务由事务开始与事务结束之间执行的全部数据库操作组成。</strong></p><p><code>Sequelize</code>本身是支持事物的，但默认不使用，可以通过配置使用事务，操作数据库库。</p><p>目前，<code>Sequelize</code>框架支持两种使用事务的方式：</p><ul><li><code>非托管事务</code>：提交和回滚事务应由用户手动完成（通过调用适当的 <code>Sequelize</code> 方法）。</li><li><code>托管事务</code>：如果抛出任何错误，<code>Sequelize</code> 将自动回滚事务，否则提交事务。另外，如果启用了 <code>CLS</code> （连续本地存储），则事务回调内的所有查询都将自动接收事务对象。</li></ul><p>可以理解托管事务就是自动提交事务，出现异常后自动回滚，保持数据库一致性。非托管事务则需要手动处理提交、异常处理、回滚这些流程。</p><h2 id="事务对象" tabindex="-1"><a class="header-anchor" href="#事务对象" aria-hidden="true">#</a> 事务对象</h2><p>在使用<code>Sequelize</code>的事务是，一般需要先获取对象，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取事务</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>将实例上的SQL操作绑定到事务上，处理完业务逻辑后，使用<code>commit()</code>函数提交事务，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 事务提交</span>
<span class="token keyword">await</span> t<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>当实例操作出现异常，事物执行失败时，被<code>try...catch</code>捕获到，为保证数据与执行前一致，需要通过<code>rollback()</code>函数进行回滚，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 事务回滚</span>
<span class="token keyword">await</span> t<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="非托管事务" tabindex="-1"><a class="header-anchor" href="#非托管事务" aria-hidden="true">#</a> 非托管事务</h2><p>查看<code>sequelize.transaction()</code>API源码：</p><figure><img src="`+p+`" alt="transaction事物API方法" tabindex="0" loading="lazy"><figcaption>transaction事物API方法</figcaption></figure><p>获取到transaction事物对象后，可以根据提供的<code>commit()</code>、<code>rollback()</code>方法手动操作事务。</p><ul><li><code>commit()</code> ： 手动提交事务</li><li><code>rollback()</code> ： 手动终止事务，并回滚</li></ul><p>同时，<code>LOCK()</code> 函数还支持当前事务锁的一些状态，因为本质上开展事务，是基于数据库事物隔离级别来设置锁的等级。</p><p>这里总结下使用<code>非托管事务</code>、<code>手动提交事务</code>的通用代码模版：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取事务对象</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 异常捕获事务操作
 */</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将实例操作绑定在事务上执行，一般为多个操作</span>
  <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;微信公众号：储凡&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;fairy_vip@2925.com&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">transaction</span><span class="token operator">:</span> t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> Space<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;测试空间&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">transaction</span><span class="token operator">:</span> t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 手动提交事务</span>
  <span class="token keyword">await</span> t<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 出现异常贼说明事务执行失败，则需要手动回滚，对有影响的数据进行处理</span>
  <span class="token keyword">await</span> t<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>非托管事务方法要求在必要时手动提交和回滚事务。</strong></p><h2 id="托管事务" tabindex="-1"><a class="header-anchor" href="#托管事务" aria-hidden="true">#</a> 托管事务</h2><p><code>Sequelize</code>框架还支持<code>托管事务</code>，与<code>非托管事务</code>不同，<code>托管事务</code>能够自动提交事务、自动进行事务回滚。</p><p>同样是<code>sequelize.transaction()</code>方法，查看源码：</p><figure><img src="`+o+`" alt="托管事务API" tabindex="0" loading="lazy"><figcaption>托管事务API</figcaption></figure><p>可以通过传入回调来启动托管事务。这里的<code>autoCallback</code>通常是<code>async</code>函数，即可以在回调函数中处理同步流程。</p><p>这里总结下使用<code>托管事务</code>、<code>自动提交事务</code>的通用代码模版：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;微信公众号：储凡&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;fairy_vip@2925.com&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">transaction</span><span class="token operator">:</span> t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> Space<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;测试空间&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">transaction</span><span class="token operator">:</span> t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 返回回调函数中业务逻辑的结果</span>
    <span class="token keyword">return</span> <span class="token string">&#39;transaction is OK!&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 当流程执行到这里时，事务操作就已经被成功提交</span>
  <span class="token comment">// 这里的result变量拿到的就是回调函数返回值。代表事物执行成功</span>

<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 当流程执行到这个catch时，说明回调函数中的业务执行事务失败，</span>
  <span class="token comment">// 这里的error变量会表明错误原因，同时Sequelize也会自动对事务进行回滚</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>相比于<code>非托管事务</code>，<code>托管事务</code>模板中没有手动执行<code>commit()</code>、<code>rollback()</code>函数， 这些<code>Sequelize</code>框架都能自动执行。</strong></p><p>对于托管事务，处理流程一般如下：</p><ol><li><code>Sequelize</code>会自动开启事务，并获取到事务对象<code>t</code>。</li><li><code>Sequelize</code>会执行回调函数中的逻辑，并且回调函数的参数就是前面获取的事务对象<code>t</code></li><li>如果提供给<code>transaction</code>函数的回调函数出现异常，则<code>Sequelize</code>会自动回滚事务</li><li>如果回调函数业务执行成功，<code>Sequelize</code>会自动提交事务，确保一致性操作</li></ol><p>使用托管事务时，不需要手动提交事务、回滚事务，如果回调函数中的业务逻辑执行成功后，仍然需要回滚事务，这是只需要在回调函数中 手动抛错即可。这里的本质是transaction方法对回调函数异常捕获，对于托管事务如果出现异常，框架层面会自动回滚事务。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 托管事务的事务回滚
 */</span>
<span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">t</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> User<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;微信公众号：储凡&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;fairy_vip@2925.com&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">transaction</span><span class="token operator">:</span> t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 手动抛错，框架自动回滚事务</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="并发事务" tabindex="-1"><a class="header-anchor" href="#并发事务" aria-hidden="true">#</a> 并发事务</h3><blockquote><p>注意： SQLite数据库 不支持同时处理多个事务</p></blockquote><p><code>Sequelize</code>框架还支持在一系列查询中包含并发事务，或者将其中一些事物排除在任何事物外。 在操作模型时，使用<code>transaction</code>字段来配置具体使用那个事务。例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 并发事务
 */</span>
sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">t1</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">t2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 并发执行事务</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      User<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;微信公众号：储凡&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;fairy_vip@2925.com&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">transaction</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      User<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;事务测试1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">transaction</span><span class="token operator">:</span> t1<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// 开启CLS配置后，未配置事务参数则使用就近的t2事务</span>
      User<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;事务测试2&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>利用<code>Promise.all</code>对多个异步函数并发操作，就响应时间而言选择处理时间最长的函数作为该<code>Promise.all</code>的响应时间。 <code>transaction</code>字段可以配置具体使用那个事务。</p><h2 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h2><p>对于非托管事务、托管事务，Sequelize框架给出的API是：</p><ul><li>对于非托管事务，只需使用<code>sequelize.transaction(options)</code></li><li>对于托管事务，请使用<code>sequelize.transaction(options, callback)</code></li></ul><p>这里的<code>options</code>是可选参数，查看源码：</p><figure><img src="`+e+`" alt="transaction函数的options参数" tabindex="0" loading="lazy"><figcaption>transaction函数的options参数</figcaption></figure><p>当调用<code>transaction</code>函数，事务被创建时，<code>options</code>参数就被提供了。</p><p>默认情况下，<code>Sequelize</code> 使用数据库的隔离级别。如果您想使用不同的隔离级别，可以在启动事务时，设置<code>隔离级别</code>，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 设置事务隔离级别
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>Transaction<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 设置隔离级别</span>
  <span class="token literal-property property">isolationLevel</span><span class="token operator">:</span> Transaction<span class="token punctuation">.</span><span class="token constant">ISOLATION_LEVELS</span><span class="token punctuation">.</span><span class="token constant">SERIALIZABLE</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 业务代码</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>四种事务<code>隔离级别</code>枚举如下：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 事务隔离级别枚举
 */</span>
<span class="token keyword">enum</span> <span class="token constant">ISOLATION_LEVELS</span> <span class="token punctuation">{</span>
  <span class="token constant">READ_UNCOMMITTED</span> <span class="token operator">=</span> <span class="token string">&#39;READ UNCOMMITTED&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">READ_COMMITTED</span> <span class="token operator">=</span> <span class="token string">&#39;READ COMMITTED&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">REPEATABLE_READ</span> <span class="token operator">=</span> <span class="token string">&#39;REPEATABLE READ&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">SERIALIZABLE</span> <span class="token operator">=</span> <span class="token string">&#39;SERIALIZABLE&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>除了在使用事务时设置隔离级别外，还可以在创建sequelize对象时，设置全局的事务隔离级别，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 设置全局的事务隔离级别
 */</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>Sequelize<span class="token punctuation">,</span> Transaction<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;sequelize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sequelize <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sequelize</span><span class="token punctuation">(</span><span class="token string">&#39;postgres://user:pass@142vip.cn:5432/142vip&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">isolationLevel</span><span class="token operator">:</span> Transaction<span class="token punctuation">.</span><span class="token constant">ISOLATION_LEVELS</span><span class="token punctuation">.</span><span class="token constant">SERIALIZABLE</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="事务锁" tabindex="-1"><a class="header-anchor" href="#事务锁" aria-hidden="true">#</a> 事务锁</h2><p><code>Sequelize</code>框架支持在执行事务时，使用锁或者跳过锁执行，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 可以使用锁来执行事务</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transaction</span><span class="token operator">:</span> t1
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 事务中的查询可以跳过锁定的行</span>
User<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lock</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">skipLocked</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">transaction</span><span class="token operator">:</span> t2
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="钩子函数" tabindex="-1"><a class="header-anchor" href="#钩子函数" aria-hidden="true">#</a> 钩子函数</h2><p><code>Sequelize</code>框架对事务提供钩子函数<code>afterCommit()</code>，不论托管事务还是非托管事务， 都可以利用该钩子函数来确认事务是否提交以及什么时候提交，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 针对托管事务
 */</span>
<span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 监听钩子函数</span>
  t<span class="token punctuation">.</span><span class="token function">afterCommit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 业务逻辑</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 针对非托管事务
 */</span>
<span class="token keyword">const</span> t <span class="token operator">=</span> <span class="token keyword">await</span> sequelize<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 监听钩子函数</span>
t<span class="token punctuation">.</span><span class="token function">afterCommit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 业务逻辑</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> t<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>从代码中可以看出：</p><ul><li>当事务出现异常时被回滚，贼说明事务执行不成功，不会触发<code>afterCommit()</code>函数</li><li><code>afterCommit()</code>钩子函数的执行，不会影响到事务的返回值，可以理解为触发第三方业务流程</li></ul><p>到这里，Sequelize框架中事务部分就介绍完了， 但这里只是介绍用法，事务还有很多零碎的知识点，例如：事务隔离级别分类、存储引擎等，可自行结合不用的数据库学习。</p>`,60),i=[l];function u(r,k){return a(),s("div",null,i)}const y=n(c,[["render",u],["__file","transaction.html.vue"]]);export{y as default};
