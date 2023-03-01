
## PNPM

官网: <https://www.pnpm.cn>

原来一直使用npm，后面也有用过yarn，相比之下各有优缺点，但是要做的是，当我们在实际开发中遇到新的知识点，并且自己不太会，这个时候就需要学习了。没错，我第一次用PNPM，权当一次学习吧！

### 安装


#### 使用 npm安装 pnpm

```bash
## -g 全局安装pnpm
npm install -g pnpm@next-7
```


#### 使用 Homebrew 安装 pnpm

如果你已经安装了 Homebrew 软件包管理器，则可以使用如下命令赖安装 pnpm：

```bash
brew install pnpm
```


#### 使用 Scoop 安装 pnpm
如果你已经安装了 Scoop，就可以通过一下命令安装 pnpm：

```bash
scoop install nodejs-lts pnpm
```


### 升级版本

安装完 pnpm 之后，可以让 pnpm 自己来更新自己，升级到最新版本

```bash

pnpm add -g pnpm
```

### 使用方法

相比npm的模块包管理方式，pnpm在使用指令上会有一些改变

```bash
## 安装所有模块依赖
pnpm install  ## 类比： npm install

## 安装指定模块 eg:pnpm add express
pnpm add <pkg-name> ## 类比：npm install <pkg-name> 或者 npm i <pkg-name>

## 运行script脚本指令 eg: pnpm dev
pnpm <cmd>  ## 类比：npm run <cmd> 


```

### 常用命令详解

#### pnpm add pkg

安装软件包以及其依赖的任何软件包。 默认情况下，任何新添加的软件包都将作为**生产依赖项**。

```bash
## 保存到 dependencies 配置项下 
pnpm add <pkg>	

## 保存到 devDependencies 配置项下
pnpm add -D <pkg>	

## 保存到 optionalDependencies 配置项下
pnpm add -O <pkg>	

##安装软件包到全局环境中
pnpm add -g <pkg> 

##安装标记为 next 的版本
pnpm add <pkg>@next	

## 安装指定版本 3.0.0
pnpm add <pkg>@3.0.0	

```

对应参数和别名：

- `--save-prod, -P`: 安装指定的软件包并添加到 dependencies 配置项中。

- `--save-dev, -D`:安装指定的软件包并添加到 devDependencies 配置项中。

- `--save-optional, -O`:安装指定的软件包并添加到 optionalDependencies 配置项中。

- `--global, -g`:将软件包安装都全局环境中。

