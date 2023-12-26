import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,d as s,a as n,b as a,e as r}from"./app-be253e4c.js";const i={},u=n("h1",{id:"工程化规范",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#工程化规范","aria-hidden":"true"},"#"),a(" 工程化规范")],-1),k=r(`<p>前面提到的Eslint、Prettier是在工程化建设中使用非常高频的，主要是用来处理一些代码层面的约束，确保在项目中编码风格一致。</p><p>但当项目体量、人员协同上去后，单纯的约束代码风格还是不够的，需要指定标准的规范来对项目进行工程化管理，例如：对提交、更改的内容做风格约束。</p><p>这里，我整理了一些自己在项目中常用的一些规范，分开讨论</p><h2 id="代码校验" tabindex="-1"><a class="header-anchor" href="#代码校验" aria-hidden="true">#</a> 代码校验</h2><p>利用Eslint来校验js、ts代码，如果是前端还可以配置vue对应规则</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 校验js、ts、vue代码</span>
eslint  <span class="token parameter variable">--ext</span> .js,.ts,.vue --ignore-path .gitignore <span class="token builtin class-name">.</span>

<span class="token comment">## 添加--fix参数，可以做到自动修正</span>
eslint <span class="token parameter variable">--fix</span> <span class="token parameter variable">--ext</span> .js,.ts,.vue --ignore-path .gitignore <span class="token builtin class-name">.</span>
</code></pre></div><h2 id="文档校验" tabindex="-1"><a class="header-anchor" href="#文档校验" aria-hidden="true">#</a> 文档校验</h2><p>除了写代码外，项目中会有一些markdown文档，特别是对于文档类型项目markdown文档就更多了，但风格却很难保证，因此可以利用<code>markdownlint-cli</code>模块进行校验、修正</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 开发环境安装依赖</span>
<span class="token function">pnpm</span> <span class="token function">install</span> markdownlint-cli  <span class="token parameter variable">-D</span>
</code></pre></div><h3 id="配置规则" tabindex="-1"><a class="header-anchor" href="#配置规则" aria-hidden="true">#</a> 配置规则</h3><p>在项目根目录新建<code>.markdownlint.js</code>文件，配置markdown的一些规则，例如：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * markdownlint-cli格式化markdown文档
 * 规则参考：https://github.com/updownpress/markdown-lint/tree/master/rules
 */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD001&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD003&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atx&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD004&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dash&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD013&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD024&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;allow_different_nesting&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD025&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;front_matter_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD033&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;allowed_elements&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;br&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;template&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;style&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ArtPlayer&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;AudioPlayer&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;AutoCatalog&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Badge&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;BiliBili&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Catalog&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;CodePen&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;DemoProject&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;FontIcon&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;HighlightPanel&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ProjectLink&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;PDF&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Replit&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Share&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;SiteInfo&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;StackBlitz&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;XiGua&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;VidStack&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;VideoPlayer&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;YouTube&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;AppearanceSwitch&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;HopeIcon&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;FlowChartPlayground&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;IconDisplay&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;KatexPlayground&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;PrintButton&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ThemeColorPicker&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ToggleFullScreenButton&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ToggleRTLButton&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;img&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;table&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;strong&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sub&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD035&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;---&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD036&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD040&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD045&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD041&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD042&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD046&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;MD049&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="配置忽略" tabindex="-1"><a class="header-anchor" href="#配置忽略" aria-hidden="true">#</a> 配置忽略</h3><p>由于<code>**/*.md</code>是匹配项目中所有markdown文档，很明显存在有些目录时不需要校验的，例如：<code>node_modules</code>目录，因此非常有必要配置<code>markdownlint-cli</code> 的忽略文件<code>.markdownlintignore</code>，避免校验不必要的文档。</p><p>在项目根目录新建<code>.markdownlintignore</code>文件，配置markdown的忽略规则，例如：</p><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>**/node_modules/**
CHANGELOG.md
LICENSE
.idea
.husky
.github
</code></pre></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 校验markdown文档</span>
markdownlint <span class="token string">&#39;**/*.md&#39;</span>  <span class="token parameter variable">-c</span> .markdownlint.js <span class="token parameter variable">-p</span> .markdownlintignore 

<span class="token comment">## 添加--fix参数，可以做到自动修正</span>
markdownlint <span class="token string">&#39;**/*.md&#39;</span>  <span class="token parameter variable">-c</span> .markdownlint.js <span class="token parameter variable">-p</span> .markdownlintignore <span class="token parameter variable">--fix</span>
</code></pre></div><h2 id="提交校验" tabindex="-1"><a class="header-anchor" href="#提交校验" aria-hidden="true">#</a> 提交校验</h2><p>当我们对代码、文档都做了一些校验，统一格式后一般是需要使用Git进行变更提交的。 对于上面的一些lint操作，不可能每次都手动执行，<strong>因此就非常需要在提交之前先对仓库中的代码、文档做一些校验，并且这些操作是自动执行的</strong></p><p>这个时候就需要使用到Git的hooks钩子函数，在<code>pre-commit</code>之前执行一些指令，打开<code>git/hooks</code>目录里面的内容，可以发现以下文件</p><ul><li>applypatch-msg.sample</li><li>pre-push.sample</li><li>commit-msg.sample</li><li>pre-rebase.sample</li><li>post-update.sample</li><li>prepare-commit-msg.sample</li><li>pre-applypatch.sample</li><li>update.sample</li><li>pre-commit.sample</li></ul><p>这些钩子都是样例，去掉<code>.sample</code>在提交时就能触发对应的钩子函数。</p><p>这里推荐<code>husky</code>模块，它可以很好地校验提交信息、运行命令，很好的确保commit、push规范</p><h3 id="安装husky" tabindex="-1"><a class="header-anchor" href="#安装husky" aria-hidden="true">#</a> 安装husky</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 生产环境安装</span>
<span class="token function">pnpm</span> <span class="token function">install</span> husky <span class="token parameter variable">-D</span>
</code></pre></div><h3 id="配置hook" tabindex="-1"><a class="header-anchor" href="#配置hook" aria-hidden="true">#</a> 配置hook</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 在git hook文件中写入npm test命令</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npm test&quot;</span>
</code></pre></div><p>这个时候，打开<code>.husky/pre-commit</code>文件，可以发现<code>npm test</code>命令，当进行git commit时会自动执行<code>npm test</code>命令，校验失败则终止<code>commit</code>操作</p><h2 id="内容自动格式化" tabindex="-1"><a class="header-anchor" href="#内容自动格式化" aria-hidden="true">#</a> 内容自动格式化</h2><p>可以发现，上面的<code>husky</code>模块只是校验提交信息、运行一些既定的命令，例如：执行Eslint校验。但往往随着工程中项目较多，项目级别的Lint会消耗很多时间，且对于仓库来说：</p><blockquote><p>提交到仓库中的代码是需要遵守规范的，也就是lint完成之后的</p></blockquote><p>那有没有工具，可以对Git的提交内容做校验，换句话说：“只校验更改的”。这个时候就非常推荐<code>lint-staged</code>,它可以实现对提交的变更做一些操作，可以解决husky执行hook时全局操作耗时问题</p><h3 id="安装lint-staged" tabindex="-1"><a class="header-anchor" href="#安装lint-staged" aria-hidden="true">#</a> 安装lint-staged</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 开发环境安装</span>
<span class="token function">pnpm</span> <span class="token function">install</span> lint-staged <span class="token parameter variable">-D</span>
</code></pre></div><h3 id="配置规则-1" tabindex="-1"><a class="header-anchor" href="#配置规则-1" aria-hidden="true">#</a> 配置规则</h3><p>在项目根目录中新建<code>.lintstagedrc.js</code>文件</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 对add的内容格式化后再commit
 * 参考： https://www.npmjs.com/package/lint-staged#configuration
 */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;*.{js,ts,md}&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token string">&quot;./scripts/lint --fix&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;git add&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>以上规则是：</p><ul><li>对js、ts、md文件进行ci校验</li><li>将格式化后端内容自动提交,执行<code>git add</code>操作，避免多次commit</li></ul><p>当然，<code>lint-staged</code>规则的配置还支持很多方式，例如：</p><ul><li><code>.lintstagedrc.json</code></li><li><code>.lintstagedrc.yaml</code></li><li><code>.lintstagedrc.yml</code></li></ul><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><p>以上只是简单的介绍 <code>git hooks</code> 、<code>hushy</code>、<code>lint-staged</code>，在本仓库中已投入应用，将讲这些操作按照流程拼接在一起，其实就有了工程化的一些痕迹</p><p>这里操作都是可以划分为CI，即：持续集成，Git在commit变更时触发hook，会做一下操作：</p><ul><li>校验commit提交信息</li><li>校验提交的代码、文档，对于不符合规范的自动修正</li><li>修正失败时，commit操作就终止</li></ul><p>可以总结到： <strong>husky是管理Git hooks，lint-staged是对Git提交做检验，验证的模块</strong></p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,49),d={href:"https://www.npmjs.com/package/markdownlint-cli",target:"_blank",rel:"noopener noreferrer"},g={href:"https://typicode.github.io/husky/getting-started.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/lint-staged",target:"_blank",rel:"noopener noreferrer"};function m(q,y){const p=o("Mermaid"),t=o("ExternalLinkIcon");return c(),l("div",null,[u,s(p,{id:"mermaid-3",code:"eJzLzcxLyU0s4FJQKMrPL9F4un3p8xXdT3umvVje8qKnWRMoDgIaT3Yvfr6g8dmChS9X9cAFn01rf7ZwMaogWOLpus4Xi1tRhF629j7fuw5o6tOOmVgknu7f+3zqUhSJJ3v3P5+yAmFZ/4Qnu5bgtCyjtDi7EovBGfn52XAznra1Pl2380X7qqddK54t2PN0Tz/Qp1gMy8nMK9EtLklMT00h6AmNZ3Manuzd/HTdvBfbt2pyAQBq4oqb"}),k,n("ul",null,[n("li",null,[n("a",d,[a("https://www.npmjs.com/package/markdownlint-cli"),s(t)])]),n("li",null,[n("a",g,[a("https://typicode.github.io/husky/getting-started.html"),s(t)])]),n("li",null,[n("a",h,[a("https://www.npmjs.com/package/lint-staged"),s(t)])])])])}const x=e(i,[["render",m],["__file","engineering-lint.html.vue"]]);export{x as default};
