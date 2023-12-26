import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c,e as d}from"./app-be253e4c.js";const n={},i=d(`<h1 id="简单介绍" tabindex="-1"><a class="header-anchor" href="#简单介绍" aria-hidden="true">#</a> 简单介绍</h1><p><code>Egg.js</code>缩写为 <code>Egg</code>，是为企业级框架和应用而生，我们希望由 <code>Egg.js</code> 孕育出更多上层框架，帮助开发团队和开发人员降低开发和维护成本。</p><h2 id="设计原则" tabindex="-1"><a class="header-anchor" href="#设计原则" aria-hidden="true">#</a> 设计原则</h2><p><code>Egg</code> 的插件机制有很高的可扩展性，一个插件只做一件事（比如 Nunjucks 模板封装成了 egg-view-nunjucks、MySQL 数据库封装成了 egg-mysql）。<code>Egg</code> 通过框架聚合这些插件，并根据自己的业务场景定制配置，这样应用的开发成本就变得很低。</p><p><code>Egg</code> 奉行『约定优于配置』，按照一套统一的约定进行应用开发，团队内部采用这种方式可以减少开发人员的学习成本，开发人员不再是『钉子』，可以流动起来。没有约定的团队，沟通成本是非常高的，比如有人会按目录分栈而其他人按目录分功能，开发者认知不一致很容易犯错。但约定不等于扩展性差，相反 <code>Egg</code> 有很高的扩展性，可以按照团队的约定定制框架。使用 Loader 可以让框架根据不同环境定义默认配置，还可以覆盖 <code>Egg</code> 的默认约定。</p><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><ul><li>提供基于 <code>Egg</code> 定制上层框架的能力</li><li>高度可扩展的插件机制</li><li>内置多进程管理</li><li>基于 <code>Koa</code> 开发，性能优异</li><li>框架稳定，测试覆盖率高</li><li>渐进式开发</li></ul><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>利用官方提供的指令<code>npm init egg --type=simple</code>可以得到egg项目模板，而实际的项目会比模板复杂一些、层次分明一点</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>simple
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>egg-project
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js
│   ├── controller
│   |   └── home.js
│   ├── service (可选)
│   |   └── user.js
│   ├── middleware (可选)
│   |   └── response_time.js
│   ├── schedule (可选)
│   |   └── my_task.js
│   ├── public (可选)
│   |   └── reset.css
│   ├── view (可选)
│   |   └── home.tpl
│   └── extend (可选)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config
|   ├── plugin.js
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js

</code></pre></div><p>相关说明：</p><ul><li><code>app/router.js</code> 用于配置 URL 路由规则，具体参见 <code>Router</code>。</li><li><code>app/controller/**</code> 用于解析用户的输入，处理后返回相应的结果，具体参见 <code>Controller</code>。</li><li><code>app/service/**</code> 用于编写业务逻辑层，可选，建议使用，具体参见 <code>Service</code>。</li><li><code>app/middleware/**</code> 用于编写中间件，可选，具体参见 <code>Middleware</code>。</li><li><code>app/public/**</code> 用于放置静态资源，可选，具体参见内置插件 <code>egg-static</code>。</li><li><code>app/extend/**</code> 用于框架的扩展，可选，具体参见框架扩展。</li><li><code>config/config.{env}.js</code> 用于编写配置文件，具体参见配置。</li><li><code>config/plugin.js</code> 用于配置需要加载的插件，具体参见插件。</li><li><code>test/**</code> 用于单元测试，具体参见单元测试。</li><li><code>app.js 和 agent.js</code> 用于自定义启动时的初始化工作，可选，具体参见启动自定义。关于<code>agent.js</code>的作用参见<code>Agent</code>机制。</li></ul><p>由内置插件约定的目录：</p><ul><li><code>app/public/**</code> 用于放置静态资源，可选，具体参见内置插件 <code>egg-static</code>。</li><li><code>app/schedule/**</code> 用于定时任务，可选，具体参见定时任务。</li></ul><p>若需自定义自己的目录规范，参见 Loader API</p><ul><li><code>app/view/**</code> 用于放置模板文件，可选，由模板插件约定，具体参见模板渲染。</li><li><code>app/model/**</code> 用于放置领域模型，可选，由领域类相关插件约定，例如： egg-sequelize或者egg-sequelize-plus（是在egg-sequelize基础上开发的模块，目前我仍在维护）</li></ul>`,17),a=[i];function s(l,t){return o(),c("div",null,a)}const g=e(n,[["render",s],["__file","introduce.html.vue"]]);export{g as default};
