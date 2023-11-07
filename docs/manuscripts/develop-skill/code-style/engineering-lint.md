---
title: 工程化规范
permalink: /manuscripts/develop-skill/code-style/engineering-lint.html
---

# 工程化规范

前面提到的Eslint、Prettier是在工程化建设中使用非常高频的，主要是用来处理一些代码层面的约束，确保在项目中编码风格一致。

但当项目体量、人员协同上去后，单纯的约束代码风格还是不够的，需要指定标准的规范来对项目进行工程化管理，例如：对提交、更改的内容做风格约束。

这里，我整理了一些自己在项目中常用的一些规范，分开讨论

## 代码校验

利用Eslint来校验js、ts代码，如果是前端还可以配置vue对应规则

```bash
## 校验js、ts、vue代码
eslint  --ext .js,.ts,.vue --ignore-path .gitignore .

## 添加--fix参数，可以做到自动修正
eslint --fix --ext .js,.ts,.vue --ignore-path .gitignore .
```

## 文档校验

除了写代码外，项目中会有一些markdown文档，特别是对于文档类型项目markdown文档就更多了，但风格却很难保证，因此可以利用`markdownlint-cli`模块进行校验、修正

### 安装

```bash
## 开发环境安装依赖
pnpm install markdownlint-cli  -D
```

### 配置规则

在项目根目录新建`.markdownlint.js`文件，配置markdown的一些规则，例如：

@[code js](~/.markdownlint.js)

### 配置忽略

由于`**/*.md`是匹配项目中所有markdown文档，很明显存在有些目录时不需要校验的，例如：`node_modules`目录，因此非常有必要配置`markdownlint-cli`
的忽略文件`.markdownlintignore`，避免校验不必要的文档。

在项目根目录新建`.markdownlintignore`文件，配置markdown的忽略规则，例如：

@[code txt](~/.markdownlintignore)

### 使用

```bash
## 校验markdown文档
markdownlint '**/*.md'  -c .markdownlint.js -p .markdownlintignore 

## 添加--fix参数，可以做到自动修正
markdownlint '**/*.md'  -c .markdownlint.js -p .markdownlintignore --fix
```

## 提交校验

当我们对代码、文档都做了一些校验，统一格式后一般是需要使用Git进行变更提交的。
对于上面的一些lint操作，不可能每次都手动执行，**因此就非常需要在提交之前先对仓库中的代码、文档做一些校验，并且这些操作是自动执行的**

这个时候就需要使用到Git的hooks钩子函数，在`pre-commit`之前执行一些指令，打开`git/hooks`目录里面的内容，可以发现以下文件

- applypatch-msg.sample
- pre-push.sample
- commit-msg.sample
- pre-rebase.sample
- post-update.sample
- prepare-commit-msg.sample
- pre-applypatch.sample
- update.sample
- pre-commit.sample

这些钩子都是样例，去掉`.sample`在提交时就能触发对应的钩子函数。

这里推荐`husky`模块，它可以很好地校验提交信息、运行命令，很好的确保commit、push规范

### 安装husky

```bash
## 生产环境安装
pnpm install husky -D
```

### 配置hook

```bash
## 在git hook文件中写入npm test命令
npx husky add .husky/pre-commit "npm test"
```

这个时候，打开`.husky/pre-commit`文件，可以发现`npm test`命令，当进行git commit时会自动执行`npm test`命令，校验失败则终止`commit`操作

## 内容自动格式化

可以发现，上面的`husky`模块只是校验提交信息、运行一些既定的命令，例如：执行Eslint校验。但往往随着工程中项目较多，项目级别的Lint会消耗很多时间，且对于仓库来说：

> 提交到仓库中的代码是需要遵守规范的，也就是lint完成之后的

那有没有工具，可以对Git的提交内容做校验，换句话说：“只校验更改的”。这个时候就非常推荐`lint-staged`,它可以实现对提交的变更做一些操作，可以解决husky执行hook时全局操作耗时问题

### 安装lint-staged

```bash
## 开发环境安装
pnpm install lint-staged -D
```

### 配置规则

在项目根目录中新建`.lintstagedrc.js`文件

@[code js](~/.lintstagedrc.js)

以上规则是：

- 对js、ts、md文件进行ci校验
- 将格式化后端内容自动提交,执行`git add`操作，避免多次commit

当然，`lint-staged`规则的配置还支持很多方式，例如：

- `.lintstagedrc.json`
- `.lintstagedrc.yaml`
- `.lintstagedrc.yml`

## 最佳实践

以上只是简单的介绍 `git hooks` 、`hushy`、`lint-staged`，在本仓库中已投入应用，将讲这些操作按照流程拼接在一起，其实就有了工程化的一些痕迹

这里操作都是可以划分为CI，即：持续集成，Git在commit变更时触发hook，会做一下操作：

- 校验commit提交信息
- 校验提交的代码、文档，对于不符合规范的自动修正
- 修正失败时，commit操作就终止

可以总结到： **husky是管理Git hooks，lint-staged是对Git提交做检验，验证的模块**

## 参考资料

- <https://www.npmjs.com/package/markdownlint-cli>
- <https://typicode.github.io/husky/getting-started.html>
- <https://www.npmjs.com/package/lint-staged>
