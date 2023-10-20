---
title: Eslint
permalink: /manuscripts/develop-skill/code-style/eslint.html
---
# Eslint

## 基础使用
- 配置eslint

- 生产环境安装eslint

```bash
## 安装eslint
pnpm i eslint -D

```

执行eslint命令，根据cli进行选择配置

```bash

# 执行初始化
./node_modules/.bin/eslint --init

```

会自动生成`.eslintrc.js`文件，例如：



@[code js](~@/.eslintrc.js)

其中`rules`对象可以自定义规则

相关`eslint`包`package.json`文件如下：

```package.json
"@typescript-eslint/eslint-plugin": "^5.53.0",
"@typescript-eslint/parser": "^5.53.0",
"cz-git": "^1.4.1",
"eslint": "^8.34.0",
"eslint-config-standard": "^17.0.0",
"eslint-plugin-import": "^2.25.2",
"eslint-plugin-n": "^15.0.0",
"eslint-plugin-promise": "^6.0.0",
"eslint-plugin-vue": "^9.9.0",
"husky": "^8.0.3",
"typescript": "^3.9.10",
```


## 参考资料

- <https://zhuanlan.zhihu.com/p/404677113>

