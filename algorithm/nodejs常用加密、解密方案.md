## Nodejs加密解密方案

##### 对称加密

```js
//des加密
var desEncrypt = function(input, key, iv)
{
    var cipher = crypto.createCipheriv("des",new Buffer(key), new Buffer(iv));
    var ciph = cipher.update(input, 'utf8', 'base64');
    ciph += cipher.final('base64');
    return ciph;
}

//des解密
var desDecryt = function(input, key, iv)
{
    var cipher = crypto.createDecipheriv("des",new Buffer(key), new Buffer(iv));
    var buf1 = cipher.update(input, 'base64',"utf8");
    var buf2 = cipher.final("utf8");
    var result = buf1+buf2;
    return result;
}

```

