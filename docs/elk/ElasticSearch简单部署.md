## ElasticSearch简单部署

### 简单介绍
Elasticsearch也使用Java开发并使用Lucene作为其核心来实现所有索引和搜索的功能，但是它的目的是通过简单的RESTful API来隐藏Lucene的复杂性，从而让全文搜索变得简单。
不过，Elasticsearch不仅仅是Lucene和全文搜索，我们还能这样去描述它：

- 分布式的实时文件存储，每个字段都被索引并可被搜索
- 分布式的实时分析搜索引擎
- 可以扩展到上百台服务器，处理PB级结构化或非结构化数据

### 拉取镜像

```bash
$ docker pull elastic/elasticsearch:6.7.1
```
### 查看已安装的镜像
```
root@default:/home/docker# docker images
REPOSITORY                TAG                 IMAGE ID            CREATED             SIZE
kong                      latest              abec1dd8af91        7 days ago          144MB
postgres                  9.6                 16f0ba6ed857        12 days ago         200MB
nginx                     latest              6678c7c2e56c        12 days ago         127MB
mysql                     latest              9b51d9275906        12 days ago         547MB
dpage/pgadmin4            latest              54c26144463b        2 weeks ago         281MB
mmdapl/142vip.nginx       master              021cf3e47a00        8 weeks ago         126MB
pantsel/konga             latest              e3251e50022b        4 months ago        398MB
elastic/elasticsearch     6.7.1               e2667f5db289        11 months ago       812MB
mobz/elasticsearch-head   5                   b19a5c98e43b        3 years ago         824MB

```
### 运行容器

ElasticSearch的默认端口是9200，我们把宿主环境9200端口映射到Docker容器中的9200端口，就可以访问到Docker容器中的ElasticSearch服务了，同时我们把这个容器命名为es-docker。

```bash
$ docker run -d --name es -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" e2667f5db289(镜像ID)

# 说明：
# --name es 指定运行的名字为es，唯一，后续操作可以用到这个名字
# -p 9200:9200 -p 9300:9300 指定外部9200和9300端口分别映射到容器9200和9300端口，以便外部可以直接访问
# -e "discovery.type=single-node" 指定为单节点模式
# 最后镜像ID，可以通过docker images命令查看，也可以直接用镜像名称

```
### 查看docker日志
```bash
root@default:/home/docker# docker logs --tail 30 es
[2020-03-17T03:28:06,756][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [reindex]
[2020-03-17T03:28:06,756][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [repository-url]
[2020-03-17T03:28:06,757][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [transport-netty4]
[2020-03-17T03:28:06,757][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [tribe]
[2020-03-17T03:28:06,757][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-ccr]
[2020-03-17T03:28:06,757][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-core]
[2020-03-17T03:28:06,757][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-deprecation]
[2020-03-17T03:28:06,757][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-graph]
[2020-03-17T03:28:06,758][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-ilm]
[2020-03-17T03:28:06,758][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-logstash]
[2020-03-17T03:28:06,758][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-ml]
[2020-03-17T03:28:06,758][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-monitoring]
[2020-03-17T03:28:06,758][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-rollup]
[2020-03-17T03:28:06,758][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-security]
[2020-03-17T03:28:06,759][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-sql]
[2020-03-17T03:28:06,759][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-upgrade]
[2020-03-17T03:28:06,759][INFO ][o.e.p.PluginsService     ] [DeaL23q] loaded module [x-pack-watcher]
[2020-03-17T03:28:06,759][INFO ][o.e.p.PluginsService     ] [DeaL23q] no plugins loaded
[2020-03-17T03:28:16,693][INFO ][o.e.x.s.a.s.FileRolesStore] [DeaL23q] parsed [0] roles from file [/usr/share/elasticsearch/config/roles.yml]
[2020-03-17T03:28:18,953][INFO ][o.e.x.m.p.l.CppLogMessageHandler] [DeaL23q] [controller/70] [Main.cc@109] controller (64 bit): Version 6.7.1 (Build e1f492de67a719) Copyright (c) 2019 Elasticsearch BV
[2020-03-17T03:28:20,610][INFO ][o.e.d.DiscoveryModule    ] [DeaL23q] using discovery type [single-node] and host providers [settings]
[2020-03-17T03:28:22,581][INFO ][o.e.n.Node               ] [DeaL23q] initialized
[2020-03-17T03:28:22,587][INFO ][o.e.n.Node               ] [DeaL23q] starting ...
[2020-03-17T03:28:22,914][INFO ][o.e.t.TransportService   ] [DeaL23q] publish_address {172.17.0.2:9300}, bound_addresses {0.0.0.0:9300}
[2020-03-17T03:28:23,091][WARN ][o.e.b.BootstrapChecks    ] [DeaL23q] max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
[2020-03-17T03:28:23,221][INFO ][o.e.h.n.Netty4HttpServerTransport] [DeaL23q] publish_address {172.17.0.2:9200}, bound_addresses {0.0.0.0:9200}
[2020-03-17T03:28:23,225][INFO ][o.e.n.Node               ] [DeaL23q] started
[2020-03-17T03:28:24,413][WARN ][o.e.x.s.a.s.m.NativeRoleMappingStore] [DeaL23q] Failed to clear cache for realms [[]]
[2020-03-17T03:28:24,596][INFO ][o.e.l.LicenseService     ] [DeaL23q] license [328688c6-0bb6-4e0d-96d0-950f1625d1dd] mode [basic] - valid
[2020-03-17T03:28:24,620][INFO ][o.e.g.GatewayService     ] [DeaL23q] recovered [0] indices into cluster_state

```

