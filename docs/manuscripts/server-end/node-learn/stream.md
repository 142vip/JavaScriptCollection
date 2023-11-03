---
title: stream
permalink: /manuscripts/server-end/node-learn/stream.html
---

# node核心模块 stream

## 什么是stream流

流（Stream），是一个数据传输手段，是端到端信息交换的一种方式，而且是有顺序、逐块读取数据、处理内容。常见使用场景http传输大文件，本地文件读取。

## node中流的基本类型

- **Readable** - 可读操作。
- **Writable** - 可写操作。
- **Duplex** - 可读可写操作.
- **Transform** - 操作被写入数据，然后读出结果。

常用事件：

- **data** - 当有数据可读时触发。
- **end** - 没有更多的数据可读时触发。
- **error** - 在接收和写入过程中发生错误时触发。
- **finish** - 所有数据已被写入到底层系统时触发。

## 使用express框架简单搭一个 http传输流

首先需要创建两个文件 input.txt 、output.txt

功能:读取input.txt中文件流式发送到服务端，服务端解析到output.txt

**依赖**

```json
  "dependencies": {
    "@types/axios": "^0.14.0",
    "axios": "^1.2.2",
    "express": "^4.18.2",
  },
  "devDependencies": {
    "@types/express": "^4.17.15",
    "@types/node": "^18.11.18",
  }
```

**服务端**

```typescript
import express from "express";
import fs, { read } from 'fs';
const app=express()

app.post('/',(req, res) => {  // node中req res本身也是流
    const writerStream = fs.createWriteStream('./output.txt');
    req.pipe(writerStream)   // 管道传输 
    req.on('end', () => {
        res.write('结束');
        res.end();
    });
})

app.listen(8081)
```

**客户端发送请求**

```typescript
import axios from "axios";
import fs from 'fs'

const file = fs.createReadStream('./input.txt');
const url= "http://localhost:8081/"

axios({
    method:'post',
    data:file,
    url:url,
    headers: {
        'Content-Type': 'application/octet-stream',
      },
}).then(res=>{
    console.log(res.data)
})
```
