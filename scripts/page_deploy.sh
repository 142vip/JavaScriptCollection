#!/usr/bin/env sh

## 功能：github等平台推送脚本
## 参考：https://blog.csdn.net/Dontla/article/details/125210694
## 作者：Chu Fan
## 使用示例：bash xxx.sh "提交的信息"
##


## 提交信息
commitInfo=${1}

set -e

# 进入上级目录，并编译
npm run build

## 切换到dist文件目录
cd docs/.vuepress/dist

git init
git add -A

## 没有输入commit信息，采用默认
if [ "${commitInfo}" -eq "" ]; then
    commitInfo="JavaScriptCollection Init"
fi

## 配置个人信息
git config user.name "吃芝士葡萄的妹妹"
git config user.email "fairy_vip@2925.com"

git commit -m "refactor:${commitInfo}"


# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/142vip/JavaScriptCollection.git main:pages/github


cd -