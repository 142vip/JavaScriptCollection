import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-be253e4c.js";const t={},o=e(`<h1 id="基础安装" tabindex="-1"><a class="header-anchor" href="#基础安装" aria-hidden="true">#</a> 基础安装</h1><blockquote><p>在mac本地部署MongoDB数据库，用来进行yapi功能测试</p></blockquote><h2 id="部署命令" tabindex="-1"><a class="header-anchor" href="#部署命令" aria-hidden="true">#</a> 部署命令</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## </span>

<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>mongo-master <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">27017</span>:27017 <span class="token parameter variable">-v</span> /Users/Shared/web-project/mongo:/data/db   mongo <span class="token parameter variable">--auth</span>

<span class="token comment">## --auth表示连接mongodb需要授权</span>
</code></pre></div><ul><li>数据持久化于<code>/Users/Shared/web-project/mongo</code>下，账号：root，密码：123456</li></ul><h2 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 登录</span>
mongo

<span class="token comment">## 切换数据库</span>
use admin

<span class="token comment">## 创建管理员用户</span>
db.createUser<span class="token punctuation">(</span>
 <span class="token punctuation">{</span>
  user:<span class="token string">&quot;root&quot;</span>,
  pwd:<span class="token string">&quot;123456&quot;</span>,
  roles:<span class="token punctuation">[</span><span class="token punctuation">{</span>role:<span class="token string">&quot;root&quot;</span>,db:<span class="token string">&quot;admin&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">## 登录</span>

db.auth<span class="token punctuation">(</span><span class="token string">&quot;用户名&quot;</span>,<span class="token string">&quot;密码&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 删除用户</span>

db.dropUser<span class="token punctuation">(</span><span class="token operator">&lt;</span>user_name<span class="token operator">&gt;</span><span class="token punctuation">)</span>    删除某个用户，接受字符串参数


</code></pre></div><p>用navicat连接时，注意验证数据库应该选择管理员所在的数据名，即admin数据库</p><h2 id="关闭指定端口" tabindex="-1"><a class="header-anchor" href="#关闭指定端口" aria-hidden="true">#</a> 关闭指定端口</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查询pid</span>
<span class="token function">lsof</span>  <span class="token parameter variable">-i</span> :8000

<span class="token comment">## kill端口</span>

<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid

</code></pre></div>`,10),p=[o];function c(r,l){return n(),s("div",null,p)}const d=a(t,[["render",c],["__file","base-install.html.vue"]]);export{d as default};
