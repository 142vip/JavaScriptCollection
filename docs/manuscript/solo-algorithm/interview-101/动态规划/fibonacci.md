# 斐波那契数列


### 题目链接

- [牛客网](https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3)
- [欢迎讨论]()

### 题目描述

大家都知道斐波那契数列，现在要求输入一个正整数 n ，请你输出斐波那契数列的第 n 项。
斐波那契数列是一个满足:

- x = 1,2时   fib(x) = 1
- x > 2  时   fib(x) = fib(x−1) + fib(x−2)

的数列
数据范围： 1≤n≤40
要求：空间复杂度O(1)，时间复杂度O(n) ，本题也有时间复杂度O(logn) 的解法

### 思路

方案一：递归

方案二：动态规划、循环迭代

### 代码实现

@[code js](@code/algorithm/interview-101/fibonacci.js)


### 一些建议

- 熟记斐波那契数列特性