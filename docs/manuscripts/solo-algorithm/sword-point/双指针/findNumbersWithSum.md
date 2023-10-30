# 和为S的两个数字

## 题目链接

- [牛客网](https://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b)


## 题目描述

输入一个升序数组 array 和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，返回任意一组即可，如果无法找出这样的数字，返回一个空数组即可。

## 刷题思路

一些基本数学知识：

- 根据`x+y=sum` 求`xy`最小  由于array是递增的，则`x` 、`y` 距离越远 xy值越小，x y距离越近xy值越大
- x+y=(x+m)+(y-m)=sum  假设x是左边元素，y是右边元素 即：y>x
- 可以理解乘积(x+m)(y-m)=xy-(y-x)*m-m^2 其中y-x>0 m^2
- 所以m值越大，其实(x+m)(y-m)越小，也就是x与y间隔也大 xy越小 ，由于array是递增的，所以只需要找到第一个满足和为sum的即可

基于这样的特性，有以下方案

方案一：

- 利用双指针left 、 right
- 逐步向左、向右逼近

方案二：

- 利用二分查找

方案三：

- 利用Map存储已有元素

方案四：

- 直接暴力解法

## 代码实现

@[code js](@code/algorithm/sword-point/双指针/findNumbersWithSum.js)

## 一些建议

- 了解二分(折半)查找的原理
- 熟练掌握Map数据结构的一些api方案
- 有时候暴力方案比较直接，存在较大优化空间

双指针模型：

```js
function FindNumbersWithSum(array, sum) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        if (array[left] + array[right] > sum) {
            right--;
        } else if (array[left] + array[right] < sum) {
            left++;
        } else {
            return [array[left], array[right]];
        }
    }
    return [];
}
```
