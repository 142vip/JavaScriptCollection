import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-be253e4c.js";const i="/JavaScriptCollection/assets/jenkins-lock-5dd85997.png",k="/JavaScriptCollection/assets/jenkins-cat-pwd-f82c8e59.png",r={},u=n("h1",{id:"jenkins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenkins","aria-hidden":"true"},"#"),s(" Jenkins")],-1),d=n("h2",{id:"安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),m={href:"https://www.jenkins.io/doc/book/installing/",target:"_blank",rel:"noopener noreferrer"},g=t(`<h3 id="mac系统" tabindex="-1"><a class="header-anchor" href="#mac系统" aria-hidden="true">#</a> Mac系统</h3><p>在Mac系统中，Jenkins的安装可以借助<code>brew</code>工具，例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装</span>
brew <span class="token function">install</span> jenkins-lts
<span class="token comment">## M1芯片添加arch -arm64 安装</span>
arch <span class="token parameter variable">-arm64</span> brew <span class="token function">install</span> jenkins-lts

<span class="token comment">## 启动</span>
brew services start jenkins-lts
<span class="token comment">## 重启 </span>
brew services restart jenkins-lts
<span class="token comment">## 手动更新 </span>
brew upgrade jenkins-lts
</code></pre></div><h3 id="linux系统" tabindex="-1"><a class="header-anchor" href="#linux系统" aria-hidden="true">#</a> Linux系统</h3><p>基于apt-get进行安装，<code>LTS</code>（长期支持）版本 每 12 周从常规版本流中选择一次作为该时间的稳定版本时期</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> /usr/share/keyrings/jenkins-keyring.asc <span class="token punctuation">\\</span>
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
<span class="token builtin class-name">echo</span> deb <span class="token punctuation">[</span>signed-by<span class="token operator">=</span>/usr/share/keyrings/jenkins-keyring.asc<span class="token punctuation">]</span> <span class="token punctuation">\\</span>
  https://pkg.jenkins.io/debian-stable binary/ <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token punctuation">\\</span>
  /etc/apt/sources.list.d/jenkins.list <span class="token operator">&gt;</span> /dev/null
  
<span class="token comment">## 软件更新</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment">## 安装jenkins</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jenkins
</code></pre></div><p>基于yum进行安装，安装<code>LTS</code>（长期支持）版本 ，每 12 周从常规版本流中选择一次作为该时间的稳定版本时期</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/jenkins.repo <span class="token punctuation">\\</span>
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
<span class="token function">sudo</span> <span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key

<span class="token comment">## 软件更新</span>
<span class="token function">sudo</span> yum upgrade
<span class="token comment">## 安装jenkins需要的jdk</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> fontconfig java-17-openjdk
<span class="token comment">## 安装jenkins</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> jenkins
<span class="token comment">## 重新加载配置</span>
<span class="token function">sudo</span> systemctl daemon-reload
</code></pre></div><p>在Linux系统中安装完成后，可以对jenkins服务进行管理，设置开机提供、维护服务状态等，例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 设置开机重启</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> jenkins
<span class="token comment">## 启动</span>
<span class="token function">sudo</span> systemctl start jenkins
<span class="token comment">## 暂停</span>
<span class="token function">sudo</span> systemctl stop jenkins
<span class="token comment">## 重启</span>
<span class="token function">sudo</span> systemctl restart jenkins
<span class="token comment">## 查看服务状态</span>
<span class="token function">sudo</span> systemctl status jenkins
</code></pre></div><h3 id="容器安装" tabindex="-1"><a class="header-anchor" href="#容器安装" aria-hidden="true">#</a> 容器安装</h3><p>使用Docker安装，注意文件映射，执行命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## docker安装jenkins</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> jenkins-blueocean <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span><span class="token operator">=</span>on-failure <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">DOCKER_HOST</span><span class="token operator">=</span>tcp://docker:2376 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">DOCKER_CERT_PATH</span><span class="token operator">=</span>/certs/client <span class="token punctuation">\\</span>
  <span class="token parameter variable">--env</span> <span class="token assign-left variable">DOCKER_TLS_VERIFY</span><span class="token operator">=</span><span class="token number">1</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--publish</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--publish</span> <span class="token number">50000</span>:50000 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> jenkins-data:/var/jenkins_home <span class="token punctuation">\\</span>
  <span class="token parameter variable">--volume</span> jenkins-docker-certs:/certs/client:ro <span class="token punctuation">\\</span>
  jenkins/jenkins
</code></pre></div><p>使用Docker-Compose安装，配置如下：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">##</span>
<span class="token comment">## 支持服务：</span>
<span class="token comment">##    - Jenkins 端口映射  8080（连接端口）  50000（管理端口）</span>
<span class="token comment">##</span>
<span class="token comment">##</span>
<span class="token comment">## 运行指令：</span>
<span class="token comment">##    - 统一刷新启动   docker-compose up -d</span>
<span class="token comment">##    - 挂掉          docker-compose down</span>
<span class="token comment">##    - 重启          docker-compose restart</span>
<span class="token comment">##</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">jenkins</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> jenkins/jenkins
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> jenkins
    <span class="token comment">## 权限问题 使用root用户</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span> root
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> jenkins_dev
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6080:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6081:50000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/localtime<span class="token punctuation">:</span>/etc/localtime<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> $(pwd)/jenkins<span class="token punctuation">:</span>/var/jenkins_home
      <span class="token comment">## 支持容器内使用Mac本机docker服务</span>
      <span class="token comment">## - /usr/bin/docker:/usr/bin/docker</span>
      <span class="token comment">## - /var/run/docker.sock:/var/run/docker.sock</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">JENKINS_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;--prefix=/jenkins&quot;</span>
      <span class="token key atrule">JENKINS_ARGS</span><span class="token punctuation">:</span> <span class="token string">&quot;--prefix=/jenkins&quot;</span>
