---
title: 持续集成、持续交付
permalink: /manuscripts/develop-skill/code-manager/ci-cd.html
---

# 持续集成、持续交付

## 最佳实践

### 持续集成

```yaml
## 代码CI快速集成流水线，lint、fix、build
## 注意： 只在142vip/JavaScriptCollection时执行

name: CI
## 触发条件
on:
  # 提PR到next分支触发CI
  pull_request:
    branches:
      - next
  push:
    branches:
      - next

  # 手动触发部署
  workflow_dispatch:

  schedule:
    - cron: "0 0 1 * *"

jobs:
  Base-Build:
    name: "基础编译构建"
    runs-on: ubuntu-latest
    if: github.repository == '142vip/JavaScriptCollection' &&  github.event_name == 'pull_request'
    permissions:
      actions: read
      pull-requests: read

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          persist-credentials: false
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      ## 安装PNPM
      - name: PNPM Install
        uses: pnpm/action-setup@v2
        with:
          version: 8

      ## 安装Node环境
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18.18.0
          ## 淘宝镜像加速
          registry-url: 'https://registry.npmmirror.com'
          ## 缓存
          cache: 'pnpm'

      ## 下载依赖，并执行初始化脚本：钩子函数、思维导图构建
      - name: Install Dependencies
        run: |
          ./scripts/ci

      - name: Code LintFix
        run: |
          ./scripts/lint

      - name: Build Site
        run: |
          ./scripts/bundle build

      - name: Build Site With Proxy
        run: |
          ./scripts/bundle build_proxy

```

### 持续交付

```yaml

## CD交付流水线
##    - 部署到Github Pages
##    - 部署到Vercel托管平台
##    - 发布新的Github Release
## 参考资料：https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages

name: CD
on:
  push:
    branches:
      - next
  workflow_dispatch:

jobs:
  ## 版本发布
  release:
    name: "创建Github发布"
    runs-on: ubuntu-latest
    ## 主库next且执行release更新时执行
    if: github.repository == '142vip/JavaScriptCollection' && startsWith(github.event.head_commit.message, 'chore(release):')

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4
        with:
          persist-credentials: false
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      ### 打成压缩包
      - name: Create Zip Package
        run: |
          zip -r JavaScriptCollection.zip . \
          -x "node_modules/*" \
          -x ".git/*" 

      # 提取版本号
      - name: Get New Version Number
        id: releaseVersion
        run: |
          echo "version=$(node -p "require('./package.json').version")" >> $GITHUB_OUTPUT

      # 创建发布版本
      - name: Create New Release
        id: createRelease
        uses: actions/create-release@latest
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v${{ steps.releaseVersion.outputs.version }}
          release_name: v${{ steps.releaseVersion.outputs.version }}
          body: |
            Release ${{ steps.releaseVersion.outputs.version }}

            ### Features

            ### Bug Fixes

      ## 更新资源
      - name: Upload Resource Assets
        uses: actions/upload-release-asset@latest
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          upload_url: ${{ steps.createRelease.outputs.upload_url }}
          asset_path: ./JavaScriptCollection.zip
          asset_name: JavaScriptCollection.zip
          asset_content_type: application/zip
```

## 参考资料
