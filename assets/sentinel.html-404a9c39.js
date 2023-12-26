import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-be253e4c.js";const e="/JavaScriptCollection/assets/sentinel-ae79e894.png",p="/JavaScriptCollection/assets/subjective-down-2d7f88d6.png",o="/JavaScriptCollection/assets/objective-down-8c44d3d9.png",c={},l=t('<h1 id="哨兵模式" tabindex="-1"><a class="header-anchor" href="#哨兵模式" aria-hidden="true">#</a> 哨兵模式</h1><p>基本原理 Redis的Sentinel系统用于管理多个Redis，主要执行:</p><ul><li>监控：Sentinel会不断的检查主从服务器运行状态</li><li>提醒：当某个Redis服务器出现故障，可通过API或者其他应用程序发送通知</li><li>自动故障迁移：当一个主服务器不能正常工作时，Sentinel会进行一次故障自动迁移，会将失效主服务器的从服务器选举出一个新的主服务器，剩下的从服务器将会自动连接复制选举出来的新服务器的数据。</li><li>配置提供者：在 Redis Sentinel 模式下，客户端应用 在初始化时连接的是 Sentinel 节点集合，从中获取主节点 的信息。</li></ul><figure><img src="'+e+'" alt="基本原理" tabindex="0" loading="lazy"><figcaption>基本原理</figcaption></figure><p>Redis的Sentinel系统是一个分布式的系统，可以在系统中配置一个或多个Sentinel</p><p>主观下线和客观下线 默认情况下，每个Sentinel 节点会以 每秒一次 的频率对 Redis 节点和 其它 的 Sentinel 节点发送 PING 命令，并通过节点的 回复 来判断节点是否在线。</p><ul><li>主观下线：适用于所有 主节点 和 从节点。如果在 down-after-milliseconds 毫秒内，Sentinel 没有收到 目标节点 的有效回复，则会判定 该节点为主观下线。</li></ul><figure><img src="'+p+'" alt="主观下线" tabindex="0" loading="lazy"><figcaption>主观下线</figcaption></figure><ul><li>客观下线： 只适用于 主节点。如果 主节点 出现故障，Sentinel 节点会通过 sentinel is-master-down-by-addr 命令，向其它 Sentinel 节点询问对该节点的状态判断。如果超过 <code>quorum</code> 设置的数据量判定 主节点 不可达，则该 Sentinel 节点会判断 主节点 为 客观下线。</li></ul><figure><img src="'+o+`" alt="客观下线" tabindex="0" loading="lazy"><figcaption>客观下线</figcaption></figure><h3 id="快速搭建" tabindex="-1"><a class="header-anchor" href="#快速搭建" aria-hidden="true">#</a> 快速搭建</h3><p>结合相关conf配置，本地执行<code>docker-compose up -d</code> 即可启动服务</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">##</span>
<span class="token comment">## 功能：redis主从集群 1主2从</span>
<span class="token comment">## 使用：</span>
<span class="token comment">##   - docker-compose up -d</span>
<span class="token comment">## 默认密码：123456</span>
<span class="token comment">##</span>
<span class="token comment">## 参考链接：https://blog.51cto.com/u_15127508/4395149</span>

