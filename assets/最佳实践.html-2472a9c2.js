import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as t,e as p}from"./app-be253e4c.js";const r={},i=p(`<h1 id="常用配置" tabindex="-1"><a class="header-anchor" href="#常用配置" aria-hidden="true">#</a> 常用配置</h1><h2 id="常用代码" tabindex="-1"><a class="header-anchor" href="#常用代码" aria-hidden="true">#</a> 常用代码</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>ctx<span class="token punctuation">}</span><span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">;</span>

<span class="token comment">// xss攻击</span>
ctx<span class="token punctuation">.</span>helper<span class="token punctuation">.</span><span class="token function">escape</span><span class="token punctuation">(</span><span class="token constant">XXXX</span><span class="token punctuation">)</span>

<span class="token comment">// 参数校验</span>
ctx<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>xxxx<span class="token punctuation">}</span><span class="token punctuation">,</span>ctx<span class="token punctuation">.</span>query<span class="token operator">||</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">)</span>

<span class="token comment">// http请求</span>
<span class="token comment">// options解析: https://eggjs.org/zh-cn/core/httpclient.html#options-%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3</span>
ctx<span class="token punctuation">.</span><span class="token function">curl</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 判断是否通过 XMLHttpRequest 发起的请求</span>
<span class="token comment">// 参考：https://eggjs.org/zh-cn/core/unittest.html#ctx</span>
ctx<span class="token punctuation">.</span>isXHR<span class="token operator">===</span><span class="token boolean">true</span><span class="token operator">|</span><span class="token boolean">false</span>

<span class="token comment">// 当前时间戳</span>
<span class="token keyword">const</span> currentTime<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当前环境变量</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>env
</code></pre></div><h2 id="常用配置-1" tabindex="-1"><a class="header-anchor" href="#常用配置-1" aria-hidden="true">#</a> 常用配置</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 日志自定义切割 参考： https://eggjs.org/zh-cn/core/logger.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%BF%97</span>
config<span class="token punctuation">.</span>customLogger<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token comment">// 日志名称，通过ctx.getLogger(&#39;XXX&#39;)来调用</span>
  <span class="token literal-property property">xxx</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// </span>
    <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">&#39;XXXX&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 端口监听</span>
config<span class="token punctuation">.</span>cluster<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">listen</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">&#39;xxxxxx&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 主机地址</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">7001</span><span class="token punctuation">,</span>   <span class="token comment">// 端口</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// csrf安全规范，默认开启</span>
config<span class="token punctuation">.</span>security<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">csrf</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token comment">// 配置图片上传模式, 参考：https://eggjs.org/api/Config.html#multipart</span>
config<span class="token punctuation">.</span>multipart<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token comment">// 文件传输</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fileSize</span><span class="token operator">:</span><span class="token string">&#39;200mb&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fields</span><span class="token operator">:</span><span class="token string">&#39;20&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 配置表单参数允许大小,参考：https://eggjs.org/api/Config.html#bodyParser</span>
config<span class="token punctuation">.</span>bodyParser<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">jsonLimit</span><span class="token operator">:</span><span class="token string">&#39;5mb&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">formLimit</span><span class="token operator">:</span><span class="token string">&#39;6mb&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="sequelize" tabindex="-1"><a class="header-anchor" href="#sequelize" aria-hidden="true">#</a> sequelize</h2>`,6),u={href:"https://www.sequelize.com.cn/",target:"_blank",rel:"noopener noreferrer"},k=p(`<div class="language-text" data-ext="text"><pre class="language-text"><code>const sequelize = require(&#39;sequelize&#39;)

// 字段属性
{
  field  字段名 
  type   字段类型 INTEGER|STRING
  primaryKey 是否外键 true|false
  defaultValue 数据为空时的默认值
  autoIncrement 是否自增 true|false
  allowNull 是否允许为空 true|false
  comment 字段注释 
}
// 表属性
{
  tableName  自定义表名
  freezeTableName 默认false修改表名为复数，true不修改表名，与数据库表名同步
  timestamps  对sequelize自带时间戳开关进行设置，默认为true
  createdAt 创建时间字段自定义
  updatedAt 更新时间字段自定义

  deletedAt 删除时间字段自定义
  paranoid  在被告之要删除记录时并不会真正的物理上删除，而是添加一个存有删除请求时间戳deletedAt的特殊字段。

  indexes [   //索引
    {
      name:&#39;&#39;  //索引名称
      method:&#39;BTREE&#39; //缩影类型
      fields:[]  //索引对应的列名
    }
  ]  
  // 索引可以参考： https://www.sequelize.com.cn/other-topics/indexes
}

// 查询
findAll()
// 分页查询
findAndCountAll()
// 更新
update()
// 物理删除
destroy()
// 创建
create()


// 模型CURD操作对应的属性
{
  raw 是否json处理  true|false
  Association { 表之间关联关系
    foreignKey  外键名称
    targetKey   目标表主键
  }  
  attributes 属性名
  include {  连表操作
    model  连接的模型
    attributes {  属性
      exclude  不包含的属性
      include  包含的属性
    }
  }
  limit  分页单页数据 page_size
  offset 分页起始  (current_page-1)*page_size
  where { 条件语句
    ...查询条件
  } 
  order [ 排序语句
    ...排序条件 [&#39;xxx&#39;,&#39;desc|asc&#39;]
  ] 
  group 分组语句
}


// 事务
const transaction= await ctx.model.sequelize.transaction();
// 事务提交
transaction.commit();
// 事务回滚【手动控制】
transaction.rollback();


// OP操作  参考：
const Op = require(&#39;sequelize&#39;).Op

[Op.and]: {a: 5}           // AND (a = 5)
[Op.or]: [{a: 5}, {a: 6}]  // (a = 5 OR a = 6)
[Op.gt]: 6,                // &gt; 6
[Op.gte]: 6,               // &gt;= 6
[Op.lt]: 10,               // &lt; 10
[Op.lte]: 10,              // &lt;= 10
[Op.ne]: 20,               // != 20
[Op.eq]: 3,                // = 3
[Op.not]: true,            // IS NOT TRUE
[Op.between]: [6, 10],     // BETWEEN 6 AND 10
[Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
[Op.in]: [1, 2],           // IN [1, 2]
[Op.notIn]: [1, 2],        // NOT IN [1, 2]
[Op.like]: &#39;%142vip&#39;,         // LIKE &#39;%142vip&#39;
[Op.notLike]: &#39;%142vip&#39;       // NOT LIKE &#39;%142vip&#39;
[Op.iLike]: &#39;%142vip&#39;         // ILIKE &#39;%142vip&#39; (case insensitive) (PG only)
[Op.notILike]: &#39;%142vip&#39;      // NOT ILIKE &#39;%142vip&#39;  (PG only)
[Op.startsWith]: &#39;142vip&#39;     // LIKE &#39;142vip%&#39;
[Op.endsWith]: &#39;142vip&#39;       // LIKE &#39;%142vip&#39;
[Op.substring]: &#39;142vip&#39;      // LIKE &#39;%142vip%&#39;
[Op.regexp]: &#39;^[h|a|t]&#39;    // REGEXP/~ &#39;^[h|a|t]&#39; (MySQL/PG only)
[Op.notRegexp]: &#39;^[h|a|t]&#39; // NOT REGEXP/!~ &#39;^[h|a|t]&#39; (MySQL/PG only)
[Op.iRegexp]: &#39;^[h|a|t]&#39;    // ~* &#39;^[h|a|t]&#39; (PG only)
[Op.notIRegexp]: &#39;^[h|a|t]&#39; // !~* &#39;^[h|a|t]&#39; (PG only)
[Op.like]: { [Op.any]: [&#39;cat&#39;, &#39;142vip&#39;]}
                       // LIKE ANY ARRAY[&#39;cat&#39;, &#39;142vip&#39;] - also works for iLike and notLike
[Op.overlap]: [1, 2]       // &amp;&amp; [1, 2] (PG array overlap operator)
[Op.contains]: [1, 2]      // @&gt; [1, 2] (PG array contains operator)
[Op.contained]: [1, 2]     // &lt;@ [1, 2] (PG array contained by operator)
[Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

[Op.col]: &#39;user.organization_id&#39; // = &quot;user&quot;.&quot;organization_id&quot;, with dialect specific column identifiers, PG in this example



// 数据同步
ctx.app.model.sync({
  force:false   // 是否强制更新表 true|false
  alter:true    // 是否依据model修改表 true|false
})


</code></pre></div><h2 id="服务部署" tabindex="-1"><a class="header-anchor" href="#服务部署" aria-hidden="true">#</a> 服务部署</h2><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 安装node</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:10</span>
<span class="token comment"># 标签</span>
<span class="token instruction"><span class="token keyword">LABEL</span> version=<span class="token string">&quot;Beta1.0&quot;</span></span>
<span class="token instruction"><span class="token keyword">LABEL</span> description=<span class="token string">&quot;【哔哩哔哩：Rong姐姐好可爱】基于egg框架短链功能、接口代理等接口服务&quot;</span></span>
<span class="token comment"># 作者</span>
<span class="token instruction"><span class="token keyword">LABEL</span> Author=<span class="token string">&quot;哔哩哔哩：Rong姐姐好可爱&quot;</span></span>
<span class="token comment">## 邮箱</span>
<span class="token instruction"><span class="token keyword">LABEL</span> Email=<span class="token string">&quot;237221210@qq.com&quot;</span></span>
<span class="token comment"># 创建项目空间</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /web-project/node/xxxxx</span>
<span class="token comment"># 将当前代码文件复制到工作区域</span>
<span class="token instruction"><span class="token keyword">COPY</span> . /web-project/node/xxxxx</span>
<span class="token comment"># 进入 vendors</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /web-project/node/xxxxx</span>
<span class="token comment"># 下载依赖</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install --registry https://registry.npm.taobao.org</span>

<span class="token comment">## 暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8848</span>

<span class="token comment">## 指定环境变量 自定义环境对应config.xxxxx.js</span>
<span class="token instruction"><span class="token keyword">ENV</span> EGG_SERVER_ENV=<span class="token string">&#39;xxxxx&#39;</span></span>

<span class="token comment"># 项目启动 </span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;npm&quot;</span>,<span class="token string">&quot;run&quot;</span>,<span class="token string">&quot;start&quot;</span>]</span>
</code></pre></div><p>在没有外网连接的基础时，gRPC的部署需要先将模块包导入再应用；</p><div class="language-docker" data-ext="docker"><pre class="language-docker"><code><span class="token comment">## 忽略脚本安装</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install grpc --ignore-scripts</span>
<span class="token comment">## 导入模块</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./grpcModule ./xxxxx</span>
</code></pre></div><h2 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> rabbitMQ</h2>`,6),m={href:"http://www.squaremobius.net/amqp.node/channel_api.html#channel_consume",target:"_blank",rel:"noopener noreferrer"},d=p(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入模块包</span>
<span class="token keyword">const</span> amqplib <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;amqplib&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// </span>
<span class="token keyword">const</span> rabbitClient <span class="token operator">=</span> <span class="token keyword">await</span> amqplib<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>rabbitConnectUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建通道</span>
<span class="token keyword">const</span> channel <span class="token operator">=</span> <span class="token keyword">await</span> rabbitClient<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 交换机</span>
<span class="token keyword">await</span> channel<span class="token punctuation">.</span><span class="token function">assertExchange</span><span class="token punctuation">(</span>rabbitExchangeName<span class="token punctuation">,</span> <span class="token string">&#39;direct&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">durable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 队列</span>
<span class="token keyword">await</span> channel<span class="token punctuation">.</span><span class="token function">assertQueue</span><span class="token punctuation">(</span>rabbitQueueName<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">durable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> channel<span class="token punctuation">.</span><span class="token function">prefetch</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 绑定</span>
<span class="token keyword">await</span> channel<span class="token punctuation">.</span><span class="token function">bindQueue</span><span class="token punctuation">(</span>rabbitQueueName<span class="token punctuation">,</span> rabbitExchangeName<span class="token punctuation">,</span> rabbitRoutingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 消息获取</span>
<span class="token keyword">await</span> channel<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>rabbitQueueName<span class="token punctuation">,</span> <span class="token parameter">msg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> msgKey <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----正常数据:---------&#39;</span><span class="token punctuation">,</span> msgKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> inserted <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>service<span class="token punctuation">.</span>mailDetail<span class="token punctuation">.</span><span class="token function">insertMaliLogsInDatabase</span><span class="token punctuation">(</span>msgKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// channel.ack(msg);</span>
      <span class="token comment">// console.log(inserted);</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 确认</span>
        channel<span class="token punctuation">.</span><span class="token function">ack</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 消息格式异常，直接确认，避免队列堵塞</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;-------消息格式异常-------&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// channel.ack(msg);</span>
      <span class="token comment">// 拒收,重新放回消息队列</span>
      channel<span class="token punctuation">.</span><span class="token function">nack</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">requeue</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// // isSuccess==1 写入成功，为true</span>
    <span class="token comment">// if (!isSuccess) {</span>
    <span class="token comment">//   // 写入出错，关闭通道</span>
    <span class="token comment">//   const writeErrorMsg = msg.content.toString();</span>
    <span class="token comment">//   app.logger.info(&#39;writeErrorMsg-----&gt;&#39;, writeErrorMsg);</span>
    <span class="token comment">//   // ..... add code here</span>
    <span class="token comment">//   await channel.close();</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 队列中一有消息就消费</span>
  <span class="token literal-property property">noAck</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exclusive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,2),g={href:"https://eggjs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bookstack.cn/read/eggjs-2.24-zh/204490",target:"_blank",rel:"noopener noreferrer"};function y(x,f){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[s("api参考："),n("a",u,[s("https://www.sequelize.com.cn/"),t(a)])]),k,n("p",null,[s("api参考："),n("a",m,[s("http://www.squaremobius.net/amqp.node/channel_api.html#channel_consume"),t(a)])]),d,n("ul",null,[n("li",null,[n("p",null,[s("官方文档："),n("a",g,[s("https://eggjs.org/zh-cn/"),t(a)])])]),n("li",null,[n("p",null,[s("重要文档："),n("a",h,[s("https://www.bookstack.cn/read/eggjs-2.24-zh/204490"),t(a)])])])])])}const E=e(r,[["render",y],["__file","最佳实践.html.vue"]]);export{E as default};
