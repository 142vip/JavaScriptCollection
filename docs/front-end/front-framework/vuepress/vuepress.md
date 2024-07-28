---
title: Vuepress
permalink: /front-end/front-framework/vuepress.html
---

# Vuepress

Vue 驱动的静态网站生成器，具有简介至上、高性能、Vue驱动等特点。

## 快速上手

```bash

# 在你的项目中安装
pnpm add -D vuepress@next @vuepress/client@next vue

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
pnpm vuepress dev

# 构建静态文件
pnpm vuepress build

```

这样在本地就可以生成一个静态网站

VuePress 会在 <http://localhost:8080> 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新

## 使用主题

VuePress 主题为你提供了布局、样式和其他功能，帮助你专注于 Markdown 内容的写作。

### 默认主题

VuePress 有一个开箱即用的默认主题，正使用在你当前正在浏览的文档网站上。 **如果你不指定要使用的主题，那么就会自动使用默认主题。**

为了配置默认主题，你需要在你的配置文件中通过`theme`配置项来使用它：

```js
import { defaultTheme } from 'vuepress'

export default {
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),
}
```

更多关于默认主题的配置，可以参考： <https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html>

### 社区主题

除了默认主题外，Vuepress社区也提供了一些比较好的主题，这里主要介绍自己使用非常频繁的主题 —— 【Vuepress-Theme-Hope】

## 网站部署

### Github Pages

将编译、打包后的静态文件，推送到Github Pages指定的分支

- 基于shell脚本

通过脚本，本地手动执行编译、推送代码

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```

- 基于Github Actions

使用Github流水线，将编译后的静态文件，推送到Github Pages中指定的分支中，Github获取新的推送后自动部署静态文件

```yaml
name: CD
on:
  push:
    branches:
      - master
      - next
  workflow_dispatch:

jobs:
  ## 部署到Github-Pages
  deploy-github:
    name: "部署到Github-Pages"
    if: github.repository == '142vip/JavaScriptCollection'
    runs-on: macos-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          persist-credentials: false
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      # 安装Node环境
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18.18.0
          ## 淘宝镜像加速
          registry-url: 'https://registry.npmmirror.com'

      ## 下载依赖
      - name: Install Dependencies
        run: |
          ./scripts/ci

      # 运行构建脚本
      - name: Build VuePress Site
        run: |
          ./scripts/bundle build_proxy

      ## 部署到Github Pages
      - name: Deploy To GitHub Page
        uses: crazy-max/ghaction-github-pages@v3
        with:
          target_branch: pages/github
          build_dir: docs/.vuepress/dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

### Vercel

### Netlify

## 参考资料

- Vuepress：<https://vuepress.vuejs.org/zh/guide/getting-started.html>
- Hope主题：<https://theme-hope.vuejs.press/zh/>