### 检查运行
访问es，用curl命令或者浏览器访问http://localhost:9200

```bash
root@default:/home/docker# curl http://localhost:9200
{
  "name" : "DeaL23q",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "S48O5KNORbqhp0VZy44G5Q",
  "version" : {
    "number" : "6.7.1",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "2f32220",
    "build_date" : "2019-04-02T15:59:27.961366Z",
    "build_snapshot" : false,
    "lucene_version" : "7.7.0",
    "minimum_wire_compatibility_version" : "5.6.0",
    "minimum_index_compatibility_version" : "5.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

参考资料：https://www.jianshu.com/p/5027d4c9a70e

### 配置外部跨域访问
- 进入容器es
```bash
## 进入容器
root@default:/home/docker# docker exec -it es /bin/bash
## 查看目录
[root@710adf802159 elasticsearch]# ls
LICENSE.txt  README.textile  config  lib   modules
NOTICE.txt   bin             data    logs  plugins
## 切换到config下
[root@710adf802159 elasticsearch]# cd config
[root@710adf802159 config]# s 
bash: s: command not found
## 切换目录
[root@710adf802159 config]# ls
elasticsearch.keystore  jvm.options        role_mapping.yml  users
elasticsearch.yml       log4j2.properties  roles.yml         users_roles
## 编辑elasticsearch的yaml配置文件
[root@710adf802159 config]# vi elasticsearch.yaml

```
- 修改配置
```bash
[root@710adf802159 config]# vi elasticsearch.yml 

cluster.name: "docker-cluster"

network.host: 0.0.0.0

## 跨域配置
http.cors.enabled: true
http.cors.allow-origin: "*"
            
"elasticsearch.yml" 7L, 108C

```
- 退出，重启容器

  1.在vim编辑中，可以先按esc，再按shift+i,输入wq！保存yml文件

  2.在es容器中，通过`exit`指令退出当前容器

  3.通过`docker restart es`来重启elasticsearch容器


### 配置不生效，容器无法启动， 外部通过容器配置

```bash
 #cp出来，到宿主机当前目录下
$ docker cp es:/usr/share/elasticsearch/config/elasticsearch.yml .
#修改配置【容器外部修改】
$ vi elasticsearch.yml
## 修改配置【跨域配置】 
#cp回去
$ docker cp elasticsearch.yml es:/usr/share/elasticsearch/config/elasticsearch.yml 
#重启
$ docker start es 
```

参考资料：https://www.cnblogs.com/liongis/p/11132736.html

### 修改无法启动的容器中的内容

在容器执行过程中，修改了容器的内容（如配置文件信息），但因为修改出了问题。导致容器关闭后，无法启动。
这事需要重新修改配置文件。 正常情况下可以通过 docker exec命令打开容器的一个shell终端进去修改。


- 创建新镜像

```
把这个问题容器用docker commit提交到一个新的镜像，然后用docker run -it 基于新镜像运行一个新的容器进去改变（修复）配置文件。

再通过新的容器再提交一个新的镜像，然后在基于新的镜像重新启动容器（同最初的容器）。

