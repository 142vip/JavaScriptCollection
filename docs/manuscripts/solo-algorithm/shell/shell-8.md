---
title: 算法相关文档格式模版
permalink: /manuscripts/solo-algorithm/shell/shell-8.html
---

# 算法相关文档格式模版

## 题目链接

- [牛客网](https://www.nowcoder.com/share/jump/8484115461699868052924)

## 题目描述

假设 `nowcoder.txt` 内容如下：

```text
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.4  77744  8332 ?        Ss    2021   1:15 /sbin/init noibrs splash
root         2  0.0  0.0      0     0 ?        S     2021   0:00 [kthreadd]
root         4  0.0  0.0      0     0 ?        I<    2021   0:00 [kworker/0:0H]
daemon     486  0.0  0.1  28340  2372 ?        Ss    2021   0:00 /usr/sbin/atd -f
root       586  0.0  0.3  72308  6244 ?        Ss    2021   0:01 /usr/sbin/sshd -D
root     12847  0.0  0.0   4528    68 ?        S<   Jan03   0:13 /usr/sbin/atopacctd
root     16306  1.7  1.2 151964 26132 ?        S<sl Apr15 512:03 /usr/local/aegis/aegis_client/aegis_11_25/AliYunDun
root     24143  0.0  0.4  25608  8652 ?        S<Ls 00:00   0:03 /usr/bin/atop -R -w /var/log/atop/atop_20220505 600
root     24901  0.0  0.3 107792  7008 ?        Ss   15:37   0:00 sshd: root@pts/0
root     24903  0.0  0.3  76532  7580 ?        Ss   15:37   0:00 /lib/systemd/systemd --user
root     24904  0.0  0.1 111520  2392 ?        S    15:37   0:00 (sd-pam)
```

以上内容是通过ps aux命令输出到`nowcoder.txt`文件中的，请你写一个脚本计算一下所有进程占用内存大小的和。

## 刷题思路

## 代码实现

@[code bash](@algorithm/shell/shell-1.sh)

## 一些建议
