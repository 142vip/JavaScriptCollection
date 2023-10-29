# Release history

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<!-- #region recent-alpha -->

## [0.0.2-alpha.6](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.5...v0.0.2-alpha.6) (2023-10-28)

### Features

- **CI:** 新增codeql流水线 ([df3365a](https://github.com/142vip/JavaScriptCollection/commit/df3365ada3a0db43c5bcc52462bde1ec1b743825))
- **gh-pages:** 丰富pages站点的提交信息，实时同步next分支内容 ([#83](https://github.com/142vip/JavaScriptCollection/issues/83)) ([bb6fb43](https://github.com/142vip/JavaScriptCollection/commit/bb6fb437e5901a670e3a63db4cdc17192824e77a))
- **markdownlint-cli:** 添加markdown文档校验，支持lint脚本自动格式化文档 ([b0275e4](https://github.com/142vip/JavaScriptCollection/commit/b0275e42051f2531121eb2d01a50f42b71bd75c2))
- 域名更新为code.142vip.cn ([d6d172f](https://github.com/142vip/JavaScriptCollection/commit/d6d172f04b12f7e19dea2589a27bf788dade8fbe))

### Bug Fixes

- **nginx:** 修改nginx配置，修复404页面出现首页问题 ([e725c90](https://github.com/142vip/JavaScriptCollection/commit/e725c90dfb3ece3042f90ad061cacfee9a1b0efc))
- **PNPM8:** 修复netlify无法安装依赖问题 ([cd2af6f](https://github.com/142vip/JavaScriptCollection/commit/cd2af6f31e014df190f30a1cbb7c1eac27be84be))
- 修复gh-pages站点同步异常 ([0eaa678](https://github.com/142vip/JavaScriptCollection/commit/0eaa678ae26549a54f3c35011e8a4c9cd80e3459))
- 修复ico加载失败 ([921d333](https://github.com/142vip/JavaScriptCollection/commit/921d33370187f8ed43c26d7e6b64d708b8a17351))

### Performance Improvements

- **assets:** 删除冗余的图片资源 ([8868834](https://github.com/142vip/JavaScriptCollection/commit/886883458d174f191c5a6e803e02014646323cd0))
- **CI:** 简化流水线校验流程 ([30007d8](https://github.com/142vip/JavaScriptCollection/commit/30007d8476d1edc1713034ac54c81c85cb7e52ed))
- **Dockerfile:** 支持node18.18.0-alpine ([f9f1702](https://github.com/142vip/JavaScriptCollection/commit/f9f17026a9a45650ebf37283820ac89abc83d8d3))

## [0.0.2-alpha.5](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.4...v0.0.2-alpha.5) (2023-10-25)

### Bug Fixes

- 修复CI中docker镜像构建异常，约束release脚本使用范围 ([#74](https://github.com/142vip/JavaScriptCollection/issues/74)) ([249524e](https://github.com/142vip/JavaScriptCollection/commit/249524e50ba74694f9eebd0dd4cf11b27393aec7))
- 修复dockerfile构建异常 ([d8e025d](https://github.com/142vip/JavaScriptCollection/commit/d8e025ded69b6de9bd93d8f6677b86a712768c37))

### Performance Improvements

- **pnpm:** CI支持PNPM8 ([d17baf7](https://github.com/142vip/JavaScriptCollection/commit/d17baf7642ee91709ea2e83dd51d95089dffe89e))
- vue、eslint模块依赖更新 ([b29225e](https://github.com/142vip/JavaScriptCollection/commit/b29225e8ef0e3763cfee8d4fbdc36ea6595626de))

## [0.0.2-alpha.4](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.3...v0.0.2-alpha.4) (2023-10-25)

### Features

- 优化流水线执行条件，只允许在主仓库执行 ([7080c96](https://github.com/142vip/JavaScriptCollection/commit/7080c96afa67535e986baef9693f6447d79be350))
- 关闭artalk评论，后续统一开放 ([1da7eca](https://github.com/142vip/JavaScriptCollection/commit/1da7ecad8d62bd27919c6aec7e390227864dd878))
- 大幅修改网站导航、目录结构，新增一些文档 ([0bf5ce8](https://github.com/142vip/JavaScriptCollection/commit/0bf5ce88fbedc42143d46404cf6cfa8ab2b0d2cd))
- 导航栏、侧边栏内容修改，新增目录对应的文档 ([5f1e13b](https://github.com/142vip/JavaScriptCollection/commit/5f1e13b3bb1c3978831a6119a006b5db9e39ed90))
- 文档内容大幅变更，新增部分文章固定链接 ([e1f1df0](https://github.com/142vip/JavaScriptCollection/commit/e1f1df06a22ac3fe4c329acefca035b914542346))
- 集成artalk评论系统 ([64bc531](https://github.com/142vip/JavaScriptCollection/commit/64bc5319e2d73d9c9047e823ed0edcea2358554b))

### Bug Fixes

- 修复内容宽度错误，水平管道条异常显示 ([97ee116](https://github.com/142vip/JavaScriptCollection/commit/97ee116c654597cdcf06b3f62c940f371422d193))

### Performance Improvements

- CI脚本添加pnpm下载，导航栏配置文件优化 ([0e6034a](https://github.com/142vip/JavaScriptCollection/commit/0e6034a286cb3c5362df4440562cf1d0ddf03d06))
- 更新依赖，升级webpack ([9779c79](https://github.com/142vip/JavaScriptCollection/commit/9779c79b9b6869fc8d8d2b03e8b3e3599f46868a))

## [0.0.2-alpha.3](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.2...v0.0.2-alpha.3) (2023-10-13)

### Features

- 新增变更记录文档，支持release自动生成 ([77bf314](https://github.com/142vip/JavaScriptCollection/commit/77bf314d715a7b01cd8fe90e1691a9b13d192b68))
- 站点404信息优化，新增周杰伦歌词 ([aafdd25](https://github.com/142vip/JavaScriptCollection/commit/aafdd25f0726ce730e463529739eaf6bedda30c6))

### Bug Fixes

- 修复图片显示异常，cdn域名切换为：cdn.statically.io ([5a20451](https://github.com/142vip/JavaScriptCollection/commit/5a204516805dc1cd173c9434a5e4e5b25c62d858))

### Performance Improvements

- vuepress版本升级到最新，关闭站点博客功能 ([ddd10b4](https://github.com/142vip/JavaScriptCollection/commit/ddd10b41a6ee71bb76bed67aabdf4ed4a9441a6c))
- 流水线支持国内依赖源，规范CI/CD流程 ([bc36957](https://github.com/142vip/JavaScriptCollection/commit/bc369576e9f08d25139cbe1d118b052f5da4faf9))
- 锁定版本Node>18，scripts钩子分配权限 ([09089fb](https://github.com/142vip/JavaScriptCollection/commit/09089fb6d022c50034129a77e772da284c513b03))

## [0.0.2-alpha.2](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.1...v0.0.2-alpha.2) (2023-09-12)

### Features

- 剑指算法文档更新，修改目录结构 ([8de1a9b](https://github.com/142vip/JavaScriptCollection/commit/8de1a9b45da47622612ff6fcc1b9c407ac5254be))
- 站点新增百度统计相关配置 ([0724b3b](https://github.com/142vip/JavaScriptCollection/commit/0724b3b08a723601642eee238310cc0ef6508c8c))

### Performance Improvements

- update package version ([1ee2370](https://github.com/142vip/JavaScriptCollection/commit/1ee2370107265b68ef39b3571f9cb1f5a9f33c68))

## 0.0.2-alpha.1 (2023-09-09)

### Features

- **algorithm:** 算法文档更新，侧边栏优化 ([80f08f6](https://github.com/142vip/JavaScriptCollection/commit/80f08f66dd98e3a511f6ac48f1f55bca8bbc6655))
- ci流程优化，修复部分脚本异常 ([8e50abf](https://github.com/142vip/JavaScriptCollection/commit/8e50abfc505a36be3f31d5ac4e17dceb72a80981))
- **eslint:** husky代码校验，eslint规则配置 ([9e2f9bf](https://github.com/142vip/JavaScriptCollection/commit/9e2f9bfeea919317eb7f4a4a8e9eb41474976aa8))
- **scripts:** 脚本优化，package.json调整 ([accd1d1](https://github.com/142vip/JavaScriptCollection/commit/accd1d19f0a0e57176557babfb6e416d21a3949d))
- **vercel:** vercel 统计相关配置 ([fe5f02e](https://github.com/142vip/JavaScriptCollection/commit/fe5f02ed5b921b26105233653ef66d9eef932430))
- 优化js代码，新增链表相关刷题文档 ([d99044f](https://github.com/142vip/JavaScriptCollection/commit/d99044f1ffc643b14b8c41cc63f6e9bab105b71b))
- 侧边栏配置更新 ([88b70aa](https://github.com/142vip/JavaScriptCollection/commit/88b70aad92b365b2bce92062b867b6edb1e377cc))
- 修复 netlify平台部署 ([0cf2830](https://github.com/142vip/JavaScriptCollection/commit/0cf2830fe4d00de0733eff89a970886d29475d70))
- 修改 基础配置更新 ([c721ab1](https://github.com/142vip/JavaScriptCollection/commit/c721ab11f36fcd4af7dd02409169f0639fff3ba6))
- 修改Dockerfile,新增本地快速构建脚本 ([1a4d3d6](https://github.com/142vip/JavaScriptCollection/commit/1a4d3d697e3cea1fbfd2e9bf7f2e48d5a8e58667))
- 修改eslint格式化 ([46c026e](https://github.com/142vip/JavaScriptCollection/commit/46c026e86246b39d8b6238260d0f96e2d65e9f3a))
- 修改hope主题配置，新增一些文档优化 ([c564f9f](https://github.com/142vip/JavaScriptCollection/commit/c564f9f8443eb47498ac2efe076a2c822fb0384a))
- 修改一些配置，升级依赖 ([8e4fbb6](https://github.com/142vip/JavaScriptCollection/commit/8e4fbb655cbc6b8f424cc3b6a81d0465e30c4a12))
- 修改侧边栏结构，优化镜像构建脚本 ([7839f95](https://github.com/142vip/JavaScriptCollection/commit/7839f95e11e93f8d3c48a7c2a33919d2d1683000))
- 修改导航栏结构，添加文档 ([9bbe9ae](https://github.com/142vip/JavaScriptCollection/commit/9bbe9aed4b9885f927f4df8c390570e1fc17b3fb))
- 修改部署脚本及配置 ([5474059](https://github.com/142vip/JavaScriptCollection/commit/54740596dfa0e7391c9a464e9884138425ce6aab))
- 修改镜像版本，删除无用脚本 ([2054593](https://github.com/142vip/JavaScriptCollection/commit/2054593e3031892ad5b99445622c4bc1ec592967))
- 升级eslint版本，修改侧边栏 ([3dca375](https://github.com/142vip/JavaScriptCollection/commit/3dca3756c14b238320cee914ac789facbd9881dc))
- 忽略文件配置修改 ([3251a00](https://github.com/142vip/JavaScriptCollection/commit/3251a0093db0631bbc7c8859ac7027d914e588b6))
- 支持next自动部署ci ([3fbc033](https://github.com/142vip/JavaScriptCollection/commit/3fbc033022098099fd6d24757d097d979d9e5fb8))
- 支持中文配置，优化访问链接 ([59d6c21](https://github.com/142vip/JavaScriptCollection/commit/59d6c21308f0b00ea834836f5f6448b73172e71d))
- 新增linux基础指令文档 ([88a9f2c](https://github.com/142vip/JavaScriptCollection/commit/88a9f2c0ec40e957e8818c96a8c75985de73369c))
- 新增PROXY_DOMAIN环境变量配置，支持base转化 ([5ea2e5d](https://github.com/142vip/JavaScriptCollection/commit/5ea2e5d3537e3ded6a57aff83bdae985316c7f3a))
- 新增redis主从集群文档 ([feebfbe](https://github.com/142vip/JavaScriptCollection/commit/feebfbea121c2bbacdaef751178a042cbbb1f6a5))
- 新增一些文档，优化配置 ([1c24993](https://github.com/142vip/JavaScriptCollection/commit/1c24993ec78cd87abc927317af31fe0064b262c0))
- 新增文档,优化navbar导航栏 ([983b783](https://github.com/142vip/JavaScriptCollection/commit/983b7839e2be4588b1ac680a0f2692d1f7343b88))
- 更新文档，新增在线浏览地址 ([194b22e](https://github.com/142vip/JavaScriptCollection/commit/194b22e44e26777262c0f6beb601ccdc00e9b168))
- 版本、侧边栏更新 ([50da068](https://github.com/142vip/JavaScriptCollection/commit/50da06817a2d2358bf118f9f48ac6fe36c6fcc01))
- 还原config配置，修复目录问题 ([9499210](https://github.com/142vip/JavaScriptCollection/commit/949921082b793d1aa227b585651d9469184c502b))
- 配置cz，优化commit hooks ([0d142c8](https://github.com/142vip/JavaScriptCollection/commit/0d142c8fc01f7a01aa3bd5f2d7271788113a31e9))
- 配置采用ts语法，新增代码文件引入 ([43aeaff](https://github.com/142vip/JavaScriptCollection/commit/43aeaff341a6c09acea4292c7d3deecd8613aabb))
- 首页导航栏内容优化 ([0df1d96](https://github.com/142vip/JavaScriptCollection/commit/0df1d968b099f467e6e83f30b04eb4d717b99978))

### Bug Fixes

- esc deploy ([0c5c330](https://github.com/142vip/JavaScriptCollection/commit/0c5c3300583056f344e18382d54d4ee143978155))
- 修复 格式 ([837e05d](https://github.com/142vip/JavaScriptCollection/commit/837e05d42c333044bee413e4f15f2e49406c08d3))
- 修复build指令异常 ([d009770](https://github.com/142vip/JavaScriptCollection/commit/d0097705dd534716c210ef0c531873ee438c469d))
- 配置优化 ([a085309](https://github.com/142vip/JavaScriptCollection/commit/a0853096156e2eb890ad3187edfa0fae5f599e00))

### Performance Improvements

- **pnpm:** 升级模块 ([b283402](https://github.com/142vip/JavaScriptCollection/commit/b2834025a4de2162d25f7694be75585dd4244ef5))

<!-- #endregion recent-alpha -->