这个方法是可行的，但问题是步骤多，而且提交了新的镜像，对于后续维护增加了复杂性。
```
- 直接修改容器的文件【推荐】

所有的容器数据都存在/var/lib/docker/aufs/diff/路径下。比如：
```bash
root@default:/# cd var/
root@default:/var# ls
cache  lib    lock   log    run    spool  tmp
root@default:/var# cd lib/
root@default:/var/lib# ls
boot2docker  docker       nfs          sshd
root@default:/var/lib# cd docker
root@default:/mnt/sda1/var/lib/docker# ls
aufs        containers  overlay2    swarm       volumes
builder     image       plugins     tmp
containerd  network     runtimes    trust
root@default:/mnt/sda1/var/lib/docker# cd aufs
root@default:/mnt/sda1/var/lib/docker/aufs# ls
diff    layers  mnt
root@default:/mnt/sda1/var/lib/docker/aufs# cd diff/
root@default:/mnt/sda1/var/lib/docker/aufs/diff# ls
00c2fee18664fdbfbc45e97c8f5f0d9728e6f8a48a5151347dc8c9b6cb3ed823
0515e7a94313f3c1c92c0533a028fe9e48a6ef6c29dded3cca6e69615dfc21a9
0515e7a94313f3c1c92c0533a028fe9e48a6ef6c29dded3cca6e69615dfc21a9-init
0672760b7bc553d69cee93753f0f8033fac0efeb6ee83c28f1be9847da8d5fee
0f0a73eb7b4ccb33730bbe3d9a3e8d8824f777d24dfb70e580890e072c0c0091
0fe0863b7b589b2945c4de9b07036cc9200ff383e1d44677f541dea3525a871a
12670211f12ccf81ec21626f39a0be28f20f09089e62b9995d332764ec99a16d
13349332b032a7a9c774a8fb7d3f04fb49136f7ccaa6192da1907392b3013f3c
1c587f6a193cdcb2e618f1f1caad87709cc1733975e65be00fd3791b7695721f
1dbd0c9cc7bff13447ee566d60d8de154509a48d61aefdcb9f9e72526924df62
292640d2d1bb4e895d2f7e2d5818389c9764e8f904371d2d40675fb4931ce162
2a1d99e551d50f5c6c158adc2d2b1425a92494ccfd536b5dbf049baceac4879a
2a497f587694306a158cec95b16fec582b164092e65671d4a99984f90370f5f4
2dd8015228102120f22cef48a19baf05bee70b504e8081a47f2d7c25bb55db2f
38d728d227f1f6beb3221c727f2adc216940ef2ca41ef4692e81edd6199807fa
39c3b6512d1e139745215ac60c2e4e3a5f8ed8c8a2bb85b05a40a7864b0d90a2
3a9adbed48b00370dd591f7d36a1c20db98976afd48549bf95bdd922f983803e
41d67f2543df0989c8dadd28e9b9c32573fddc452d95bce8187c5086766d3080
44e705ccbda04024a148e50464bfb4fcd951c715877a1496a65c1d1c018ac27c
46229cb286fc1fc9dd3fff0fddd510381a3bd7bb2791aec46a346f9de9cf0856
463449b210b308440a268790366d2e7164462e145ddda5bb957fbe920c3efea8
466c2fad039d1c4ef49f294395bfe328c22fd3bf62e70a42f30a2269c78d83cc
49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726
49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726-init
4a406ddfc2530860d202e986595df8fea52075d21a61d0b1c1eff20327d71ce3
4f0783833b6f6213e84dff35b48915700b5ba02e5215f10036bc7296f331835d
50f30010fb328dd14a9fc66c1703021c2fef88b384fc0b696b8bfdb3a78281f2
537cfae69ff211172e7a6ec894f57770c07efe87c61599c44a0cb1e4dbdbd2a0
545223db8f7fe57b760089991a10e655942b567bdd4e69ae19486e62cde2864a
56ae37d3e1f5a1958c48e8a3892e89dfb8c48289bfa7f64ede72db8c27732869
56ae37d3e1f5a1958c48e8a3892e89dfb8c48289bfa7f64ede72db8c27732869-init
597bd52ba9e55b127e37bb30a93c45ec453a3b01e2c51f13e0f0f9f57df084ef
5bc56f95ea5fb3ee8c5e8c7ca81f50aa67a4eb0a644ba9b9d2f53399aa555a1f
5cd9569e7bac857387487bc429b990d4dbb1c522cba5411725cb0dc3edc59856
63577142d21c38760d316ece3119eb954e6ac1794245a984828f227fccf7b7bf
6428b7232063d0a25a80ba8745624854d750203addc0b5fddc42d6c74ed3dec7
64300378e5b336d1b50d63821574f16e531150b675c3388ed2a68e3464c78ee7
6606ed247fbe5c47fa7348e8348e5dfda2c3aa9f906c13c72cd06ccb3228349c
6657453a90c6e8d9fd3ec191b6bfa1d087a5f98da45876664cc65bdef8e768cd
687de3fdc4cdadd8b890757776d9474c760ed6c72cc38cfcf3b538912c80497c
6a8fce769d054f619ebde6d60283c4cfb9e8805752bc040be92d5b3594085d48
6b392fd849ae0d2b6d456c23724ffad43cf27bd4ef9c808088c541a504d95904
6b392fd849ae0d2b6d456c23724ffad43cf27bd4ef9c808088c541a504d95904-init
6e04f2f652454aae99c94daa077ef03edcb216cb7e21d906a0ec610deacc09d0
6e94546d36736e6e7a89810a0adaef1c0bb6b6a8e8d26eb4fc997b2cd446e007
72c84b68c374a99c1f17e085c3cd32ff6a52d828f6554c09f8ccf51ee0cb8d3b
771e9f8fb3eb90ef720b9bc1c95ec9cb3c3eac13d0af1a2097f849b943041ff7
7bc2746ec66b6f285f2d3995c454274ca16f112a784ae7bb9a58a286d138322e
7dec36c12f83a5aad3f9752089f140da811c122e80ff91e1ceabb8671e75dbb0
7dec36c12f83a5aad3f9752089f140da811c122e80ff91e1ceabb8671e75dbb0-init
821d8248d4a93932f71a1d529fea7de314cde0e9178fd0349e005a8b0f23a860
82680fdae0e1b23f2f92592d033b6656e599a7b9074ad540a38a9780f70f39e8
82680fdae0e1b23f2f92592d033b6656e599a7b9074ad540a38a9780f70f39e8-init
8718da125e0e47a5ff7099f6eae6579e96fbcc503b77ee65b92d7c2c77587220
8a71de64e08c872ca6ef8e878b94eecbfc2bcad89ce1eb99bb9ee749f4561a39
8c314b21f927539699a5fd18c9698223a4d113a9d9aa06e16ebe0b7f88f126b8
8d2e913c276e8aa2a89b08ac504f946d4eb19f6c05ae994686988ae4acac5f35
8d9085ad10f3a615e609bea1b59b27624c41eb38e974907c91d0b2fbb4083b5a
8e0cc835f566bb997f7fe9dceee998f6203681dd15bf468b2f7b86f246779a22
8e2da64546de29d67ebe24cfdf68e981cd6d3936aee69c205f920d57b4129aef
8edd632baccb6682f0640d29b5567d6a7b2decf6fdf8af9841084b51e72ba6db
9a794e7484aaa8d86b3021c1e4f56045dfdf11fb9787861e0761fee12a07272d
9c9de5a003947d9ad58642f0327c475e48cc731726a4da521f79b8f8cb7f1bfa
a19008d3381cb130ce0dd0de081d8b2be195c80485a65b2a28482a0ac704377b
a278e190db54751381936b251bb24f91c49dfd1d6d8ad624142418f132641d5b
a8889e95fbd2de9deee7905e46ee1ae3baab6d72a5d7782196693cef6b1e06a5
a8a96b9549e22bee752e9f7f03cc95eff88a6120d63ff4a794c891293895c144
a8a96b9549e22bee752e9f7f03cc95eff88a6120d63ff4a794c891293895c144-init
a8eb24158f5136b168d3e2ac6ae2b759e9bfaa511595d115baebc5c6d3dd2e9f
b8c39b25abb1345429599ad67d2b9240d042e62c69e8ea90b208ab281ae48612
b8c5aef533043912bd838b83b7f6e123a7369d7337461e03cf8cffdc7ea8ff75
bc11e8eaa0fecdfcdcc672f09b4a04d3a4487d9db647a8ddd9c4d739efab63f0
bf7359a4262e8e49b04df80c58f27fecc0a6b139a5797e98dec754c8fa4d1c40
c1bb60af7260f438c4e35406d9145d52e59d221ad882c7189ddd9b956828ed53
c250a49056ef6e9d13d3630adc023c09fc29ec88ca50fa53186c95ef5ede34af
c6709cd2b2c7b3f8ca637550b3cc566105d3c439f194375debda1b3ff387973c
cbc5949e12786cc0d59229c62a45ee72114ab715ee43b3a62c0ee541c7f6d748
cfaa62a5de3486efb64cd4aad22f96470eed52c4eb27a907caafa0c22d401715
d1dad7a8648497b9dcd2f2cc745279f84ba729e70e5112adea6b459d4e6d8c28
d1dad7a8648497b9dcd2f2cc745279f84ba729e70e5112adea6b459d4e6d8c28-init
d68964e65761656f53fa3311d3ee53f782623fa373b3fdd5b4be400442b8916e
db3baa5d8d56c9b1875d3d8de3501d1b30233d9fb29bf71e5e32136c6ac78bc6
db502d4796915043d7809cca0a9ddaf0a1d78b215a6610a0fd31e6d41e0414de
ddf0a6067ee900ec615eca77baed18a24fc125a04c2c4f9a5058399152ad3a51
df0b082a25dd16b23e4f2e45272a0a81e7a97c6c0189f55e4bdc4133f273ed22
df9155bfbef874de9398cdbb7cc3acaa4e1f901ca51f3ac7a12fd2dfe60d52d7
e09d08152bd351bedb6bad563c9badb1d7e42da0feb90b3dc9194a810d9ea67e
ea95b159f2eaa22a54c191befb2a6f6660eee1b760ef590c8bca3b72f85ee357
ea95b159f2eaa22a54c191befb2a6f6660eee1b760ef590c8bca3b72f85ee357-init
efd9424a818a39133d07b67397497216ed41182daada82300eb06a0ac900c96a
f329bdb9ac4e980131d6aa1a13a9600daaf50f4e4b5953abd037860a69f9cf50
f8afde9526766210aeea70cc19835a5da32eb89aa78984585c64a3fe8b99346e
fab69bedc4bf6f0e07bd95dd21f44dc6a08f9a767dc9321c7cc7dbbc328db8f4
fb53174b818afc0061e197d8e931ce8b01df346431dcb98f93354e35b4aa5261
fc53a4f870417e8fd3a511e81c88ccc542f085e8f540948c344aa906505d6f69
fdda3d5656502870341f4736d7fc11472dc64fb09a28b36f0ff5d7dbe4168992
fe7dd41715d3ea681a8b6b2032a554cc1ab97815e78935b6c5d76649ddc480eb

