<!--
 * @Description: router对象整理
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-21 22:57:39
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-21 23:06:27
-->

## Router对象

一个router对象是一个单独的中间件实例和路由，可以把它理解为mini型的application对象，因为router对象只有执行中间件和路由的能力；
每一个express application应用都内置了一个app router路由；

router本身也像中间件一样；所以可以在`app.use()`中当做一个参数来使用，亦或者作为路由use()方法的另外一个参数。

在express框架中，顶部的express对象中有一个`Router()`方法来创建router对象，例如：
```javascript
const express=require('express');

// router对象
const router=express.Router();

```