</code></pre></div><p>不论使用Docker还是Docker-Compose安装Jenkins服务，都会启动Jenkins容器服务，对于容器可以使用一些常用的命令进行管理，例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 启动</span>
<span class="token function">docker</span> start jenkins
<span class="token comment">## 停止</span>
<span class="token function">docker</span> stop jenkins
<span class="token comment">## 重启</span>
<span class="token function">docker</span> restart jenkins
<span class="token comment">## 查看容器信息</span>
<span class="token function">docker</span> inspect jenkins
<span class="token comment">## 查看容器日志</span>
<span class="token function">docker</span> logs jenkins

<span class="token comment">## 集群管理</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token function">docker-compose</span> down
<span class="token function">docker-compose</span> start jenkins
</code></pre></div><p>除了使用官方提供的jenkins镜像，还可以自定义镜像，这个在jenkins官网有详细说明， 这里基于jenkins镜像构建的核心功能提供对应的<code>Dockerfile</code>配置。 自定义jenkins镜像可以基于此来拓展，参考：</p><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> jenkins/jenkins:2.426.2-jdk17</span>

<span class="token comment">## 设置管理用户</span>
<span class="token instruction"><span class="token keyword">USER</span> root</span>

<span class="token comment">## 安装核心依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y lsb-release</span>
<span class="token instruction"><span class="token keyword">RUN</span> curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc <span class="token operator">\\</span>
  https://download.docker.com/linux/debian/gpg</span>
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&quot;deb [arch=$(dpkg --print-architecture) \\
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \\
  https://download.docker.com/linux/debian \\
  $(lsb_release -cs) stable&quot;</span> &gt; /etc/apt/sources.list.d/docker.list</span>
<span class="token instruction"><span class="token keyword">RUN</span> apt-get update &amp;&amp; apt-get install -y docker-ce-cli</span>

<span class="token instruction"><span class="token keyword">USER</span> jenkins</span>

<span class="token comment">## 运行插件</span>
<span class="token instruction"><span class="token keyword">RUN</span> jenkins-plugin-cli --plugins <span class="token string">&quot;blueocean docker-workflow&quot;</span></span>
</code></pre></div><p>配置完成后，可以使用<code>docker build</code>命令构建，例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 构建自定义jenkins镜像</span>
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> jenkins <span class="token builtin class-name">.</span>
</code></pre></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>`,22),h=n("code",null,"8080",-1),b=n("code",null,"50000",-1),f={href:"http://127.0.0.1:8080%E5%8D%B3%E5%8F%AFJenkins%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"},j=t('<blockquote><p>这里需要明白，Jenkins的端口也可以自定义或者进行端口映射</p></blockquote><figure><img src="'+i+'" alt="浏览器访问Jenkins" tabindex="0" loading="lazy"><figcaption>浏览器访问Jenkins</figcaption></figure><p>按照提示到目标路径下，找对对应的初始化密码，粘贴到输入框中就可以顺利使用Jenkins啦</p><figure><img src="'+k+`" alt="打印初始化密码" tabindex="0" loading="lazy"><figcaption>打印初始化密码</figcaption></figure><p>如果是本机部署，在终端中执行命令，打印密码</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 对应</span>
<span class="token function">sudo</span> <span class="token function">cat</span> /var/lib/jenkins/secrets/initialAdminPassword
</code></pre></div><p>如果是Docker容器部署，需要进入容器找到对应文件，打印密码。例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> jenkins <span class="token function">sh</span>
<span class="token comment">## 打印密码</span>
<span class="token function">cat</span> /var/jenkins_home/secrets/initialAdminPassword
<span class="token comment">## 退出容器</span>
<span class="token builtin class-name">exit</span>
</code></pre></div><p>上面的命令也可以精简为：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> jenkins <span class="token function">cat</span> /var/jenkins_home/secrets/initialAdminPassword
</code></pre></div>`,10);function v(y,_){const a=p("ExternalLinkIcon");return c(),l("div",null,[u,d,n("p",null,[s("Jenkins支持多种安装方式，不限于Mac系统、Linux系统，由于Docker容器技术的普及，这里更加推荐使用容器安装。 具体可以参考"),n("a",m,[s("官网安装说明"),e(a)])]),g,n("p",null,[s("当Jenkins服务正常启动后，Jenkins默认暴露"),h,s("和"),b,s("两个端口，在浏览器中访问"),n("a",f,[s("http://127.0.0.1:8080即可Jenkins网站"),e(a)])]),j])}const J=o(r,[["render",v],["__file","jenkins.html.vue"]]);export{J as default};
