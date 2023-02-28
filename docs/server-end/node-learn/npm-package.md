---
title: 常用模块包
---


### gm

> 使用前，先安装GraphicsMagick或者ImageMagick，支持图片处理，添加水印、裁剪...

```js
var fs = require('fs')
  , gm = require('gm');

// resize and remove EXIF profile data
gm('/path/to/my/img.jpg')
.resize(240, 240)
.noProfile()
.write('/path/to/resize.png', function (err) {
  if (!err) console.log('done');
});
```

实践：

- <https://blog.csdn.net/dreamer2020/article/details/51647885>

- <https://www.jianshu.com/p/a651258c9135>

参考资料：


- api参考：<https://github.com/aheckmann/gm>

- 文档参考：<http://aheckmann.github.io/gm/docs.html>

- 在线体验：<http://aheckmann.github.io/gm/> 


### moment

> 时间格式化

```js
const moment = require('moment')
// 时间格式化
moment(XXXXXX).format('YYYY-MM-DD HH:mm:ss')
```

参考资料：

- <https://momentjs.com/docs/>

### crypto || crypto.js

> 支持加密、哈希、指定长度随机字符串 等 【非常好用】




```js
const crypto = require('crypto.js')
//a21cf00de4343af1b8b2087af07eb7b9
crypto.hmac('md5', '123456', 'sdfvkjfhd')


// hashMac算法
function hashMac(code,key){
  return crypto.HmacSHA1(code,key).toString(crypto.enc.Base64)
}
```

参考资料：

- crypto地址：<https://www.npmjs.com/package/bcrypt>

- crypto.js地址：<https://www.npmjs.com/package/crypto.js>

### path

> 内置模块。路径处理，在相对路径、绝对路劲的处理上，很有优势


```js
// 路径拼接
path.join()

// 提供平台特定的路径片段分隔符
path.sep
// Windows 上是 \。
// POSIX 上是 /。
```

参考资料：

- <http://nodejs.cn/api/path.html>

### fs-extra


> 文件操作相关，基于fs模块封装

```js
const fse = require('fs-extra')
// 遍历某个目录下所有文件【常用方案】
fse.readdirSync(path.join(_dirname),'XXXX')
.filter()  // 文件过滤
.forEach() // 遍历

```
参考资料：

- <https://www.npmjs.com/package/fs-extra>

### qr-images


> 简单易用的二维码生成,模块[qrcode](https://www.npmjs.com/package/qrcode)也支持类似功能

```js
const qr = require('qr-image');
 
const qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
const svg_string = qr.imageSync('I love QR!', { type: 'svg' });
```

参考资料：

- <https://www.npmjs.com/package/qr-image>


### lodash



> Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。


```js
// Load the full build.
const  _ = require('lodash');

// 调用方法 提供了很多...


```

参考资料：

- 发音：<https://zh.forvo.com/search/lodash/>
- 地址：<https://www.lodashjs.com/>


### bluebird


> bluebird是一个第三方Promise类库，相比其它第三方类库或标准对象来说，功能更齐全而不臃肿、浏览器兼容性更好!
>
> 在async/await之前使用频率非常高的npm包，直接将回调函数转化为promise对象【配合wechat项目学习】


```js
const fs=require('fs')
const Promise = require("bluebird");
// 转化为async方法，原来是回调函数的形式
const readFileAsync = Promise.promisify(fs.readFile)

```

参考资料：

- 地址：<http://bluebirdjs.com/docs/getting-started.html>
