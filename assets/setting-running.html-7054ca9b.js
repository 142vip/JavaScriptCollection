import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as p}from"./app-be253e4c.js";const o={},e=p(`<h1 id="配置和运行环境" tabindex="-1"><a class="header-anchor" href="#配置和运行环境" aria-hidden="true">#</a> 配置和运行环境</h1><p>在使用<code>Egg</code>框架进行多环境部署时，配置很大程度上决定了运行环境，当然使用什么的运行环境，框架也合并配置进行处理；</p><h2 id="运行环境" tabindex="-1"><a class="header-anchor" href="#运行环境" aria-hidden="true">#</a> 运行环境</h2><p>一个 Web 应用本身应该是无状态的，<strong>并拥有根据运行环境设置自身的能力(很明确的为多环境部署提供有效方案)</strong></p><p>框架提供两种指定实际运行环境的而方式：</p><ul><li>通过 config/env 文件指定，该文件的内容就是运行环境，如 prod。一般通过构建工具来生成这个文件。</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## config/env</span>
<span class="token comment">## prod环境，一般指上线正式环境</span>
config.prod.js 
</code></pre></div><ul><li>通过 EGG_SERVER_ENV 环境变量指定运行环境更加方便，比如在生产环境启动应用</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 启动指定里添加EGG_SERVER_ENV=prod</span>
<span class="token assign-left variable">EGG_SERVER_ENV</span><span class="token operator">=</span>prod <span class="token function">npm</span> start
</code></pre></div><h3 id="获取方式" tabindex="-1"><a class="header-anchor" href="#获取方式" aria-hidden="true">#</a> 获取方式</h3><p>项目里，可以很容易的通过<code>app.cifng.env</code>来确定应用的当前环境</p><h2 id="egg-server-env和node-env的比较" tabindex="-1"><a class="header-anchor" href="#egg-server-env和node-env的比较" aria-hidden="true">#</a> EGG_SERVER_ENV和NODE_ENV的比较</h2><p>很多 Node.js 应用会使用 NODE_ENV 来区分运行环境，但 EGG_SERVER_ENV 区分得更加精细。一般的项目开发流程包括：</p><ul><li>本地开发环境</li><li>测试环境</li><li>生产环境</li></ul><p>除了本地开发环境和测试环境外，其他环境可统称为服务器环境，<strong>服务器环境的 NODE_ENV 应该为 production</strong>，</p><p>框架默认支持的运行环境及映射关系（如果未指定 EGG_SERVER_ENV 会根据 NODE_ENV 来匹配）</p><p><strong><code>当 NODE_ENV</code> 为 production 而 <code>EGG_SERVER_ENV</code> 未指定时，框架会将 <code>EGG_SERVER_ENV</code> 设置成 prod。</strong></p><table><thead><tr><th>NODE_ENV</th><th>EGG_SERVER_ENV</th><th>说明</th></tr></thead></table><ul><li>|local | 本地开发环境 test | unittest | 单元测试 production | prod | 生产环境</li></ul><p><strong>npm 也会使用这个变量，在应用部署的时候一般不会安装 devDependencies，所以这个值也应该为 production。</strong></p><h3 id="自定义启动环境" tabindex="-1"><a class="header-anchor" href="#自定义启动环境" aria-hidden="true">#</a> 自定义启动环境</h3><p>常规开发流程可能不仅仅只有以上几种环境，<code>Egg</code> 支持自定义环境来适应自己的开发流程。</p><p>例如，要为开发流程增加集成测试环境 SIT。将 EGG_SERVER_ENV 设置成 sit（并建议设置 NODE_ENV = production），启动时会加载 <code>config/config.sit.js</code>，运行环境变量 <code>app.config.env</code> 会被设置成 sit。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 自定义sit环境</span>
config/config.sit.js

</code></pre></div><ul><li>在 Koa 中我们通过 app.env 来进行环境判断，app.env 默认的值是 <code>p<wbr>rocess.env.NODE_ENV</code>。</li><li>在 <code>Egg</code>（和基于 <code>Egg</code> 的框架）中，配置统一都放置在 app.config 对象上，需要通过 <code>app.config.env</code> 来区分环境，<code>app.env</code> 不再使用（实际使用会有废弃报告）</li></ul><p>注意：process对象node.js中提供的内置对象，可以从中获取很多系统信息，用途极大！</p><h2 id="config配置" tabindex="-1"><a class="header-anchor" href="#config配置" aria-hidden="true">#</a> Config配置</h2><p>框架提供了强大且可扩展的配置功能，可以自动合并应用、插件、框架的配置，按顺序覆盖，且可以根据环境维护不同的配置。合并后的配置可直接从 <code>app.config</code> 获取。</p><p>配置的管理的常见方案：</p><ul><li>使用平台管理配置，应用构建时将当前环境的配置放入包内，启动时指定该配置。但应用就无法一次构建多次部署，而且本地开发环境想使用配置会变的很麻烦。</li><li>使用平台管理配置，在启动时将当前环境的配置通过环境变量传入，这是比较优雅的方式，但框架对运维的要求会比较高，需要部署平台支持，同时开发环境也有相同痛点。</li><li>使用代码管理配置，在代码中添加多个环境的配置，在启动时传入当前环境的参数即可。但无法全局配置，必须修改代码。</li></ul><p>**最后一种配置方案，配置即代码，配置的变更也应该经过 review 后才能发布。应用包本身是可以部署在多个环境的，只需要指定运行环境即可。 **</p><h3 id="多环境配置" tabindex="-1"><a class="header-anchor" href="#多环境配置" aria-hidden="true">#</a> 多环境配置</h3><p>框架支持根据环境来加载配置，定义多个环境的配置文件</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>config
<span class="token operator">|</span>- config.default.js <span class="token comment">## 开发环境</span>
<span class="token operator">|</span>- config.prod.js   <span class="token comment">## 生产环境</span>
<span class="token operator">|</span>- config.unittest.js <span class="token comment">## 测试环境</span>
<span class="token operator">|</span>- config.local.js  <span class="token comment">## 本地环境</span>
</code></pre></div><p><strong><code>config.default.js</code> 为默认的配置文件，所有环境都会加载这个配置文件</strong>，一般也会作为开发环境的默认配置文件。</p><p>当指定 env 时会同时加载默认配置和对应的配置(具名配置)文件，<strong>具名配置和默认配置将合并(使用extend2深拷贝)成最终配置</strong> ，具名配置项会覆盖默认配置文件的同名配置</p><p>例如：</p><ul><li><p>prod 环境会加载 <code>config.prod.js</code> 和 <code>config.default.js</code> 文件，<code>config.prod.js</code>会覆盖 <code>config.default.js</code> 的同名配置。</p></li><li><p>test 环境会加载 <code>config.test.js</code> 和 <code>config.default.js</code> 文件，<code>config.test.js</code>会覆盖 <code>config.default.js</code> 的同名配置。</p></li></ul><h3 id="配置的写法" tabindex="-1"><a class="header-anchor" href="#配置的写法" aria-hidden="true">#</a> 配置的写法</h3><p>配置文件返回的是一个 object 对象，可以覆盖框架的一些配置，应用也可以将自己业务的配置放到这里方便管理。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 配置 logger 文件的目录，logger 默认配置由框架提供</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">logger</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;/home/admin/logs/demoapp&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>了解node的exports用法的应该直到，还可以这样写：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 配置文件也可以简化的写成 exports.key = value 形式</span>
exports<span class="token punctuation">.</span>keys <span class="token operator">=</span> <span class="token string">&#39;my-cookie-secret-key&#39;</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>logger <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>配置文件也可以返回一个 function，可以接受 appInfo 参数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">appInfo</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logger</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将 logger 目录放到代码目录下</span>
      <span class="token literal-property property">dir</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>appInfo<span class="token punctuation">.</span>baseDir<span class="token punctuation">,</span> <span class="token string">&#39;logs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 注意，内置的appInfo对象的属性有：</span>

<span class="token comment">// - pkg   package.json信息</span>
<span class="token comment">// - name  应用名，和pkg.name的值一致</span>
<span class="token comment">// - baseDir 项目代码的目录</span>
<span class="token comment">// - HOME  用户目录，如 root 账户为 /home/root</span>
<span class="token comment">// - root  应用根目录，只有在 local 和 unittest 环境下为 baseDir，其他都为 HOME</span>
</code></pre></div><p>**<code>appInfo.root</code> 是一个优雅的适配，比如在服务器环境我们会使用 <code>/home/root/logs</code> 作为日志目录，而本地开发时又不想污染用户目录，这样的适配就很好解决这个问题。 **</p><h3 id="加载顺序" tabindex="-1"><a class="header-anchor" href="#加载顺序" aria-hidden="true">#</a> 加载顺序</h3><p>在应用、插件、框架都可以定义这些配置，而且目录结构都是一致的，但存在优先级（<strong>应用 &gt; 框架 &gt; 插件</strong>），相对于此运行环境的优先级会更高。</p><p>比如在 prod 环境加载一个配置的加载顺序如下，后加载的会覆盖前面的同名配置。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>-<span class="token operator">&gt;</span> 插件 config.default.js
-<span class="token operator">&gt;</span> 框架 config.default.js
-<span class="token operator">&gt;</span> 应用 config.default.js
-<span class="token operator">&gt;</span> 插件 config.prod.js
-<span class="token operator">&gt;</span> 框架 config.prod.js
-<span class="token operator">&gt;</span> 应用 config.prod.js
</code></pre></div><p><strong>插件之间也会有加载顺序，但大致顺序类似，</strong></p><h4 id="合并规则" tabindex="-1"><a class="header-anchor" href="#合并规则" aria-hidden="true">#</a> 合并规则</h4><p>框架直接覆盖数组而不是进行合并,例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">extend</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; { arr: [ 3 ] }</span>
</code></pre></div><p>配置的合并使用 extend2 模块进行深度拷贝，处理数组时会存在差异。</p><h4 id="配置结果" tabindex="-1"><a class="header-anchor" href="#配置结果" aria-hidden="true">#</a> 配置结果</h4><p>框架在启动时会把合并后的最终配置 dump 到 run/application_config.json（worker 进程）和 run/agent_config.json（agent 进程）中，可以用来分析问题。</p><p>配置文件中会隐藏一些字段，主要包括两类:</p><ul><li><p>如密码、密钥等安全字段，这里可以通过 config.dump.ignore 配置，必须是 Set 类型，查看默认配置。</p></li><li><p>如函数、Buffer 等类型，JSON.stringify 后的内容特别大</p></li></ul><p>还会生成 run/application_config_meta.json（worker 进程）和 run/agent_config_meta.json（agent 进程）文件，用来排查属性的来源，如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;logger&quot;</span>
<span class="token operator">:</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;dir&quot;</span>
  <span class="token operator">:</span>
    <span class="token string">&quot;/path/to/config/config.default.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,61),t=[e];function c(r,l){return a(),s("div",null,t)}const u=n(o,[["render",c],["__file","setting-running.html.vue"]]);export{u as default};
