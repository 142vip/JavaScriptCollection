

在写项目的Readme文档的时候，常常会使用项目结构，我一般是用`tree`命令；但是当我在项目更目录执行tree命令的时候，却出现：

```bash
## tree返回提示
zsh: command not found: tree
```
从上面终端返回的提示，就很明显的告诉我，电脑上没有装过  `tree`相关的，所以就直接google了一下对应的解决方案：
```bash
## 安装tree
$ brew install tree 

```

所以接下来，要做两件事，第一安装`brew`,第二在其基础上安装`tree`


### brew安装

在Google上找了很多所谓的安装方法，最后发现一个非常好用的sh脚本，极其好用，推荐、记录一下；

```bash
## brew下载
 $ /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

执行上面的shell脚本，选择想用的镜像源（我选择清华的，哈哈哈，目测阿里的最快）

过程如下：

```bash
fix@mmdapl express-demo % /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

              开始执行Brew自动安装程序
             [cunkai.wang@foxmail.com]
           [2020-09-13 22:37:33][10.15]
       https://zhuanlan.zhihu.com/p/111014448


请选择一个下载镜像，例如中科大，输入1回车。
源有时候不稳定，如果git克隆报错重新运行脚本选择源。cask非必须，有部分人需要。
1、中科大下载源 2、清华大学下载源 3、北京外国语大学下载源 4、腾讯下载源（不显示下载进度） 5、阿里巴巴下载源(缺少cask源)
请输入序号: 1

  你选择了中国科学技术大学下载源

！！！此脚本将要删除之前的brew(包括它下载的软件)，请自行备份。
->是否现在开始执行脚本（N/Y）y

--> 脚本开始执行
==> 通过命令删除之前的brew、创建一个新的Homebrew文件夹
(设置开机密码：在左上角苹果图标->系统偏好设置->"用户与群组"->更改密码)
(如果提示This incident will be reported. 在"用户与群组"中查看是否管理员)
请输入开机密码，输入过程不显示，输入完后回车
Password:
开始执行
-> 创建文件夹 /usr/local/Homebrew
此步骤成功
-> 创建文件夹 /usr/local/Caskroom
此步骤成功
-> 创建文件夹 /usr/local/Cellar
此步骤成功
-> 创建文件夹 /usr/local/var/homebrew
此步骤成功
-> 创建文件夹 /usr/local/etc
此步骤成功
-> 创建文件夹 /usr/local/sbin
此步骤成功
-> 创建文件夹 /usr/local/opt
此步骤成功
-> 创建文件夹 /usr/local/share/zsh
此步骤成功
-> 创建文件夹 /usr/local/share/zsh/site-functions
此步骤成功
-> 创建文件夹 /usr/local/var/homebrew/linked
此步骤成功
-> 创建文件夹 /usr/local/Frameworks
此步骤成功
git version 2.24.3 (Apple Git-128)

下载速度觉得慢可以ctrl+c或control+c重新运行脚本选择下载源
==> 克隆Homebrew基本文件(32M+)

未发现Git代理（属于正常状态）
Cloning into '/usr/local/Homebrew'...
remote: Enumerating objects: 160978, done.
remote: Total 160978 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (160978/160978), 39.85 MiB | 718.00 KiB/s, done.
Resolving deltas: 100% (119537/119537), done.
此步骤成功
==> 创建brew的替身
此步骤成功
==> 克隆Homebrew Core(224M+) 
此处如果显示Password表示需要再次输入开机密码，输入完后回车
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core'...
remote: Enumerating objects: 792683, done.
remote: Total 792683 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (792683/792683), 315.82 MiB | 1.60 MiB/s, done.
Resolving deltas: 100% (531493/531493), done.
此步骤成功
==> 克隆Homebrew Cask(248M+) 类似AppStore 
此处如果显示Password表示需要再次输入开机密码，输入完后回车
Cloning into '/usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask'...
remote: Enumerating objects: 479129, done.
remote: Total 479129 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (479129/479129), 217.30 MiB | 1.38 MiB/s, done.
Resolving deltas: 100% (340759/340759), done.
此步骤成功
==> 配置国内镜像源HOMEBREW BOTTLE
此步骤成功

==> 安装完成，brew版本

10.15
brew -v

Homebrew 2.5.0-141-g484c2b4-dirty
Homebrew/homebrew-core (git revision 529786; last commit 2020-09-13)
Homebrew/homebrew-cask (git revision ff806c; last commit 2020-09-13)
Brew前期配置成功

==> brew update

==> Homebrew has enabled anonymous aggregate formula and cask analytics.
Read the analytics documentation (and how to opt-out) here:
  https://docs.brew.sh/Analytics
No analytics have been recorded yet (or will be during this `brew` run).

==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
  https://github.com/Homebrew/brew#donations
Already up-to-date.

        上一句如果提示Already up-to-date表示成功
            Brew自动安装程序运行完成
              国内地址已经配置完成

                初步介绍几个brew命令

        本地软件库列表：brew ls
        查找软件：brew search google（其中google替换为要查找的软件关键字）
        查看brew版本：brew -v  更新brew版本：brew update

现在可以输入命令open ~/.zshrc -e 或者 open ~/.bash_profile -e 整理一下重复的语句(运行 echo $SHELL 可以查看应该打开那一个文件修改)

        https://zhuanlan.zhihu.com/p/111014448  欢迎来给点个赞
    

```

讲道理，这一手广告打得很厉害

最后，可以检测一下是brew是否安装成功
```bash
## 查看命令
fix@mmdapl express-demo % brew -h
## 所有结果
Example usage:
  brew search [TEXT|/REGEX/]
  brew info [FORMULA...]
  brew install FORMULA...
  brew update
  brew upgrade [FORMULA...]
  brew uninstall FORMULA...
  brew list [FORMULA...]

Troubleshooting:
  brew config
  brew doctor
  brew install --verbose --debug FORMULA

Contributing:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]

Further help:
  brew commands
  brew help [COMMAND]
  man brew
  https://docs.brew.sh
```

到这里就已经表示安装成功了，过程还是很友好的

### tree安装

在前面安装好brew的基础上，tree命令的安装就很好弄了，直接执行`brew install tree`即可
```bash
## 安装tree
$ brew install tree

## 执行结果
==> Downloading https://homebrew.bintray.com/bottles/tree-1.8.0.catalina.bottl
#                                                                          1.7#####                                                                      7.2#########                                                                 12.7#################                                                         23.8###################                                                       26.5###########################                                               37.6###############################                                           43.1#####################################                                     51.4############################################                              62.5##############################################                            65.2##################################################                        70.7########################################################                  79.0######################################################################## 100.0%
==> Pouring tree-1.8.0.catalina.bottle.tar.gz
🍺  /usr/local/Cellar/tree/1.8.0: 8 files, 121.1KB
```

检测是否安装好，简单运行一下tree即可

```bash
## 执行tree
$ tree

### 显示目录结果

├── Readme.md
├── app.js
├── config
│   ├── default.js
│   ├── prod.js
│   └── test.js
├── controller
├── model
├── package-lock.json
├── router
├── service
└── static
```

至此，brew和tree的安装就ok了，可能算是个小问题，但是还是想把小问题解决好，毕竟找好的处理方式也花了很久的时候，慢只是为了更快