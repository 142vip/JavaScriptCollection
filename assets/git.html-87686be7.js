import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as i,c as r,a,b as n,d as e,e as t}from"./app-be253e4c.js";const p="/JavaScriptCollection/assets/git-fcca101d.png",l={},d=t('<h1 id="git的使用" tabindex="-1"><a class="header-anchor" href="#git的使用" aria-hidden="true">#</a> Git的使用</h1><p><strong>到目前为止，当今世界上使用最广泛的现代版本控制系统是 Git</strong>。Git 是一个成熟的、积极维护的开源项目，最初由 Linux 操作系统内核的著名创建者 Linus Torvalds 于 2005 年开发。 有海量软件项目依赖 Git 进行版本控制，包括商业项目和开源项目。使用过 Git 的开发人员在可用的软件开发人才库中占有很好的比例，它在各种操作系统和 IDE（集成开发环境）上都能很好地运行。</p><p>Git 采用分布式架构，是 DVCS（分布式版本控制系统）的示例。在 Git 中，每个开发人员的代码工作副本也是一个可以包含所有变更完整历史记录的存储库， 而不是像曾经流行的 CVS 或 Subversion（也称为 SVN）等版本控制系统那样，只有一个地方存放软件的完整版本历史记录。</p><p>除了分布式外，Git 的设计还考虑了<code>性能</code>、<code>安全性</code>和<code>灵活性</code>。</p><h2 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h2><p>版本控制，也称为源代码控制，是一种跟踪和管理软件代码变更的实践。版本控制系统是软件工具，可帮助软件团队管理源代码随时间推移而发生的变更。 随着开发环境的加速，版本控制系统可以帮助软件团队更快、更智能地工作。它们对于 DevOps 团队特别有用，因为它们可以帮助该团队缩短开发时间并提高部署成功率。</p><p><strong>版本控制软件在特殊类型的数据库中跟踪对代码的每一次修改。如果犯了错误，开发人员可以回退并比较代码的早期版本，以帮助修复错误，同时最大限度地减少对所有团队成员的干扰。</strong></p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Git 区域理解:</p><ul><li><p><code>远程仓库区</code>：也就是我们代码最终提交的归宿，没啥好说的。</p></li><li><p><code>远端分支本地副本</code>：这个其实主要储存了远程仓库各分支数据在本地的一个副本， 你可以打开你 Git 项目下的 <code>.git</code> 文件，里面有个 <code>refs/remotes</code>，这里就主要存的就是远程仓库的分支信息，一般你执行 push 或者 pull、fetch 都会往这里进行更新。</p></li><li><p><code>本地分支</code>：这里就是我们经常会打交道的区域，你在执行 commit 之后，本质上就是提交到了这个区域，你可以查看你的 <code>.git</code> 目录下的 <code>refs/heads</code> 目录，里面存的就是我们本地的分支代码信息。</p></li><li><p><code>暂存区</code>：这个区域就是我们每次执行<code>git add</code>之后会存到的区域，用来与本地仓库之间做一个缓存，同时也是 Git 底层设计上来说也算是比较重要的一个区域，它能帮助 Git 在做diff的时候提高查找性能。</p></li><li><p><code>工作区</code>：这个一般就是我们写代码的地方</p></li></ul><h2 id="安装git" tabindex="-1"><a class="header-anchor" href="#安装git" aria-hidden="true">#</a> 安装Git</h2><h3 id="mac-os-x-系统" tabindex="-1"><a class="header-anchor" href="#mac-os-x-系统" aria-hidden="true">#</a> Mac OS X 系统</h3><h4 id="利用官方镜像" tabindex="-1"><a class="header-anchor" href="#利用官方镜像" aria-hidden="true">#</a> 利用官方镜像</h4>',13),h={href:"https://sourceforge.net/projects/git-osx-installer/files/",target:"_blank",rel:"noopener noreferrer"},g=t(`<h4 id="利用homebrew" tabindex="-1"><a class="header-anchor" href="#利用homebrew" aria-hidden="true">#</a> 利用Homebrew</h4><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">##  Homebrew安装Git</span>
brew <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment">## 查看版本，检查是否安装成功</span>
<span class="token function">git</span> <span class="token parameter variable">--version</span>
</code></pre></div><h3 id="windows系统" tabindex="-1"><a class="header-anchor" href="#windows系统" aria-hidden="true">#</a> Windows系统</h3>`,3),u={href:"https://gitforwindows.org/",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="linux系统" tabindex="-1"><a class="header-anchor" href="#linux系统" aria-hidden="true">#</a> Linux系统</h3><h4 id="debian-ubuntu-apt-get" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu-apt-get" aria-hidden="true">#</a> Debian/Ubuntu (apt-get)</h4><p>Git 软件包可通过 <code>apt</code> 获得</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装包更新</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token comment">## 安装Git</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre></div><h4 id="fedora-dnf-yum" tabindex="-1"><a class="header-anchor" href="#fedora-dnf-yum" aria-hidden="true">#</a> Fedora (dnf/yum)</h4><p>Git 软件包可以通过 <code>yum</code> 和 <code>dnf</code> 获得：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## dnf安装git</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">git</span>

<span class="token comment">## yum安装git</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3><p>将目录进行git仓库初始化</p><h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 一般我们直接 clone 下来不带参数的话，它会默认停留在 master</span>
<span class="token function">git</span> clone xxx.git

<span class="token comment">## 克隆特定分支</span>
<span class="token function">git</span> clone xxx.git <span class="token parameter variable">-b</span> branch1
</code></pre></div><h3 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 暂存变更</span>
<span class="token function">git</span> stash
<span class="token function">git</span> stash save <span class="token string">&#39;xxx&#39;</span><span class="token builtin class-name">:</span>

<span class="token comment">## 查看暂存区所有提交列表</span>
<span class="token function">git</span> stash list

<span class="token comment">## 弹出并应用最近的一次暂存区的代码提交</span>
<span class="token function">git</span> stash pop

<span class="token comment">## 删除某次暂存记录</span>
<span class="token function">git</span> stash drop stash@<span class="token punctuation">{</span>n<span class="token punctuation">}</span>

<span class="token comment">## 查看暂存内容变更</span>
<span class="token function">git</span> stash show

<span class="token comment">## 清楚所有 stash 信息</span>
<span class="token function">git</span> stash <span class="token function">clear</span>

</code></pre></div><h3 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加一个远程版本库关联</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin xxx.git

<span class="token comment">##  删除某个远程版本库关联</span>
<span class="token function">git</span> remote <span class="token function">rm</span> origin

<span class="token comment">## 表示把当前仓库的 master 分支和远端仓库的 master 分支关联起来，后面我们执行 push 或者 pull 都可以非常方便的进行操作了。</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre></div><h3 id="git-checkout" tabindex="-1"><a class="header-anchor" href="#git-checkout" aria-hidden="true">#</a> git checkout</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 创建并切换到指定新分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> branch1
</code></pre></div><h3 id="git-add" tabindex="-1"><a class="header-anchor" href="#git-add" aria-hidden="true">#</a> git add</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加某个文件到暂存区，后面可以跟多个文件，以空格区分</span>
<span class="token function">git</span> <span class="token function">add</span> xxx

<span class="token comment"># 添加当前更改的所有文件到暂存区。</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre></div><h3 id="git-commit" tabindex="-1"><a class="header-anchor" href="#git-commit" aria-hidden="true">#</a> git commit</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交暂存的更改，会新开编辑器进行编辑</span>
<span class="token function">git</span> commit 

<span class="token comment"># 提交暂存的更改，并记录下备注</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;just coding&quot;</span>

<span class="token comment"># 等同于 git add . &amp;&amp; git commit -m</span>
<span class="token function">git</span> commit <span class="token parameter variable">-am</span>

<span class="token comment"># 对最近一次的提交的信息进行修改,此操作会修改commit的hash值</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span>
</code></pre></div><h3 id="git-pull" tabindex="-1"><a class="header-anchor" href="#git-pull" aria-hidden="true">#</a> git pull</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从远程仓库拉取代码并合并到本地，可简写为 git pull 等同于 git fetch &amp;&amp; git merge </span>
<span class="token function">git</span> pull <span class="token operator">&lt;</span>远程主机名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>远程分支名<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>本地分支名<span class="token operator">&gt;</span>

<span class="token comment"># 使用rebase的模式进行合并</span>
<span class="token function">git</span> pull <span class="token parameter variable">--rebase</span> <span class="token operator">&lt;</span>远程主机名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>远程分支名<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>本地分支名<span class="token operator">&gt;</span>
</code></pre></div><h3 id="git-fetch" tabindex="-1"><a class="header-anchor" href="#git-fetch" aria-hidden="true">#</a> git fetch</h3><p>与 git pull 不同的是 git fetch 操作仅仅只会拉取远程的更改，不会自动进行 merge 操作。对你当前的代码没有影响</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取远程仓库特定分支的更新</span>
<span class="token function">git</span> fetch <span class="token operator">&lt;</span>远程主机名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>

<span class="token comment"># 获取远程仓库所有分支的更新</span>
<span class="token function">git</span> fetch <span class="token parameter variable">--all</span>
</code></pre></div><h3 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch" aria-hidden="true">#</a> git branch</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新建本地分支，但不切换</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span> 

<span class="token comment"># 查看本地分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 查看远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># 查看本地和远程分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 删除本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>branch-nane<span class="token operator">&gt;</span>

<span class="token comment"># 重新命名分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>old-branch-name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>new-branch-name<span class="token operator">&gt;</span>
</code></pre></div><h2 id="分支规范" tabindex="-1"><a class="header-anchor" href="#分支规范" aria-hidden="true">#</a> 分支规范</h2><h3 id="分支命名" tabindex="-1"><a class="header-anchor" href="#分支命名" aria-hidden="true">#</a> 分支命名</h3><ul><li>功能迭代：<code>feat/xxx</code></li><li>提测bugfix：<code>fix/xxx</code></li><li>线上问题紧急修复：<code>hotfix/xxx</code></li></ul><h3 id="上游优先" tabindex="-1"><a class="header-anchor" href="#上游优先" aria-hidden="true">#</a> 上游优先</h3><ul><li><code>master</code> 作为主分支 一般稳定版本</li><li>其他分支皆从 <code>master</code> 分支<code>衍生</code></li><li>注意与传统分支策略区别</li></ul><h3 id="多环境长线分支" tabindex="-1"><a class="header-anchor" href="#多环境长线分支" aria-hidden="true">#</a> 多环境长线分支</h3><ul><li><code>master</code>：开发稳定分支</li><li><code>test</code>：测试测试环境，一般对应测试服，可以详细分为测试---&gt;预发</li><li><code>prod</code>：线上环境，一般对应正式服【重要】</li></ul><h3 id="分支类型" tabindex="-1"><a class="header-anchor" href="#分支类型" aria-hidden="true">#</a> 分支类型</h3><ul><li>功能迭代分支：<code>feat</code></li><li>提测后bugfix分支：<code>bugfix</code></li><li>线上问题紧急修复：<code>hotfix</code></li><li>所有开发动作在短期分支上完成</li></ul><p><strong>长线分支只允许MR、禁止push、feature、bugfix 从 <code>master</code> 分支拉取，hotfix 从 <code>master</code>(线上稳定分支) 拉取。</strong> 分支目的完成后及时删除</p><h2 id="提交规范" tabindex="-1"><a class="header-anchor" href="#提交规范" aria-hidden="true">#</a> 提交规范</h2><ul><li><code>type</code>： commit 的类型</li><li><code>feat</code>： 新特性</li><li><code>fix</code>： 修改问题</li><li><code>refactor</code>： 代码重构</li><li><code>docs</code>： 文档修改</li><li><code>style</code>： 代码格式修改, 注意不是 css 修改</li><li><code>test</code>： 测试用例修改</li><li><code>chore</code>： 其他修改, 比如构建流程, 依赖管理.</li><li><code>scope</code>： commit 影响的范围, 比如: route, component, utils, build...</li><li><code>subject</code>： commit 的概述, 建议符合 50/72 formatting</li><li><code>body</code>： commit 具体修改内容, 可以分为多行, 建议符合 50/72 formatting</li><li><code>footer</code>： 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.</li></ul><p>每次提交，Commit message 都包括三个部分：Header，Body 和 Footer。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
// 空一行
&lt;body&gt;
// 空一行
&lt;footer&gt;
</code></pre></div><p>其中，<strong>Header 是必需的，Body 和 Footer 可以省略</strong></p><p>Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）</p><ul><li><strong>feat：新功能</strong></li><li><strong>fix：修补bug</strong></li><li><strong>docs：修改文档</strong></li><li><strong>style： 格式化代码结构（不影响代码运行的变动）</strong></li><li><strong>refactor：重构（即不是新增功能，也不是修改bug的代码变动，比如重命名变量 ）</strong></li><li><strong>chore：构建过程或辅助工具的变动（不会影响代码运行）</strong></li></ul><p><strong>scope</strong> scope用于定义type影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同 <strong>subject</strong> subject是 commit 目的的简短描述，不超过50个字符。</p><ul><li>以动词开头，使用第一人称现在时，比如change，而不是changed或changes</li><li>第一个字母小写</li><li>结尾不加句号（.）</li></ul><p>Body 部分是对本次 commit 的详细描述，可以分成多行，每行尽量不超过72个字符。例如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
</code></pre></div><p><strong>关闭 Issue</strong> 如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Closes #234
</code></pre></div><p>也可以一次关闭多个 issue 。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Closes #123, #245, #992
</code></pre></div><h2 id="版本格式x-y-z" tabindex="-1"><a class="header-anchor" href="#版本格式x-y-z" aria-hidden="true">#</a> 版本格式X.Y.Z</h2><ul><li><strong>修订版号 Z</strong>（x.y.Z | x &gt; 0）向下兼容的修正时才递增，线上bug修复。</li><li><strong>次版本号 Y</strong>（x.Y.z | x &gt; 0）向下兼容的新功能出现时递增，日常迭代。</li><li><strong>主版本号 X</strong>（X.y.z | X &gt; 0）不兼容的修改被加入公共 API 时递增，大版本更新。</li></ul><h2 id="配置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置用户名和邮箱" aria-hidden="true">#</a> 配置用户名和邮箱</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 项目级配置</span>
<span class="token function">git</span> config  user.name <span class="token string">&quot;142vip&quot;</span>
<span class="token function">git</span> config  user.email <span class="token string">&quot;fairy_vip@2925.com&quot;</span>

<span class="token comment">## 全局配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;142vip&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;fairy_vip@2925.com&quot;</span>

<span class="token comment">## 查看配置效果</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre></div><h2 id="修改历史提交信息" tabindex="-1"><a class="header-anchor" href="#修改历史提交信息" aria-hidden="true">#</a> 修改历史提交信息</h2><h3 id="查看提交日志" tabindex="-1"><a class="header-anchor" href="#查看提交日志" aria-hidden="true">#</a> 查看提交日志</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
</code></pre></div><h3 id="rebase到指定结点" tabindex="-1"><a class="header-anchor" href="#rebase到指定结点" aria-hidden="true">#</a> rebase到指定结点</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> xxx

<span class="token comment">## 或者按相对位置rebase</span>
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~1
</code></pre></div><h3 id="进入编辑界面-记录着commit的信息" tabindex="-1"><a class="header-anchor" href="#进入编辑界面-记录着commit的信息" aria-hidden="true">#</a> 进入编辑界面，记录着commit的信息</h3><p>pick----&gt;edit</p><p>并保存，即使用<code>wq</code>退出</p><h3 id="重新设置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#重新设置用户名和邮箱" aria-hidden="true">#</a> 重新设置用户名和邮箱</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 用户信息</span>
<span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;chufan &lt;fariy_vip@2925.com&gt;&quot;</span>
</code></pre></div><h3 id="结束rebase" tabindex="-1"><a class="header-anchor" href="#结束rebase" aria-hidden="true">#</a> 结束rebase</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">--continue</span>
</code></pre></div><h3 id="强制推送到目标分支" tabindex="-1"><a class="header-anchor" href="#强制推送到目标分支" aria-hidden="true">#</a> 强制推送到目标分支</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-f</span>
</code></pre></div><h2 id="同步tag标记" tabindex="-1"><a class="header-anchor" href="#同步tag标记" aria-hidden="true">#</a> 同步Tag标记</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 删除本地多少标记</span>
<span class="token function">git</span> tag <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token comment">#删除所有本地分支</span>

<span class="token comment">## 从远程拉取所有信息</span>
<span class="token function">git</span> fetch origin <span class="token parameter variable">--prune</span>

<span class="token comment">## 将本地所有Tag推到远程</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--tags</span>

<span class="token comment">#推送指定本地tag到远程</span>
<span class="token function">git</span> push origin 
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,75),k={href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.atlassian.com/zh/git",target:"_blank",rel:"noopener noreferrer"};function b(x,v){const s=c("ExternalLinkIcon");return i(),r("div",null,[d,a("p",null,[n("下载最新的"),a("a",h,[n("Git for Mac 安装程序"),e(s)]),n("，按照提示安装即可。")]),g,a("p",null,[n("利用官方安装包，下载最新的"),a("a",u,[n("Git for Windows 安装程序"),e(s)]),n("，按照提示安装即可。")]),m,a("ul",null,[a("li",null,[n("官网："),a("a",k,[n("https://git-scm.com/docs"),e(s)])]),a("li",null,[a("a",f,[n("https://www.atlassian.com/zh/git"),e(s)])])])])}const w=o(l,[["render",b],["__file","git.html.vue"]]);export{w as default};
