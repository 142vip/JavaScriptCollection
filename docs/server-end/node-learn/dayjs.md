---
title: dayjs
permalink: /server-end/node-learn/dayjs.html
---

# dayjs

Day.js 是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样

- 官网：<https://day.js.org>

## 安装

```bash
pnpm install dayjs
npm install dayjs
```

## 高频使用

```js
// 时间戳 毫秒 13位
console.log(dayjs('2022-01-25').valueOf())
// 时间戳 秒 10位
console.log(dayjs('2022-01-25').unix())

// 格式化
console.log(dayjs().format('YYYY-MM-DDTHH:mm:ss'))
```

## 解析

@[code js](@code/node/dayjs/demo-1.js)

### 取值|赋值

@[code js](@code/node/dayjs/demo-2.js)

## 操作

@[code js](@code/node/dayjs/demo-3.js)

## 显示

@[code js](@code/node/dayjs/demo-4.js)

## 查询

@[code js](@code/node/dayjs/demo-5.js)