<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">redis-master-6380</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>master<span class="token punctuation">-</span><span class="token number">6380</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server <span class="token punctuation">-</span><span class="token punctuation">-</span>port 6380 <span class="token punctuation">-</span><span class="token punctuation">-</span>requirepass 123456  <span class="token punctuation">-</span><span class="token punctuation">-</span>appendonly yes
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6380:6380&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.19.0.3

  <span class="token key atrule">redis-slave-6381</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>slave<span class="token punctuation">-</span><span class="token number">6381</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server <span class="token punctuation">-</span><span class="token punctuation">-</span>slaveof redis<span class="token punctuation">-</span>master<span class="token punctuation">-</span>6380 6380 <span class="token punctuation">-</span><span class="token punctuation">-</span>port 6381  <span class="token punctuation">-</span><span class="token punctuation">-</span>requirepass 123456 <span class="token punctuation">-</span><span class="token punctuation">-</span>masterauth 123456  <span class="token punctuation">-</span><span class="token punctuation">-</span>appendonly yes
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6381:6381&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.19.0.4

  <span class="token key atrule">redis-slave-6382</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>slave<span class="token punctuation">-</span><span class="token number">6382</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server <span class="token punctuation">-</span><span class="token punctuation">-</span>slaveof redis<span class="token punctuation">-</span>master<span class="token punctuation">-</span>6380 6380 <span class="token punctuation">-</span><span class="token punctuation">-</span>port 6382  <span class="token punctuation">-</span><span class="token punctuation">-</span>requirepass 123456 <span class="token punctuation">-</span><span class="token punctuation">-</span>masterauth 123456 <span class="token punctuation">-</span><span class="token punctuation">-</span>appendonly yes
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6382:6382&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.19.0.5


  <span class="token key atrule">redis-sentinel-26380</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span><span class="token number">26380</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;26380:26379&quot;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel /usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./conf/redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span>26380.conf<span class="token punctuation">:</span>/usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.19.0.11

  <span class="token key atrule">redis-sentinel-26381</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span><span class="token number">26381</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;26381:26379&quot;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel /usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./conf/redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span>26381.conf<span class="token punctuation">:</span>/usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.19.0.12

  <span class="token key atrule">redis-sentinel-26382</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span><span class="token number">26382</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;26382:26379&quot;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>sentinel /usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./conf/redis<span class="token punctuation">-</span>sentinel<span class="token punctuation">-</span>26382.conf<span class="token punctuation">:</span>/usr/local/etc/redis/sentinel.conf
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">net</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.19.0.13
<span class="token comment">## 创建桥接网络</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token comment">## 桥接网络名称，配合文件前缀，最后为dev_test_env_net  参考：https://www.jianshu.com/p/d70c61d45364</span>
  <span class="token key atrule">net</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token comment"># external: true</span>
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> 172.19.0.0/24
          <span class="token comment">## 网关</span>
          <span class="token key atrule">gateway</span><span class="token punctuation">:</span> 172.19.0.1
</code></pre></div><ul><li>redis-sentinel-26380配置文件</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>port 26380
dir /tmp
# 自定义集群名，其中 172.19.0.3 为 redis-master 的 ip，6380 为 redis-master 的端口，2 为最小投票数（因为有 3 台 Sentinel 所以可以设置成 2）
sentinel monitor mymaster 172.19.0.3 6380 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel auth-pass mymaster 123456
sentinel failover-timeout mymaster 180000
sentinel deny-scripts-reconfig yes;
</code></pre></div><ul><li>redis-sentinel-26381配置文件</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>port 26381
dir /tmp
# 自定义集群名，其中 172.19.0.3 为 redis-master 的 ip，6380 为 redis-master 的端口，2 为最小投票数（因为有 3 台 Sentinel 所以可以设置成 2）
sentinel monitor mymaster 172.19.0.3 6380 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel auth-pass mymaster 123456
sentinel failover-timeout mymaster 180000
sentinel deny-scripts-reconfig yes;
</code></pre></div><ul><li>redis-sentinel-26382配置文件</li></ul><div class="language-conf" data-ext="conf"><pre class="language-conf"><code>port 26382
dir /tmp
# 自定义集群名，其中 172.19.0.3 为 redis-master 的 ip，6380 为 redis-master 的端口，2 为最小投票数（因为有 3 台 Sentinel 所以可以设置成 2）
sentinel monitor mymaster 172.19.0.3 6380 2
sentinel down-after-milliseconds mymaster 30000
sentinel parallel-syncs mymaster 1
sentinel auth-pass mymaster 123456
sentinel failover-timeout mymaster 180000
sentinel deny-scripts-reconfig yes;
</code></pre></div><p>注意修改各容器redis映射的配置文件;</p>`,20),u=[l];function i(k,r){return s(),a("div",null,u)}const y=n(c,[["render",i],["__file","sentinel.html.vue"]]);export{y as default};
