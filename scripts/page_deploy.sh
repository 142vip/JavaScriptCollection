#!/usr/bin/env sh


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

git commit -m "refactor:${commitInfo}"


## 配置个人信息
git config user.name "喜欢吃芝士葡萄的妹妹"
git config user.email "fairy0115@2925.com"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/mmdapl/JavaScriptCollection.git master:pages/github


cd -