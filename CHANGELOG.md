# Release history

All notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<!-- #region recent-alpha -->

## v0.0.2-alpha.20 (2024-10-01)

### ✨ Features

- 增加文档内容，优化站点主页，新增`icon`图标、超链接 &nbsp;-&nbsp; by **chufan** [<samp>(be4d8)</samp>](https://github.com/142vip/JavaScriptCollection/commit/be4d82a)
- 移除`@142vip/release-version`模块，升级依赖。替换`CD`流水线上的`changelog`命令 &nbsp;-&nbsp; by **chufan** [<samp>(4ddd2)</samp>](https://github.com/142vip/JavaScriptCollection/commit/4ddd232)
- 移除`antfu/eslint-config`模块，使用`@142vip/eslint-config`替换，修复配置异常 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/JavaScriptCollection/issues/177 [<samp>(4f7d2)</samp>](https://github.com/142vip/JavaScriptCollection/commit/4f7d214)

### 🔥 Performance

- 升级`@142vip/utils`依赖版本，引入`only-allow`严格校验`pnpm`使用 &nbsp;-&nbsp; by **chufan** [<samp>(57229)</samp>](https://github.com/142vip/JavaScriptCollection/commit/5722988)

### 🐛 Bug Fixes

- 修复`Dockerfile`构建异常，增加`git`国内下载 &nbsp;-&nbsp; by **chufan** [<samp>(0f686)</samp>](https://github.com/142vip/JavaScriptCollection/commit/0f686f3)

**Release New Version v0.0.2-alpha.20 [👉 View Changes On GitHub](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.19...v0.0.2-alpha.20)**

## v0.0.2-alpha.19 (2024-09-23)

### ✨ Features

- `pnpm`包下载源改为：`https://mirrors.tencent.com/npm/` &nbsp;-&nbsp; by **chufan** [<samp>(1d124)</samp>](https://github.com/142vip/JavaScriptCollection/commit/1d124c4)
- 移除无用`pnpm`模块，优化`bundler`编译配置 &nbsp;-&nbsp; by **chufan** [<samp>(742ee)</samp>](https://github.com/142vip/JavaScriptCollection/commit/742eeb7)
- 移除`husky`模块，使用`simple-git-hooks`来配置钩子函数，规范仓库内容 &nbsp;-&nbsp; by **chufan** [<samp>(0298f)</samp>](https://github.com/142vip/JavaScriptCollection/commit/0298f3b)
- 修改导航栏配置，支持图标，完善文档内容 &nbsp;-&nbsp; by **chufan** [<samp>(94128)</samp>](https://github.com/142vip/JavaScriptCollection/commit/9412880)

### 🔥 Performance

- 优化`bundle`脚本，支持`Dockerfile`构建 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/JavaScriptCollection/issues/165 [<samp>(23155)</samp>](https://github.com/142vip/JavaScriptCollection/commit/2315590)
- 升级`vuepress`相关版本依赖，修改新版本模块配置 &nbsp;-&nbsp; by **chufan** [<samp>(be055)</samp>](https://github.com/142vip/JavaScriptCollection/commit/be05540)

### 🐛 Bug Fixes

- 修复`corepack`下载源在`Dockerfile`中使用异常，统一为:`https://mirrors.tencent.com/npm/` &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/JavaScriptCollection/issues/168 [<samp>(df0db)</samp>](https://github.com/142vip/JavaScriptCollection/commit/df0db7b)
- 基于`Eslint`规则修复一些文档格式问题 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/JavaScriptCollection/issues/170 [<samp>(9e4d7)</samp>](https://github.com/142vip/JavaScriptCollection/commit/9e4d75f)

### 📖 Documentation

- 更新文档 &nbsp;-&nbsp; by **chufan** [<samp>(bc13b)</samp>](https://github.com/142vip/JavaScriptCollection/commit/bc13bd8)

**Release New Version v0.0.2-alpha.19 [👉 View Changes On GitHub](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.18...v0.0.2-alpha.19)**

## v0.0.2-alpha.18 (2024-09-19)

### ✨ Features

- 增加`externalLinkIcon`配置，不显示外部链接图标 &nbsp;-&nbsp; by **chufan** [<samp>(b1602)</samp>](https://github.com/142vip/JavaScriptCollection/commit/b160234)
- 移除`bumpp`等用于发布功能的模块，简化`release`脚本 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/JavaScriptCollection/issues/153 [<samp>(2e64d)</samp>](https://github.com/142vip/JavaScriptCollection/commit/2e64d8c)
- 使用`@142vip/fairy-cli`模块，优化`clean`命令 &nbsp;-&nbsp; by **chufan** [<samp>(2027b)</samp>](https://github.com/142vip/JavaScriptCollection/commit/2027b1a)
- `pnpm`版本锁定`9.6.0`，增加`only-allow`配置约束`pnpm` &nbsp;-&nbsp; by **chufan** [<samp>(038f1)</samp>](https://github.com/142vip/JavaScriptCollection/commit/038f1b7)
- 升级`@antfu/eslint-config`到最新版本，新增`lint`相关命令，删除重复的`lint`脚本 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/JavaScriptCollection/issues/159 [<samp>(c45a0)</samp>](https://github.com/142vip/JavaScriptCollection/commit/c45a087)
- 配置`release`命令,升级`@142vip/fairy-cli`模块，打通整个发布工作流 &nbsp;-&nbsp; by **chufan** [<samp>(4a7de)</samp>](https://github.com/142vip/JavaScriptCollection/commit/4a7def8)
- 移除`exec`脚本执行器，修改`bundle`脚本逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(05f7f)</samp>](https://github.com/142vip/JavaScriptCollection/commit/05f7fa1)
- **GitHub Actions**:
  - 移除流水线下载依赖时的`registry-url`配置 &nbsp;-&nbsp; by **chufan** [<samp>(a0dd6)</samp>](https://github.com/142vip/JavaScriptCollection/commit/a0dd623)

### 🔥 Performance

- 优化`scripts`脚本，`ci`命令统一`npm`配置 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/JavaScriptCollection/issues/156 [<samp>(c5a55)</samp>](https://github.com/142vip/JavaScriptCollection/commit/c5a558d)
- 移除`@142vip/common`模块，使用`@142vip/utils`替换 &nbsp;-&nbsp; by **chufan** [<samp>(da164)</samp>](https://github.com/142vip/JavaScriptCollection/commit/da164f3)

### 🐛 Bug Fixes

- 使用`eslint@8.55.0`版本，修复`IDEA`校验规则报错 &nbsp;-&nbsp; by **chufan** [<samp>(3983a)</samp>](https://github.com/142vip/JavaScriptCollection/commit/3983aa5)
- 修复文档、代码的`Eslint`校验错误 &nbsp;-&nbsp; by **微信公众号：储凡** and **chufan** in https://github.com/142vip/JavaScriptCollection/issues/154 [<samp>(7e54c)</samp>](https://github.com/142vip/JavaScriptCollection/commit/7e54cfd)
- 升级`express`模块到`4.21.0`版本，解决模块安全告警 &nbsp;-&nbsp; by **chufan** [<samp>(5720d)</samp>](https://github.com/142vip/JavaScriptCollection/commit/5720dbb)

**Release New Version v0.0.2-alpha.18 [👉 View Changes On GitHub](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.17...v0.0.2-alpha.18)**

## v0.0.2-alpha.17 (2024-08-02)

### 🐛 Bug Fixes

- 修复依赖异常，支持`eslint`校验 &nbsp;-&nbsp; by **chufan** [<samp>(6daed)</samp>](https://github.com/142vip/JavaScriptCollection/commit/6daed76)

**Release New Version v0.0.2-alpha.17 [👉 View Changes On GitHub](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.16...v0.0.2-alpha.17)**

## v0.0.2-alpha.16 (2024-08-01)

### ✨ Features

- 调整导航栏，对文档排版和显示做了些优化 &nbsp;-&nbsp; by **chufan** [<samp>(842f3)</samp>](https://github.com/142vip/JavaScriptCollection/commit/842f3d1)
- 全局搜索框支持中文提示 &nbsp;-&nbsp; by **chufan** [<samp>(4a883)</samp>](https://github.com/142vip/JavaScriptCollection/commit/4a883ac)
- `Eslint`回退到`8.55.0`版本，增加`monorepo`配置管理`code`模块中的依赖。 &nbsp;-&nbsp; by **chufan** [<samp>(28873)</samp>](https://github.com/142vip/JavaScriptCollection/commit/28873aa)

### 🐛 Bug Fixes

- 修复sync脚本日志异常 &nbsp;-&nbsp; by **chufan** [<samp>(bc086)</samp>](https://github.com/142vip/JavaScriptCollection/commit/bc086c2)
- 修复变更记录页面异常，增加文档固定链接 &nbsp;-&nbsp; by **chufan** [<samp>(303a8)</samp>](https://github.com/142vip/JavaScriptCollection/commit/303a8a0)

**Release New Version v0.0.2-alpha.16 [👉 View Changes On GitHub](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.15...v0.0.2-alpha.16)**

## v0.0.2-alpha.15 (2024-07-31)

### 🐛 Bug Fixes

- **Github Actions**:
  - 修复`Release`流水线异常 &nbsp;-&nbsp; by **chufan** [<samp>(d5226)</samp>](https://github.com/142vip/JavaScriptCollection/commit/d5226de)
  - 关闭`Docker`镜像构建 &nbsp;-&nbsp; by **chufan** [<samp>(74884)</samp>](https://github.com/142vip/JavaScriptCollection/commit/7488413)

**Release New Version v0.0.2-alpha.15 [👉 View Changes On GitHub](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.14...v0.0.2-alpha.15)**

## v0.0.2-alpha.14 (2024-07-30)

### ✨ Features

- 关闭自动生成README目录配置，避免构建时覆盖和路径导航问题 &nbsp;-&nbsp; by **chufan** [<samp>(b3549)</samp>](https://github.com/142vip/JavaScriptCollection/commit/b3549ff)
- 更新`release`脚本，使用`bumpx`命令生成`CHANGELOG`文档 &nbsp;-&nbsp; by **chufan** [<samp>(54f7b)</samp>](https://github.com/142vip/JavaScriptCollection/commit/54f7b51)
- 删除`dev`脚本，脚本逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(78795)</samp>](https://github.com/142vip/JavaScriptCollection/commit/78795c3)
- 删除`deploy`和`docker`脚本，备份对应逻辑 &nbsp;-&nbsp; by **chufan** [<samp>(2cdc5)</samp>](https://github.com/142vip/JavaScriptCollection/commit/2cdc560)
- 更换阿里云镜像地址 &nbsp;-&nbsp; by **chufan** [<samp>(be2e5)</samp>](https://github.com/142vip/JavaScriptCollection/commit/be2e584)
- 移除`markdown-cli`模块，采用`prettier`校验文档格式 &nbsp;-&nbsp; by **chufan** [<samp>(5a2b2)</samp>](https://github.com/142vip/JavaScriptCollection/commit/5a2b23c)
- 更换`github pages`部署方式，支持`actions`部署 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/JavaScriptCollection/issues/144 [<samp>(7afb3)</samp>](https://github.com/142vip/JavaScriptCollection/commit/7afb312)

### 🔥 Performance

- 升级@142vip/release-version依赖，支持新版本 &nbsp;-&nbsp; by **chufan** [<samp>(cd095)</samp>](https://github.com/142vip/JavaScriptCollection/commit/cd09516)

### 🐛 Bug Fixes

- 修复Express版本过低告警 &nbsp;-&nbsp; by **142vip.cn** [<samp>(930eb)</samp>](https://github.com/142vip/JavaScriptCollection/commit/930eb8e)
- 修复文档引入异常，优化流水线触发条件 &nbsp;-&nbsp; by **chufan** [<samp>(7d5ae)</samp>](https://github.com/142vip/JavaScriptCollection/commit/7d5aebb)
- 修复sync脚本同步异常，支持main作为默认分支 &nbsp;-&nbsp; by **chufan** [<samp>(acaa3)</samp>](https://github.com/142vip/JavaScriptCollection/commit/acaa3de)

### 💅 Refactors

- 升级vuepress相关版本，优化项目结构 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/JavaScriptCollection/issues/137 [<samp>(c0f2d)</samp>](https://github.com/142vip/JavaScriptCollection/commit/c0f2d19)
- 替换eslint规则，使用antfu/eslint模块 &nbsp;-&nbsp; by **142vip.cn** in https://github.com/142vip/JavaScriptCollection/issues/138 [<samp>(a3cca)</samp>](https://github.com/142vip/JavaScriptCollection/commit/a3ccae0)

**Release New Version v0.0.2-alpha.14 [👉 View Changes On GitHub](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.13...v0.0.2-alpha.14)**

## [v0.0.2-alpha.13](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.12...v0.0.2-alpha.13) (2024-04-17)


### Features

* 新增Jenkins流水线配置 ([#133](https://github.com/142vip/JavaScriptCollection/issues/133)) ([263e235](https://github.com/142vip/JavaScriptCollection/commit/263e2352463a4d7b82b935a6553a8fc48ecdfc2f))


### Performance Improvements

* 升级基础工具依赖 ([#134](https://github.com/142vip/JavaScriptCollection/issues/134)) ([7f1755c](https://github.com/142vip/JavaScriptCollection/commit/7f1755c29650617b30182a7c715782dc2eba700c))

## [v0.0.2-alpha.12](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.11...v0.0.2-alpha.12) (2023-12-25)


### Features

* **Egg.js:** 修改教程文档 ([d8829ea](https://github.com/142vip/JavaScriptCollection/commit/d8829eae9801ec100ee36815a09a5bba3ef14002))
* **ES6:** 新增2016新增特性和ts文档 ([6b33bf2](https://github.com/142vip/JavaScriptCollection/commit/6b33bf2da430459d004828aacc147d72f0d0734a))
* **Jenkins:** 新增安装、部署配置，记录流程文档 ([5855015](https://github.com/142vip/JavaScriptCollection/commit/58550151394a1cd441c5b5d6446f5e1162dcdee5))
* **ORM:** 新增Sequelize教程文档、代码 ([6849e0b](https://github.com/142vip/JavaScriptCollection/commit/6849e0ba9e7690c7355aea1731f30a832b7b0a8f))
* **ORM:** 新增模型相关教程 ([7533864](https://github.com/142vip/JavaScriptCollection/commit/7533864beb52943fb9663b4ac1c95617a45df8b1))
* 修改一些文档格式、排版，整理侧边导航栏 ([1519251](https://github.com/142vip/JavaScriptCollection/commit/1519251aa761191e95499acb619dd8762130e5c9))
* 大幅新增设计模式、Linux命令、ORM框架教程文档 ([e6a7995](https://github.com/142vip/JavaScriptCollection/commit/e6a7995b51ebdad56db7e7a4289a7a10be61653f))
* 新增ES5文档总结 ([4f754ba](https://github.com/142vip/JavaScriptCollection/commit/4f754ba085d747245c7bc72b66e39f134fc06875))


### Bug Fixes

* 修复URL地址信息安全告警 ([1c2e4e2](https://github.com/142vip/JavaScriptCollection/commit/1c2e4e242151e312cf91875890cbcb14bcd2101f))
* 修复脚本日志多行打印问题 ([442a57b](https://github.com/142vip/JavaScriptCollection/commit/442a57bc253cb7a70d6045da3ef9ee7e224c44a5))
* 添加npx配置修复release脚本异常 ([5715c6a](https://github.com/142vip/JavaScriptCollection/commit/5715c6ac97233af1eef49193a0917f865331e137))


### Performance Improvements

* **deps-dev:** bump vite from 4.4.11 to 4.4.12 ([311979e](https://github.com/142vip/JavaScriptCollection/commit/311979ec1297d095b0a5b9cb5d579d3073694381))
* 依赖版本更新 ([2b5cd60](https://github.com/142vip/JavaScriptCollection/commit/2b5cd605db4f737faf881278acfc09df28e274f3))

## [v0.0.2-alpha.11](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.10...v0.0.2-alpha.11) (2023-11-21)


### Features

* **express:** 新增错误处理文档和demo代码 ([d3a774b](https://github.com/142vip/JavaScriptCollection/commit/d3a774b15d9ac2270c01ce951beb603fc0c099f2))
* 更新忽略文件、链接地址 ([82053f2](https://github.com/142vip/JavaScriptCollection/commit/82053f2b455a659823fbf00393455eb9c81376c2))
* 自媒体、二维码链接等样式修改,关闭全屏模式 ([9c79aa9](https://github.com/142vip/JavaScriptCollection/commit/9c79aa97a8d03c85a81e473e1cd8644315c765c4))


### Bug Fixes

* **镜像:** 修复标签信息异常 ([b068077](https://github.com/142vip/JavaScriptCollection/commit/b068077c87f621869465cdfa4b0561fa68f1a6d8))


### Performance Improvements

* **镜像:** 使用Layer缓存信息，提高Docker构建、打包速度 ([8c77d64](https://github.com/142vip/JavaScriptCollection/commit/8c77d6475a7b376c38e665db7d8701a95fa3e8f6))

## [v0.0.2-alpha.10](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.9...v0.0.2-alpha.10) (2023-11-15)


### Features

* **algo:** 新增剑指、shell等算法文档 ([6ff0ad5](https://github.com/142vip/JavaScriptCollection/commit/6ff0ad565e7e1cad606709604887aad2b54e5d1b))
* **express:** 新增使用教程等文档 ([4a53be9](https://github.com/142vip/JavaScriptCollection/commit/4a53be9fbef7bc4e3cd06a3f2584aef3d77117ed))
* **express:** 新增框架API方法文档 ([40a637d](https://github.com/142vip/JavaScriptCollection/commit/40a637dbcf057af07b02bfd30bb55d665cdb0a10))
* **express:** 新增模板项目文档、代码 ([26ae613](https://github.com/142vip/JavaScriptCollection/commit/26ae613ec360ae29d7955965cebdfa9084627f45))
* **express:** 新增静态资源托管相关文档 ([4178c85](https://github.com/142vip/JavaScriptCollection/commit/4178c8520bc71be517de970f6650b055f25dc595))
* **koa:** 大幅新增Koa框架教程、文档 ([3c69b0e](https://github.com/142vip/JavaScriptCollection/commit/3c69b0e05d82cb3b848bae941f536ef4faa3588e))
* **scripts:** 新增sync脚本，同步master分支到不同仓库 ([#111](https://github.com/142vip/JavaScriptCollection/issues/111)) ([7ad9f29](https://github.com/142vip/JavaScriptCollection/commit/7ad9f2946abe41ccc1f8917f0a19a6e2ed308efe))
* **scripts:** 新增sync脚本，同步master到不同仓库 ([26d4f75](https://github.com/142vip/JavaScriptCollection/commit/26d4f75d7e15e5a3d33d8dbc3fa2c15d71b9dc9d))


### Bug Fixes

* **koa:** 修复文档显示异常，完善教程 ([491d7e6](https://github.com/142vip/JavaScriptCollection/commit/491d7e6754edef581437953538e6bdde8ebb76ad))
* **undici:** 升级依赖，修复Undici跨源泄露cookies问题 ([634e956](https://github.com/142vip/JavaScriptCollection/commit/634e956d471ce8ac8048e5b387fc9ae120977259))
* 修复sync脚本在next上同步异常 ([40212d9](https://github.com/142vip/JavaScriptCollection/commit/40212d9470ddbe54b56c60ca4a1cc386c1390562))
* 修复图片居中异常 ([4028d49](https://github.com/142vip/JavaScriptCollection/commit/4028d491d15e40118d8c8bf706819c1a87a950fa))
* 修复日志注入问题 ([4cd71ba](https://github.com/142vip/JavaScriptCollection/commit/4cd71ba05013aef30e141969fb2e073b4efb47ff))
* 修复首页信息展示异常 ([#103](https://github.com/142vip/JavaScriptCollection/issues/103)) ([b039c36](https://github.com/142vip/JavaScriptCollection/commit/b039c361a550e8277618f158367d3f1a73ad198a))
* 修复首页链接异常 ([feb375a](https://github.com/142vip/JavaScriptCollection/commit/feb375a3a594f3904710a08de6f2b7efd59376fe))
* 升级ejs版本，修复依赖注入漏洞 ([fc17761](https://github.com/142vip/JavaScriptCollection/commit/fc17761c58b005fcb2a3f788334275d3ed00c068))


### Performance Improvements

* **express:** 升级模板项目依赖版本 ([2f1367b](https://github.com/142vip/JavaScriptCollection/commit/2f1367bfd1e4bb61573320ef959e17760ac5492e))

## [v0.0.2-alpha.9](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.8...v0.0.2-alpha.9) (2023-11-08)


### Features

* **commitlint:** 去掉手动add提交，lint操作后自动提交 ([4c9515d](https://github.com/142vip/JavaScriptCollection/commit/4c9515d8cea6f4c8846ce8933a7cd9b40c1ab4a5))
* **commitlint:** 新增commit提交信息校验 ([9958944](https://github.com/142vip/JavaScriptCollection/commit/9958944460af7d0e35884c5a8a684506b72ea171))
* **release:** 同步到github pages时增加部署地址信息 ([2d37056](https://github.com/142vip/JavaScriptCollection/commit/2d37056003b9bd9a8f7fd25379e1518a3feb0729))
* **scripts:** 修改脚本配置、思维导图样式等 ([dc6e56c](https://github.com/142vip/JavaScriptCollection/commit/dc6e56cb1de72485e070aa1c551750bbc01854a0))
* 修改husky初始方式，简化工程化校验链路 ([1733b29](https://github.com/142vip/JavaScriptCollection/commit/1733b290ce2efeac608fcd1df88dcc000372d612))
* 新增一些读书整理文档 ([f11753d](https://github.com/142vip/JavaScriptCollection/commit/f11753d7d678158affbd2d456854d98556f1879f))
* 新增工程规范文档 ([f38f513](https://github.com/142vip/JavaScriptCollection/commit/f38f513fd9dc68b9358cd57b1d8111cccf9f1855))
* 算法相关文档新增固定链接，优化导入代码配置 ([06596e7](https://github.com/142vip/JavaScriptCollection/commit/06596e70307b19892d229d6143b0ae81ace30cf8))


### Bug Fixes

* **lint:**  修复提交自动格式化,改良lint-staged配置 ([#96](https://github.com/142vip/JavaScriptCollection/issues/96)) ([16c924a](https://github.com/142vip/JavaScriptCollection/commit/16c924ad8f4f4f078fb282f0ac26dcf7653fe59c))

## [v0.0.2-alpha.8](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.7...v0.0.2-alpha.8) (2023-11-05)


### Features

* docker镜像新增git相关记录的label标记 ([b7d0dae](https://github.com/142vip/JavaScriptCollection/commit/b7d0dae090693594ae4b259a7bd05b40780024e0))
* 优化页面footer显示形式，展示版本信息 ([fadf7ae](https://github.com/142vip/JavaScriptCollection/commit/fadf7ae022b5a51d5dfa8829c960de0548bda377))
* 新增一些文档，调整导航栏内容 ([b556388](https://github.com/142vip/JavaScriptCollection/commit/b5563889c7909cd56e16ab2d5e08277407382773))


### Bug Fixes

* **CI:** 修复依赖下载异常，PNPM版本约束统一 ([7360718](https://github.com/142vip/JavaScriptCollection/commit/73607188ceec341f9ac264469b0c53cf88f96c15))
* **CI:** 修复镜像构建异常 ([0e57d48](https://github.com/142vip/JavaScriptCollection/commit/0e57d486a3fe9f48042d74130c69e6273c0baa67))
* **scripts:** 修复脚本prepare异常 ([#89](https://github.com/142vip/JavaScriptCollection/issues/89)) ([324a422](https://github.com/142vip/JavaScriptCollection/commit/324a422a066c5b3064400f508e22cd8934bb5529))
* 修复缺少.husky目录导致dockerfile构建异常 ([2f357a4](https://github.com/142vip/JavaScriptCollection/commit/2f357a4d102937390269b2763885588f968c61b0))
* 引入lint-staged格式化提交内容，修复git提交前hooks执行异常 ([#91](https://github.com/142vip/JavaScriptCollection/issues/91)) ([97689ab](https://github.com/142vip/JavaScriptCollection/commit/97689ab5ed8cecdcb2d8e0f65ed203a149961bcf))

## [v0.0.2-alpha.7](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.6...v0.0.2-alpha.7) (2023-10-30)

### Features

- **CD:** 静态站点分支新增next分支的README.md文档 ([3172690](https://github.com/142vip/JavaScriptCollection/commit/3172690201d8601e61a412e42dc102e9ca9563b4))
- **docs:** 更新readme文档，新增一些文章 ([6cc6fc7](https://github.com/142vip/JavaScriptCollection/commit/6cc6fc7a04da6e0c6039e13716510d1e4152577d))
- 更新一些文档的固定链接 ([#87](https://github.com/142vip/JavaScriptCollection/issues/87)) ([c374b0b](https://github.com/142vip/JavaScriptCollection/commit/c374b0b434ed3f2e0cb0fecd94f8ad75f11dbde2))
- 算法相关文档更新,删除讨论链接 ([#88](https://github.com/142vip/JavaScriptCollection/issues/88)) ([9b9e44a](https://github.com/142vip/JavaScriptCollection/commit/9b9e44ad59a102e69624e65e99c211da81e2967b))

### Bug Fixes

- **scripts:** 优化deploy脚本，修复镜像构建异常 ([1f9f6ac](https://github.com/142vip/JavaScriptCollection/commit/1f9f6ac65495d81d8a953f841f09f8b4e5259e5f))

### Performance Improvements

- **scripts:** 修改lint脚本，优化markdown文档格式化配置 ([#85](https://github.com/142vip/JavaScriptCollection/issues/85)) ([2bac047](https://github.com/142vip/JavaScriptCollection/commit/2bac0478b77db619ea25f5b4c16f2fcc2a6b9914))

## [v0.0.2-alpha.6](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.5...v0.0.2-alpha.6) (2023-10-28)

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

## [v0.0.2-alpha.5](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.4...v0.0.2-alpha.5) (2023-10-25)

### Bug Fixes

- 修复CI中docker镜像构建异常，约束release脚本使用范围 ([#74](https://github.com/142vip/JavaScriptCollection/issues/74)) ([249524e](https://github.com/142vip/JavaScriptCollection/commit/249524e50ba74694f9eebd0dd4cf11b27393aec7))
- 修复dockerfile构建异常 ([d8e025d](https://github.com/142vip/JavaScriptCollection/commit/d8e025ded69b6de9bd93d8f6677b86a712768c37))

### Performance Improvements

- **pnpm:** CI支持PNPM8 ([d17baf7](https://github.com/142vip/JavaScriptCollection/commit/d17baf7642ee91709ea2e83dd51d95089dffe89e))
- vue、eslint模块依赖更新 ([b29225e](https://github.com/142vip/JavaScriptCollection/commit/b29225e8ef0e3763cfee8d4fbdc36ea6595626de))

## [v0.0.2-alpha.4](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.3...v0.0.2-alpha.4) (2023-10-25)

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

## [v0.0.2-alpha.3](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.2...v0.0.2-alpha.3) (2023-10-13)

### Features

- 新增变更记录文档，支持release自动生成 ([77bf314](https://github.com/142vip/JavaScriptCollection/commit/77bf314d715a7b01cd8fe90e1691a9b13d192b68))
- 站点404信息优化，新增周杰伦歌词 ([aafdd25](https://github.com/142vip/JavaScriptCollection/commit/aafdd25f0726ce730e463529739eaf6bedda30c6))

### Bug Fixes

- 修复图片显示异常，cdn域名切换为：cdn.statically.io ([5a20451](https://github.com/142vip/JavaScriptCollection/commit/5a204516805dc1cd173c9434a5e4e5b25c62d858))

### Performance Improvements

- vuepress版本升级到最新，关闭站点博客功能 ([ddd10b4](https://github.com/142vip/JavaScriptCollection/commit/ddd10b41a6ee71bb76bed67aabdf4ed4a9441a6c))
- 流水线支持国内依赖源，规范CI/CD流程 ([bc36957](https://github.com/142vip/JavaScriptCollection/commit/bc369576e9f08d25139cbe1d118b052f5da4faf9))
- 锁定版本Node>18，scripts钩子分配权限 ([09089fb](https://github.com/142vip/JavaScriptCollection/commit/09089fb6d022c50034129a77e772da284c513b03))

## [v0.0.2-alpha.2](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.1...v0.0.2-alpha.2) (2023-09-12)

### Features

- 剑指算法文档更新，修改目录结构 ([8de1a9b](https://github.com/142vip/JavaScriptCollection/commit/8de1a9b45da47622612ff6fcc1b9c407ac5254be))
- 站点新增百度统计相关配置 ([0724b3b](https://github.com/142vip/JavaScriptCollection/commit/0724b3b08a723601642eee238310cc0ef6508c8c))

### Performance Improvements

- update package version ([1ee2370](https://github.com/142vip/JavaScriptCollection/commit/1ee2370107265b68ef39b3571f9cb1f5a9f33c68))

## [v0.0.2-alpha.1](https://github.com/142vip/JavaScriptCollection/compare/v0.0.2-alpha.0...v0.0.2-alpha.1) (2023-09-09)

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