```

1.进行搜索

```bash
root@default:/mnt/sda1/var/lib/docker/aufs/diff# find ./ -name 'elasticsearch.yaml'
./49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr/share/elasticsearch/config/elasticsearch.yaml
root@default:/mnt/sda1/var/lib/docker/aufs/diff# ^C
root@default:/mnt/sda1/var/lib/docker/aufs/diff# cd 49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726# ls
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726# cd usr/
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr# ls
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr# cd share/
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr/share# ls
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr/share# cd elasticse
arch/
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr/share/elasticsearch# ls
config           data             hs_err_pid1.log  logs
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr/share/elasticsearch# cd config/
root@default:/mnt/sda1/var/lib/docker/aufs/diff/49fa2d0a7509be75d43b0045af52ee3fe05831bd279fa42abaaa434dbc84a726/usr/share/elasticsearch/config# ls
elasticsearch.keystore  elasticsearch.yaml      elasticsearch.yml

```

2.进行操作【修改、删除】

  - 修改利用vim编辑
  - 删除
  ```bash
  Linux 删除目录很简单，一般习惯用 rmdir dirname，不过一旦目录非空，就会出现无法删除的问题，这种情况下可以使用 rm -rf 命令来实现。直接 rm 就可以了，不过要加两个参数 -rf 即：

rm -rf dirname
-r：就是向下递归，不管有多少级目录，一并删除
-f：就是直接强行删除，不作任何提示的意思

删除文件夹实例：

rm -rf /var/log/httpd/access
将会删除/var/log/httpd/access目录以及其下所有文件、文件夹。

删除文件使用实例：

rm -f /var/log/httpd/access.log
将会强制删除/var/log/httpd/access.log这个文件。

使用这个 rm -rf 的时候一定要格外小心，Linux没有回收站，删除之后再想找回就很难了。
  ```

3.重启容器

```bash
## 启动容器
$ docker start 容器id
## 查询启动日志
$ docker logs 容器id
```
注意：文件查找

```bash
## 文件查询
$ find ./ -name 'nginx.conf'
## find 文件查询指令
./ 当前目录

-name 查询文件的名称 全局深度搜索
```




