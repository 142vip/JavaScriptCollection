import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const p={},e=t(`<h1 id="持续集成、持续交付" tabindex="-1"><a class="header-anchor" href="#持续集成、持续交付" aria-hidden="true">#</a> 持续集成、持续交付</h1><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="持续集成" tabindex="-1"><a class="header-anchor" href="#持续集成" aria-hidden="true">#</a> 持续集成</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">## 代码CI快速集成流水线，lint、fix、build</span>
<span class="token comment">## 注意： 只在142vip/JavaScriptCollection时执行</span>

<span class="token key atrule">name</span><span class="token punctuation">:</span> CI
<span class="token comment">## 触发条件</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 提PR到next分支触发CI</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> next
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> next

  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

  <span class="token key atrule">schedule</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&quot;0 0 1 * *&quot;</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">Base-Build</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;基础编译构建&quot;</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.repository == &#39;142vip/JavaScriptCollection&#39; <span class="token important">&amp;&amp;</span>  github.event_name == &#39;pull_request&#39;
    <span class="token key atrule">permissions</span><span class="token punctuation">:</span>
      <span class="token key atrule">actions</span><span class="token punctuation">:</span> read
      <span class="token key atrule">pull-requests</span><span class="token punctuation">:</span> read

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout Code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token comment">## 安装PNPM</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PNPM Install
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>

      <span class="token comment">## 安装Node环境</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> 18.18.0
          <span class="token comment">## 淘宝镜像加速</span>
          <span class="token key atrule">registry-url</span><span class="token punctuation">:</span> <span class="token string">&#39;https://registry.npmmirror.com&#39;</span>
          <span class="token comment">## 缓存</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">&#39;pnpm&#39;</span>

      <span class="token comment">## 下载依赖，并执行初始化脚本：钩子函数、思维导图构建</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ./scripts/ci</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Code LintFix
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ./scripts/lint</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ./scripts/bundle build</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build Site With Proxy
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          ./scripts/bundle build_proxy</span>

</code></pre></div><h3 id="持续交付" tabindex="-1"><a class="header-anchor" href="#持续交付" aria-hidden="true">#</a> 持续交付</h3><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code>
<span class="token comment">## CD交付流水线</span>
<span class="token comment">##    - 部署到Github Pages</span>
<span class="token comment">##    - 部署到Vercel托管平台</span>
<span class="token comment">##    - 发布新的Github Release</span>
<span class="token comment">## 参考资料：https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages</span>

<span class="token key atrule">name</span><span class="token punctuation">:</span> CD
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> next
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment">## 版本发布</span>
  <span class="token key atrule">release</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;创建Github发布&quot;</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token comment">## 主库next且执行release更新时执行</span>
    <span class="token key atrule">if</span><span class="token punctuation">:</span> github.repository == &#39;142vip/JavaScriptCollection&#39; <span class="token important">&amp;&amp;</span> startsWith(github.event.head_commit.message<span class="token punctuation">,</span> &#39;chore(release)<span class="token punctuation">:</span>&#39;)

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout Code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token comment">### 打成压缩包</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create Zip Package
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          zip -r JavaScriptCollection.zip . \\
          -x &quot;node_modules/*&quot; \\
          -x &quot;.git/*&quot; </span>

      <span class="token comment"># 提取版本号</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get New Version Number
        <span class="token key atrule">id</span><span class="token punctuation">:</span> releaseVersion
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;version=$(node -p &quot;require(&#39;./package.json&#39;).version&quot;)&quot; &gt;&gt; $GITHUB_OUTPUT</span>

      <span class="token comment"># 创建发布版本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create New Release
        <span class="token key atrule">id</span><span class="token punctuation">:</span> createRelease
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/create<span class="token punctuation">-</span>release@latest
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">tag_name</span><span class="token punctuation">:</span> v$<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.releaseVersion.outputs.version <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">release_name</span><span class="token punctuation">:</span> v$<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.releaseVersion.outputs.version <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">body</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            Release \${{ steps.releaseVersion.outputs.version }}</span>

            <span class="token comment">### Features</span>

            <span class="token comment">### Bug Fixes</span>

      <span class="token comment">## 更新资源</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Upload Resource Assets
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/upload<span class="token punctuation">-</span>release<span class="token punctuation">-</span>asset@latest
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">upload_url</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.createRelease.outputs.upload_url <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">asset_path</span><span class="token punctuation">:</span> ./JavaScriptCollection.zip
          <span class="token key atrule">asset_name</span><span class="token punctuation">:</span> JavaScriptCollection.zip
          <span class="token key atrule">asset_content_type</span><span class="token punctuation">:</span> application/zip
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,7),o=[e];function c(u,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","ci-cd.html.vue"]]);export{r as default};
