#
# - 功能: 构建JavaScriptCollection镜像
# - 用法: docker build -f Dockerfile --build-arg APP_VERSION=0.0.1 -build-arg CONTAINER_BUILD=true -t JavaScriptCollection-0.0.1  .
# - 参数:
#   APP_VERSION: 版本
#   CONTAINER_BUILD: 采用容器构建
#

FROM registry.cn-hangzhou.aliyuncs.com/142vip/node:20.17.0-alpine AS build_base

# 是否配置代理
ARG NEED_PROXY=false

## 设置环境变量，支持容器构建时使用layer缓存，参考：https://pnpm.io/zh/docker
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

## corepack 环境变量，在CI脚本中直接设置
#ENV COREPACK_NPM_REGISTRY=https://mirrors.tencent.com/npm/

WORKDIR /apps
COPY . .

## 安装git，博客编译需要使用git信息
RUN apk add --no-cache git --repository http://mirrors.aliyun.com/alpine/v3.14/main/

## 基于容器自动构建
RUN --mount=type=cache,id=pnpm,target=/pnpm/store sh ./scripts/ci &&  \
  if [ "$NEED_PROXY" = "false" ];  \
    then \
       pnpm build; \
    else \
       pnpm build:proxy; \
  fi;


FROM registry.cn-hangzhou.aliyuncs.com/142vip/nginx:1.23.0-alpine


## 自定义镜像的Label信息
ARG APP_NAME
ARG APP_VERSION
ARG APP_DESCRIPTION
ARG AUTHOR
ARG EMAIL
ARG HOME_PAGE
ARG GIT_HASH

# 作者信息 & 项目信息 & Git信息
LABEL "maintainer"="$AUTHOR <$EMAIL>"
LABEL "repo.name"=$APP_NAME "repo.version"=$APP_VERSION  \
      "repo.description"="$APP_DESCRIPTION" "repo.homePage"="$HOME_PAGE"
LABEL "git.hash"="$GIT_HASH"

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/
COPY --from=build_base /apps/nginx.conf /etc/nginx/
