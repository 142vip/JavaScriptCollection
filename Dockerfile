# 安装node
FROM node:12.6.0-alpine
# 设置基础镜像
FROM nginx:latest

# 标签
LABEL version="Beta1.0"
LABEL description="JavaScriptCollection文档合集、博客"
# 作者
LABEL author="【Github&公众号】：Rong姐姐好可爱"
LABEL email="mmdapl@163.com"

## 安装pnpm
RUN  npm install pnpm -g & pnpm install & pnpm build


# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/


## 暴露端口
EXPOSE 80
