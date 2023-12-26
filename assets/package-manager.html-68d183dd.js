import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as p,c as t,a,b as o,d as c,e as l}from"./app-be253e4c.js";const r={},i=l(`<h1 id="依赖管理" tabindex="-1"><a class="header-anchor" href="#依赖管理" aria-hidden="true">#</a> 依赖管理</h1><h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm" aria-hidden="true">#</a> PNPM</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><h4 id="使用-npm安装-pnpm" tabindex="-1"><a class="header-anchor" href="#使用-npm安装-pnpm" aria-hidden="true">#</a> 使用 npm安装 pnpm</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## -g 全局安装pnpm</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pnpm@next-7
</code></pre></div><h4 id="使用-homebrew-安装-pnpm" tabindex="-1"><a class="header-anchor" href="#使用-homebrew-安装-pnpm" aria-hidden="true">#</a> 使用 Homebrew 安装 pnpm</h4><p>如果你已经安装了 Homebrew 软件包管理器，则可以使用如下命令赖安装 pnpm：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">pnpm</span>
</code></pre></div><h4 id="使用-scoop-安装-pnpm" tabindex="-1"><a class="header-anchor" href="#使用-scoop-安装-pnpm" aria-hidden="true">#</a> 使用 Scoop 安装 pnpm</h4><p>如果你已经安装了 Scoop，就可以通过一下命令安装 pnpm：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>scoop <span class="token function">install</span> nodejs-lts <span class="token function">pnpm</span>
</code></pre></div><h3 id="升级版本" tabindex="-1"><a class="header-anchor" href="#升级版本" aria-hidden="true">#</a> 升级版本</h3><p>安装完 pnpm 之后，可以让 pnpm 自己来更新自己，升级到最新版本</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre></div><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><p>相比npm的模块包管理方式，pnpm在使用指令上会有一些改变</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装所有模块依赖</span>
<span class="token function">pnpm</span> <span class="token function">install</span>  <span class="token comment">## 类比： npm install</span>

<span class="token comment">## 安装指定模块 eg:pnpm add express</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token operator">&lt;</span>pkg-name<span class="token operator">&gt;</span> <span class="token comment">## 类比：npm install &lt;pkg-name&gt; 或者 npm i &lt;pkg-name&gt;</span>

<span class="token comment">## 运行script脚本指令 eg: pnpm dev</span>
<span class="token function">pnpm</span> <span class="token operator">&lt;</span>cmd<span class="token operator">&gt;</span>  <span class="token comment">## 类比：npm run &lt;cmd&gt; </span>


</code></pre></div><h3 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户" aria-hidden="true">#</a> 添加用户</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  adduser
</code></pre></div><h3 id="添加镜像" tabindex="-1"><a class="header-anchor" href="#添加镜像" aria-hidden="true">#</a> 添加镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 淘宝镜像cnpm</span>
<span class="token function">npm</span>  config  <span class="token builtin class-name">set</span>  registry  https://registry.npm.taobao.org
</code></pre></div><h3 id="恢复镜像" tabindex="-1"><a class="header-anchor" href="#恢复镜像" aria-hidden="true">#</a> 恢复镜像</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  config  delete  registry

<span class="token comment">## 手动删除</span>
<span class="token function">npm</span>  config  edit
</code></pre></div><h3 id="安装模块" tabindex="-1"><a class="header-anchor" href="#安装模块" aria-hidden="true">#</a> 安装模块</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 基础命令：</span>
<span class="token function">npm</span>  <span class="token parameter variable">-g</span>  <span class="token function">install</span>  包名  <span class="token comment">#  全局安装</span>
<span class="token function">npm</span>  <span class="token function">install</span>  <span class="token comment">#  根据package.json文件安装</span>
<span class="token function">npm</span>  <span class="token function">install</span>  包名  <span class="token comment">#  本地安装，在npm运行目录下安装</span>
<span class="token function">npm</span>  <span class="token function">install</span>  包名@1.x  <span class="token comment">#  安装指定版本</span>

</code></pre></div><p>package.json文件</p><div class="language-json" data-ext="json"><pre class="language-json"><code>
<span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;orderlee&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;argv&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.2&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="卸载模块" tabindex="-1"><a class="header-anchor" href="#卸载模块" aria-hidden="true">#</a> 卸载模块</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  uninstall  包名
</code></pre></div><h3 id="更新模块" tabindex="-1"><a class="header-anchor" href="#更新模块" aria-hidden="true">#</a> 更新模块</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  <span class="token parameter variable">-g</span>  update  包名  <span class="token comment">#  全局更新</span>
<span class="token function">npm</span>  update  包名  <span class="token comment">#  本地更新</span>
</code></pre></div><h3 id="查看已安装的模块" tabindex="-1"><a class="header-anchor" href="#查看已安装的模块" aria-hidden="true">#</a> 查看已安装的模块</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  <span class="token function">ls</span>
</code></pre></div><h3 id="生成符号链接" tabindex="-1"><a class="header-anchor" href="#生成符号链接" aria-hidden="true">#</a> 生成符号链接</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、在本地安装好的模块中，运行（添加本地模块到全局链接）：
<span class="token function">npm</span>  <span class="token function">link</span>
<span class="token number">2</span>、在要使用的本地目录中，运行（从全局中获取链接）：
<span class="token function">npm</span>  <span class="token function">link</span>  模块名

</code></pre></div><h3 id="执行脚本" tabindex="-1"><a class="header-anchor" href="#执行脚本" aria-hidden="true">#</a> 执行脚本</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  run  在package.json的scripts中定义的脚本命令
</code></pre></div><h3 id="用户登录" tabindex="-1"><a class="header-anchor" href="#用户登录" aria-hidden="true">#</a> 用户登录</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  login
</code></pre></div><h3 id="发布包" tabindex="-1"><a class="header-anchor" href="#发布包" aria-hidden="true">#</a> 发布包</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>
## 初始化
npm  init
## 推送
npm  publish
## 推送私有
npm publish –-access=public

</code></pre></div><h3 id="撤销发布" tabindex="-1"><a class="header-anchor" href="#撤销发布" aria-hidden="true">#</a> 撤销发布</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span>  <span class="token parameter variable">-f</span>  unpublish  dollarphpajax@*
</code></pre></div><h3 id="access访问" tabindex="-1"><a class="header-anchor" href="#access访问" aria-hidden="true">#</a> access访问</h3><p>在日常使用中,<code>-access=public</code>是需要单独总结的，非常实用!</p><h4 id="基本指令" tabindex="-1"><a class="header-anchor" href="#基本指令" aria-hidden="true">#</a> 基本指令</h4><p>在发布的包上设置访问级别</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">npm</span> access public <span class="token punctuation">[</span><span class="token operator">&lt;</span>package<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">npm</span> access restricted <span class="token punctuation">[</span><span class="token operator">&lt;</span>package<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token function">npm</span> access grant <span class="token operator">&lt;</span>read-only<span class="token operator">|</span>read-write<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>scope:team<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>package<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">npm</span> access revoke <span class="token operator">&lt;</span>scope:team<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>package<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token function">npm</span> access ls-packages <span class="token punctuation">[</span><span class="token operator">&lt;</span>user<span class="token operator">&gt;|</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;|</span><span class="token operator">&lt;</span>scope:team<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token function">npm</span> access ls-collaborators <span class="token punctuation">[</span><span class="token operator">&lt;</span>package<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>user<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token function">npm</span> access edit <span class="token punctuation">[</span><span class="token operator">&lt;</span>package<span class="token operator">&gt;</span><span class="token punctuation">]</span>

</code></pre></div><h4 id="指令描述" tabindex="-1"><a class="header-anchor" href="#指令描述" aria-hidden="true">#</a> 指令描述</h4><p>用于设置私有包的访问控制，对于所有的子命令，<strong>如果没有包名传递给子命令，NPM的access命令将在当前的工作目录包中执行。</strong></p><ul><li><code>public/restricted</code>：设置一个包是公开访问的还是受限的</li><li><code>grant/revoke</code>：添加或删除 ，用户和团队具有只读或读写访问包的权利</li><li><code>ls-packages</code>:显示用户或组能够访问的所有包，以及访问级别，除了只读公共包（它不会打印整个注册列表上）</li><li><code>ls-collaborators</code>:显示所有访问权限是私有的包，这将显示你至少有只读权限的包，如果这个参数传入，这个列表过滤只属于该用户、组的包</li><li><code>edit</code>:使用$ EDITOR为一个包设置私有的访问权限。</li></ul><h4 id="详情" tabindex="-1"><a class="header-anchor" href="#详情" aria-hidden="true">#</a> 详情</h4><p><strong>NPM的访问总是直接作用于当前注册表，命令行使用–registry=&lt;注册地址&gt;的配置。</strong></p><p>无作用域包始终是公开的。</p><p><strong>包的作用域默认为受限制的</strong>，但你也可以使用<code>npm publish –-access=public</code>，或在最初发布之后，使用<code>npm access public</code>将他们的访问权限为公开的。</p><p>必须有权限设置包的访问：</p><ul><li>无作用域或作用域包的所有者。</li><li>团队中的一员,拥有一个作用域。</li><li>已经被赋予包的读写权限，无论是作为一个团队的一员，或者直接作为所有者。</li></ul><p><strong>如果帐户没有支付，然后尝试发布作用域内的程序包将会失败</strong>，并带有HTTP402状态码（逻辑允许），除非你使用<code>–access=public</code>。</p><p><strong>团队和团队成员的管理使用 npm team 命令。</strong></p><h3 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 登录</span>
<span class="token function">npm</span> login

<span class="token comment">## 查看当前登录用户</span>
<span class="token function">npm</span> <span class="token function">whoami</span>

<span class="token comment">## 全局安装 最新版本</span>
<span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span>

<span class="token comment">## 安装模块</span>
<span class="token function">npm</span> <span class="token function">install</span> xxx
<span class="token function">npm</span> <span class="token function">install</span> xxx <span class="token parameter variable">-D</span>
<span class="token function">npm</span> <span class="token function">install</span> xxx <span class="token parameter variable">-S</span> 
<span class="token function">npm</span> <span class="token function">install</span> xxx <span class="token parameter variable">-g</span> 
<span class="token function">npm</span> <span class="token function">install</span> xxx@3.0.0
<span class="token function">npm</span> <span class="token function">install</span> xxx <span class="token parameter variable">-save</span>


<span class="token comment">## 更新模块</span>
<span class="token function">npm</span> update xxx

<span class="token comment">## 推送私有包，可以在package.json中设置private</span>
<span class="token function">npm</span> publish

<span class="token comment">## 发布npm包</span>
<span class="token function">npm</span> publish <span class="token parameter variable">--access</span> public

<span class="token comment">## 标签</span>
<span class="token function">npm</span> publish <span class="token parameter variable">--tag</span> xx
</code></pre></div><h4 id="pnpm-add-pkg" tabindex="-1"><a class="header-anchor" href="#pnpm-add-pkg" aria-hidden="true">#</a> pnpm add pkg</h4><p>安装软件包以及其依赖的任何软件包。 默认情况下，任何新添加的软件包都将作为<strong>生产依赖项</strong>。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 保存到 dependencies 配置项下 </span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> 

<span class="token comment">## 保存到 devDependencies 配置项下</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> 

<span class="token comment">## 保存到 optionalDependencies 配置项下</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-O</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> 

<span class="token comment">##安装软件包到全局环境中</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-g</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> 

<span class="token comment">##安装标记为 next 的版本</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>@next 

<span class="token comment">## 安装指定版本 3.0.0</span>
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>@3.0.0 

</code></pre></div><p>对应参数和别名：</p><ul><li><p><code>--save-prod, -P</code>: 安装指定的软件包并添加到 dependencies 配置项中。</p></li><li><p><code>--save-dev, -D</code>:安装指定的软件包并添加到 devDependencies 配置项中。</p></li><li><p><code>--save-optional, -O</code>:安装指定的软件包并添加到 optionalDependencies 配置项中。</p></li><li><p><code>--global, -g</code>:将软件包安装都全局环境中。</p></li></ul><h3 id="package-json字段解析" tabindex="-1"><a class="header-anchor" href="#package-json字段解析" aria-hidden="true">#</a> package.json字段解析</h3><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,68),d={href:"https://blog.csdn.net/tangxiujiang/article/details/119977698",target:"_blank",rel:"noopener noreferrer"};function h(u,k){const n=e("ExternalLinkIcon");return p(),t("div",null,[i,a("ul",null,[a("li",null,[a("a",d,[o("https://blog.csdn.net/tangxiujiang/article/details/119977698"),c(n)])])])])}const f=s(r,[["render",h],["__file","package-manager.html.vue"]]);export{f as default};
