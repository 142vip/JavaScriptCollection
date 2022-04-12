# 安装node 作为基础构建镜像
# FROM node:12.6.0-alpine AS build_base
FROM node AS build_base

# 镜像标签
LABEL version="Beta1.0"
LABEL description="JavaScriptCollection文档合集、博客"
# 作者信息
LABEL author="【Github&公众号】：Rong姐姐好可爱"
LABEL email="mmdapl@163.com"

## 确定工作空间 /apps
COPY . /apps
WORKDIR /apps

## 安装依赖
RUN npm install && npm run build

# 设置部署镜像
FROM nginx

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面 注意：--from参数
COPY  --from=build_base /apps/docs/.vuepress/dist/  /usr/share/nginx/html/


## 暴露端口
EXPOSE 80