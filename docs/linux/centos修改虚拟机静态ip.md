<!--
 * @Description: ip切换
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-04 00:03:52
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-04 00:07:40
-->

首先，当用vmware安装centos虚拟机的时候，会有个动态的ip地址，在局域网中可以访问，一般是使用net模式；


但是当你服务ip冲突时，再次启动虚拟机的话，ip就会增加，+1的改变，连接需要不停地配置，因此考虑采用静态ip

vim编辑/etc/sysconfig/network-scripts/ifcfg-ens33

```bash

TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no"
BOOTPROTO="dhcp"
## 修改BOOTPROTO为static，
## BOOTPROTO=“static”
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="7b26cf1d-26e3-475f-851e-bd3c74b8ce40"
DEVICE="ens33"
ONBOOT="yes"

```

