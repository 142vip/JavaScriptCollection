---
title: SHELL-2 统计文件的行数
permalink: /solo-algorithm/shell/shell-2.html
---
# SHELL-2 统计文件的行数

## 题目链接

- [牛客网](https://www.nowcoder.com/practice/205ccba30b264ae697a78f425f276779)

## 题目描述

查看日志的时候，经常会从文件的末尾往前查看，请你写一个bash shell脚本以输出一个文本文件`nowcoder.txt`中的最后5行。
示例:
假设 `nowcoder.txt` 内容如下：

```text
#include<iostream>
using namespace std;
int main()
{
int a = 10;
int b = 100;
cout << "a + b:" << a + b << endl;
return 0;
}
```

你的脚本应当输出：

```text
int a = 10;
int b = 100;
cout << "a + b:" << a + b << endl;
return 0;
}
```

## 代码实现

@[code bash](@algorithm/shell/shell-2.sh)

## 一些建议
