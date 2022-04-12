# 安装node
# FROM node:12.6.0-alpine AS build_base
FROM node AS build_base

# 标签
LABEL version="Beta1.0"
LABEL description="JavaScriptCollection文档合集、博客"
# 作者
LABEL author="【Github&公众号】：Rong姐姐好可爱"
LABEL email="mmdapl@163.com"

COPY . /apps
WORKDIR /apps
## 配置cnpm
# RUN npm install -g cnpm --registry=https://registry.npmmirror.com && c
# RUN npm install -D && npm run build
# RUN  npm install pnpm -g 
RUN  npm install 
RUN  npm run build

RUN find . | sed -e "s/[^-][^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"

# 设置部署镜像
FROM nginx
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY  --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/


## 暴露端口
EXPOSE 80
